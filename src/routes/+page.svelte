<svelte:head>
	<title>Password Reset</title>
	<meta
		name="description"
		content="Simple password reset prototype built with SvelteKit."
	/>
</svelte:head>

<main class="page">
	<nav class="nav">
		<div class="nav-inner">
			<a class="brand" href="/">
				<span class="brand-dot"></span>
				Password Reset
			</a>

			<div class="nav-links">
				<a class="active" href="/">Home</a>
				<a href="/forgot-password">Forgot Password</a>
			</div>
		</div>
	</nav>

	<section class="hero">
		<div class="badge">Password Reset Prototype</div>

		<h1>Forgot your password?</h1>

		<p class="intro">
			No problem. Request a secure reset link and choose a new password in just a few steps.
		</p>

		<a class="primary-button" href="/forgot-password">
			Reset password
			<span>→</span>
		</a>
	</section>

	<section class="info-grid">
		<article class="card">
			<div class="number">01</div>
			<h2>Enter your email</h2>
			<p>Tell us which account you want to recover.</p>
		</article>

		<article class="card">
			<div class="number">02</div>
			<h2>Receive a reset link</h2>
			<p>We create a secure token and send the link by email.</p>
		</article>

		<article class="card">
			<div class="number">03</div>
			<h2>Choose a new password</h2>
			<p>
				The reset link is valid for a limited time and can only be used once.
			</p>
		</article>
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
		box-shadow: 0 6px 18px rgba(47, 52, 56, 0.08);
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
		transition: color 0.2s ease;
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: white;
	}

	.hero {
		max-width: 900px;
		margin: 0 auto;
		padding: 95px 24px 72px;
		text-align: center;
	}

	.badge {
		display: inline-block;
		padding: 8px 14px;
		border-radius: 999px;
		background: #e7edf1;
		color: #536878;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.3px;
		margin-bottom: 24px;
	}

	h1 {
		margin: 0;
		font-size: clamp(46px, 7vw, 76px);
		line-height: 1;
		letter-spacing: -2.4px;
		font-weight: 700;
	}

	.intro {
		max-width: 620px;
		margin: 28px auto 34px;
		font-size: 18px;
		line-height: 1.7;
		color: #68737b;
	}

	.primary-button {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 14px 20px;
		border-radius: 12px;
		background: #6f8597;
		color: white;
		text-decoration: none;
		font-weight: 600;
		box-shadow: 0 8px 22px rgba(111, 133, 151, 0.2);
		transition:
			transform 0.2s ease,
			background 0.2s ease;
	}

	.primary-button:hover {
		background: #596f80;
		transform: translateY(-2px);
	}

	.info-grid {
		max-width: 1050px;
		width: calc(100% - 40px);
		margin: 0 auto 90px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px;
	}

	.card {
		background: #fffdf8;
		border: 1px solid #dde1e4;
		border-radius: 20px;
		padding: 28px;
		box-shadow: 0 12px 30px rgba(50, 60, 70, 0.05);
	}

	.number {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 10px;
		background: #e7edf1;
		color: #536878;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 22px;
	}

	h2 {
		margin: 0 0 10px;
		font-size: 22px;
	}

	.card p {
		margin: 0;
		color: #68737b;
		line-height: 1.6;
	}

	.footer {
		margin-top: auto;
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

	@media (max-width: 800px) {
		.info-grid {
			grid-template-columns: 1fr;
		}
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

		.footer-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 14px;
		}
	}
</style>