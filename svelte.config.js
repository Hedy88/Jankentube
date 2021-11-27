import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()]
		}
	})
};

export default config;
