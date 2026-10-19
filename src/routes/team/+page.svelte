<script>
	import { advisor, leads, members, subteams } from '$lib/data/team.js';

	function initials(name) {
		return name
			.split(' ')
			.map((p) => p[0])
			.filter(Boolean)
			.slice(0, 2)
			.join('')
			.toUpperCase();
	}

	function rosterFor(team) {
		return [...leads.filter((l) => l.team === team), ...members.filter((m) => m.team === team)];
	}
</script>

<svelte:head>
	<title>Team — MAST</title>
	<meta
		name="description"
		content="Meet the Michigan Autonomous Security Team: leadership, faculty advisor, and the hardware, software, and business sub-teams."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">Team Overview</p>
		<h1>The people behind MAST</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			A student-run engineering team at the University of Michigan, spanning Computer Science,
			Aerospace, Electrical, and Business, all working toward one autonomous aircraft.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">Faculty Advisor</p>
		<div class="advisor-card card">
			{#if advisor.photo}
				<img class="avatar-photo large" src={advisor.photo} alt={advisor.name} />
			{:else}
				<div class="avatar large">{initials(advisor.name)}</div>
			{/if}
			<div>
				<h3>{advisor.name}</h3>
				<p>{advisor.role}</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">Leadership</p>
		<h2>Team Leads</h2>
		<div class="grid grid-2 leads-grid">
			{#each leads as person (person.name)}
				<div class="card lead-card">
					{#if person.photo}
						<img class="avatar-photo large" src={person.photo} alt={person.name} />
					{:else}
						<div class="avatar large">{initials(person.name)}</div>
					{/if}
					<div>
						<span class="badge">{person.team}</span>
						<h3>{person.name}</h3>
						<p class="role">{person.role}</p>
						<p class="meta">{person.hometown} · {person.year}</p>
						<p>{person.focus}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<p class="eyebrow">General Members</p>
		<h2>Hardware, Software &amp; Business Teams</h2>
		<p class="lede">The hardware, software, and business sub-teams, organized by group.</p>

		{#each subteams as team (team)}
			<div class="subteam">
				<h3>{team}</h3>
				{#if rosterFor(team).length === 0}
					<div class="empty-roster">
						<span class="mark" aria-hidden="true">
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
								<circle cx="12" cy="8.5" r="3.5" stroke="currentColor" stroke-width="1.6" />
								<path
									d="M5 19c0-3.5 3-6 7-6s7 2.5 7 6"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
								/>
							</svg>
						</span>
						<p>
							Roster for the {team} team is growing. Names, majors, and years are added here as
							members opt in.
						</p>
					</div>
				{:else}
					<div class="grid grid-4">
						{#each rosterFor(team) as m (m.name)}
							<div class="card member-card">
								{#if m.photo}
									<img class="avatar-photo" src={m.photo} alt={m.name} />
								{:else}
									<div class="avatar">{initials(m.name)}</div>
								{/if}
								<h4>{m.name}</h4>
								{#if m.role}
									<p class="meta">{m.role}</p>
								{:else if m.major || m.year}
									<p class="meta">{[m.major, m.year].filter(Boolean).join(' · ')}</p>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.advisor-card {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		max-width: 480px;
	}

	.avatar {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: var(--blue);
		color: var(--maize);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.avatar.large {
		width: 72px;
		height: 72px;
		font-size: 1.3rem;
	}

	.avatar-photo {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.avatar-photo.large {
		width: 72px;
		height: 72px;
	}

	.leads-grid {
		margin-top: 1.5rem;
	}

	.lead-card {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
	}

	.lead-card h3 {
		margin: 0.4rem 0 0.1rem;
	}

	.role {
		color: var(--blue-mid);
		font-weight: 700;
		margin-bottom: 0.2rem;
	}

	.meta {
		font-size: 0.85rem;
		color: var(--ink-soft);
		margin-bottom: 0.5rem;
	}

	.subteam {
		margin-top: 2.5rem;
	}

	.empty-roster {
		display: flex;
		align-items: center;
		gap: 1rem;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 1.5rem;
		background: var(--white);
	}

	.empty-roster .mark {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--cream);
		color: var(--blue);
		flex-shrink: 0;
	}

	.empty-roster p {
		margin: 0;
	}

	.member-card {
		text-align: center;
		padding: 1.25rem;
	}

	.member-card .avatar,
	.member-card .avatar-photo {
		margin: 0 auto 0.75rem;
	}

	.member-card h4 {
		margin: 0 0 0.25rem;
	}
</style>
