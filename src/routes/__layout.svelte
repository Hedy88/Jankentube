<script>
	import { goto } from '$app/navigation';
	import '../scss/index.scss';
	import Ruler from '../components/Ruler.svelte';
</script>

<header>
	<a href="/"><img class="logo" src="favicon.png" alt="Jankentube logo" /></a>
	<div class="ti-container search-container">
		<input type="text" class="tibox" />
		<button class="btn btn-i btn-ti"><span class="i i-search" /></button>
	</div>
	<nav>
		<a href="/videos">Browse</a>
		<span class="separator">|</span>
		<a href="/movies">Movies</a>
		<span class="separator">|</span>
		<a href="/upload">Upload</a>
	</nav>
	<div class="right">
		<button
			on:click={() => {
				goto('/sign_in');
			}}
			class="btn btn-text btn-img"><img src="/noaccount.png" alt="" /> Sign In</button
		>
	</div>
</header>

<main>
	<slot />
</main>

<footer>
	<Ruler />
	<div class="content">
		<a href="/">
			<img src="/logo.png" class="flogo" alt="Jankentube logo" />
		</a>
	</div>
</footer>
