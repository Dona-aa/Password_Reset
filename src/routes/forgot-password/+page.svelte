<script>
	let { form } = $props();
</script>

<h1>Forgot Password</h1>

<form method="POST">
	<label for="email">Email</label>

	<input
		id="email"
		name="email"
		type="email"
		placeholder="Enter your email"
		required
	/>

	<button type="submit">
		Send reset link
	</button>
</form>

{#if form?.success}
	<p>Reset request received.</p>
{/if}