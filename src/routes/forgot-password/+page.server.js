export const actions = {
	default: async ({ request }) => {
		// Read the submitted form data.
		const formData = await request.formData();

		// Get the email from the form.
		const email = formData.get('email');

		// Show the email in the terminal for testing.
		console.log('Email entered:', email);

		// Send a simple message back to the page.
		return {
			success: true
		};
	}
};