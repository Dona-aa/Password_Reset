import crypto from 'crypto';

import { fail } from '@sveltejs/kit';

import { transporter } from '$lib/server/email.js';

import { SMTP_FROM } from '$env/static/private';

import { db } from '$lib/server/db.js';
 
export const actions = {

	default: async ({ request }) => {

		// Read the submitted form data.

		const formData = await request.formData();
 
		// Get the email from the form.

		const email = formData.get('email');
 
		// Stop if the email is missing.

		if (!email) {

			return fail(400, {

				error: 'Email is required.'

			});

		}
 
		// Search for the user in MySQL.

		const [rows] = await db.query(

			'SELECT * FROM users WHERE email = ?',

			[email]

		);
 
		const user = rows[0];

        console.log('Email entered:', email);
        console.log('User from MySQL:', user);
 
		// Only continue if the user exists.

		if (user) {

			// Create a random reset token.

			const resetToken = crypto.randomBytes(32).toString('hex');
 
			// Token is valid for 15 minutes.

			const resetTokenExpires = new Date(

				Date.now() + 15 * 60 * 1000

			);
 
			// Save the token in the token_reset table.

			await db.query(

				`INSERT INTO token_reset

				(user_id, token, expires_at)

				VALUES (?, ?, ?)`,

				[user.id, resetToken, resetTokenExpires]

			);
            
            console.log('Token saved in token_reset');
            
			// Create the reset link.

			const resetLink =

				`http://localhost:5173/reset-password?token=${resetToken}`;
 
			// Send the reset email.

			await transporter.sendMail({

				from: SMTP_FROM,

				to: email,

				subject: 'Password Reset',

				text: `Click this link to reset your password: ${resetLink}`

			});

		}
 
		// Always show the same response.

		// This does not reveal whether the email exists.

		return {

			success: true

		};

	}

};
 