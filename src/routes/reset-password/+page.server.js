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
        
       // Find the reset token in the token_reset table.
        const [rows] = await db.query(
            `SELECT * FROM token_reset
            WHERE token = ?                
            AND used = FALSE`,
            [token]
        );
            
        const resetToken = rows[0];


        // Check if the token has expired.
        const tokenExpired = resetToken && new Date(resetToken.expires_at) < new Date();

        // Stop if the token does not exist or has expired.
            if (!resetToken || tokenExpired) {
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
        await db.query(
            `UPDATE users
            SET password = ?
            WHERE id = ?`,
            [password, resetToken.user_id]
        );

        // Mark the reset token as used.
        await db.query(
            `UPDATE token_reset
            SET used = TRUE
            WHERE id = ?`,
            [resetToken.id]
        );

        return { success: true};
	}
};