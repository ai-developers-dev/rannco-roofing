import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { execSync } from "child_process";
import path from "path";
import { del } from "@vercel/blob";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  await initializeDb();

  const { searchParams } = new URL(request.url);
  const categoryId = searchParams.get("category_id");

  let sql = "SELECT * FROM project_images";
  const args: (string | number)[] = [];

  if (categoryId) {
    sql += " WHERE category_id = ?";
    args.push(Number(categoryId));
  }

  sql += " ORDER BY display_order ASC, id ASC";

  const result = await db.execute({ sql, args });
  return NextResponse.json({ images: result.rows });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const contentType = request.headers.get("content-type") || "";

  // JSON body — image already uploaded to Blob via client-side upload
  if (contentType.includes("application/json")) {
    const { category_id, image_url } = await request.json();

    if (!category_id || !image_url) {
      return NextResponse.json(
        { error: "category_id and image_url are required" },
        { status: 400 }
      );
    }

    const maxOrder = await db.execute({
      sql: "SELECT COALESCE(MAX(display_order), -1) as max_order FROM project_images WHERE category_id = ?",
      args: [Number(category_id)],
    });
    const nextOrder = (maxOrder.rows[0].max_order as number) + 1;

    const result = await db.execute({
      sql: "INSERT INTO project_images (category_id, image_path, display_order) VALUES (?, ?, ?)",
      args: [Number(category_id), image_url, nextOrder],
    });

    return NextResponse.json({
      success: true,
      images: [{ id: Number(result.lastInsertRowid), path: image_url }],
    });
  }

  // FormData body — local dev file upload fallback
  const formData = await request.formData();
  const categoryId = formData.get("category_id") as string;
  const files = formData.getAll("files") as File[];

  if (!categoryId || files.length === 0) {
    return NextResponse.json(
      { error: "Category ID and at least one file are required" },
      { status: 400 }
    );
  }

  const savedImages: { id: number; path: string }[] = [];
  const uploadDir = path.join(process.cwd(), "public", "uploads", "projects");

  const maxOrder = await db.execute({
    sql: "SELECT COALESCE(MAX(display_order), -1) as max_order FROM project_images WHERE category_id = ?",
    args: [Number(categoryId)],
  });
  let nextOrder = (maxOrder.rows[0].max_order as number) + 1;

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name).toLowerCase() || ".jpg";
    const baseName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const isHeic = ext === ".heic" || ext === ".heif";

    let finalName: string;

    if (isHeic) {
      const origName = `${baseName}${ext}`;
      const origPath = path.join(uploadDir, origName);
      finalName = `${baseName}.jpg`;
      const finalPath = path.join(uploadDir, finalName);

      await writeFile(origPath, buffer);
      try {
        execSync(`sips -s format jpeg -s formatOptions 85 -Z 2000 "${origPath}" --out "${finalPath}"`, { stdio: "pipe" });
        execSync(`rm "${origPath}"`, { stdio: "pipe" });
      } catch {
        finalName = origName;
      }
    } else {
      finalName = `${baseName}${ext}`;
      await writeFile(path.join(uploadDir, finalName), buffer);
    }

    const imageUrl = `/uploads/projects/${finalName}`;

    const result = await db.execute({
      sql: "INSERT INTO project_images (category_id, image_path, display_order) VALUES (?, ?, ?)",
      args: [Number(categoryId), imageUrl, nextOrder],
    });

    savedImages.push({ id: Number(result.lastInsertRowid), path: imageUrl });
    nextOrder++;
  }

  return NextResponse.json({ success: true, images: savedImages });
}

export async function PATCH(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const body = await request.json();

  // Toggle featured flag
  if ("id" in body && "featured" in body) {
    await db.execute({
      sql: "UPDATE project_images SET featured = ? WHERE id = ?",
      args: [body.featured ? 1 : 0, body.id],
    });
    return NextResponse.json({ success: true });
  }

  // Reorder images
  if ("orderedIds" in body && Array.isArray(body.orderedIds)) {
    for (let i = 0; i < body.orderedIds.length; i++) {
      await db.execute({
        sql: "UPDATE project_images SET display_order = ? WHERE id = ?",
        args: [i, body.orderedIds[i]],
      });
    }
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid request" }, { status: 400 });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id } = await request.json();

  const img = await db.execute({
    sql: "SELECT image_path FROM project_images WHERE id = ?",
    args: [id],
  });

  if (img.rows.length > 0) {
    const imagePath = img.rows[0].image_path as string;
    if (imagePath.includes("blob.vercel-storage.com")) {
      try {
        await del(imagePath);
      } catch {
        // Ignore blob deletion errors
      }
    }
  }

  await db.execute({
    sql: "DELETE FROM project_images WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ success: true });
}
