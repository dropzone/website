import postcssFunctions from 'postcss-functions'
import preprocess from 'svelte-preprocess'
import linearClamp from './postcss-linear-clamp.js'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [
        postcssFunctions({
          functions: { linearClamp },
        }),
      ],
    },
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    trailingSlash: 'always',
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
  },
}

export default config
