<script>
	import MediaSlot from '$lib/components/MediaSlot.svelte';
	import { milestones } from '$lib/data/requirements.js';

	const categories = [
		{
			title: 'Vehicle',
			description: 'Full builds, CAD renders, and close-ups of individual subsystems.',
			kind: 'image'
		},
		{
			title: 'Testing',
			description: 'Wind tunnel runs, drop tests, and ground / flight testing footage.',
			kind: 'video'
		},
		{
			title: 'Team & Events',
			description: 'Mass meetings, design reviews, competition travel, and team life.',
			kind: 'image'
		}
	];

	// What each design-review gate is expected to add to the gallery.
	const mediaByGate = {
		SRR: 'Team kickoff and mass meeting photos.',
		PDR: 'CAD renders and subsystem architecture diagrams.',
		CDR: 'Build and integration photos as hardware comes together.',
		FRR: 'Flight test video and the Proof of Flight Readiness submission.'
	};
</script>

<svelte:head>
	<title>Media — MAST</title>
	<meta
		name="description"
		content="Photo and video gallery for the Michigan Autonomous Security Team's SUAS 2027 aircraft."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">Media</p>
		<h1>Photos &amp; video</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			We just kicked off the SUAS 2027 season, so this year's gallery is still empty. Here's what
			we're carrying forward, and when new material lands.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">From Last Season</p>
		<h2>Where we're picking up from</h2>
		<p class="lede">
			Our previous vehicle in a wind tunnel test. The lessons from that build directly shape this
			year's requirements and architecture.
		</p>
		<figure class="feature-photo">
			<img src="/media/wind-tunnel-2025.png" alt="Last season's vehicle mounted in a wind tunnel test section" />
			<figcaption>2025 vehicle, wind tunnel test</figcaption>
		</figure>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">What's Coming</p>
		<h2>New media lands at each design review</h2>
		<p class="lede">
			The build log already tracks real progress; photos and video get attached to it as we hit
			each gate below.
		</p>
		<div class="grid grid-4 roadmap-grid">
			{#each milestones as m (m.gate)}
				<div class="card roadmap-card">
					<span class="gate">{m.gate}</span>
					<p class="date">{m.date}</p>
					<p>{mediaByGate[m.gate]}</p>
				</div>
			{/each}
		</div>
		<a class="btn btn-outline" href="/updates">Follow the build log →</a>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Categories</p>
		<h2>How the gallery will be organized</h2>
		<p class="lede">
			Once we have material, it'll be sorted into three categories. Here's the shape each one will
			take.
		</p>
		<div class="grid grid-3">
			{#each categories as cat (cat.title)}
				<div class="category-block">
					<MediaSlot label={cat.title} kind={cat.kind} ratio="4 / 3" />
					<p>{cat.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.feature-photo {
		margin: 1.5rem 0 0;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		background: var(--white);
		max-width: 640px;
	}

	.feature-photo img {
		width: 100%;
		display: block;
	}

	.feature-photo figcaption {
		padding: 0.75rem 1rem;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--blue-mid);
		border-top: 1px solid var(--line);
	}

	.roadmap-grid {
		margin: 1.5rem 0 1.75rem;
	}

	.roadmap-card .gate {
		display: inline-block;
		background: var(--blue);
		color: var(--maize);
		font-weight: 800;
		font-size: 0.8rem;
		letter-spacing: 0.05em;
		padding: 0.2rem 0.6rem;
		border-radius: 6px;
		margin-bottom: 0.75rem;
	}

	.roadmap-card .date {
		font-weight: 700;
		color: var(--blue);
		margin-bottom: 0.4rem;
	}

	.roadmap-card p:last-child {
		margin-bottom: 0;
	}

	.category-block {
		display: grid;
		gap: 0.9rem;
	}

	.category-block p {
		margin: 0;
		font-size: 0.92rem;
	}
</style>
