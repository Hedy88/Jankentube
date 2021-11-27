<script>
	import { goto } from '$app/navigation';
	import '../scss/index.scss';
	import Logo from '../components/Logo.svelte';
	import Ruler from '../components/Ruler.svelte';
</script>

<header>
	<a href="/"><Logo /></a>
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
		<div class="logo-container">
			<a href="/">
				<Logo large />
			</a>
			<p>© 2021 GatoHopto, LLC</p>
		</div>
		<span class="divider" />
		<div class="links">
			<p class="first">
				<a href="/about">About</a>
				<a href="/press">Press & Blogs</a>
				<a href="/t/copyright">Copyright</a>
				<a href="/creators">Creators & Partners</a>
				<a href="/t/advertising">Advertising</a>
				<a href="/dev">Developers</a>
			</p>
			<p class="second">
				<a href="/t/terms">Terms</a>
				<a href="/t/privacy">Privacy</a>
				<a href="/t/safety">Safety</a>
				<a href="https://github.com/Hedy88/Jankentube/issues/new/choose">Report a bug</a>
			</p>
			<div class="selects">
				<p>Language: <button class="btn btn-text">English</button></p>
				<p>Location: <button class="btn btn-text">Worldwide</button></p>
				<p>Safety: <button class="btn btn-text">Off</button></p>
			</div>
		</div>
	</div>
</footer>
