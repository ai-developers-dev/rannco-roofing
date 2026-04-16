import { NextRequest, NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  await initializeDb();

  const categories = await db.execute(
    "SELECT * FROM project_categories ORDER BY display_order ASC, id ASC"
  );

  // Get image counts for each category
  const counts = await db.execute(
    "SELECT category_id, COUNT(*) as count FROM project_images GROUP BY category_id"
  );

  const countMap = new Map<number, number>();
  for (const row of counts.rows) {
    countMap.set(row.category_id as number, row.count as number);
  }

  const result = categories.rows.map((cat) => ({
    ...cat,
    image_count: countMap.get(cat.id as number) || 0,
  }));

  return NextResponse.json({ categories: result });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { title, description, icon } = await request.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  // Get max display_order
  const maxOrder = await db.execute(
    "SELECT COALESCE(MAX(display_order), -1) as max_order FROM project_categories"
  );
  const nextOrder = (maxOrder.rows[0].max_order as number) + 1;

  const result = await db.execute({
    sql: "INSERT INTO project_categories (title, description, icon, display_order) VALUES (?, ?, ?, ?)",
    args: [title, description || "", icon || "folder", nextOrder],
  });

  return NextResponse.json({ success: true, id: Number(result.lastInsertRowid) });
}

export async function PATCH(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id, title, description, icon } = await request.json();

  await db.execute({
    sql: "UPDATE project_categories SET title = ?, description = ?, icon = ? WHERE id = ?",
    args: [title, description || "", icon || "folder", id],
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id } = await request.json();

  // Delete images first, then category
  await db.execute({ sql: "DELETE FROM project_images WHERE category_id = ?", args: [id] });
  await db.execute({ sql: "DELETE FROM project_categories WHERE id = ?", args: [id] });

  return NextResponse.json({ success: true });
}
