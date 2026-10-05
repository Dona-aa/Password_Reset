import { redirect } from '@sveltejs/kit';

import { db } from '$lib/server/db.js';
 
export async function load({ cookies }) {

	// Read the session token from the browser cookie.

	const sessionToken = cookies.get('session_token');
 
	// If there is no session token, go back to login.

	if (!sessionToken) {

		throw redirect(303, '/');

	}
 
	// Find the active session and the matching user.

	const [rows] = await db.query(

		`SELECT users.*

		 FROM session

		 JOIN users

		 ON session.user_id = users.id

		 WHERE session.session_token = ?

		 AND session.expires_at > NOW()`,

		[sessionToken]

	);
 
	const user = rows[0];
 
	// If the session is invalid or expired, go back to login.

	if (!user) {

		throw redirect(303, '/');

	}
 
	// Send the username to the welcome page.

	return {

		username: user.username ?? user.email

	};

}
 