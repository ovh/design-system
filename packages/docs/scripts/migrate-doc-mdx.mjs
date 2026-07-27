#!/usr/bin/env node
/* Codemod: Storybook-era MDX (component docs + static pages) → neutral-format MDX.
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

/* Storybook page titles → docs-app routes (static pages). */
const HOME_ROUTES = {
  accessibilityGuide: '/guides/accessibility',
  applyOdsStyle: '/guides/apply-ods-style',
  changelog: '/guides/changelog',
  charts: '/guides/charts',
  designTokens: '/guides/design-tokens',
  faq: '/guides/faq',
  formGuidelines: '/guides/forms',
  getStarted: '/guides/get-started',
  i18nGuide: '/guides/internationalization',
  llmDocs: '/guides/llm-documentation',
  migration12to13: '/guides/migration-12-to-13',
  migration13to14: '/guides/migration-13-to-14',
  migration14to15: '/guides/migration-14-to-15',
  migration15to16: '/guides/migration-15-to-16',
  migration16to17: '/guides/migration-16-to-17',
  migration17to18: '/guides/migration-17-to-18',
  migrationToV19: '/guides/migration-to-v19',
  roadmap: '/guides/roadmap',
  sandboxTool: '/tools/sandbox',
  styleCustomization: '/guides/style-customization',
  tailwind: '/guides/tailwind',
  themeGenerator: '/tools/theme-generator',
  welcome: '/',
};

const dedent = (code) => {
  const lines = code.split('\n');
  const indents = lines.filter((l) => l.trim().length > 0).map((l) => l.match(/^\s*/)[0].length);
  const min = indents.length > 0 ? Math.min(...indents) : 0;
  return lines.map((l) => l.slice(min)).join('\n');
};

/* import * as ButtonStories from '.../components/button/button.stories' →
 * { ButtonStories: 'button' }. Only cross-component refs (path contains
 * components/<name>/) — a component doc's own './x.stories' is resolved
 * through the page context, no qualifier needed. */
function storyAliases(source) {
  const map = {};
  for (const match of source.matchAll(/import \* as (\w+) from ['"][^'"]*components\/([a-z0-9-]+)\/[a-z0-9-]+\.stories['"]/g)) {
    map[match[1]] = match[2];
  }
  return map;
}

/* Transforms applied OUTSIDE fenced code — example code must survive intact
 * (an import line inside a snippet is content, not plumbing). */
