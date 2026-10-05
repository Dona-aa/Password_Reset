import { users } from '$lib/server/users.js';
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

		// Search for a user with this email.
		const user = users.find((user) => user.email === email);

        let resetLink = null;
                // If a user was found, create a random reset token.
        if (user) {
            const resetToken = crypto.randomBytes(32).toString('hex');

            
 
// Set the expiration time to 15 minutes from now.

const resetTokenExpires = new Date(Date.now() + 15 * 60 * 1000);
 
// Save the token and expiration time in MySQL.

await db.query(`UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE email = ?`,[resetToken, resetTokenExpires, email]);
 

            // Create the reset link that would normally be sent by email.
            resetLink = `/reset-password?token=${resetToken}`;

            // Send the reset link by email.
            await transporter.sendMail({
                from: SMTP_FROM,
                to: email,
                subject: 'Password Reset',
                text: `Click this link to reset your password: http://localhost:5173${resetLink}`
            });

        }

		return {
			success: true,
            resetLink
		};
	}
};