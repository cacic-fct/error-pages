<script lang="ts">
	import mouse from '$lib/mouse.avif';
</script>

<div class="container">
	<img class="mouse" src={mouse} alt="Ratinho apagando um incêncio em um computador" />

	<slot />

	<footer>
		<p class="footnote">
			<a href="https://cacic.dev.br/docs">CACiC Docs</a>
			•
			<a href="https://status.cacic.dev.br">Status Page</a>
		</p>
	</footer>
</div>

<style>
	.container {
		max-width: 860px;
	}

	.mouse {
		max-width: 400px;
		width: 100%;
		display: block;
		margin: 0 auto;
	}
	.footnote {
		font-size: 0.8rem;
		font-weight: 300;
		margin-top: 2rem;
	}

	.footnote a {
		/* no link clicked decoration */
		color: #000;
		text-decoration: none;
	}

	.footnote a:hover {
		text-decoration: underline;
	}

	footer {
		padding: 1rem;
		text-align: center;
	}
</style>
