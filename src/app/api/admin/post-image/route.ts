import { NextRequest, NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { postImageToGoogle, isGoogleConfigured } from "@/lib/google-business";
import { postImageToMeta, isMetaConfigured } from "@/lib/meta-api";

export async function GET() {
  // Return which platforms are configured
  return NextResponse.json({
    google: isGoogleConfigured(),
    meta: isMetaConfigured(),
  });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { id, platform } = await request.json();

  if (!id || !platform) {
    return NextResponse.json({ error: "id and platform are required" }, { status: 400 });
  }

  // Get the image
  const img = await db.execute({
    sql: "SELECT * FROM project_images WHERE id = ?",
    args: [id],
  });

  if (img.rows.length === 0) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }

  const imagePath = img.rows[0].image_path as string;

  // The image URL needs to be absolute for the APIs
  let imageUrl = imagePath;
  if (imagePath.startsWith("/")) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ranncoroofing.com";
    imageUrl = `${siteUrl}${imagePath}`;
  }

  if (platform === "google") {
    const result = await postImageToGoogle(imageUrl);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    await db.execute({
      sql: "UPDATE project_images SET posted_google = 1 WHERE id = ?",
      args: [id],
    });
    return NextResponse.json({ success: true, platform: "google" });
  }

  if (platform === "meta") {
    const result = await postImageToMeta(imageUrl);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    await db.execute({
      sql: "UPDATE project_images SET posted_meta = 1 WHERE id = ?",
      args: [id],
    });
    return NextResponse.json({ success: true, platform: "meta" });
  }

  return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
}
