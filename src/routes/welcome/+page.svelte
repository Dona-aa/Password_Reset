<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<main class="page">
	<nav class="nav">
		<div class="nav-inner">
			<a class="brand" href="/welcome">
				<span class="brand-dot"></span>
				Password Reset
			</a>

			<div class="nav-links">
				<form method="POST" action="/logout">
					<button class="logout-button" type="submit">
						Logout
					</button>
				</form>
			</div>
		</div>
	</nav>

	<section class="content">
		<div class="card">
			<div class="icon">✓</div>

			<p class="eyebrow">LOGIN SUCCESSFUL</p>

			<h1>Hello {data?.username ?? 'User'}!</h1>

			<p class="description">
				You are successfully logged in.
			</p>
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

	.nav-links form {
		margin: 0;
	}

	.logout-button {
		border: none;
		background: transparent;
		color: #c8d0d5;
		font: inherit;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		padding: 0;
	}

	.logout-button:hover {
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
		text-align: center;
		box-sizing: border-box;
		box-shadow: 0 18px 45px rgba(50, 60, 70, 0.08);
	}

	.icon {
		width: 52px;
		height: 52px;
		display: grid;
		place-items: center;
		margin: 0 auto 22px;
		border-radius: 14px;
		background: #e7edf1;
		color: #536878;
		font-size: 24px;
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
		margin: 16px 0 0;
		color: #68737b;
		line-height: 1.65;
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