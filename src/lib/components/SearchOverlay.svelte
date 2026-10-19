<script>
	import { searchIndex } from '$lib/data/searchIndex.js';

	export let open = false;

	let query = '';

	$: results = query.trim()
		? searchIndex.filter((item) =>
				`${item.title} ${item.keywords}`.toLowerCase().includes(query.trim().toLowerCase())
			)
		: [];

	let inputEl;

	function close() {
		open = false;
		query = '';
	}

	function onKeydown(e) {
		if (e.key === 'Escape') close();
	}

	$: if (open && inputEl) inputEl.focus();
</script>

<svelte:window on:keydown={open ? onKeydown : undefined} />

{#if open}
	<div class="backdrop" on:click={close} role="presentation">
		<div
			class="panel"
			role="dialog"
			aria-modal="true"
			aria-label="Site search"
			on:click|stopPropagation
		>
			<label class="field">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
					<path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
				<input
					type="search"
					placeholder="Search the site…"
					bind:value={query}
					bind:this={inputEl}
				/>
				<button class="close" on:click={close} aria-label="Close search">✕</button>
			</label>

			{#if query.trim()}
				<ul class="results">
					{#each results as r (r.url)}
						<li>
							<a href={r.url} on:click={close}>{r.title}</a>
						</li>
					{:else}
						<li class="empty">No pages match "{query}".</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 20, 40, 0.5);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 10vh 1rem 1rem;
		z-index: 1000;
	}

	.panel {
		background: var(--white);
		width: 100%;
		max-width: 520px;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		overflow: hidden;
	}

	.field {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		padding: 1rem 1.1rem;
		border-bottom: 1px solid var(--line);
		color: var(--ink-soft);
	}

	input {
		flex: 1;
		border: none;
		outline: none;
		font-size: 1rem;
		font-family: inherit;
		color: var(--ink);
	}

	.close {
		border: none;
		background: none;
		cursor: pointer;
		font-size: 0.9rem;
		color: var(--ink-soft);
		padding: 0.25rem;
	}

	.results {
		list-style: none;
		margin: 0;
		padding: 0.5rem;
		max-height: 50vh;
		overflow-y: auto;
	}

	.results li a {
		display: block;
		padding: 0.65rem 0.75rem;
		border-radius: 8px;
		color: var(--ink);
		text-decoration: none;
		font-weight: 600;
	}

	.results li a:hover,
	.results li a:focus-visible {
		background: var(--cream);
	}

	.empty {
		padding: 0.65rem 0.75rem;
		color: var(--ink-soft);
		font-size: 0.9rem;
	}
</style>
