import { fail } from '@sveltejs/kit';
import { users } from '$lib/server/users.js';

export const actions = {
	default: async ({ request, url }) => {
		// Read the submitted form data.
		const formData = await request.formData();
 
		// Get the new password from the form.
		const password = formData.get('password');

        // Read the reset token from the URL.
        const token = url.searchParams.get('token');

        // Find the user that owns this reset token.
        const user = users.find((user) => user.resetToken === token);

        // Check if the token has expired.
        const tokenExpired = user && user.resetTokenExpires < Date.now();

        // Stop if the token does not exist or has expired.
        if (!user || tokenExpired) {
	    return fail(400, {
		error: 'Invalid or expired reset token.'
	    });
    }
        // Update the user's password.
        user.password = password;
    

        // Remove the reset token so it cannot be used again.
        user.resetToken = null;
        user.resetTokenExpires = null;

        return { success: true};
	}
};