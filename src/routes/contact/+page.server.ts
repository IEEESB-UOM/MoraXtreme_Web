import { fail } from '@sveltejs/kit';
import type { Actions } from './$types.js';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		
		const name = formData.get('name')?.toString();
		const email = formData.get('email')?.toString();
		const subject = formData.get('subject')?.toString();
		const message = formData.get('message')?.toString();

		if (!name || !email || !subject || !message) {
			return fail(400, {
				error: 'Please fill in all required fields',
				data: { name, email, subject, message }
			});
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address',
				data: { name, email, subject, message }
			});
		}

		try {
			console.log('Contact form submission:', { name, email, subject, message });
			
			return {
				success: true
			};
		} catch (error) {
			console.error('Contact form error:', error);
			return fail(500, {
				error: 'Failed to send message. Please try again.',
				data: { name, email, subject, message }
			});
		}
	}
};