#!/usr/bin/env node
/* Codemod: Storybook-era documentation.mdx → neutral-format MDX.
 *
 * The neutral contract: no imports at all (components come from the MDX
 * provider), story references by NAME (<Canvas story="X" />), internal
 * navigation through <DocLink to="/...">.
 *
 *   node scripts/migrate-doc-mdx.mjs <input.mdx>          # transformed file to stdout
 *   node scripts/migrate-doc-mdx.mjs --coverage <glob-dir> # stats across all docs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const kebab = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

function migrate(source) {
  const warnings = [];
  let out = source;

  // 1. Every import goes away — the provider supplies the components.
  out = out.replace(/^import[\s\S]*?;\s*$/gm, '');

  // 2. Storybook page plumbing disappears (title comes from the shell).
  out = out.replace(/<Meta[^>]*\/>\n?/g, '');
  out = out.replace(/<Banner[^>]*\/>\n?/g, '');

  // 3. Story references by name.
  out = out.replace(/<Canvas of=\{\s*\w+\.(\w+)\s*\}(?:\s+sourceState=["'](\w+)["'])?\s*\/>/g,
    (_m, story, state) => `<Canvas story="${story}"${state && state !== 'shown' ? ` source="${state}"` : ''} />`);

  // 4. Internal links.
  out = out.replace(/<StorybookLink kind=\{\s*REACT_COMPONENTS_TITLE\.(\w+)\s*\}[^>]*>([\s\S]*?)<\/StorybookLink>/g,
    (_m, key, label) => `<DocLink to="/components/${kebab(key)}">${label}</DocLink>`);
  out = out.replace(/<StorybookLink title=\{\s*HOME_TITLE\.(\w+)\s*\}[^>]*>([\s\S]*?)<\/StorybookLink>/g,
    (_m, key, label) => `<DocLink to="/guides/${kebab(key)}">${label}</DocLink>`);

  // 5. Enum expressions become plain strings.
  out = out.replace(/name=\{\s*ICON_NAME\.(\w+)\s*\}/g, (_m, key) => `name="${kebab(key)}"`);

  // 6. Inline <Code highlighter=...>{`...`}</Code> blocks become plain MDX
  // fences — the provider renders fenced code through the ODS Code + shiki.
  out = out.replace(/<Code[^>]*>\s*\{`([\s\S]*?)`\}\s*<\/Code>/g, (_m, code) => `\n\`\`\`tsx\n${code.trim()}\n\`\`\`\n`);

  // 7. Housekeeping.
  out = out.replace(/\n{3,}/g, '\n\n').trimStart();

  // Anything Storybook-flavoured left is a migration gap: report it.
  for (const pattern of [/@storybook/, /\bof=\{/, /StorybookLink/, /ICON_NAME\./, /REACT_COMPONENTS_TITLE/, /HOME_TITLE/, /STORY\./, /^import /m]) {
    const match = out.match(pattern);
    if (match) {
      const line = out.slice(0, match.index).split('\n').length;
      warnings.push(`l.${line}: ${match[0]}`);
    }
  }
  // Components outside the neutral contract are gaps too (fenced code is
  // data, not JSX: it is skipped).
  const CONTRACT = new Set(['Anatomy', 'BestPractices', 'Canvas', 'DocLink', 'ExternalLink', 'Heading', 'Icon', 'IdentityCard', 'Kbd', 'Message', 'MessageBody', 'MessageIcon', 'Table']);
  const scanned = out.replace(/```[\s\S]*?```/g, '');
  for (const tag of scanned.matchAll(/<([A-Z]\w+)[\s/>]/g)) {
    if (!CONTRACT.has(tag[1])) {
      const line = scanned.slice(0, tag.index).split('\n').length;
      warnings.push(`l.${line}: composant hors contrat <${tag[1]}>`);
    }
  }
  return { out, warnings };
}

const [, , arg, dir] = process.argv;

if (arg === '--coverage') {
  const componentsDir = dir;
  let clean = 0;
  const dirty = [];
  for (const component of readdirSync(componentsDir)) {
    let source;
    try {
      source = readFileSync(join(componentsDir, component, 'documentation.mdx'), 'utf8');
    } catch {
      continue;
    }
    const { warnings } = migrate(source);
    if (warnings.length === 0) {
      clean += 1;
    } else {
      dirty.push(`${component}: ${warnings.join(' · ')}`);
    }
  }
  console.log(`clean: ${clean} / ${clean + dirty.length}`);
  for (const entry of dirty) {
    console.log(`  ⚠ ${entry}`);
  }
} else {
  const { out, warnings } = migrate(readFileSync(arg, 'utf8'));
  process.stdout.write(out);
  for (const warning of warnings) {
    console.error(`⚠ ${warning}`);
  }
}
