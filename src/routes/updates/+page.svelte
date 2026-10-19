<script>
	import { updates, upcoming } from '$lib/data/updates.js';

	function formatDate(iso) {
		return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Build Updates — MAST</title>
	<meta
		name="description"
		content="Historical build log for the Michigan Autonomous Security Team's SUAS 2027 vehicle: milestones, tests, and progress updates."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">Build Log</p>
		<h1>Following the build, start to finish</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			A running record of milestones, tests, and decisions as we build toward SUAS 2027. New
			entries post as things happen, so check back often.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Coming Up</p>
		<div class="grid grid-3">
			{#each upcoming as u (u.title)}
				<div class="card upcoming-card">
					<span class="badge">{formatDate(u.date)}</span>
					<h3>{u.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Log</p>
		<h2>Latest updates</h2>
		<div class="timeline">
			{#each updates as u (u.title + u.date)}
				<article class="entry">
					<div class="rail">
						<span class="dot" aria-hidden="true"></span>
					</div>
					<div class="entry-body">
						<div class="entry-head">
							<span class="badge">{u.tag}</span>
							<time datetime={u.date}>{formatDate(u.date)}</time>
						</div>
						<h3>{u.title}</h3>
						<p>{u.summary}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.upcoming-card h3 {
		margin: 0.6rem 0 0;
		font-size: 1.1rem;
	}

	.timeline {
		margin-top: 1.5rem;
		display: grid;
		gap: 0;
	}

	.entry {
		display: grid;
		grid-template-columns: 24px 1fr;
		gap: 1.25rem;
	}

	.rail {
		display: flex;
		justify-content: center;
		position: relative;
	}

	.rail::before {
		content: '';
		position: absolute;
		top: 8px;
		bottom: -2.5rem;
		width: 2px;
		background: var(--line);
	}

	.entry:last-child .rail::before {
		display: none;
	}

	.dot {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--maize);
		border: 2px solid var(--blue);
		margin-top: 6px;
		z-index: 1;
	}

	.entry-body {
		padding-bottom: 2.5rem;
	}

	.entry-head {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.5rem;
	}

	.entry-head time {
		font-size: 0.85rem;
		color: var(--ink-soft);
		font-weight: 600;
	}

	.entry-body h3 {
		margin: 0 0 0.4rem;
	}
</style>
