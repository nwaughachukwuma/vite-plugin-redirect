import type { PluginOption } from 'vite';

const redirect = (redirectMap: Record<string, string>): PluginOption => ({
  name: 'redirect',
  configureServer: (server) => () =>
    server.middlewares.use((req, res, next) => {
      if (!!redirectMap[req.url]) {
        res.statusCode = 302;
        res.setHeader('Location', redirectMap[req.url]);
        res.setHeader('Content-Length', '0');
        res.end();
      } else {
        next();
      }
    })
});

export default redirect;
