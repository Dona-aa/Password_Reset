export const actions = {
	default: async ({ request }) => {
		// Read the submitted form data.
		const formData = await request.formData();
 
		// Get the new password from the form.
		const password = formData.get('password');
 
		// For now, only print it in the terminal.
		console.log('New password entered:', password);
	}
};