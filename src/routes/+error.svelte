<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} — MAST</title>
</svelte:head>

<section class="section">
	<div class="container error">
		<p class="eyebrow">{$page.status}</p>
		<h1>{$page.status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		<p class="lede">
			{$page.status === 404
				? "The page you're looking for doesn't exist."
				: ($page.error?.message ?? 'An unexpected error occurred.')}
		</p>
		<a class="btn btn-maize" href="/">Back to home</a>
	</div>
</section>

<style>
	.error {
		padding: 4rem 0;
		text-align: center;
	}

	.error h1 {
		margin-bottom: 1rem;
	}

	.error .lede {
		margin: 0 auto 2rem;
	}
</style>
