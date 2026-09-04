import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const BUNDLED_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../content');

interface LlmsPage {
  tokens: number,
  type: string,
  url: string,
}

interface LlmsIndex {
  baseUrl: string,
  components: { pages: Record<string, LlmsPage>, slug: string, title: string }[],
  generic: { slug: string, title: string, url: string }[],
  name: string,
  version: string,
}

interface DocSource {
  kind: 'bundled' | 'pinned' | 'project',
  label: string,
  read: (rel: string) => Promise<string>,
}

/* The host project's own copy of the docs ships inside the @ovhcloud/ods-react
   tarball (dist/llms): reading it first guarantees the documentation matches
   the exact ODS version the project uses, with zero network access. */
function findProjectLlms(): string | null {
  let dir = process.cwd();
  for (;;) {
    const candidate = join(dir, 'node_modules', '@ovhcloud', 'ods-react', 'dist', 'llms');
    if (existsSync(join(candidate, 'llms-index.json'))) {
      return candidate;
    }
    const parent = dirname(dir);
    if (parent === dir) {
      return null;
    }
    dir = parent;
  }
}

function resolveDocSource(): DocSource {
  const pinned = process.env.ODS_DOCS_VERSION;
  if (pinned) {
    const base = `https://ovh.github.io/design-system/v${pinned}/llms`;
    return {
      kind: 'pinned',
      label: `ovh.github.io v${pinned} (ODS_DOCS_VERSION)`,
      read: async (rel) => {
        const res = await fetch(`${base}/${rel}`);
        if (!res.ok) {
          throw new Error(`${res.status} on ${base}/${rel}`);
        }
        return res.text();
      },
    };
  }

  const project = findProjectLlms();
  if (project) {
    return {
      kind: 'project',
      label: `project node_modules (${project})`,
      read: (rel) => readFile(join(project, rel), 'utf8'),
    };
  }

  return {
    kind: 'bundled',
    label: 'bundled with @ovhcloud/ods-mcp',
    read: (rel) => readFile(join(BUNDLED_ROOT, 'llms', rel), 'utf8'),
  };
}

const source = resolveDocSource();
let indexCache: LlmsIndex | undefined;
const docCache = new Map<string, string>();

async function getIndex(): Promise<LlmsIndex> {
  indexCache ??= JSON.parse(await source.read('llms-index.json')) as LlmsIndex;
  return indexCache;
}

async function readDoc(url: string): Promise<string> {
  const rel = url.replace(/^\.\//, '');
  let doc = docCache.get(rel);
  if (doc === undefined) {
    doc = await source.read(rel);
    docCache.set(rel, doc);
  }
  return doc;
}

/* Tokens, icons and recipes are not part of the ods-react tarball: they always
   come from the content bundled at build time (same version line as the docs). */
async function readBundledJson<T>(file: string): Promise<T> {
  return JSON.parse(await readFile(join(BUNDLED_ROOT, file), 'utf8')) as T;
}

export {
  getIndex,
  readBundledJson,
  readDoc,
  source,
  type LlmsIndex,
};
