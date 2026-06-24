#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

const { version } = require('../../../lerna.json');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SUMMARY_FILENAME = 'llms.txt';
const SUMMARY_PATH = path.join(DIST_DIR, SUMMARY_FILENAME);
const LLMS_DIR = path.join(DIST_DIR, 'llms');
const ASSETS_LLMS_DIR = path.join(__dirname, '..', 'assets', 'llms');
const DIST_LLMS_DIR = LLMS_DIR;
const COMPONENTS_INDEX_FILENAME = 'ods-components-index.txt';
const GENERIC_INDEX_FILENAME = 'ods-generic-index.txt';
const INDEX_JSON_FILENAME = 'llms-index.json';
const FULL_DOC_FILENAME = 'llms-full.txt';
const BASE_URL = `https://ovh.github.io/design-system/v${version}`;
const COMPONENTS_CATEGORY = {
  filename: 'ods-documentation-components.txt',
  title: 'Components',
  description: 'Documentation for all React components in OVHcloud Design System.',
  pattern: /^react-components-/,
};

const GENERIC_CATEGORY = {
  filename: 'ods-documentation-generic.txt',
  title: 'Generic Documentation',
  description: 'Documentation for design tokens, styling, theming, guides, tools, and general information about OVHcloud Design System.',
  pattern: /^(?!react-components-).*/,
};

async function exists(filepath) {
  try {
    await fs.access(filepath);
    return true;
  } catch {
    return false;
  }
}

const EXCLUDE_PATTERNS = [
  /^ovhcloud-design-system-ai-agents-/,
  /^ovhcloud-design-system-tools-/,
  /^ovhcloud-design-system-what-s-new-changelog/,
  /-gallery\.txt$/,
];

// Files produced by this script and copied back into LLMS_DIR. They must never
// be read back as source, otherwise each run re-ingests its own output and the
// aggregates grow without bound (the full doc gets folded into the generic
// category, which then contains the full doc, ...). Excluding them by exact
// name keeps the post-processing idempotent: running it N times yields the
// same output, so the build stays fully automated with no manual cleanup.
const GENERATED_FILENAMES = new Set([
  SUMMARY_FILENAME,
  FULL_DOC_FILENAME,
  COMPONENTS_INDEX_FILENAME,
  GENERIC_INDEX_FILENAME,
  INDEX_JSON_FILENAME,
  COMPONENTS_CATEGORY.filename,
  GENERIC_CATEGORY.filename,
]);

function shouldExcludeFile(filename) {
  if (GENERATED_FILENAMES.has(filename)) {
    return true;
  }

  return EXCLUDE_PATTERNS.some(pattern => pattern.test(filename));
}

// Delete any aggregate left over from a previous run before regenerating, in
// every directory we publish to. Without this, a category that becomes empty
// (e.g. a partial extraction) would keep serving a stale aggregate, since the
// write/copy steps are guarded by `length > 0`. Combined with the exclusion
// above, the whole pipeline stays self-correcting and needs no manual cleanup.
async function removeStaleGeneratedFiles() {
  const targetDirs = [DIST_DIR, LLMS_DIR, ASSETS_LLMS_DIR];

  await Promise.all(
    targetDirs.flatMap((dir) =>
      [...GENERATED_FILENAMES].map(async (filename) => {
        try {
          await fs.rm(path.join(dir, filename));
        } catch {
          // Missing file is fine — nothing to clean up.
        }
      }),
    ),
  );
}

async function readAllDocs() {
  const files = await fs.readdir(LLMS_DIR);
  const txtFiles = files
    .filter((file) => file.endsWith('.txt'))
    .filter((file) => !shouldExcludeFile(file))
    .sort();

  const docs = [];

  for (const file of txtFiles) {
    const absolutePath = path.join(LLMS_DIR, file);
    const raw = (await fs.readFile(absolutePath, 'utf8')).trim();

    if (!raw) {
      continue;
    }

    docs.push(parseDoc(file, raw));
  }

  return docs;
}

