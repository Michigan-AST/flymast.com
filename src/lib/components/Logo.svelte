<script>
	export let size = 36;
</script>

<span class="chip" style="height: {size}px">
	<img src="/logo-transparent.png" alt="MAST — Michigan Autonomous Security Team" style="height: {size - 8}px" />
</span>

<style>
	.chip {
		display: inline-flex;
		align-items: center;
		padding: 0 0.4rem;
		background: var(--white);
		border-radius: 6px;
	}

	img {
		display: block;
		width: auto;
	}
</style>
