import { db } from '$lib/server/db/index.js';
import { registration } from '$lib/server/db/schema.js';
import { eq, count } from 'drizzle-orm';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	try {
		const registrations = await db.select().from(registration).orderBy(registration.createdAt);
		
		const stats = {
			total: registrations.length,
			pending: registrations.filter(r => r.status === 'pending').length,
			approved: registrations.filter(r => r.status === 'approved').length,
			rejected: registrations.filter(r => r.status === 'rejected').length
		};

		return {
			registrations,
			stats
		};
	} catch (error) {
		console.error('Error loading admin data:', error);
		return {
			registrations: [],
			stats: { total: 0, pending: 0, approved: 0, rejected: 0 }
		};
	}
};