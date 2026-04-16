import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL || "file:local.db",
  authToken: process.env.TURSO_AUTH_TOKEN || undefined,
});

export async function initializeDb() {
  await db.batch([
    {
      sql: `CREATE TABLE IF NOT EXISTS contact_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        service TEXT,
        message TEXT NOT NULL,
        source TEXT NOT NULL DEFAULT 'contact_page',
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        read INTEGER NOT NULL DEFAULT 0
      )`,
      args: [],
    },
    {
      sql: `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'admin',
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      args: [],
    },
    {
      sql: `CREATE TABLE IF NOT EXISTS project_categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL DEFAULT '',
        icon TEXT NOT NULL DEFAULT 'folder',
        display_order INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      args: [],
    },
    {
      sql: `CREATE TABLE IF NOT EXISTS project_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER NOT NULL,
        image_path TEXT NOT NULL,
        display_order INTEGER NOT NULL DEFAULT 0,
        featured INTEGER NOT NULL DEFAULT 0,
        posted_google INTEGER NOT NULL DEFAULT 0,
        posted_meta INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        FOREIGN KEY (category_id) REFERENCES project_categories(id) ON DELETE CASCADE
      )`,
      args: [],
    },
    {
      sql: `CREATE TABLE IF NOT EXISTS _migrations (name TEXT PRIMARY KEY)`,
      args: [],
    },
  ]);

  // Run migrations for existing databases
  try {
    const ran = await db.execute("SELECT name FROM _migrations");
    const done = new Set(ran.rows.map((r) => r.name as string));

    if (!done.has("add_featured_column")) {
      try {
        await db.execute("ALTER TABLE project_images ADD COLUMN featured INTEGER NOT NULL DEFAULT 0");
      } catch {
        // Column may already exist
      }
      await db.execute({ sql: "INSERT OR IGNORE INTO _migrations (name) VALUES (?)", args: ["add_featured_column"] });
    }

    if (!done.has("add_social_posting_columns")) {
      try {
        await db.execute("ALTER TABLE project_images ADD COLUMN posted_google INTEGER NOT NULL DEFAULT 0");
      } catch { /* Column may already exist */ }
      try {
        await db.execute("ALTER TABLE project_images ADD COLUMN posted_meta INTEGER NOT NULL DEFAULT 0");
      } catch { /* Column may already exist */ }
      await db.execute({ sql: "INSERT OR IGNORE INTO _migrations (name) VALUES (?)", args: ["add_social_posting_columns"] });
    }
  } catch {
    // _migrations table might not exist yet on first run
  }
}
