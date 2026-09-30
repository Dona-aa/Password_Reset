export const actions = {
	default: async ({ request }) => {
		// Read the data that was submitted from the form.
		const formData = await request.formData();

		// Get the email value from the form.
		const email = formData.get('email');

		// For now, only show the email in the terminal.
		console.log('Email entered:', email);
	}
};