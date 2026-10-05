import { redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

export async function POST({ cookies }) {
	// Read the current session token.
	const sessionToken = cookies.get('session_token');

	// Delete the session from the database.
	if (sessionToken) {
		await db.query(
			'DELETE FROM session WHERE session_token = ?',
			[sessionToken]
		);
	}

	// Remove the session cookie from the browser.
	cookies.delete('session_token', {
		path: '/'
	});

	// Return to the login page.
	throw redirect(303, '/');
}