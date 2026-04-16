import { NextRequest, NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await initializeDb();

  const { searchParams } = new URL(request.url);
  const featuredOnly = searchParams.get("featured") === "true";

  if (featuredOnly) {
    // Return flat list of featured images for the homepage
    const images = await db.execute(
      "SELECT id, image_path, category_id FROM project_images WHERE featured = 1 ORDER BY display_order ASC, id ASC"
    );

    return NextResponse.json({
      images: images.rows.map((img) => ({
        id: img.id as number,
        path: img.image_path as string,
      })),
    });
  }

  // Return all categories with images (for projects page)
  const categories = await db.execute(
    "SELECT * FROM project_categories ORDER BY display_order ASC, id ASC"
  );

  const images = await db.execute(
    "SELECT * FROM project_images ORDER BY display_order ASC, id ASC"
  );

  const imageMap = new Map<number, { id: number; path: string; featured: boolean }[]>();
  for (const img of images.rows) {
    const catId = img.category_id as number;
    if (!imageMap.has(catId)) imageMap.set(catId, []);
    imageMap.get(catId)!.push({
      id: img.id as number,
      path: img.image_path as string,
      featured: !!(img.featured as number),
    });
  }

  const result = categories.rows.map((cat) => ({
    id: cat.id as number,
    title: cat.title as string,
    description: cat.description as string,
    icon: cat.icon as string,
    images: imageMap.get(cat.id as number) || [],
  }));

  return NextResponse.json({ categories: result });
}
