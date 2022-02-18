import redirect from 'vite-plugin-redirect';

const base = '/admin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base
    },
    vite: {
      plugins: [redirect({ '/': base })]
    }
  }
};

export default config;
