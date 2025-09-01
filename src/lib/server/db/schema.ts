import { mysqlTable, int, text, timestamp, varchar, boolean } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
 id: varchar('id', { length: 255 }).primaryKey(),
 age: int('age'),
 username: text('username').notNull().unique(),
 passwordHash: text('password_hash').notNull(),
 isAdmin: boolean('is_admin').default(false)
});

export const session = mysqlTable('session', {
 id: varchar('id', { length: 255 }).primaryKey(),
 userId: varchar('user_id', { length: 255 }).notNull().references(() => user.id),
 expiresAt: timestamp('expires_at', { mode: 'date' }).notNull()
});

export const registration = mysqlTable('registration', {
 id: varchar('id', { length: 255 }).primaryKey(),
 fullName: text('full_name').notNull(),
 email: varchar('email', { length: 255 }).notNull().unique(),
 phone: varchar('phone', { length: 20 }),
 university: text('university').notNull(),
 studentId: varchar('student_id', { length: 50 }).notNull(),
 teamName: text('team_name'),
 teamMembers: text('team_members'),
 category: varchar('category', { length: 100 }).notNull(),
 experience: text('experience'),
 createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
 status: varchar('status', { length: 20 }).default('pending')
});

export const competition = mysqlTable('competition', {
 id: varchar('id', { length: 255 }).primaryKey(),
 title: text('title').notNull(),
 description: text('description'),
 hackerrankLink: text('hackerrank_link'),
 timeSlot: timestamp('time_slot', { mode: 'date' }),
 location: text('location'),
 maxParticipants: int('max_participants'),
 isActive: boolean('is_active').default(true),
 createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow()
});

export type Session = typeof session.$inferSelect;
export type User = typeof user.$inferSelect;
export type Registration = typeof registration.$inferSelect;
export type Competition = typeof competition.$inferSelect;