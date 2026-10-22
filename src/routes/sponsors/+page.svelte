<script>
	import { sponsors, tiers } from '$lib/data/sponsors.js';
</script>

<svelte:head>
	<title>Sponsors — MAST</title>
	<meta
		name="description"
		content="Support the Michigan Autonomous Security Team's SUAS 2027 aircraft: sponsorship tiers and how to get involved."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">Sponsors</p>
		<h1>Help us fly</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			MAST is entirely student-run and relies on sponsorship for components, manufacturing, and
			travel to Tulsa for SUAS. Every contribution goes directly into the aircraft.
		</p>
		<a class="btn btn-maize" href="/contact">Get in touch about sponsoring</a>
	</div>
</section>

<!-- <section class="section">
	<div class="container">
		<p class="eyebrow">Sponsorship Tiers</p>
		<h2>Ways to support the team</h2>
		<div class="grid grid-3">
			{#each tiers as t (t.name)}
				<div class="card tier-card">
					<h3>{t.name}</h3>
					<p>{t.blurb}</p>
				</div>
			{/each}
		</div>
	</div>
</section> -->

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Our Sponsors</p>
		<h2>Thank you to our supporters</h2>
		{#if sponsors.length === 0}
			<div class="empty">
				<span class="mark" aria-hidden="true">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
						<path
							d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6l7-3Z"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
				<p>
					We're building our sponsor roster for the 2026–2027 season. Logos will appear here as
					partnerships are confirmed.
				</p>
			</div>
		{:else}
			<div class="grid grid-4">
				{#each sponsors as s (s.name)}
					<a class="card logo-card" href={s.url} target="_blank" rel="noopener">
						<img src={s.logo} alt="{s.name} logo" />
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.hero .btn {
		margin-top: 1.5rem;
	}

	.tier-card h3 {
		color: var(--blue);
	}

	.empty {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 2rem;
		background: var(--white);
	}

	.empty .mark {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--blue);
		color: var(--maize);
		flex-shrink: 0;
	}

	.empty p {
		margin: 0;
	}

	.logo-card {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		text-decoration: none;
	}
</style>
