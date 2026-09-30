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
	<p>If this email exists, a reset link has been created.</p>
{/if}

{#if form?.error}
	<p>{form.error}</p>
{/if}

{#if form?.resetLink}
	<p>
		<a href={form.resetLink}>Open reset link</a>
	</p>
{/if}