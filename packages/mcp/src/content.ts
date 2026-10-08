import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const BUNDLED_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../content');
const FETCH_TIMEOUT_MS = 10_000;

interface LlmsPage {
  tokens: number,
  type: string,
  url: string,
}

interface LlmsIndex {
  baseUrl: string,
  components: { pages: Record<string, LlmsPage>, slug: string, title: string }[],
  generic: { slug: string, title: string, type: string, url: string }[],
  name: string,
  version: string,
}

interface DocSource {
  kind: 'bundled' | 'pinned' | 'project',
  label: string,
  read: (rel: string) => Promise<string>,
}

/* Validated at startup: a typo in the variable must stop the server with a clear
   message instead of surfacing later as an obscure 404 on every tool call. */
function readPinnedVersion(): string | undefined {
  const pinned = process.env.ODS_DOCS_VERSION?.trim();
  if (!pinned) {
    return undefined;
  }
  if (!/^\d+\.\d+\.\d+$/.test(pinned)) {
    console.error(`ods-mcp: invalid ODS_DOCS_VERSION "${pinned}": expected an exact release version such as 20.0.0 (no "v" prefix, no range). Unset it to use your project's or the bundled documentation.`);
    process.exit(1);
  }
  return pinned;
}

/* The host project's own copy of the docs ships inside the @ovhcloud/ods-react
   tarball (dist/llms): reading it guarantees the documentation matches the
   exact ODS version the project uses, with zero network access.
   No published release up to 19.7.x contains dist/llms (it ships from the first
   docs-platform release onward): for those, the walk finds nothing and the
   bundled snapshot is used.
   The walk starts from ODS_PROJECT_DIR, then CLAUDE_PROJECT_DIR (set by Claude
   Code), then the working directory: some clients spawn the server from their
   own directory rather than from the project. */
function findProjectLlms(): string | null {
  let dir = resolve(process.env.ODS_PROJECT_DIR ?? process.env.CLAUDE_PROJECT_DIR ?? process.cwd());
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

const bundledSource: DocSource = {
  kind: 'bundled',
  label: 'bundled with @ovhcloud/ods-mcp',
  read: (rel) => readFile(join(BUNDLED_ROOT, 'llms', rel), 'utf8'),
};

function resolveDocSource(): DocSource {
  // An explicit ODS_DOCS_VERSION wins over the project copy: a deliberate
  // configuration must never be silently overridden by whatever is installed.
  const pinned = readPinnedVersion();
  if (pinned) {
    const base = `https://ovh.github.io/design-system/v${pinned}/llms`;
    return {
      kind: 'pinned',
      label: `ovh.github.io v${pinned} (ODS_DOCS_VERSION)`,
      read: async(rel): Promise<string> => {
        const res = await fetch(`${base}/${rel}`, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} on ${base}/${rel}`);
        }
        return res.text();
      },
    };
  }

  const project = findProjectLlms();
  if (project) {
    // The full path stays in the server log: answers never carry a local path.
    console.error(`ods-mcp: reading the project documentation from ${project}`);
    return {
      kind: 'project',
      label: 'project node_modules (@ovhcloud/ods-react/dist/llms)',
      read: (rel) => readFile(join(project, rel), 'utf8'),
    };
  }

  return bundledSource;
}

/* The configured source never changes; the active one falls back to the
   bundled snapshot when a pinned version cannot be served (see loadIndex). */
const configuredSource = resolveDocSource();
let activeSource = configuredSource;
let fallbackNotice: string | undefined;

// Promises are cached, rejections included: a failure is not retried on every call.
let indexPromise: Promise<LlmsIndex> | undefined;
const docCache = new Map<string, Promise<string>>();

async function loadIndex(): Promise<LlmsIndex> {
  try {
    return JSON.parse(await configuredSource.read('llms-index.json')) as LlmsIndex;
  } catch (error) {
    if (configuredSource.kind !== 'pinned') {
      throw error;
    }
    const version = process.env.ODS_DOCS_VERSION?.trim();
    fallbackNotice = /HTTP 404/.test(String(error))
      ? `ODS_DOCS_VERSION=${version} has no docs-platform documentation set; unset ODS_DOCS_VERSION, or pin a release published with the docs platform`
      : `ODS_DOCS_VERSION=${version} could not be fetched (${error instanceof Error ? error.message : String(error)})`;
    console.error(`ods-mcp: ${fallbackNotice}. Serving the bundled snapshot instead.`);
    activeSource = bundledSource;
    return JSON.parse(await bundledSource.read('llms-index.json')) as LlmsIndex;
  }
}

function getIndex(): Promise<LlmsIndex> {
  indexPromise ??= loadIndex();
  return indexPromise;
}

async function readDoc(url: string): Promise<string> {
  // Loading the index settles the active source (pinned or its bundled fallback).
  await getIndex();
  const rel = url.replace(/^\.\//, '');
  let doc = docCache.get(rel);
  if (doc === undefined) {
    doc = activeSource.read(rel);
    docCache.set(rel, doc);
  }
  return doc;
}

/* Provenance line content, prefixed to every page answer. */
function sourceLabel(): string {
  return fallbackNotice
    ? `${activeSource.label} — fallback: ${fallbackNotice}`
    : activeSource.label;
}

function sourceKind(): DocSource['kind'] {
  return activeSource.kind;
}

/* Tokens, icons and recipes are not part of the ods-react tarball: they always
   come from the content bundled at build time (same version line as the docs). */
async function readBundledJson<T>(file: string): Promise<T> {
  return JSON.parse(await readFile(join(BUNDLED_ROOT, file), 'utf8')) as T;
}

export {
  configuredSource,
  getIndex,
  readBundledJson,
  readDoc,
  sourceKind,
  sourceLabel,
};
