#!/usr/bin/env node

const fs = require('node:fs/promises');
const path = require('node:path');

// TODO: Add version from lerna.json
// const { version } = require('../../../lerna.json');
const version = '19.5.0';

const DIST_DIR = path.join(__dirname, '..', 'dist');
const SUMMARY_FILENAME = 'llms.txt';
const SUMMARY_PATH = path.join(DIST_DIR, SUMMARY_FILENAME);
const LLMS_DIR = path.join(DIST_DIR, 'llms');
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
  /^react-components-gallery\.txt$/,
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
    `# OVHcloud Design System - ${title}`,
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

function buildComponentsIndex(componentDocs) {
  const grouped = new Map();

  for (const doc of componentDocs) {
    const match = doc.file.match(/^react-components-(.+?)(?:--(documentation|technical-information))?\.txt$/);
    if (!match) {
      continue;
    }

    const [, slug, subpage] = match;
    if (!grouped.has(slug)) {
      grouped.set(slug, { slug, files: {} });
    }

    const entry = grouped.get(slug);
    if (subpage) {
      entry.files[subpage] = doc.file;
    } else {
      entry.files.main = doc.file;
    }
  }

  const lines = [
    '# OVHcloud Design System - Components Index',
    '',
    '> Individual component documentation files for targeted LLM context.',
    '> Use these files to provide only the documentation you need, instead of the full documentation.',
    '',
  ];

  for (const [, entry] of [...grouped].sort((a, b) => a[0].localeCompare(b[0]))) {
    const name = entry.slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    lines.push(`## ${name}`);
    lines.push('');
    if (entry.files.main) {
      lines.push(`- [Overview](${BASE_URL}/llms/${entry.files.main})`);
    }
    if (entry.files.documentation) {
      lines.push(`- [Documentation](${BASE_URL}/llms/${entry.files.documentation})`);
    }
    if (entry.files['technical-information']) {
      lines.push(`- [Technical Information](${BASE_URL}/llms/${entry.files['technical-information']})`);
    }
    lines.push('');
  }

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
    `- [Complete documentation](${BASE_URL}/llms-full.txt): The complete OVHcloud Design System documentation including all components, styling, theming, guides, and tools`,
    '',
  ];

  if (componentsCount > 0) {
    lines.push(`- [${COMPONENTS_CATEGORY.title}](${BASE_URL}/${COMPONENTS_CATEGORY.filename}): ${COMPONENTS_CATEGORY.description}`);
    lines.push(`- [Components Index](${BASE_URL}/llms/ods-components-index.txt): Individual per-component documentation files for targeted context`);
  }
  if (genericCount > 0) {
    lines.push(`- [${GENERIC_CATEGORY.title}](${BASE_URL}/${GENERIC_CATEGORY.filename}): ${GENERIC_CATEGORY.description}`);
  }

  lines.push('');
  lines.push('## Notes');
  lines.push('');
  lines.push('- The complete documentation includes all content from the official documentation');
  lines.push('- Category-specific documentation files contain only the content relevant to that category');
  lines.push('- Individual component files are available for targeted LLM context (see Components Index)');
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

  if (components.length > 0) {
    const componentsIndex = buildComponentsIndex(components);
    const componentsIndexPath = path.join(DIST_DIR, 'ods-components-index.txt');
    await fs.writeFile(componentsIndexPath, componentsIndex, 'utf8');
    console.log('✅ Components index generated into ods-components-index.txt');
  }

  async function copyFilesToDirectory(targetDir) {
    await fs.mkdir(targetDir, { recursive: true });
    await fs.copyFile(SUMMARY_PATH, path.join(targetDir, SUMMARY_FILENAME));
    await fs.copyFile(fullDocPath, path.join(targetDir, 'llms-full.txt'));

    if (components.length > 0) {
      const componentsPath = path.join(DIST_DIR, COMPONENTS_CATEGORY.filename);
      await fs.copyFile(componentsPath, path.join(targetDir, COMPONENTS_CATEGORY.filename));

      const componentsIndexPath = path.join(DIST_DIR, 'ods-components-index.txt');
      await fs.copyFile(componentsIndexPath, path.join(targetDir, 'ods-components-index.txt'));
    }
    if (generic.length > 0) {
      const genericPath = path.join(DIST_DIR, GENERIC_CATEGORY.filename);
      await fs.copyFile(genericPath, path.join(targetDir, GENERIC_CATEGORY.filename));
    }

    const individualFiles = await fs.readdir(LLMS_DIR);
    const componentFiles = individualFiles.filter((file) => COMPONENTS_CATEGORY.pattern.test(file));
    for (const file of componentFiles) {
      await fs.copyFile(path.join(LLMS_DIR, file), path.join(targetDir, file));
    }
    if (componentFiles.length > 0) {
      console.log(`  📄 ${componentFiles.length} individual component files copied to ${path.basename(targetDir)}/`);
    }
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
