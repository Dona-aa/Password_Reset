import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';

const [rows] = await db.query('SELECT * FROM users');
console.log(rows);

export const actions = {
	default: async ({ request, url }) => {
		// Read the submitted form data.
		const formData = await request.formData();
 
		// Get the new password from the form.
		const password = formData.get('password');

        const confirmPassword = formData.get('confirmPassword');

        // Read the reset token from the URL.
        const token = url.searchParams.get('token');
        
        // Look up the user by the reset token.
       const [rows] = await db.query('SELECT * FROM users WHERE reset_token = ?',[token]);
        const user = rows[0];


        // Check if the token has expired.
        const tokenExpired = user &&  user.reset_token_expires < Date.now();

        // Stop if the token does not exist or has expired.
            if (!user || tokenExpired) {
            return fail(400, {
                error: 'Invalid or expired reset token.'
            });
        }
        
        // Check if both password fields match.
        if (password !== confirmPassword) {
            return fail(400, {
                error: 'Passwords do not match.'
            });
        }
        // Require a password with at least 8 characters.
        if (password.length < 8) {
            return fail(400, {
                error: 'Password must be at least 8 characters long.'
            });
        }

        
        // Update the user's password.
        user.password = password;

       // Update the password and remove the reset token in MySQL.
        await db.query(
            `UPDATE users
            SET password = ?, reset_token = NULL, reset_token_expires = NULL
            WHERE id = ?`,
            [password, user.id]
        );

        return { success: true};
	}
};