<script>
	const email = 'gbender@umich.edu';
	const pr_email = 'lbeeter@umich.edu';
</script>

<svelte:head>
	<title>Contact — MAST</title>
	<meta
		name="description"
		content="Get in touch with the Michigan Autonomous Security Team: join the team, sponsor the project, or ask a question."
	/>
</svelte:head>

<section class="section-navy hero">
	<div class="container">
		<p class="eyebrow" style="color: var(--maize)">Contact</p>
		<h1>Let's talk</h1>
		<p class="lede" style="color: rgba(255,255,255,0.85)">
			Whether you want to join MAST, sponsor the aircraft, or just ask a question, we'd love
			to hear from you.
		</p>
	</div>
</section>

<section class="section">
	<div class="container grid grid-2 contact-grid">
		<div class="card">
			<h3>Join the team</h3>
			<p>
				MAST welcomes students across engineering and business. Hardware, Software, and
				Business &amp; Operations sub-teams are all recruiting. No prior drone experience
				required.
			</p>
			<a class="btn btn-maize" href="mailto:{email}?subject=Interested%20in%20joining%20MAST">
				Email us to join
			</a>
		</div>

		<div class="card">
			<h3>Sponsor the project</h3>
			<p>
				MAST is entirely student-funded. If your organization is interested in supporting an
				autonomous aircraft built by University of Michigan students, we'd love to talk.
			</p>
			<a class="btn btn-outline" href="mailto:{pr_email}?subject=Sponsorship%20inquiry">
				Email us about sponsorship
			</a>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="eyebrow">General Contact</p>
		<h2>Reach the team</h2>
		<p class="lede">
			<a href="mailto:{email}">{email}</a>
		</p>
		<p class="lede">University of Michigan · Ann Arbor, Michigan</p>
	</div>
</section>

<style>
	.hero {
		padding: 3.5rem 0;
	}

	.contact-grid {
		align-items: stretch;
	}

	.contact-grid .card {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.contact-grid .btn {
		margin-top: auto;
		align-self: flex-start;
	}
</style>
