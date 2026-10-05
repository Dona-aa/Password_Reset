import crypto from 'crypto';

import { fail, redirect } from '@sveltejs/kit';

import { db } from '$lib/server/db.js';
 
export const actions = {

	default: async ({ request, cookies }) => {

		// Read the login form.

		const formData = await request.formData();
 
		const email = formData.get('email');

		const password = formData.get('password');
 
		// Find the user in MySQL.

		const [rows] = await db.query(

			'SELECT * FROM users WHERE email = ?',

			[email]

		);
 
		const user = rows[0];
 
		// Stop if email or password is wrong.

		if (!user || user.password !== password) {

			return fail(400, {

				error: 'Invalid email or password.'

			});

		}
 
		// Create a random session token.

		const sessionToken = crypto.randomBytes(32).toString('hex');
 
		// Session is valid for 1 hour.

		const expiresAt = new Date(

			Date.now() + 60 * 60 * 1000

		);
 
		// Save the session in MySQL.

		await db.query(

			`INSERT INTO session

			(user_id, session_token, expires_at)

			VALUES (?, ?, ?)`,

			[user.id, sessionToken, expiresAt]

		);
 
		// Save the session token in the browser.

		cookies.set('session_token', sessionToken, {

			path: '/',

			httpOnly: true,

			sameSite: 'lax',

			expires: expiresAt

		});
 
		// Go to the welcome page.

		throw redirect(303, '/welcome');

	}

};
 