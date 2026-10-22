<script>
	import { openSpotlight } from '$lib/stores/spotlight.js';

	export let src;
	export let alt;
	export let caption = '';
	export let klass = '';
	export let desc = '';
	export let date = '';
</script>

<div class="sli-container">
	{#if desc}
		<p class="sli-desc">{desc}</p>
	{/if}
	<figure class="feature-photo {klass}">
	<button
		class="spotlight-trigger"
		type="button"
		on:click={() => openSpotlight(src, alt, caption)}
		aria-label={`Expand image: ${alt}`}
	>
		<img {src} {alt} loading="lazy" />
		<span class="spotlight-hint" aria-hidden="true">Expand ⤢</span>
	</button>
	{#if caption || date}
		<figcaption>
			{caption}{#if date}<span class="sli-date">{date}</span>{/if}
		</figcaption>
	{/if}
</figure>
</div>

<style>
	.sli-container {
		border: 1px solid var(--line);
		background-color: var(--cream);
		border-radius: var(--radius);
		padding: 0.9rem;
		max-width: 640px;
	}
	.sli-desc {
		padding: 0;
		margin: 0 0 0.6rem;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--ink-soft);
	}
	.feature-photo {
		margin: 0;
		border: 1px solid var(--line);
		border-radius: calc(var(--radius) - 6px);
		overflow: hidden;
		background: var(--white);
		max-width: 100%;
	}

	.feature-photo figcaption {
		padding: 0.75rem 1rem;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--blue-mid);
		border-top: 1px solid var(--line);
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.sli-date {
		font-weight: 600;
		color: var(--ink-soft);
		white-space: nowrap;
	}

	.spotlight-trigger {
		display: block;
		width: 100%;
		border: none;
		padding: 0;
		margin: 0;
		background: none;
		cursor: zoom-in;
		position: relative;
	}

	.spotlight-trigger img {
		width: 100%;
		display: block;
	}

	.spotlight-hint {
		position: absolute;
		top: 0.6rem;
		right: 0.6rem;
		background: rgba(0, 20, 40, 0.65);
		color: var(--white);
		font-size: 0.72rem;
		font-weight: 700;
		padding: 0.3rem 0.55rem;
		border-radius: 999px;
		opacity: 0;
		transition: opacity 0.15s ease;
	}

	.spotlight-trigger:hover .spotlight-hint,
	.spotlight-trigger:focus-visible .spotlight-hint {
		opacity: 1;
	}
</style>