function transformProse(out, aliases) {
  // Every import goes away — the provider supplies the components.
  out = out.replace(/^import[\s\S]*?;\s*$/gm, '');

  // Storybook page plumbing disappears (title comes from the shell).
  out = out.replace(/<Meta[\s\S]*?\/>\n?/g, '');
  out = out.replace(/<Banner[^>]*\/>\n?/g, '');
  out = out.replace(/<NoToC[^>]*\/>\n?/g, '');

  // Story references by name; cross-component refs keep a from="<component>"
  // so the page can resolve the right module.
  out = out.replace(/<Canvas of=\{\s*(\w+)\.(\w+)\s*\}([^>]*?)\/>/g, (_m, alias, story, rest) => {
    const state = rest.match(/sourceState=["'](\w+)["']/)?.[1];
    const component = aliases[alias];
    return `<Canvas story="${story}"${component ? ` from="${component}"` : ''}${state && state !== 'shown' ? ` source="${state}"` : ''} />`;
  });

  // Internal links (the story={ STORY.x } attribute is swallowed by [^>]*:
  // every story of a component lives on the same docs-app page).
  out = out.replace(/<StorybookLink kind=\{\s*REACT_COMPONENTS_TITLE\.(\w+)\s*\}[^>]*>([\s\S]*?)<\/StorybookLink>/g,
    (_m, key, label) => `<DocLink to="/components/${kebab(key)}">${label}</DocLink>`);
  out = out.replace(/<StorybookLink title=\{\s*HOME_TITLE\.(\w+)\s*\}[^>]*>([\s\S]*?)<\/StorybookLink>/g,
    (_m, key, label) => `<DocLink to="${HOME_ROUTES[key] ?? `/guides/${kebab(key)}`}">${label}</DocLink>`);
  out = out.replace(/<StorybookLink title=\{\s*RECIPES_TITLE\.(\w+)\s*\}[^>]*>([\s\S]*?)<\/StorybookLink>/g,
    (_m, key, label) => `<DocLink to="/recipes/${kebab(key)}">${label}</DocLink>`);

  // Enum expressions become plain strings.
  out = out.replace(/name=\{\s*ICON_NAME\.(\w+)\s*\}/g, (_m, key) => `name="${kebab(key)}"`);
  out = out.replace(/type:\s*TOKEN_TYPE\.(\w+)/g, (_m, key) => `type: '${key}'`);
  out = out.replace(/color=\{\s*MESSAGE_COLOR\.(\w+)\s*\}/g, (_m, key) => `color="${key}"`);

  // Markdown images resolve through the provider's img (assets-relative path).
  out = out.replace(/!\[([^\]]*)\]\(([^) "]+)(?:\s+"[^"]*")?\)/g, (_m, alt, src) => `![${alt}](${src})`);

  return out;
}

function migrate(source) {
  const warnings = [];
  const aliases = storyAliases(source);
  let out = source;

  // 1. Code-bearing blocks become plain MDX fences FIRST, so the prose
  // transforms below never touch example code.
  // The code template literal is consumed atomically: example code full of
  // JSX (`<Foo />`) must not terminate the outer match early.
  out = out.replace(/<Source\b((?:\{\s*`[\s\S]*?`\s*\}|"[^"]*"|[^>])*?)\/>/g, (m, attrs) => {
    const code = attrs.match(/code=\{\s*`([\s\S]*?)`\s*\}/)?.[1] ?? attrs.match(/code="([^"]*)"/)?.[1];
    if (code == null) {
      return m;
    }
    const lang = attrs.match(/language="(\w+)"/)?.[1] ?? 'tsx';
    return `\n\`\`\`${lang}\n${dedent(code.replace(/^\n+|\s+$/g, ''))}\n\`\`\`\n`;
  });
  out = out.replace(/<Code[^>]*>\s*\{`([\s\S]*?)`\}\s*<\/Code>/g, (_m, code) => `\n\`\`\`tsx\n${code.trim()}\n\`\`\`\n`);
  out = out.replace(/<Code>\n?([^{][\s\S]*?)<\/Code>/g, (_m, code) => `\n\`\`\`text\n${code.trim()}\n\`\`\`\n`);

  // 2. Everything else transforms per prose segment, fences pass through.
  out = out
    .split(/(```[\s\S]*?```)/)
    .map((part, index) => (index % 2 === 1 ? part : transformProse(part, aliases).replace(/\n{3,}/g, '\n\n')))
    .join('')
    .trimStart();

  // Anything Storybook-flavoured left is a migration gap: report it.
  // Fenced blocks AND inline code spans are data, not JSX: both are skipped.
  const scanned = out.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const pattern of [/@storybook/, /\bof=\{/, /StorybookLink/, /ICON_NAME\./, /TOKEN_TYPE\./, /MESSAGE_COLOR\./, /REACT_COMPONENTS_TITLE/, /HOME_TITLE/, /RECIPES_TITLE/, /STORY\./, /^import /m]) {
    const match = scanned.match(pattern);
    if (match) {
      const line = scanned.slice(0, match.index).split('\n').length;
      warnings.push(`l.${line}: ${match[0]}`);
    }
  }
  // Components outside the neutral contract are gaps too (fenced code is
  // data, not JSX: it is skipped).
  const CONTRACT = new Set([
    'Anatomy', 'BestPractices', 'Canvas', 'ChartColorCards', 'DesignTokens', 'DocLink', 'ExternalLink',
    'Heading', 'Icon', 'IdentityCard', 'Kbd', 'Link', 'Message', 'MessageBody', 'MessageIcon',
    'OdsLocaleList', 'Roadmap', 'Table', 'TokenPreview',
  ]);
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