// Rough token estimate (~4 characters per token). Good enough to let an agent
// budget context before fetching a file; not meant to match a tokenizer exactly.
function estimateTokens(text) {
  return Math.ceil((text || '').length / 4);
}

// Build the structured metadata + content for a single extracted file. The
// extractor prefixes each file with its Storybook category line (e.g.
// "React Components") before the real "# Title" heading, so we locate the H1
// to get a meaningful title (instead of the category) and drop the preamble.
function parseDoc(file, raw) {
  const stem = file.replace(/\.txt$/, '');
  const isComponent = COMPONENTS_CATEGORY.pattern.test(file);

  let type = 'overview';
  if (/--technical-information$/.test(stem)) {
    type = 'technical-information';
  } else if (/--documentation$/.test(stem)) {
    type = 'documentation';
  }

  let slug;
  if (isComponent) {
    const match = stem.match(/^react-components-(.+?)(?:--(?:documentation|technical-information))?$/);
    slug = match ? match[1] : stem;
  } else {
    slug = stem.replace(/--(?:documentation|technical-information)$/, '');
  }

  const lines = raw.split('\n');
  const h1Index = lines.findIndex((line) => /^#\s+/.test(line));

  let title;
  let body;
  if (h1Index !== -1) {
    title = lines[h1Index].replace(/^[#\s]+/, '').trim();
    body = lines.slice(h1Index + 1).join('\n').trim();
  } else {
    // No usable H1: keep the whole content as body and derive the title below.
    title = '';
    body = raw;
  }

  // Fall back to a slug-derived title when the page has no usable heading: some
  // auto-generated pages start straight with content (e.g. a changelog link
  // table) or a long tagline. Done before the path trim below so those link
  // blobs (which contain "/") don't get mistaken for a Storybook nav path.
  if (!title || title.length > 80 || title.includes('](')) {
    title = humanizeSlug(slug.replace(/^ovhcloud-design-system-/, '') || slug);
  }

  // Overview pages keep the full Storybook nav path as their H1
  // (e.g. "React Components/Button", "Helpers/formatPrice"); keep only the leaf
  // so overview titles match their documentation/technical counterparts.
  if (title.includes('/')) {
    title = title.split('/').pop().trim();
  }

  const content = body.length > 0 ? body : null;

  return {
    file,
    slug,
    type,
    category: isComponent ? 'component' : 'generic',
    heading: title,
    title,
    content,
    tokens: estimateTokens(`# ${title}\n\n${content || ''}`),
  };
}

// YAML front-matter block shared by individual files and aggregate sections.
// Keeps each documentation chunk self-describing: an LLM knows which component,
// version and page kind it is reading, and can cite the canonical source URL.
function buildFrontMatter(doc) {
  return [
    '---',
    `title: ${JSON.stringify(doc.title)}`,
    `slug: ${doc.slug}`,
    `category: ${doc.category}`,
    `type: ${doc.type}`,
    `version: ${version}`,
    `tokens: ${doc.tokens}`,
    `source: ${BASE_URL}/llms/${doc.file}`,
    '---',
  ].join('\n');
}

// A self-contained individual file: front-matter, then the cleaned content
// (the redundant Storybook category preamble is dropped).
function buildIndividualFile(doc) {
  const parts = [buildFrontMatter(doc), '', `# ${doc.title}`];
  if (doc.content) {
    parts.push('', doc.content);
  }
  return `${parts.join('\n')}\n`;
}

// A section inside an aggregate: navigable "## Title" heading followed by the
// same front-matter, so per-component metadata survives concatenation.
function buildAggregateSection(doc) {
  const parts = [`## ${doc.heading}`, '', buildFrontMatter(doc)];
  if (doc.content) {
    parts.push('', doc.content);
  }
  return parts.join('\n');
}

function categorizeDocs(docs) {
  const components = [];
  const generic = [];

  for (const doc of docs) {
    if (COMPONENTS_CATEGORY.pattern.test(doc.file)) {
      components.push(doc);
    } else {
      generic.push(doc);
    }
  }

  return { components, generic };
}

function buildCategoryDoc(category, docs, title) {
  const lines = [
    `# OVHcloud Design System - ${title}`,
    '',
    category.description,
    '',
  ];

  for (const doc of docs) {
    lines.push(buildAggregateSection(doc));
    lines.push('');
  }

  while (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return `${lines.join('\n')}\n`;
}

function buildFullDoc(allDocs) {
  const lines = [
    '# OVHcloud Design System - Complete Documentation',
    '',
    '> OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.',
    '',
    'This document contains the complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools.',
    '',
  ];

  for (const doc of allDocs) {
    lines.push(buildAggregateSection(doc));
    lines.push('');
  }

  // Remove trailing blank lines
  while (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return `${lines.join('\n')}\n`;
}

function humanizeSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Relative link used between llms files. It resolves to the sibling file both
// locally (integrators reading the files shipped in their node_modules) and on
// the web (within the versioned /v<version>/llms/ path), so links stay
// version-correct everywhere without hard-coding an absolute host.
function relUrl(file) {
  return `./${file}`;
}

// Group component docs by their slug, attaching the overview / documentation /
// technical-information doc objects. Shared by the markdown and JSON indexes.
function groupComponentsBySlug(componentDocs) {
  const grouped = new Map();

  for (const doc of componentDocs) {
    const match = doc.file.match(/^react-components-(.+?)(?:--(documentation|technical-information))?\.txt$/);
    if (!match) {
      continue;
    }

    const [, slug, subpage] = match;
    if (!grouped.has(slug)) {
      grouped.set(slug, { slug, docs: {} });
    }

    grouped.get(slug).docs[subpage || 'overview'] = doc;
  }

  return [...grouped.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

function buildComponentsIndex(componentDocs) {
  const lines = [
    '# OVHcloud Design System - Components Index',
    '',
    '> Individual component documentation files for targeted LLM context.',
    '> Use these files to provide only the documentation you need, instead of the full documentation.',
    '',
  ];

  for (const entry of groupComponentsBySlug(componentDocs)) {
    lines.push(`## ${humanizeSlug(entry.slug)}`);
    lines.push('');
    if (entry.docs.overview) {
      lines.push(`- [Overview](${relUrl(entry.docs.overview.file)}) (~${entry.docs.overview.tokens} tokens)`);
    }
    if (entry.docs.documentation) {
      lines.push(`- [Documentation](${relUrl(entry.docs.documentation.file)}) (~${entry.docs.documentation.tokens} tokens)`);
    }
    if (entry.docs['technical-information']) {
      lines.push(`- [Technical Information](${relUrl(entry.docs['technical-information'].file)}) (~${entry.docs['technical-information'].tokens} tokens)`);
    }
    lines.push('');
  }

  while (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return `${lines.join('\n')}\n`;
}

function buildGenericIndex(genericDocs) {
  const lines = [
    '# OVHcloud Design System - Generic Documentation Index',
    '',
    '> Individual documentation files (design tokens, styling, guides, FAQ, ...) for targeted LLM context.',
    '> Use these files to provide only the documentation you need, instead of the full documentation.',
    '',
  ];

  for (const doc of [...genericDocs].sort((a, b) => a.title.localeCompare(b.title))) {
    lines.push(`- [${doc.title}](${relUrl(doc.file)}) (~${doc.tokens} tokens)`);
  }

  return `${lines.join('\n')}\n`;
}

// Machine-readable counterpart of the markdown indexes: every documentation
// file with its type, token estimate and canonical URL, so tooling can decide
// what to fetch without parsing markdown.
function buildIndexJson(components, generic) {
  const base = `${BASE_URL}/llms`;
  // Per-file links are relative so they resolve both locally and on the web;
  // baseUrl below keeps the absolute versioned root for consumers that want it.
  const url = (file) => relUrl(file);
  const meta = (doc) => ({ type: doc.type, tokens: doc.tokens, url: url(doc.file) });

  const componentEntries = groupComponentsBySlug(components).map((entry) => {
    const pages = {};
    for (const key of ['overview', 'documentation', 'technical-information']) {
      if (entry.docs[key]) {
        pages[key] = meta(entry.docs[key]);
      }
    }
    const titleDoc = entry.docs.overview || entry.docs.documentation || entry.docs['technical-information'];
    return { slug: entry.slug, title: titleDoc ? titleDoc.title : humanizeSlug(entry.slug), pages };
  });

  const genericEntries = [...generic]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((doc) => ({ slug: doc.slug, title: doc.title, type: doc.type, tokens: doc.tokens, url: url(doc.file) }));

  const sets = { full: { url: url(FULL_DOC_FILENAME) } };
  if (components.length > 0) {
    sets.components = { url: url(COMPONENTS_CATEGORY.filename), index: url(COMPONENTS_INDEX_FILENAME) };
  }
  if (generic.length > 0) {
    sets.generic = { url: url(GENERIC_CATEGORY.filename), index: url(GENERIC_INDEX_FILENAME) };
  }

  const index = {
    name: 'OVHcloud Design System',
    version,
    baseUrl: base,
    generatedFrom: 'storybook-llms-extractor',
    sets,
    components: componentEntries,
    generic: genericEntries,
  };

  return `${JSON.stringify(index, null, 2)}\n`;
}

function buildSummary(componentsCount, genericCount) {
  const lines = [
    '# OVHcloud Design System Documentation for LLMs',
    '',
    '> OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.',
    '',
    '## Documentation Sets',
    '',
    `- [Complete documentation](${relUrl(FULL_DOC_FILENAME)}): The complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools`,
    `- [Machine-readable index](${relUrl(INDEX_JSON_FILENAME)}): JSON index of every documentation file with its type, token estimate and canonical URL`,
    '',
  ];

  if (componentsCount > 0) {
    lines.push(`- [${COMPONENTS_CATEGORY.title}](${relUrl(COMPONENTS_CATEGORY.filename)}): ${COMPONENTS_CATEGORY.description}`);
    lines.push(`- [Components Index](${relUrl(COMPONENTS_INDEX_FILENAME)}): Individual per-component documentation files for targeted context`);
  }
  if (genericCount > 0) {
    lines.push(`- [${GENERIC_CATEGORY.title}](${relUrl(GENERIC_CATEGORY.filename)}): ${GENERIC_CATEGORY.description}`);
    lines.push(`- [Generic Documentation Index](${relUrl(GENERIC_INDEX_FILENAME)}): Individual per-page documentation files for targeted context`);
  }

  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- The complete documentation includes all content from the official documentation');
  lines.push('- Category-specific documentation files contain only the content relevant to that category');
  lines.push('- Individual files are available for targeted LLM context (see the Components and Generic Documentation indexes)');
  lines.push('- The machine-readable index (JSON) lists every file with a token estimate for context budgeting');
  lines.push('- The content is automatically generated from the same source as the official documentation');
  lines.push('');

  return `${lines.join('\n')}`;
}

async function main() {
  const hasSummary = await exists(SUMMARY_PATH);
  const hasLlmsDir = await exists(LLMS_DIR);

  if (!hasSummary || !hasLlmsDir) {
    console.warn('ℹ️ No LLM assets found to post-process. Skipping.');
    return;
  }

  await removeStaleGeneratedFiles();

  const allDocs = await readAllDocs();
  const { components, generic } = categorizeDocs(allDocs);

  if (allDocs.length === 0) {
    console.warn('ℹ️ No documentation files detected. Skipping aggregation.');
    return;
  }

  const componentsPath = path.join(DIST_DIR, COMPONENTS_CATEGORY.filename);
  const genericPath = path.join(DIST_DIR, GENERIC_CATEGORY.filename);
  const fullDocPath = path.join(DIST_DIR, FULL_DOC_FILENAME);
  const componentsIndexPath = path.join(DIST_DIR, COMPONENTS_INDEX_FILENAME);
  const genericIndexPath = path.join(DIST_DIR, GENERIC_INDEX_FILENAME);
  const indexJsonPath = path.join(DIST_DIR, INDEX_JSON_FILENAME);

  // --- Aggregates --------------------------------------------------------
  if (components.length > 0) {
    await fs.writeFile(componentsPath, buildCategoryDoc(COMPONENTS_CATEGORY, components, COMPONENTS_CATEGORY.title), 'utf8');
    console.log(`✅ Components aggregated into ${COMPONENTS_CATEGORY.filename} (${components.length} files)`);
  }
  if (generic.length > 0) {
    await fs.writeFile(genericPath, buildCategoryDoc(GENERIC_CATEGORY, generic, GENERIC_CATEGORY.title), 'utf8');
    console.log(`✅ Generic documentation aggregated into ${GENERIC_CATEGORY.filename} (${generic.length} files)`);
  }

  await fs.writeFile(fullDocPath, buildFullDoc(allDocs), 'utf8');
  console.log('✅ Complete documentation aggregated into llms-full.txt');

  await fs.writeFile(SUMMARY_PATH, buildSummary(components.length, generic.length), 'utf8');
  console.log('✅ Summary updated');

  // --- Indexes -----------------------------------------------------------
  if (components.length > 0) {
    await fs.writeFile(componentsIndexPath, buildComponentsIndex(components), 'utf8');
    console.log(`✅ Components index generated into ${COMPONENTS_INDEX_FILENAME}`);
  }
  if (generic.length > 0) {
    await fs.writeFile(genericIndexPath, buildGenericIndex(generic), 'utf8');
    console.log(`✅ Generic index generated into ${GENERIC_INDEX_FILENAME}`);
  }
  await fs.writeFile(indexJsonPath, buildIndexJson(components, generic), 'utf8');
  console.log(`✅ Machine-readable index generated into ${INDEX_JSON_FILENAME}`);

  // --- Publish -----------------------------------------------------------
  const servedFiles = new Set(allDocs.map((doc) => doc.file));

  async function copyFilesToDirectory(targetDir) {
    await fs.mkdir(targetDir, { recursive: true });

    // Prune individual files that are no longer part of the doc set (a renamed
    // or removed component, a page that became excluded) so the published set
    // never drifts from the current source.
    const existing = (await fs.readdir(targetDir)).filter((file) => file.endsWith('.txt'));
    for (const file of existing) {
      if (!servedFiles.has(file) && !GENERATED_FILENAMES.has(file)) {
        await fs.rm(path.join(targetDir, file)).catch(() => {});
      }
    }

    // Generated aggregates, indexes and the machine-readable index.
    await fs.copyFile(SUMMARY_PATH, path.join(targetDir, SUMMARY_FILENAME));
    await fs.copyFile(fullDocPath, path.join(targetDir, FULL_DOC_FILENAME));
    await fs.copyFile(indexJsonPath, path.join(targetDir, INDEX_JSON_FILENAME));
    if (components.length > 0) {
      await fs.copyFile(componentsPath, path.join(targetDir, COMPONENTS_CATEGORY.filename));
      await fs.copyFile(componentsIndexPath, path.join(targetDir, COMPONENTS_INDEX_FILENAME));
    }
    if (generic.length > 0) {
      await fs.copyFile(genericPath, path.join(targetDir, GENERIC_CATEGORY.filename));
      await fs.copyFile(genericIndexPath, path.join(targetDir, GENERIC_INDEX_FILENAME));
    }

    // Self-describing individual files (front-matter + cleaned content) for
    // every served doc — components and generic pages alike.
    for (const doc of allDocs) {
      await fs.writeFile(path.join(targetDir, doc.file), buildIndividualFile(doc), 'utf8');
    }
    console.log(`  📄 ${allDocs.length} individual files written to ${path.basename(targetDir)}/`);
  }

  try {
    await copyFilesToDirectory(ASSETS_LLMS_DIR);
    console.log('✅ LLM docs copied to assets/llms directory for dev mode access.');

    await copyFilesToDirectory(DIST_LLMS_DIR);
    console.log('✅ LLM docs copied to dist/llms directory for production build.');
  } catch (copyError) {
    console.warn('⚠️ Failed to copy LLM docs:', copyError.message);
  }
}

main().catch((error) => {
  console.error('❌ Failed to post-process LLM docs:', error);
  process.exitCode = 1;
});
