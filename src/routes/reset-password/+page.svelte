<script>

	let { form } = $props();
</script>
 
<svelte:head>
<title>Reset Password</title>
</svelte:head>
 
<main class="page">
<nav class="nav">
<div class="nav-inner">
<a class="brand" href="/">
<span class="brand-dot"></span>

				Password Reset
</a>
 
			<div class="nav-links">
<a href="/">Home</a>
<a href="/forgot-password">Forgot Password</a>
</div>
</div>
</nav>
 
	<section class="content">
<div class="card">
<div class="icon">↻</div>
 
			<p class="eyebrow">SET NEW PASSWORD</p>
 
			<h1>Create a new password</h1>
 
			<p class="description">

				Choose a new password for your account. It must contain at least 8 characters.
</p>
 
			{#if !form?.success}
<form method="POST">
<label for="password">New password</label>
 
					<input

						id="password"

						name="password"

						type="password"

						placeholder="Enter new password"

						required

					/>
 
					<label for="confirmPassword">Confirm password</label>
 
					<input

						id="confirmPassword"

						name="confirmPassword"

						type="password"

						placeholder="Enter password again"

						required

					/>
 
					<button type="submit">

						Reset password
<span>→</span>
</button>
</form>

			{/if}
 
			{#if form?.success}
<div class="success-box">
<h2>Password reset successful!</h2>
 
					<p>

						Your password has been updated. You can now use your new password.
</p>
 
					<a href="/">Back to Home</a>
</div>

			{/if}
 
			{#if form?.error}
<div class="message error">

					{form.error}
</div>

			{/if}
</div>
</section>
 
	<footer class="footer">
<div class="footer-inner">
<div>
<p class="footer-brand">Password Reset</p>
<p class="footer-sub">Simple recovery. Secure flow.</p>
</div>
 
			<p class="copyright">© 2026 E&amp;A</p>
</div>
</footer>
</main>
 
<style>

	:global(body) {

		margin: 0;

		font-family:

			Inter,

			system-ui,

			-apple-system,

			BlinkMacSystemFont,

			'Segoe UI',

			sans-serif;

		background: #f4f1ea;

		color: #2f3438;

	}
 
	.page {

		min-height: 100vh;

		display: flex;

		flex-direction: column;

	}
 
	.nav {

		width: 100%;

		background: #2f3438;

	}
 
	.nav-inner {

		width: 100%;

		padding: 17px 26px;

		display: flex;

		align-items: center;

		justify-content: space-between;

		box-sizing: border-box;

	}
 
	.brand {

		display: flex;

		align-items: center;

		gap: 10px;

		color: white;

		text-decoration: none;

		font-weight: 700;

		font-size: 17px;

	}
 
	.brand-dot {

		width: 9px;

		height: 9px;

		border-radius: 50%;

		background: #8fa6b7;

	}
 
	.nav-links {

		display: flex;

		align-items: center;

		gap: 24px;

	}
 
	.nav-links a {

		color: #c8d0d5;

		text-decoration: none;

		font-size: 14px;

		font-weight: 500;

	}
 
	.nav-links a:hover {

		color: white;

	}
 
	.content {

		flex: 1;

		display: flex;

		align-items: center;

		justify-content: center;

		padding: 45px 20px;

		box-sizing: border-box;

	}
 
	.card {

		width: 100%;

		max-width: 500px;

		background: #fffdf8;

		border: 1px solid #dde1e4;

		border-radius: 22px;

		padding: 40px;

		box-sizing: border-box;

		box-shadow: 0 18px 45px rgba(50, 60, 70, 0.08);

	}
 
	.icon {

		width: 52px;

		height: 52px;

		display: grid;

		place-items: center;

		border-radius: 14px;

		background: #e7edf1;

		color: #536878;

		font-size: 23px;

		margin-bottom: 22px;

	}
 
	.eyebrow {

		margin: 0 0 10px;

		font-size: 12px;

		font-weight: 700;

		letter-spacing: 1.5px;

		color: #7c8d99;

	}
 
	h1 {

		margin: 0;

		font-size: 36px;

		line-height: 1.15;

		letter-spacing: -0.8px;

	}
 
	.description {

		margin: 16px 0 30px;

		color: #68737b;

		line-height: 1.65;

	}
 
	form {

		display: flex;

		flex-direction: column;

		gap: 10px;

	}
 
	label {

		font-size: 14px;

		font-weight: 600;

	}
 
	input {

		width: 100%;

		padding: 14px 15px;

		border: 1px solid #cfd6db;

		border-radius: 11px;

		background: #ffffff;

		font: inherit;

		color: #2f3438;

		box-sizing: border-box;

		outline: none;

	}
 
	input:focus {

		border-color: #6f8597;

		box-shadow: 0 0 0 3px rgba(111, 133, 151, 0.14);

	}
 
	button {

		margin-top: 8px;

		padding: 14px 16px;

		border: none;

		border-radius: 11px;

		background: #6f8597;

		color: white;

		font: inherit;

		font-weight: 600;

		cursor: pointer;

		display: flex;

		align-items: center;

		justify-content: center;

		gap: 9px;

	}
 
	button:hover {

		background: #596f80;

	}
 
	.success-box {

		margin-top: 20px;

		padding: 22px;

		border-radius: 14px;

		background: #eaf0f4;

		border: 1px solid #d3dfe6;

		text-align: center;

	}
 
	.success-box h2 {

		margin: 0 0 8px;

		font-size: 20px;

		color: #536878;

	}
 
	.success-box p {

		margin: 0 0 16px;

		color: #68737b;

		line-height: 1.5;

	}
 
	.success-box a {

		display: inline-block;

		padding: 10px 16px;

		border-radius: 9px;

		background: #6f8597;

		color: white;

		text-decoration: none;

		font-weight: 600;

	}
 
	.success-box a:hover {

		background: #596f80;

	}
 
	.message {

		margin-top: 18px;

		padding: 13px 14px;

		border-radius: 10px;

		font-size: 14px;

		line-height: 1.5;

	}
 
	.error {

		background: #f8e7e4;

		color: #7e3b35;

		border: 1px solid #efd0cb;

	}
 
	.footer {

		width: 100%;

		background: #2f3438;

	}
 
	.footer-inner {

		width: 100%;

		padding: 20px 26px;

		display: flex;

		align-items: center;

		justify-content: space-between;

		box-sizing: border-box;

		color: white;

	}
 
	.footer-brand {

		margin: 0;

		font-weight: 700;

		font-size: 15px;

	}
 
	.footer-sub {

		margin: 4px 0 0;

		color: #aeb7bd;

		font-size: 13px;

	}
 
	.copyright {

		margin: 0;

		color: #c7ced3;

		font-size: 13px;

	}
 
	@media (max-width: 600px) {

		.nav-inner {

			align-items: flex-start;

		}
 
		.nav-links {

			flex-direction: column;

			align-items: flex-end;

			gap: 8px;

		}
 
		.content {

			padding: 40px 18px;

		}
 
		.card {

			padding: 30px 24px;

		}
 
		h1 {

			font-size: 31px;

		}
 
		.footer-inner {

			flex-direction: column;

			align-items: flex-start;

			gap: 14px;

		}

	}
</style>
 