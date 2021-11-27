<script>
	import '../scss/index.scss';
</script>

<header>
	<a href="/"><img class="logo" src="favicon.png" alt="Jankentube logo" /></a>
	<div class="ti-container search-container">
		<input type="text" class="tibox textbox" />
		<button class="btn btn-i btn-ti"><span class="i i-search" /></button>
	</div>
	<nav>
		<a href="/browser">Browse</a>
		<span class="separator">|</span>
		<a href="/movies">Movies</a>
		<span class="separator">|</span>
		<a href="/upload">Upload</a>
	</nav>
	<div class="right">
		<button class="btn btn-text">Sign in</button>
	</div>
</header>
<main>
	<slot />
</main>
