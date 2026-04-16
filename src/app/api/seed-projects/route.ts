import { NextResponse } from "next/server";
import { db, initializeDb } from "@/lib/db";

export const dynamic = "force-dynamic";

type SeedImage = { path: string; featured?: boolean };

const RESIDENTIAL: SeedImage[] = [
  { path: "/images/projects/IMG_6650.PNG", featured: true },
  { path: "/images/projects/IMG_6655.PNG", featured: true },
  { path: "/images/projects/IMG_1540.PNG", featured: true },
  { path: "/images/projects/IMG_6647.PNG", featured: true },
  { path: "/images/projects/IMG_6648.PNG", featured: true },
  { path: "/images/projects/IMG_6649.PNG", featured: true },
  { path: "/images/projects/IMG_6651.PNG" },
  { path: "/images/projects/IMG_6652.PNG" },
  { path: "/images/projects/IMG_6653.PNG" },
  { path: "/images/projects/IMG_6654.PNG" },
  { path: "/images/projects/IMG_6656.PNG" },
  { path: "/images/projects/IMG_6657.PNG" },
  { path: "/images/projects/IMG_6658.PNG" },
  { path: "/images/projects/IMG_6659.PNG" },
];

const COMMERCIAL: SeedImage[] = [
  { path: "/images/projects/IMG_1543.PNG", featured: true },
];

export async function GET() {
  try {
    await initializeDb();

    const existing = await db.execute("SELECT COUNT(*) as n FROM project_categories");
    if ((existing.rows[0].n as number) > 0) {
      return NextResponse.json({ message: "Projects already seeded" });
    }

    const residential = await db.execute({
      sql: "INSERT INTO project_categories (title, description, icon, display_order) VALUES (?, ?, ?, ?)",
      args: [
        "Residential Roofing",
        "Roof replacements and new installs on homes across Southern Illinois.",
        "home",
        0,
      ],
    });

    const commercial = await db.execute({
      sql: "INSERT INTO project_categories (title, description, icon, display_order) VALUES (?, ?, ?, ?)",
      args: [
        "Commercial Roofing",
        "Commercial roofing projects including churches and business properties.",
        "building",
        1,
      ],
    });

    const residentialId = Number(residential.lastInsertRowid);
    const commercialId = Number(commercial.lastInsertRowid);

    const insertMany = async (categoryId: number, images: SeedImage[]) => {
      for (let i = 0; i < images.length; i++) {
        await db.execute({
          sql: "INSERT INTO project_images (category_id, image_path, display_order, featured) VALUES (?, ?, ?, ?)",
          args: [categoryId, images[i].path, i, images[i].featured ? 1 : 0],
        });
      }
    };

    await insertMany(residentialId, RESIDENTIAL);
    await insertMany(commercialId, COMMERCIAL);

    return NextResponse.json({
      message: "Projects seeded",
      categories: 2,
      images: RESIDENTIAL.length + COMMERCIAL.length,
    });
  } catch (error) {
    console.error("Seed projects error:", error);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
