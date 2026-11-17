// GitHub Pages semantics: static files, index.html for directories, and the
// site's 404.html (served with a 404 status) for anything unknown — the
// exact behavior the deployed docs live under, deep-link bounce included, and
// gzip like GitHub Pages, so that timings measured against it are realistic.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { gzipSync } from 'node:zlib';

const MIME = {
  '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.txt': 'text/plain', '.woff2': 'font/woff2',
};

function serveSite(root, port) {
  return new Promise((resolveStarted) => {
    const server = createServer(async (req, res) => {
      const url = new URL(req.url, 'http://x');
      let filePath = normalize(join(root, decodeURIComponent(url.pathname)));
      if (!filePath.startsWith(root)) {
        res.writeHead(403).end();
        return;
      }
      try {
        if ((await stat(filePath)).isDirectory()) {
          if (!url.pathname.endsWith('/')) {
            res.writeHead(301, { location: `${url.pathname}/` }).end();
            return;
          }
          filePath = join(filePath, 'index.html');
        }
        const body = await readFile(filePath);
        const type = MIME[extname(filePath)] ?? 'application/octet-stream';
        if (/\bgzip\b/.test(req.headers['accept-encoding'] ?? '') && /^(text|application\/json|image\/svg)/.test(type)) {
          res.writeHead(200, { 'content-encoding': 'gzip', 'content-type': type }).end(gzipSync(body));
          return;
        }
        res.writeHead(200, { 'content-type': type }).end(body);
      } catch {
        try {
          res.writeHead(404, { 'content-type': 'text/html' }).end(await readFile(join(root, 'design-system', '404.html')));
        } catch {
          res.writeHead(404).end('not found');
        }
      }
    });
    server.listen(port, () => resolveStarted(server));
  });
}

export { serveSite };
