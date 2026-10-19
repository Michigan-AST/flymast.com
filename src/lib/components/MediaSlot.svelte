<script>
	// Styled placeholder for media that hasn't been shot/produced yet, presented
	// as a technical "figure" card rather than a missing-asset box. Once real
	// media exists, replace the usage with a plain <img>/<video>/<iframe>.
	export let label = 'Figure';
	export let kind = 'image'; // 'image' | 'video' | 'diagram'
	export let ratio = '16 / 9';
</script>

<figure class="slot" style="aspect-ratio: {ratio}" role="img" aria-label={label}>
	<div class="grid-bg" aria-hidden="true"></div>
	<span class="corner tl" aria-hidden="true"></span>
	<span class="corner tr" aria-hidden="true"></span>
	<span class="corner bl" aria-hidden="true"></span>
	<span class="corner br" aria-hidden="true"></span>

	<div class="mark" aria-hidden="true">
		{#if kind === 'video'}
			<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
				<circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6" />
				<path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
			</svg>
		{:else if kind === 'diagram'}
			<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
				<rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" />
				<rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" />
				<rect x="8.5" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.6" />
				<path
					d="M6.5 10V12.5C6.5 13.6 7.4 14.5 8.5 14.5M17.5 10V12.5C17.5 13.6 16.6 14.5 15.5 14.5"
					stroke="currentColor"
					stroke-width="1.6"
				/>
			</svg>
		{:else}
			<svg width="30" height="30" viewBox="0 0 24 24" fill="none">
				<path
					d="M12 2.5L13.4 9.2L20.5 9.8L14.6 13.2L16.4 20L12 15.7L7.6 20L9.4 13.2L3.5 9.8L10.6 9.2L12 2.5Z"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
	</div>

	<figcaption>{label}</figcaption>
</figure>

<style>
	.slot {
		position: relative;
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		background: var(--white);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		color: var(--blue);
		text-align: center;
		padding: 1.25rem;
		overflow: hidden;
	}

	.grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 22px 22px;
		opacity: 0.55;
		mask-image: radial-gradient(ellipse at center, black 35%, transparent 78%);
	}

	.corner {
		position: absolute;
		width: 14px;
		height: 14px;
		border: 2px solid var(--maize-dark);
		opacity: 0.8;
	}

	.corner.tl {
		top: 10px;
		left: 10px;
		border-right: none;
		border-bottom: none;
	}

	.corner.tr {
		top: 10px;
		right: 10px;
		border-left: none;
		border-bottom: none;
	}

	.corner.bl {
		bottom: 10px;
		left: 10px;
		border-right: none;
		border-top: none;
	}

	.corner.br {
		bottom: 10px;
		right: 10px;
		border-left: none;
		border-top: none;
	}

	.mark {
		position: relative;
		z-index: 1;
		width: 54px;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: var(--blue);
		color: var(--maize);
		flex-shrink: 0;
	}

	figcaption {
		position: relative;
		z-index: 1;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--blue-mid);
		max-width: 24ch;
	}
</style>
