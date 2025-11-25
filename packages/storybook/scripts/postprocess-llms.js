#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SUMMARY_FILENAME = 'llms.txt';
const SUMMARY_PATH = path.join(DIST_DIR, SUMMARY_FILENAME);
const LLMS_DIR = path.join(DIST_DIR, 'llms');
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
];

function shouldExcludeFile(filename) {
  return EXCLUDE_PATTERNS.some(pattern => pattern.test(filename));
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

    const [heading, ...rest] = raw.split('\n');
    const normalizedHeading = heading.replace(/^#\s*/, '');
    const body = rest.join('\n').trim();

    docs.push({
      file,
      heading: normalizedHeading,
      content: body.length > 0 ? body : null,
      raw,
    });
  }

  return docs;
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
    `# OVHcloud Design System — ${title}`,
    '',
    category.description,
    '',
  ];

  for (const doc of docs) {
    lines.push(`## ${doc.heading}`);
    if (doc.content) {
      lines.push('');
      lines.push(doc.content);
    }
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
    lines.push(`## ${doc.heading}`);
    if (doc.content) {
      lines.push('');
      lines.push(doc.content);
    }
    lines.push('');
  }

  // Remove trailing blank lines
  while (lines.length > 0 && lines[lines.length - 1] === '') {
    lines.pop();
  }

  return `${lines.join('\n')}\n`;
}

function buildSummary(componentsCount, genericCount) {
  const lines = [
    '# OVHcloud Design System Documentation for LLMs',
    '',
    '> OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.',
    '',
    '## Documentation Sets',
    '',
    '- [Complete documentation](/llms-full.txt): The complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools',
    '',
  ];

  if (componentsCount > 0) {
    lines.push(`- [${COMPONENTS_CATEGORY.title}](/${COMPONENTS_CATEGORY.filename}): ${COMPONENTS_CATEGORY.description}`);
  }
  if (genericCount > 0) {
    lines.push(`- [${GENERIC_CATEGORY.title}](/${GENERIC_CATEGORY.filename}): ${GENERIC_CATEGORY.description}`);
  }

  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- The complete documentation includes all content from the official documentation');
  lines.push('- Category-specific documentation files contain only the content relevant to that category');
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

  const allDocs = await readAllDocs();
  const { components, generic } = categorizeDocs(allDocs);

  if (allDocs.length === 0) {
    console.warn('ℹ️ No documentation files detected. Skipping aggregation.');
    return;
  }

  if (components.length > 0) {
    const componentsDoc = buildCategoryDoc(COMPONENTS_CATEGORY, components, COMPONENTS_CATEGORY.title);
    const componentsPath = path.join(DIST_DIR, COMPONENTS_CATEGORY.filename);
    await fs.writeFile(componentsPath, componentsDoc, 'utf8');
    console.log(`✅ Components aggregated into ${COMPONENTS_CATEGORY.filename} (${components.length} files)`);
  }

  if (generic.length > 0) {
    const genericDoc = buildCategoryDoc(GENERIC_CATEGORY, generic, GENERIC_CATEGORY.title);
    const genericPath = path.join(DIST_DIR, GENERIC_CATEGORY.filename);
    await fs.writeFile(genericPath, genericDoc, 'utf8');
    console.log(`✅ Generic documentation aggregated into ${GENERIC_CATEGORY.filename} (${generic.length} files)`);
  }

  const fullDoc = buildFullDoc(allDocs);
  const fullDocPath = path.join(DIST_DIR, 'llms-full.txt');
  await fs.writeFile(fullDocPath, fullDoc, 'utf8');
  console.log('✅ Complete documentation aggregated into llms-full.txt');

  const newSummary = buildSummary(components.length, generic.length);
  await fs.writeFile(SUMMARY_PATH, newSummary, 'utf8');
  console.log('✅ Summary updated with simplified 2-category format');

  const ASSETS_DIR = path.join(__dirname, '..', 'assets');
  const ASSETS_LLMS_DIR = path.join(ASSETS_DIR, 'llms');
  const DIST_LLMS_DIR = path.join(DIST_DIR, 'llms');

  async function copyConsolidatedFilesToDirectory(targetDir) {
    await fs.mkdir(targetDir, { recursive: true });
    await fs.copyFile(fullDocPath, path.join(targetDir, 'llms-full.txt'));

    if (components.length > 0) {
      const componentsPath = path.join(DIST_DIR, COMPONENTS_CATEGORY.filename);
      await fs.copyFile(componentsPath, path.join(targetDir, COMPONENTS_CATEGORY.filename));
    }
    if (generic.length > 0) {
      const genericPath = path.join(DIST_DIR, GENERIC_CATEGORY.filename);
      await fs.copyFile(genericPath, path.join(targetDir, GENERIC_CATEGORY.filename));
    }
  }

  try {
    await copyConsolidatedFilesToDirectory(ASSETS_LLMS_DIR);
    console.log('✅ LLM docs copied to assets/llms directory for dev mode access.');

    await copyConsolidatedFilesToDirectory(DIST_LLMS_DIR);
    console.log('✅ LLM consolidated docs copied to dist/llms directory for production build.');
  } catch (copyError) {
    console.warn('⚠️ Failed to copy LLM docs:', copyError.message);
  }
}

main().catch((error) => {
  console.error('❌ Failed to post-process LLM docs:', error);
  process.exitCode = 1;
});
