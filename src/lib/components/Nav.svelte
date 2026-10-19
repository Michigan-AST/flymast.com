<script>
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import SearchOverlay from './SearchOverlay.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/team', label: 'Team' },
		{ href: '/vehicle', label: 'Vehicle' },
		{ href: '/updates', label: 'Updates' },
		{ href: '/media', label: 'Media' },
		{ href: '/sponsors', label: 'Sponsors' },
		{ href: '/contact', label: 'Contact' }
	];

	let menuOpen = false;
	let searchOpen = false;

	$: path = $page.url.pathname;
</script>

<header class="nav">
	<div class="container bar">
		<a class="brand" href="/">
			<Logo size={38} />
		</a>

		<nav aria-label="Primary" class:open={menuOpen}>
			<ul>
				{#each links as link (link.href)}
					<li>
						<a
							href={link.href}
							aria-current={path === link.href ? 'page' : undefined}
							on:click={() => (menuOpen = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="actions">
			<button class="icon-btn" aria-label="Search the site" on:click={() => (searchOpen = true)}>
				<svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
					<path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
			<button
				class="icon-btn menu-toggle"
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
				on:click={() => (menuOpen = !menuOpen)}
			>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		</div>
	</div>
</header>

<SearchOverlay bind:open={searchOpen} />

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--blue);
		border-bottom: 3px solid var(--maize);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-top: 0.85rem;
		padding-bottom: 0.85rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--white);
		text-decoration: none;
		font-weight: 800;
		font-size: 1.15rem;
		letter-spacing: 0.04em;
	}

	nav ul {
		list-style: none;
		display: flex;
		gap: 1.6rem;
		margin: 0;
		padding: 0;
	}

	nav a {
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		padding: 0.3rem 0.1rem;
		border-bottom: 2px solid transparent;
	}

	nav a:hover {
		color: var(--white);
	}

	nav a[aria-current='page'] {
		color: var(--white);
		border-bottom-color: var(--maize);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.icon-btn {
		background: transparent;
		border: none;
		color: var(--white);
		padding: 0.4rem;
		border-radius: 8px;
		cursor: pointer;
		display: inline-flex;
	}

	.icon-btn:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	.menu-toggle {
		display: none;
	}

	@media (max-width: 820px) {
		.menu-toggle {
			display: inline-flex;
		}

		nav {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--blue);
			border-bottom: 3px solid var(--maize);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.2s ease;
		}

		nav.open {
			max-height: 420px;
		}

		nav ul {
			flex-direction: column;
			gap: 0;
			padding: 0.5rem 1.5rem 1.25rem;
		}

		nav li {
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}

		nav a {
			display: block;
			padding: 0.85rem 0;
		}
	}
</style>
