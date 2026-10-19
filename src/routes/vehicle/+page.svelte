<script>
	import MediaSlot from '$lib/components/MediaSlot.svelte';
	import SoftwareFlowDiagram from '$lib/components/SoftwareFlowDiagram.svelte';
	import {
		vehicleSnapshot,
		conceptOfOps,
		scoring,
		hardwareSubsystems,
		softwareStack,
		autonomyPhases,
		devEnvironment,
		milestones
	} from '$lib/data/requirements.js';
</script>

<svelte:head>
	<title>Vehicle &amp; Requirements — MAST</title>
	<meta
		name="description"
		content="MAST's VTOL tailsitter aircraft: system architecture, SUAS 2027 requirements, concept of operations, and design review milestones."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">System Overview</p>
		<h1>A collapsible VTOL tailsitter, built to meet hard constraints</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			Our aircraft takes off and lands vertically, transitions to efficient forward flight for
			the search, and folds down small enough to carry on. Every subsystem is scoped against the
			SUAS 2027 ruleset below.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Vehicle Design Documentation</p>
		<h2>Vehicle photos &amp; renders</h2>
		<p class="lede">CAD renders, in-progress builds, and flight photos will fill this gallery as they're produced.</p>
		<div class="grid grid-3">
			<MediaSlot label="Full vehicle render" ratio="4 / 3" />
			<MediaSlot label="Payload bay detail" ratio="4 / 3" />
			<MediaSlot label="Transition flight test" kind="video" ratio="4 / 3" />
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Hardware Architecture</p>
		<h2>Subsystem breakdown</h2>
		<div class="arch-grid">
			<MediaSlot label="Labeled hardware architecture diagram" kind="diagram" ratio="1 / 1" />
			<ul class="subsystem-list">
				{#each hardwareSubsystems as s (s)}
					<li>{s}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Software Architecture</p>
		<h2>Flight software stack</h2>
		<p class="lede">
			A companion computer runs ROS 2 alongside the PX4 autopilot, bridging sensors and mission
			logic to flight control, and the OpenHD link to the ground station. Gazebo runs the identical
			stack in simulation so autonomy and control code gets flight-tested before it ever touches
			hardware.
		</p>

		<div class="grid grid-2 stack-grid">
			{#each softwareStack as s (s.name)}
				<div class="card stack-item">
					<span class="badge">{s.layer}</span>
					<h3>{s.name}</h3>
					<p>{s.summary}</p>
					<a class="source-link" href={s.url} target="_blank" rel="noopener">
						View source / docs
						<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M7 17L17 7M17 7H9M17 7V15"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			{/each}
		</div>

		<SoftwareFlowDiagram />

		<p class="dev-env"><strong>Dev environment:</strong> {devEnvironment}</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Mission Autonomy Pipeline</p>
		<h2>How the vehicle flies the mission</h2>
		<p class="lede">
			The control code steps through four phases per flight, pulled straight from the team's
			planning whiteboard.
		</p>

		<div class="phase-list">
			{#each autonomyPhases as p (p.phase)}
				<div class="card phase-card">
					<div class="phase-head">
						<span class="gate">{p.phase}</span>
						<h3>{p.title}</h3>
					</div>
					<p>{p.summary}</p>

					{#if p.inputs.length > 0}
						<p class="sub-label">Inputs</p>
						<ul class="phase-inputs">
							{#each p.inputs as i (i)}
								<li>{i}</li>
							{/each}
						</ul>
					{/if}

					<p class="sub-label">Workflow</p>
					<ol class="phase-steps">
						{#each p.steps as s (s)}
							<li>{s}</li>
						{/each}
					</ol>

					{#if p.open}
						<div class="open-note">
							<span class="badge">Open question</span>
							{#each p.open as o (o)}
								<p>{o}</p>
							{/each}
						</div>
					{/if}

					{#if p.title === 'Search, Detect & Deploy'}
						<MediaSlot label="Entry & drop point geometry sketch" kind="diagram" ratio="16 / 9" />
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">SUAS 2027 Requirements</p>
		<h2>Key vehicle requirements</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th scope="col">Requirement</th>
						<th scope="col">Target</th>
					</tr>
				</thead>
				<tbody>
					{#each vehicleSnapshot as r (r.label)}
						<tr>
							<td>{r.label}</td>
							<td>{r.value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="note">
			Full traceability: 91 competition-level requirements flow into 28 system-level and 170
			subsystem-level requirements, tracked internally and refined at each design review.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Mission Timeline</p>
		<h2>Concept of operations</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th scope="col">Phase</th>
						<th scope="col">Mission window</th>
					</tr>
				</thead>
				<tbody>
					{#each conceptOfOps as c (c.phase)}
						<tr>
							<td>{c.phase}</td>
							<td>{c.window}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Scoring</p>
		<h2>How the mission is scored</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr>
						<th scope="col">Task</th>
						<th scope="col">Points</th>
					</tr>
				</thead>
				<tbody>
					{#each scoring as s (s.task)}
						<tr class:total={s.task === 'Mission total'}>
							<td>{s.task}</td>
							<td>{s.points}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Design Review Milestones</p>
		<h2>SRR → PDR → CDR → FRR</h2>
		<div class="grid grid-4 milestone-grid">
			{#each milestones as m (m.gate)}
				<div class="card milestone">
					<span class="gate">{m.gate}</span>
					<p class="date">{m.date}</p>
					<p>{m.focus}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.arch-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
		align-items: center;
		margin-top: 1.5rem;
	}

	@media (max-width: 800px) {
		.arch-grid {
			grid-template-columns: 1fr;
		}
	}

	.subsystem-list {
		display: grid;
		gap: 0.9rem;
		padding-left: 1.2rem;
		font-weight: 600;
		color: var(--blue);
	}

	.stack-grid {
		margin-top: 1.75rem;
	}

	.stack-item h3 {
		margin: 0.6rem 0 0.4rem;
	}

	.stack-item p {
		margin-bottom: 0.75rem;
	}

	.source-link {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--blue-mid);
	}

	.dev-env {
		margin-top: 1.5rem;
		font-size: 0.92rem;
	}

	.dev-env strong {
		color: var(--blue);
	}

	.phase-list {
		margin-top: 1.75rem;
		display: grid;
		gap: 1.5rem;
	}

	.phase-card {
		display: grid;
		gap: 0.4rem;
	}

	.phase-head {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.3rem;
	}

	.phase-head h3 {
		margin: 0;
	}

	.sub-label {
		margin: 0.4rem 0 0.1rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--blue-mid);
	}

	.phase-inputs,
	.phase-steps {
		margin: 0 0 0.5rem;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.4rem;
	}

	.phase-inputs li,
	.phase-steps li {
		color: var(--ink-soft);
	}

	.open-note {
		margin-top: 0.5rem;
		padding: 0.9rem 1rem;
		border: 1px dashed var(--maize-dark);
		border-radius: var(--radius);
		background: #fffaf0;
	}

	.open-note .badge {
		margin-bottom: 0.5rem;
		background: var(--maize);
		border-color: var(--maize-dark);
	}

	.open-note p {
		margin: 0;
		font-size: 0.9rem;
	}

	.phase-card :global(.slot) {
		margin-top: 0.75rem;
	}

	.note {
		margin-top: 1rem;
		font-size: 0.92rem;
	}

	tr.total td {
		font-weight: 800;
		color: var(--blue);
		border-top: 2px solid var(--maize);
	}

	.milestone-grid {
		margin-top: 1.5rem;
	}

	.gate {
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

	.date {
		font-weight: 700;
		color: var(--blue);
		margin-bottom: 0.4rem;
	}
</style>
