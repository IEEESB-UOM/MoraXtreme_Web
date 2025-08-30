import { drizzle } from 'drizzle-orm/postgres-js';
import { drizzle as drizzleSqlite } from 'drizzle-orm/better-sqlite3';
import postgres from 'postgres';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

let db: ReturnType<typeof drizzle> | ReturnType<typeof drizzleSqlite>;

if (env.DATABASE_URL) {
	const client = postgres(env.DATABASE_URL);
	db = drizzle(client, { schema });
} else {
	const sqlite = new Database('dev.db');
	db = drizzleSqlite(sqlite, { schema });
}

export { db };
