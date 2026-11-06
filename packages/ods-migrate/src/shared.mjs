/*
 * Helpers shared by every part of ods-migrate (codemod, token engine, ESLint and stylelint rules,
 * guide, CLI), so that they read the mappings, the config and the markers the same way.
 *
 * Frozen by CONTRACT.md: every work package copies this file as src/shared.mjs and none edits it.
 * A package that needs more writes a local helper in a file it owns.
 */

const TODO = 'TODO(ods-v20)';
const RAW = Symbol('ods-migrate.raw');

/* Prop rule keys that describe the component itself, not the prop: a component that `extends` another does not inherit them. */
const NOT_INHERITED = ['defaultWas', 'dropDefault', 'v19Look'];

/* ------------------------------------------------------------------------- config */

/** True when the config picks the v19 look for this choice of the configurator. No config = Aluminium. */
function isV19Look(config, choice) {
  return Boolean(choice) && config?.look?.[choice] === 'v19';
}

/** An entry flagged `pending` (its v20 target is not released yet) applies only when the config enables it. */
function isEnabled(entry, config) {
  return !entry?.pending || (config?.pending ?? []).includes(entry.pending);
}

const pendingKey = (config) => [...(config?.pending ?? [])].sort().join(',');
const without = (object, keys) => Object.fromEntries(Object.entries(object).filter(([key]) => !keys.includes(key)));
const enabledEntries = (table, config) => Object.fromEntries(Object.entries(table ?? {}).filter(([, entry]) => isEnabled(entry, config)));

function memoize(resolve) {
  const cache = new WeakMap();
  return (input, config) => {
    const raw = input?.[RAW] ?? input;
    if (!cache.has(raw)) {
      cache.set(raw, new Map());
    }
    const byKey = cache.get(raw);
    const key = pendingKey(config);
    if (!byKey.has(key)) {
      const resolved = resolve(raw, config);
      Object.defineProperty(resolved, RAW, { value: raw });
      byKey.set(key, resolved);
    }
    return byKey.get(key);
  };
}

/* ------------------------------------------------------------------------- mappings */

/**
 * The component mapping as the engines read it: `extends` resolved (the props of the base
 * component, minus what describes the base itself), `pending` entries dropped unless the config
 * enables them. Read-only: the result shares objects with the raw mapping. Resolving a resolved
 * mapping again is free.
 */
const resolveMapping = memoize((raw, config) => {
  const components = {};
  for (const [name, component] of Object.entries(raw.components ?? {})) {
    if (!isEnabled(component, config)) {
      continue;
    }
    let props = component.props ?? {};
    if (component.extends) {
      const base = raw.components?.[component.extends];
      if (!base || base.extends) {
        throw new Error(`mapping: ${name} extends ${component.extends}, which is not a component without \`extends\``);
      }
      const inherited = Object.fromEntries(Object.entries(base.props ?? {}).map(([prop, rule]) => [prop, without(rule, NOT_INHERITED)]));
      props = { ...inherited, ...props };
    }
    components[name] = { ...component, props: enabledEntries(props, config) };
  }
  return { ...raw, components, exports: enabledEntries(raw.exports, config) };
});

/** The token mapping as the engines read it: `pending` entries dropped unless the config enables them. */
const resolveTokenMapping = memoize((raw, config) => ({
  ...raw,
  mixins: enabledEntries(raw.mixins, config),
  scss: enabledEntries(raw.scss, config),
  scssPalette: enabledEntries(raw.scssPalette, config),
  tokens: enabledEntries(raw.tokens, config),
}));

/**
 * One member of an export rule (`BADGE_COLOR.primary`), whatever its form in the mapping:
 * `"accent"`, `null` (no equivalent) or `{ "to": "accent" | null, "hint": "…" }`. The hint falls
 * back to the hint of the export. Undefined when the member is not in the mapping.
 */
function memberRule(rule, member) {
  if (!rule?.members || !Object.hasOwn(rule.members, member)) {
    return undefined;
  }
  const value = rule.members[member];
  if (value === null || typeof value === 'string') {
    return { hint: rule.hint, to: value };
  }
  return { hint: value.hint ?? rule.hint, to: value.to ?? null };
}

/**
 * The rule of an ODS type whose members change, by its v19 name (`ButtonColor`) or its v20 one
 * (`ButtonStatus`: the members still map the v19 values a previous pass left). Undefined otherwise.
 */
function typeRule(mapping, name) {
  const own = mapping.exports?.[name];
  if (own?.members && !own.removed) {
    return own;
  }
  return Object.values(mapping.exports ?? {}).find((rule) => rule.renameTo === name && rule.members && !rule.removed);
}

/* ------------------------------------------------------------------------- source text */

const eolOf = (source) => (source.includes('\r\n') ? '\r\n' : '\n');

/**
 * True for a file nothing type-checks: JavaScript, or TypeScript that opts out with a leading
 * `// @ts-nocheck`. A value computed at runtime there is listed (report.untyped), never left to tsc.
 */
