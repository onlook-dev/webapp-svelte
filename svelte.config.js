import adapter from '@sveltejs/adapter-vercel';
import { onlookPreprocess } from '@onlook/svelte';
import path from 'path';

export default {
	preprocess: [
		onlookPreprocess({
			root: path.resolve('.')
		})
	],
	kit: {
		adapter: adapter({ runtime: 'edge' })
	}
};
