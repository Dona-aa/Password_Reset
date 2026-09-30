import { users } from '$lib/server/users.js';
import crypto from 'crypto';


export const actions = {
	default: async ({ request }) => {
		// Read the submitted form data.
		const formData = await request.formData();

		// Get the email from the form.
		const email = formData.get('email');

		// Search for a user with this email.
		const user = users.find((user) => user.email === email);

                // If a user was found, create a random reset token.
        if (user) {
            const resetToken = crypto.randomBytes(32).toString('hex');

            console.log('Reset token:', resetToken);
        }

		// Print the result in the terminal for testing.
		console.log('Found user:', user);

		return {
			success: true
		};
	}
};