<script>
	import { missionFacts, vehicleSnapshot, keyFindings } from '$lib/data/requirements.js';
	import SpotlightImage from '$lib/components/SpotlightImage.svelte';

	const snapshot = vehicleSnapshot.slice(0, 6);
</script>

<svelte:head>
	<title>MAST — Michigan Autonomous Security Team</title>
	<meta
		name="description"
		content="The Michigan Autonomous Security Team builds an autonomous VTOL aircraft for the SUAS 2027 competition. Meet the team, the vehicle, and follow our build progress."
	/>
</svelte:head>

<section class="hero section-navy">
	<div class="container hero-grid">
		<div>
			<p class="eyebrow" style="color: var(--maize)">University of Michigan · SUAS 2027</p>
			<h1>Michigan Autonomous Security Team</h1>
			<p class="lede" style="color: rgba(255,255,255,0.85)">
				We design, build, and fly an autonomous VTOL aircraft that searches a disaster zone,
				identifies targets on its own, and delivers aid, with just two operators and almost no
				human input in the air.
			</p>
			<div class="cta-row">
				<a class="btn btn-maize" href="/vehicle">Explore the Vehicle</a>
				<a class="btn btn-outline-light" href="/team">Meet the Team</a>
			</div>

			<dl class="facts">
				{#each missionFacts as f (f.label)}
					<div>
						<dt>{f.label}</dt>
						<dd>{f.value}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Purpose Statement</p>
		<h2>An autonomous search-and-deploy platform, built for every mission</h2>
		<p class="lede">
			SUAS (Student Unmanned Aerial Systems) tasks teams with a disaster-response scenario: fly a
			survey pattern, map risk across the field, autonomously find a mannequin and a tent, and
			deliver the right payload to each, all without hands-on-the-stick flying beyond takeoff
			and landing.
		</p>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Vehicle Snapshot</p>
		<h2>Built around hard constraints</h2>
		<div class="grid grid-3 snapshot-grid">
			{#each snapshot as s (s.label)}
				<div class="card">
					<span class="badge">{s.label}</span>
					<p class="snapshot-value">{s.value}</p>
				</div>
			{/each}
		</div>
		<a class="btn btn-outline" href="/vehicle">See full requirements &amp; architecture →</a>
	</div>
</section>

<!-- <section class="section">
	<div class="container">
		<p class="eyebrow">What We Learned at SRR</p>
		<h2>Key findings driving the design</h2>
		<ul class="findings">
			{#each keyFindings as f (f)}
				<li>{f}</li>
			{/each}
		</ul>
	</div>
</section> -->

<section class="section section-alt">
	<div class="container media-grid">
		<div>
			<p class="eyebrow">Media</p>
			<h2>Follow the build</h2>
			<p class="lede">
				Photos, CAD renders, and flight test footage will land here as the vehicle comes
				together through the year.
			</p>
			<a class="btn btn-outline" href="/media">Visit the media gallery →</a>
		</div>
		<SpotlightImage
			src="/media/LeftWingConcept.png"
			alt="CAD concept render of the aircraft's left wing"
			caption="Left wing, concept render"
			klass="media-photo"
		/>
	</div>
</section>

<section class="section cta-band">
	<div class="container cta-inner">
		<div>
			<h2>Want to fly with us?</h2>
			<p class="lede">
				We're always looking for engineers, and sponsors who want to back a student-built
				autonomous aircraft.
			</p>
		</div>
		<div class="cta-row">
			<a class="btn btn-maize" href="/contact">Join the Team</a>
			<a class="btn btn-outline" href="/sponsors">Become a Sponsor</a>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 4rem 0 4.5rem;
	}

	.cta-row {
		display: flex;
		gap: 0.9rem;
		flex-wrap: wrap;
		margin: 1.75rem 0;
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
		margin: 1.5rem 0 0;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(255, 255, 255, 0.18);
	}

	.facts dt {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgba(255, 255, 255, 0.55);
	}

	.facts dd {
		margin: 0.2rem 0 0;
		font-weight: 700;
		color: var(--white);
	}

	.snapshot-grid {
		margin: 2rem 0;
	}

	.snapshot-value {
		margin-top: 0.6rem;
		font-weight: 700;
		color: var(--blue);
		font-size: 1.05rem;
	}

	.findings {
		max-width: 70ch;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.75rem;
		color: var(--ink-soft);
	}

	.findings li {
		font-size: 1.05rem;
	}

	.media-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 2.5rem;
		align-items: center;
	}

	:global(.media-photo) {
		margin: 0;
	}

	@media (max-width: 760px) {
		.media-grid {
			grid-template-columns: 1fr;
		}
	}

	.cta-band {
		background: var(--maize);
	}

	.cta-band h2,
	.cta-band p {
		color: var(--blue-dark);
	}

	.cta-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
</style>
