import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db, initializeDb } from "@/lib/db";

export async function GET() {
  try {
    await initializeDb();

    // Check if admin already exists
    const existing = await db.execute({
      sql: "SELECT id FROM users WHERE email = ?",
      args: ["doug@aideveloper.dev"],
    });

    if (existing.rows.length > 0) {
      return NextResponse.json({ message: "Admin user already exists" });
    }

    const hashedPassword = await bcrypt.hash("Parker22!", 10);

    await db.execute({
      sql: "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'admin')",
      args: ["Doug Allen", "doug@aideveloper.dev", hashedPassword],
    });

    return NextResponse.json({ message: "Admin user created successfully" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
