import { redirect } from '@sveltejs/kit';
import { validateSessionToken, sessionCookieName } from '$lib/server/auth.js';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async (event) => {
	const sessionToken = event.cookies.get(sessionCookieName);
	
	if (!sessionToken) {
		throw redirect(302, '/demo/lucia/login?redirectTo=/admin');
	}

	const { session, user } = await validateSessionToken(sessionToken);
	
	if (!session || !user) {
		throw redirect(302, '/demo/lucia/login?redirectTo=/admin');
	}

	if (!user.isAdmin) {
		throw redirect(302, '/?error=unauthorized');
	}

	return {
		user
	};
};