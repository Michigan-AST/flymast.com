<script>
	import Logo from './Logo.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container grid grid-4">
		<div>
			<div class="brand">
				<Logo size={36} />
			</div>
			<p>
				Michigan Autonomous Security Team: an autonomous search-and-deploy aircraft built by
				students at the University of Michigan for SUAS 2027.
			</p>
		</div>

		<div>
			<h4>Site</h4>
			<ul>
				<li><a href="/team">Team</a></li>
				<li><a href="/vehicle">Vehicle &amp; Requirements</a></li>
				<li><a href="/updates">Build Updates</a></li>
				<li><a href="/media">Media</a></li>
			</ul>
		</div>

		<div>
			<h4>Get Involved</h4>
			<ul>
				<li><a href="/sponsors">Sponsor Us</a></li>
				<li><a href="/contact">Join the Team</a></li>
				<li><a href="mailto:gbender@umich.edu">Contact Us</a></li>
			</ul>
		</div>

		<div>
			<h4>University of Michigan</h4>
			<p class="muted">
				Ann Arbor, Michigan<br />
				Student-run engineering project team
			</p>
		</div>
	</div>

	<div class="container bottom">
		<span>© {year} Michigan Autonomous Security Team</span>
		<span class="maize">Go Blue 〽</span>
	</div>
</footer>

<style>
	.footer {
		background: var(--blue-dark);
		color: rgba(255, 255, 255, 0.78);
		padding: 3.5rem 0 1.5rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--white);
		font-weight: 800;
		font-size: 1.1rem;
		margin-bottom: 0.9rem;
	}

	.footer p {
		color: rgba(255, 255, 255, 0.65);
		font-size: 0.92rem;
	}

	.footer h4 {
		color: var(--white);
		font-size: 0.82rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	.footer ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}

	.footer a {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 0.92rem;
	}

	.footer a:hover {
		color: var(--maize);
	}

	.muted {
		color: rgba(255, 255, 255, 0.55);
	}

	.bottom {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
		font-size: 0.85rem;
	}

	.maize {
		color: var(--maize);
		font-weight: 700;
	}
</style>
