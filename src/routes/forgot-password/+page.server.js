import { users } from '$lib/server/users.js';
import crypto from 'crypto';
import { fail } from '@sveltejs/kit';


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

             // Save the token temporarily on the user.
            user.resetToken = resetToken;

            // Make the token valid for 15 minutes.
            user.resetTokenExpires = Date.now() + 15 * 60 * 1000;

            // Create the reset link that would normally be sent by email.
            resetLink = `/reset-password?token=${resetToken}`;
            console.log('Reset link:', resetLink);

            console.log('Reset token:', resetToken);
        }


		// Print the result in the terminal for testing.
		console.log('Found user:', user);

		return {
			success: true,
            resetLink
		};
	}
};