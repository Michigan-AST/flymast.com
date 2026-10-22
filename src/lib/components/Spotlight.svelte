<script>
	import { spotlightImage, closeSpotlight } from '$lib/stores/spotlight.js';

	let status = '';
	let statusTimer;

	function flash(message) {
		status = message;
		clearTimeout(statusTimer);
		statusTimer = setTimeout(() => (status = ''), 2000);
	}

	function filenameFrom(src) {
		return src.split('/').pop() || 'image.png';
	}

	async function download(img) {
		try {
			const res = await fetch(img.src);
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = filenameFrom(img.src);
			document.body.appendChild(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(url);
		} catch {
			flash('Download failed');
		}
	}

	async function copy(img) {
		try {
			const res = await fetch(img.src);
			const blob = await res.blob();
			await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
			flash('Copied to clipboard');
		} catch {
			flash('Copy not supported here');
		}
	}

	function onKeydown(e) {
		if (e.key === 'Escape') closeSpotlight();
	}
</script>

<svelte:window on:keydown={$spotlightImage ? onKeydown : undefined} />

{#if $spotlightImage}
	<div class="backdrop" on:click={closeSpotlight} role="presentation">
		<div
			class="panel"
			role="dialog"
			aria-modal="true"
			aria-label={$spotlightImage.alt}
			on:click|stopPropagation
		>
			<div class="toolbar">
				{#if status}<span class="status">{status}</span>{/if}
				<button class="tool" on:click={() => copy($spotlightImage)} aria-label="Copy image">
					Copy
				</button>
				<button class="tool" on:click={() => download($spotlightImage)} aria-label="Download image">
					Download
				</button>
				<button class="tool close" on:click={closeSpotlight} aria-label="Close">✕</button>
			</div>
			<img src={$spotlightImage.src} alt={$spotlightImage.alt} />
			{#if $spotlightImage.caption}
				<p class="caption">{$spotlightImage.caption}</p>
			{/if}
		</div>
	</div>
{/if}

<style>
	.backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 10, 20, 0.82);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem 1rem;
		z-index: 1100;
	}

	.panel {
		position: relative;
		max-width: min(90vw, 1000px);
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.panel img {
		max-width: 100%;
		max-height: 75vh;
		border-radius: var(--radius);
		box-shadow: var(--shadow);
		display: block;
	}

	.toolbar {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
		align-self: flex-end;
	}

	.status {
		font-size: 0.8rem;
		color: var(--maize);
		font-weight: 700;
		margin-right: 0.25rem;
	}

	.tool {
		border: 1px solid rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.08);
		color: var(--white);
		border-radius: 8px;
		padding: 0.4rem 0.8rem;
		font-size: 0.8rem;
		font-weight: 700;
		font-family: inherit;
		cursor: pointer;
	}

	.tool:hover,
	.tool:focus-visible {
		background: rgba(255, 255, 255, 0.18);
	}

	.tool.close {
		padding: 0.4rem 0.6rem;
	}

	.caption {
		margin: 0.9rem 0 0;
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.85rem;
		font-weight: 600;
		text-align: center;
	}
</style>
