import { db } from '$lib/server/db/index.js';
import { competition } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	try {
		const competitions = await db.select().from(competition).where(eq(competition.isActive, true)).orderBy(competition.createdAt);
		
		return {
			competitions
		};
	} catch (error) {
		console.error('Error loading competition data:', error);
		return {
			competitions: []
		};
	}
};