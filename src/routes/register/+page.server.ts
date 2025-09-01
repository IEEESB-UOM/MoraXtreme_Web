import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db/index.js';
import { registration } from '$lib/server/db/schema.js';
import type { Actions } from './$types.js';

function generateId() {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		
		const fullName = formData.get('fullName')?.toString();
		const email = formData.get('email')?.toString();
		const phone = formData.get('phone')?.toString();
		const university = formData.get('university')?.toString();
		const studentId = formData.get('studentId')?.toString();
		const teamName = formData.get('teamName')?.toString();
		const teamMembers = formData.get('teamMembers')?.toString();
		const category = formData.get('category')?.toString();
		const experience = formData.get('experience')?.toString();

		if (!fullName || !email || !university || !studentId || !category) {
			return fail(400, {
				error: 'Please fill in all required fields',
				data: {
					fullName,
					email,
					phone,
					university,
					studentId,
					teamName,
					teamMembers,
					category,
					experience
				}
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address',
				data: {
					fullName,
					email,
					phone,
					university,
					studentId,
					teamName,
					teamMembers,
					category,
					experience
				}
			});
		}

		try {
			const registrationId = generateId();
			
			await db.insert(registration).values({
				id: registrationId,
				fullName,
				email,
				phone: phone || null,
				university,
				studentId,
				teamName: teamName || null,
				teamMembers: teamMembers || null,
				category,
				experience: experience || null,
				createdAt: new Date(),
				status: 'pending'
			});

			return {
				success: true
			};
		} catch (error) {
			console.error('Registration error:', error);
			return fail(500, {
				error: 'Registration failed. Please try again.',
				data: {
					fullName,
					email,
					phone,
					university,
					studentId,
					teamName,
					teamMembers,
					category,
					experience
				}
			});
		}
	}
};