# vite-plugin-redirect

Redirects server requests based on given redirect map. Useful when using SvelteKit with custom base path.

Example:

```js
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
```
