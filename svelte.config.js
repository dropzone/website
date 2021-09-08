import postcssFunctions from 'postcss-functions';
import preprocess from 'svelte-preprocess';
import linearClamp from './postcss-linear-clamp.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [
        postcssFunctions({
          functions: { linearClamp }
        })
      ]
    }
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
