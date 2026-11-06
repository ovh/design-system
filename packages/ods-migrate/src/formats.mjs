import scss from 'postcss-scss';
import { TODO, markerMessage, resolveTokenMapping } from './shared.mjs';
import * as tokens from './tokens.mjs';

/*
 * The files the token engine has no parser for: Less, indented Sass (`.sass`) and the JSON a
 * 19.x Theme Generator exports (BC-01, BC-02, BC-20 of BREAKING-CHANGES-V20.md).
 *
 * - Less: a `var(--ods-…)` reads the theme as in CSS. A Less file that `postcss-scss` reads back
 *   unchanged (no mixin call, no guard) goes through the stylesheet pass; any other one gets a
 *   marker on each line that reads a v19 token, with its v20 name when the name alone says it.
 * - Indented Sass: markers only, the same way (no parser for the syntax).
 * - Theme Generator JSON: a flat `{ "--ods-…": value }` object. Its keys are rewritten as those
 *   of a theme object in a script; JSON takes no comment, so what needs a person is a point to check.
 */

const OLD_TOKEN = /--ods-(?:theme|color|border-radius|border-width|font-family|form-element|outline)-[a-z0-9-]*[a-z0-9]/g;
const HAS_OLD_TOKEN = new RegExp(OLD_TOKEN.source);
const JSON_THEME_KEY = new RegExp(`"(${OLD_TOKEN.source})"\\s*:`);

const report = (output) => ({ changes: [], notes: [], output, todos: [], typed: [], untyped: [] });

/** The v20 name of a v19 token when the name alone says it, or what to choose between. */
function describe(mapping, name) {
  const resolved = tokens.resolveToken(mapping, name, {});
  if (resolved.to) return `${name} → ${resolved.to}`;
  if (resolved.todo) return resolved.todo;
  return null;
}

/** A marker on each line that reads a v19 token, in the comment syntax of the file (`//` in Less and Sass). */
function markLines(source, mapping, why) {
  const result = report(source);
  const lines = source.split('\n');
  const output = [];
  lines.forEach((text, index) => {
    const names = [...new Set(text.match(OLD_TOKEN) ?? [])].filter((name) => mapping.tokens[name]);
    const marked = /^\s*(?:\/\/|\/\*)\s*TODO\(ods-v20\)/.test(output.at(-1) ?? '');
    if (names.length && !marked && !/^\s*(?:\/\/|\/\*)/.test(text)) {
      const messages = [`${why}: rewrite the ODS v19 tokens of the next line by hand`, ...names.map((name) => describe(mapping, name)).filter(Boolean)];
      const indent = /^[ \t]*/.exec(text)[0];
      const cr = text.endsWith('\r') ? '\r' : '';
      output.push(`${indent}// ${TODO}: ${markerMessage(messages)}${cr}`);
      messages.forEach((message) => result.todos.push({ line: index + 1, message }));
    }
    output.push(text);
  });
  result.output = output.join('\n');
  return result;
}

/** True when `postcss-scss` reads the Less file back unchanged: the stylesheet pass can run on it. */
function readsAsScss(source) {
  try {
    return scss.parse(source).toString(scss.stringify) === source;
  } catch {
    return false;
  }
}

/** Migrates a Less or indented Sass stylesheet. */
function transformOtherStyles(source, rawMapping, filename, options = {}) {
  const mapping = resolveTokenMapping(rawMapping, options.config);
  if (!HAS_OLD_TOKEN.test(source)) {
    return report(source);
  }
  if (/\.less$/.test(filename) && readsAsScss(source)) {
    // The pass parses `.scss` files with postcss-scss, which also reads the `//` comments of Less.
    const result = tokens.transformStyles(source, rawMapping, filename.replace(/\.less$/, '.less.scss'), options);
    return { ...report(result.output), ...result };
  }
  const why = /\.less$/.test(filename)
    ? 'ods-migrate does not rewrite this Less file (mixin calls or guards it cannot read)'
    : 'ods-migrate does not rewrite indented Sass';
  return markLines(source, mapping, why);
}

/** True for the JSON of a Theme Generator: an object whose own keys are v19 tokens. */
function isThemeJson(source) {
  if (!JSON_THEME_KEY.test(source)) return false;
  try {
    const value = JSON.parse(source.replace(/^﻿/, ''));
    return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).some((key) => /^--ods-/.test(key) && HAS_OLD_TOKEN.test(key));
  } catch {
    return false;
  }
}

/** Migrates the JSON of a Theme Generator: its keys and values, as a theme object of a script; markers become points to check. */
function transformThemeJson(source, rawMapping, filename, options = {}) {
  const result = report(source);
  if (!isThemeJson(source)) {
    return result;
  }
  const prefix = 'export default ';
  const plan = tokens.planScriptTokens(`${prefix}${source}`, rawMapping, `${filename}.ts`, options);
  const edits = plan.edits.map((edit) => ({ ...edit, end: edit.end - prefix.length, start: edit.start - prefix.length })).sort((a, b) => b.start - a.start);
  let output = source;
  let floor = Infinity;
  for (const edit of edits) {
    if (edit.end > floor) continue;
    output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
    floor = edit.start;
    result.changes.push({ line: edit.line, message: edit.message });
  }
  result.notes.push(...plan.notes);
  for (const marker of plan.markers) {
    marker.messages.forEach((message) => result.notes.push({ line: marker.line, message: `${message} (a Theme Generator export: JSON takes no ${TODO} comment)` }));
  }
  result.notes.push({ line: 1, message: 'a 19.x Theme Generator export: its keys are renamed to the v20 tokens, but a v20 theme is written differently (the palette, then the roles that need their own value, BC-20): check it against the Themes guide, and the code that loads it' });
  result.output = output;
  for (const list of [result.changes, result.notes]) list.sort((a, b) => a.line - b.line);
  return result;
}

export { isThemeJson, transformOtherStyles, transformThemeJson };
