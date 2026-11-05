#! /usr/bin/env node

/*
 * Sass emits a theme mode as several rules with the same selector: the :root of the palette partial
 * then the one of the mode, and for a dark mode its whole light mode then what dark changes. Merges
 * each rule into the first one with its selector and at-rule context, keeping each property at its
 * first position with its last value: what the cascade gives, as long as no declaration is
 * !important. Repeated `@layer` blocks are appended to the first one, so that every theme ships one
 * :root and one block per layer.
 *
 * Usage: node scripts/bake-themes.js [compiled.css ...]   (default: the css of every theme, see themes.js)
 */
const postcss = require('postcss');
const fs = require('fs').promises;
const path = require('path');
const { themes } = require('./themes');

function contextOf(node) {
  const parts = [];

  for (let parent = node.parent; parent && parent.type !== 'root'; parent = parent.parent) {
    parts.unshift(`@${parent.name} ${parent.params}`);
  }

  return parts.join(' ');
}

function leadingComment(node) {
  const previous = node.prev();

  return previous && previous.type === 'comment' && previous.raws.before.includes('\n') ? previous : undefined;
}

function trailingComment(node) {
  const next = node.next();

  return next && next.type === 'comment' && !next.raws.before.includes('\n') ? next : undefined;
}

/* What a removed node leaves behind (the banner of a dark mode, its "Components" heading) goes with it. */
function removeWithComments(node) {
  for (let previous = node.prev(); previous && previous.type === 'comment'; previous = node.prev()) {
    previous.remove();
  }

  node.remove();
}

/* A comment that annotates a declaration describes its value: an overridden declaration takes the comments of the one that overrides it. */
function override(existing, decl) {
  const comment = leadingComment(decl);
  const existingComment = leadingComment(existing);

  if (comment && existingComment) {
    existingComment.text = comment.text;
  }

  trailingComment(existing)?.remove();
  const trailing = trailingComment(decl);

  if (trailing) {
    existing.after(trailing.clone());
  }

  existing.value = decl.value;
  existing.important = decl.important;
}

/* Moving a declaration up to the first rule is only safe if no rule in between declares the same property. */
function assertNothingInBetween(first, rule, prop, file) {
  let between = false;

  first.root().walkRules((node) => {
    if (node === first) {
      between = true;
    } else if (node === rule) {
      between = false;
    } else if (between && node.some((child) => child.type === 'decl' && child.prop === prop)) {
      throw new Error(`${file}: ${prop} of "${rule.selector}" cannot move above "${node.selector}", which declares it too`);
    }
  });
}

function bake(css, file) {
  const root = postcss.parse(css);
  const layers = new Map();

  root.each((node) => {
    if (node.type !== 'atrule' || node.name !== 'layer' || !node.nodes) {
      return;
    }

    const first = layers.get(node.params);

    if (first) {
      first.append(node.nodes);
      removeWithComments(node);
    } else {
      layers.set(node.params, node);
    }
  });

  const rules = new Map();

  root.walkRules((rule) => {
    const key = `${contextOf(rule)} ${rule.selector}`;
    const first = rules.get(key);

    if (!first) {
      rules.set(key, rule);
      return;
    }

    rule.each((decl) => {
      if (decl.type !== 'decl') {
        return;
      }

      assertNothingInBetween(first, rule, decl.prop, file);
      const existing = first.nodes.find((child) => child.type === 'decl' && child.prop === decl.prop);

      if (existing) {
        override(existing, decl);
      } else {
        first.append(...[leadingComment(decl), decl, trailingComment(decl)].filter(Boolean).map((node) => node.clone()));
      }
    });

    removeWithComments(rule);
  });

  root.each((node, index) => {
    if (index > 0) {
      node.raws.before = node.prev().type === 'comment' ? '\n' : '\n\n';
    }
  });

  return root.toString();
}

(async function main() {
  try {
    const files = process.argv.length > 2
      ? process.argv.slice(2)
      : themes().map((theme) => theme.css);

    await Promise.all(files.map(async (file) => {
      const css = await fs.readFile(path.resolve(process.cwd(), file), 'utf8');
      await fs.writeFile(path.resolve(process.cwd(), file), bake(css, file), 'utf8');
    }));
  } catch (error) {
    console.error('Could not bake the themes.', error);
    process.exitCode = 1;
  }
})();
