import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { type Plugin } from 'vite';

const here = dirname(fileURLToPath(import.meta.url));

/* Files the guides offer to download, served at a fixed path of the deploy root (where
   <DownloadLink> points): published path → source in the workspace. A fixed path, not a hashed
   asset, so that the llms output and a curl can name it too. */
const DOWNLOADS: Record<string, { source: string, type: string }> = {
  'tailwind/ods-tailwind.theme.css': {
    source: resolve(here, '../tailwind/theme.css'),
    type: 'text/css; charset=utf-8',
  },
  'tailwind/ods-tailwind.preset.cjs': {
    source: resolve(here, '../tailwind/ods-tailwind.preset.cjs'),
    type: 'text/javascript; charset=utf-8',
  },
};

function downloads(): Plugin {
  return {
    name: 'ods-docs:downloads',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const file = (req.url ?? '').split('?')[0].slice(1);
        if (!Object.hasOwn(DOWNLOADS, file)) {
          next();
          return;
        }
        res.setHeader('Content-Type', DOWNLOADS[file].type);
        res.end(readFileSync(DOWNLOADS[file].source, 'utf8'));
      });
    },
    generateBundle() {
      for (const [fileName, { source }] of Object.entries(DOWNLOADS)) {
        this.emitFile({ fileName, source: readFileSync(source, 'utf8'), type: 'asset' });
      }
    },
  };
}

export { downloads };