function isUntyped(source, filename) {
  if (!/\.(c|m)?tsx?$/.test(filename)) {
    return true;
  }
  let rest = source.replace(/^\uFEFF/, '');
  for (;;) {
    rest = rest.trimStart();
    const comment = rest.match(/^\/\/[^\n]*|^\/\*[\s\S]*?\*\//);
    if (!comment) {
      return false;
    }
    if (/^\/\/\s*@ts-nocheck\b/.test(comment[0])) {
      return true;
    }
    rest = rest.slice(comment[0].length);
  }
}

/** The text of a JSX attribute: `true` → `striped`, a string → `role="alertdialog"`, `{ expr }` → `style={{ … }}`. */
function attributeText(name, value) {
  if (value === true) {
    return name;
  }
  if (typeof value === 'string') {
    return value.includes('"') ? `${name}={ '${value.replace(/['\\]/g, '\\$&')}' }` : `${name}="${value}"`;
  }
  if (typeof value === 'number' || value === false || value === null) {
    return `${name}={ ${value} }`;
  }
  if (typeof value?.expr === 'string') {
    return value.expr.startsWith('{') ? `${name}={${value.expr}}` : `${name}={ ${value.expr} }`;
  }
  throw new TypeError(`mapping: ${name} has an attribute value that is neither true, a string, a number nor { expr }`);
}

/* ------------------------------------------------------------------------- markers */

/* A message fits on one line and never closes the comment it sits in. */
const sanitize = (message) => String(message).replace(/\s*\r?\n\s*/g, ' ').replace(/\*\//g, '*\\/').trim();
const markerMessage = (messages) => [...new Set([messages].flat().map(sanitize))].join(' / ');

/*
 * A literal z-index on an ODS overlay keeps its place against every ODS overlay when it is below them
 * all, or above them all, in v19 (99 to 101) and in v20 (`--ods-semantic-z-index-*`, 100 to 400):
 * only the values in between are checked.
 */
const STACKING_BELOW = 99;
const STACKING_ABOVE = 400;
const stackingNeedsCheck = (value) => {
  const number = Number(String(value).trim());
  return !Number.isFinite(number) || (number >= STACKING_BELOW && number <= STACKING_ABOVE);
};

/** Inline marker of a script, inserted right before the node it is about: `/* TODO(ods-v20): … *\/ `. */
function inlineMarker(messages) {
  return `/* ${TODO}: ${markerMessage(messages)} */ `;
}

/**
 * Marker for a JSX element in children position, where a bare comment would render as text:
 * `{/* TODO(ods-v20): … *\/}`, then the line break and indent of the element when it starts its
 * line, one space otherwise.
 */
function jsxChildMarker(messages, source, index) {
  const lineStart = source.lastIndexOf('\n', index - 1) + 1;
  const indent = source.slice(lineStart, index);
  const ownLine = /^[ \t]*$/.test(indent);
  return `{/* ${TODO}: ${markerMessage(messages)} */}${ownLine ? `${eolOf(source)}${indent}` : ' '}`;
}

/** Text of the comment node a stylesheet marker is (postcss adds the delimiters): `TODO(ods-v20): …`. */
function styleMarker(messages) {
  return `${TODO}: ${markerMessage(messages)}`;
}

/** True when the code right before `index` ends with a marker of a previous run (inline or JSX child). */
function followsMarker(source, index) {
  let before = source.slice(0, index).trimEnd();
  if (before.endsWith('*/}')) {
    before = before.slice(0, -1);
  }
  if (!before.endsWith('*/')) {
    return false;
  }
  const open = before.lastIndexOf('/*', before.length - 2);
  return open >= 0 && before.startsWith('/* TODO(ods-v', open);
}

/** The codemod output without its markers: what an ESLint --fix of the same file must produce. */
function stripScriptMarkers(source) {
  return source
    // A marker ends at its own `*/`: `variant={/* TODO… */ X}` must not run to a later `{/* comment */}`.
    .replace(/\{\/\* TODO\(ods-v20\)(?:(?!\*\/)[\s\S])*\*\/\}(?:\r?\n[ \t]*| )?/g, '')
    .replace(/\/\* TODO\(ods-v20\)(?:(?!\*\/)[\s\S])*\*\/ /g, '');
}

/** The codemod output of a stylesheet without its markers: what a stylelint --fix must produce. */
function stripStyleMarkers(source) {
  return source
    .replace(/^[ \t]*\/\* TODO\(ods-v20\)[\s\S]*?\*\/\r?\n/gm, '')
    .replace(/\/\* TODO\(ods-v20\)[\s\S]*?\*\/ ?/g, '');
}

export {
  TODO,
  attributeText,
  eolOf,
  followsMarker,
  inlineMarker,
  isEnabled,
  isUntyped,
  isV19Look,
  jsxChildMarker,
  markerMessage,
  memberRule,
  resolveMapping,
  resolveTokenMapping,
  stripScriptMarkers,
  stackingNeedsCheck,
  stripStyleMarkers,
  styleMarker,
  typeRule,
};
