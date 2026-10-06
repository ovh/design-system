#! /usr/bin/env node

/*
 * Resolves every custom property declared by a compiled theme stylesheet down to a literal,
 * following var() chains across scopes.
 *
 * This is the acceptance gate for the token refactor phases: de-interpolating a role token
 * changes the emitted CSS text (`#4d4d4d` becomes `var(--ods-color-neutral-700)`) while it must
 * not change what the token resolves to. A text diff cannot tell those two apart, so the
 * snapshot compared across a phase is the resolved output of this script.
 *
 * Two things it reports that a text diff also cannot:
 *   - NAME SET  - a token that appeared or disappeared (T1).
 *   - DANGLING  - a var() reference to a property nothing declares, and no fallback.
 *
 * Unlike generate-token-lists.js it is axis-aware: declarations are keyed by the selector and
 * at-rule context they were found in, so a scheme block under an attribute selector or a media
 * query is visible instead of silently dropped.
 *
 * Usage: node scripts/resolve-tokens.js <compiled.css> [more.css ...]
 */

const postcss = require('postcss');
const fs = require('fs').promises;
const path = require('path');

const CUSTOM_PROPERTY = /^--/;

// Marker values, so a failure shows up in the diff rather than resolving to something plausible.
const DANGLING = '<DANGLING>';
const CYCLE = '<CYCLE>';

/*
 * The context a declaration sits in - its selector plus any enclosing at-rules. This is the key
 * the token is recorded under, and it is what makes the output axis-aware: `:root` and
 * `[data-ods-scheme='dark']` and `@media (prefers-contrast: more) :root` are three scopes, not one.
 */
function scopeOf(decl) {
  const parts = [];
  let node = decl.parent;

  while (node && node.type !== 'root') {
    if (node.type === 'rule') {
      parts.unshift(node.selector);
    } else if (node.type === 'atrule') {
      parts.unshift(`@${node.name} ${node.params}`.trim());
    }

    node = node.parent;
  }

  return parts.join(' ') || '<root>';
}

function collect(css) {
  const scopes = new Map();

  postcss.parse(css).walkDecls((decl) => {
    if (!CUSTOM_PROPERTY.test(decl.prop)) {
      return;
    }

    const scope = scopeOf(decl);

    if (!scopes.has(scope)) {
      scopes.set(scope, new Map());
    }

    // Last declaration wins, matching the cascade within a single scope.
    scopes.get(scope).set(decl.prop, decl.value.trim());
  });

  return scopes;
}

/*
 * Splits the arguments of a single var() at top-level commas, so `var(--a, var(--b, #fff))` yields
 * ['--a', 'var(--b, #fff)'] rather than being cut inside the nested call.
 */
function splitArguments(text) {
  const parts = [];
  let depth = 0;
  let current = '';

  for (const character of text) {
    if (character === '(') {
      depth += 1;
    } else if (character === ')') {
      depth -= 1;
    }

    if (character === ',' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += character;
    }
  }

  parts.push(current);

  return parts.map((part) => part.trim());
}

/*
 * Replaces every var() in `value` with what it resolves to, recursively.
 *
 * `lookup` resolves a property name against the scope chain; `seen` carries the names already
 * being resolved on this path so a mutually referential pair is reported rather than recursed into
 * forever - CSS treats those as invalid at computed-value time, and they are a real hazard for the
 * compat shim, which cannot serve both a reader and a writer of the same name.
 */
function resolveValue(value, lookup, seen) {
  let output = '';
  let index = 0;

  while (index < value.length) {
    const start = value.indexOf('var(', index);

    if (start === -1) {
      output += value.slice(index);
      break;
    }

    output += value.slice(index, start);

    // Walk to the matching close paren of this var(.
    let depth = 0;
    let end = start;

    for (; end < value.length; end += 1) {
      if (value[end] === '(') {
        depth += 1;
      } else if (value[end] === ')') {
        depth -= 1;

        if (depth === 0) {
          break;
        }
      }
    }

    const [name, ...rest] = splitArguments(value.slice(start + 4, end));
    const fallback = rest.length ? rest.join(', ') : null;

    if (seen.has(name)) {
      output += CYCLE;
    } else {
      const referenced = lookup(name);

      if (referenced !== undefined) {
        output += resolveValue(referenced, lookup, new Set([...seen, name]));
      } else if (fallback !== null) {
        output += resolveValue(fallback, lookup, seen);
      } else {
        output += DANGLING;
      }
    }

    index = end + 1;
  }

  return output.replace(/\s+/g, ' ').trim();
}

/*
 * A token declared in a scheme block still reads inherited properties from the root scope, so a
 * name is looked up in its own scope first and then in `<root>`.
 */
function resolveScopes(scopes) {
  const rootScope = scopes.get('<root>') || scopes.get(':root') || new Map();
  const resolved = {};

  for (const [scope, declarations] of scopes) {
    const lookup = (name) => {
      if (declarations.has(name)) {
        return declarations.get(name);
      }

      return rootScope.get(name);
    };

    resolved[scope] = {};

    for (const name of [...declarations.keys()].sort()) {
      resolved[scope][name] = resolveValue(declarations.get(name), lookup, new Set([name]));
    }
  }

  return resolved;
}

(async function main() {
  const files = process.argv.slice(2);

  if (!files.length) {
    console.error('Usage: node scripts/resolve-tokens.js <compiled.css> [more.css ...]');
    process.exitCode = 1;

    return;
  }

  const output = {};

  for (const file of files) {
    const css = await fs.readFile(path.resolve(process.cwd(), file), { encoding: 'utf-8' });

    /*
     * Keyed by the path as given, not by its basename: every theme compiles to an `index.css`, so
     * a basename key made `dist/default/index.css` and `dist/blue-jeans/index.css` collide and the
     * last file silently won - which is exactly the pair you pass when comparing two brands.
     */
    output[file] = resolveScopes(collect(css));
  }

  console.log(JSON.stringify(output, null, 2));
}());
