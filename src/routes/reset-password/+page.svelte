<script>
    let { form } = $props();
</script>
<h1>Reset Password</h1>
{#if form?.success}
	<p>Password reset successful!</p>
{/if}

{#if form?.error}
<p>{form.error}</p>
{/if}
 
<form method="POST">
<label for="password">New password</label>
 
	<input
		id="password"
		name="password"
		type="password"
		placeholder="Enter new password"
		required
	/>
 
	<button type="submit">
		Reset password
</button>
</form>