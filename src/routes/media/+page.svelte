<script>
	import { milestones } from '$lib/data/requirements.js';
	import SpotlightImage from '$lib/components/SpotlightImage.svelte';

	const categories = [
		{
			title: 'Vehicle',
			description: 'Full builds, CAD renders, and close-ups of individual subsystems.'
		},
		{
			title: 'Testing',
			description: 'Wind tunnel runs, drop tests, and ground / flight testing footage.'
		},
		{
			title: 'Team & Events',
			description: 'Mass meetings, design reviews, competition travel, and team life.'
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

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">This Season</p>
		<h2>Early work</h2>
		<p class="lede">
		</p>
		<div class="season-photos">
			<SpotlightImage
				desc="First concept render of the left wing as the vehicle architecture comes together."
				src="/media/LeftWingConcept.png"
				alt="CAD concept render of the aircraft's left wing"
				caption="Left wing, concept render"
			/>
			<SpotlightImage
				desc="Getting the software-in-the-loop tech stack running"
				src="/media/px4-sitl-docker-build.png"
				alt="Terminal output of the PX4 SITL simulation Docker build"
				caption="PX4 SITL simulation, Docker build"
				klass="feature-photo-minor"
			/>
		</div>
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
		<SpotlightImage
			src="/media/wind-tunnel-2025.png"
			alt="Last season's vehicle mounted in a wind tunnel test section"
			caption="2025 vehicle, wind tunnel test"
		/>
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
					<h3>{cat.title}</h3>
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

	.season-photos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		align-items: start;
	}

	.season-photos :global(.sli-container) {
		max-width: none;
	}

	.season-photos :global(.feature-photo) {
		margin-top: 1.5rem;
	}

	@media (max-width: 720px) {
		.season-photos {
			grid-template-columns: 1fr;
		}
	}

	:global(.feature-photo-minor) {
		opacity: 0.9;
	}

	:global(.feature-photo-minor figcaption) {
		font-size: 0.78rem;
		font-weight: 600;
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
