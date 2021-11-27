<script>
	import '../scss/index.scss';
</script>

<header>
	<a href="/"><img class="logo" src="favicon.png" alt="Jankentube logo" /></a>
	<div class="ti-container search-container">
		<input type="text" class="tibox textbox" />
		<button class="btn btn-i btn-ti"><span class="i i-search" /></button>
	</div>
</header>

<slot />
