import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db, initializeDb } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const result = await db.execute(
    "SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC"
  );
  return NextResponse.json({ users: result.rows });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initializeDb();

  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Name, email, and password are required" },
      { status: 400 }
    );
  }

  const existing = await db.execute({
    sql: "SELECT id FROM users WHERE email = ?",
    args: [email],
  });

  if (existing.rows.length > 0) {
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.execute({
    sql: "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'admin')",
    args: [name, email, hashedPassword],
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

  // Prevent deleting yourself
  if (id === session.userId) {
    return NextResponse.json(
      { error: "Cannot delete your own account" },
      { status: 400 }
    );
  }

  await db.execute({
    sql: "DELETE FROM users WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ success: true });
}
