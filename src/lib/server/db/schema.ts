import { mysqlTable, int, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
 id: varchar('id', { length: 255 }).primaryKey(),
 age: int('age'),
 username: text('username').notNull().unique(),
 passwordHash: text('password_hash').notNull()
});

export const session = mysqlTable('session', {
 id: varchar('id', { length: 255 }).primaryKey(),
 userId: varchar('user_id', { length: 255 }).notNull().references(() => user.id),
 expiresAt: timestamp('expires_at', { mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;