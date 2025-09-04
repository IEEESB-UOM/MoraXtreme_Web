import { db } from '$lib/server/db';
import { registration } from '$lib/server/db/schema';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// 1. Fetch all registrations
	const rows = await db.select().from(registration);

	// 2. Convert to CSV
	if (rows.length === 0) {
		return new Response('No registrations found', { status: 404 });
	}

	const header = Object.keys(rows[0]).join(',');
	const csvRows = rows.map((row) =>
		Object.values(row).map((v) => (v === null ? '' : String(v).replace(/"/g, '""'))).join(',')
	);

	const csv = [header, ...csvRows].join('\n');

	// 3. Return as downloadable CSV
	return new Response(csv, {
		headers: {
			'Content-Type': 'text/csv; charset=utf-8',
			'Content-Disposition': 'attachment; filename="registrations.csv"'
		}
	});
};
