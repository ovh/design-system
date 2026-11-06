/*
 * The config file of ods-migrate (`ods-migrate.config.json`), written by the configurator
 * (configurator/index.html) and read by the CLI.
 *
 * By default ods-migrate produces the v20 Aluminium look and adds nothing to keep the v19 one. The
 * config picks the v19 look choice by choice. The CLI normalizes it once and passes the plain
 * object to the engines (`options.config`), which read it through `isV19Look` and `isEnabled` of
 * src/shared.mjs: no engine imports this module.
 */
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const CONFIG_FILE = 'ods-migrate.config.json';
const LOOKS = ['aluminium', 'v19'];
const OPT_OUT_FILE = 'ods-v19-look.css';
const KEYS = ['version', 'look', 'optOutCss', 'pending'];

/* The choices of the configurator, in page order: the only source of the choice ids. */
const CHOICES = JSON.parse(readFileSync(new URL('../configurator/choices.json', import.meta.url), 'utf8')).choices;
const CHOICE_IDS = CHOICES.map(({ id }) => id);
const CHOICE_BY_ID = new Map(CHOICES.map((choice) => [choice.id, choice]));


class ConfigError extends Error {
  code = 'ODS_MIGRATE_CONFIG';

  constructor(message, errors = []) {
    super(message);
    this.name = 'ConfigError';
    this.errors = errors;
  }
}

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

/* The ids that `pending` can enable: the `pending` flags of both mappings (a ticket or a PR whose v20 target is not released yet). */
function pendingIds(...mappings) {
  const ids = new Set();
  const visit = (value) => {
    if (Array.isArray(value)) {
      value.forEach(visit);
    } else if (isObject(value)) {
      for (const [key, item] of Object.entries(value)) {
        if (key === 'pending' && typeof item === 'string') ids.add(item);
        else visit(item);
      }
    }
  };
  mappings.forEach(visit);
  return [...ids].sort();
}
const readMapping = (name) => JSON.parse(readFileSync(new URL(`../mappings/${name}`, import.meta.url), 'utf8'));
const PENDING_IDS = pendingIds(readMapping('v19-to-v20.json'), readMapping('tokens-v19-to-v20.json'));
/* The ids of the configs written before these changes landed in ODS v20: accepted, they change nothing. */
const LANDED_IDS = ['#1121', '#1122', 'ODS-2326', 'ODS-2335', 'ODS-2336'];

/** The config of a run without a config file: Aluminium for every choice. */
function defaultConfig(cwd = process.cwd()) {
  return {
    version: 1,
    look: Object.fromEntries(CHOICE_IDS.map((id) => [id, 'aluminium'])),
    optOutCss: resolve(cwd, OPT_OUT_FILE),
    pending: [],
    file: null,
  };
}

/**
 * The errors of a raw config (the parsed JSON), one sentence each; empty when it is valid.
 * `undefined` (no file) is valid. Never throws.
 */
function validateConfig(raw) {
  if (raw === undefined) {
    return [];
  }
  if (!isObject(raw)) {
    return ['the config must be a JSON object'];
  }
  const errors = [];
  try {
    for (const key of Object.keys(raw)) {
      if (!KEYS.includes(key)) {
        errors.push(`unknown key "${key}" (expected ${KEYS.join(', ')})`);
      }
    }
    if (own(raw, 'version') && raw.version !== 1) {
      errors.push(`version must be 1, got ${JSON.stringify(raw.version)}`);
    }
    if (own(raw, 'look')) {
      if (!isObject(raw.look)) {
        errors.push('look must be an object of { <choice id>: "aluminium" | "v19" }');
      } else {
        for (const [id, look] of Object.entries(raw.look)) {
          if (!CHOICE_BY_ID.has(id)) {
            errors.push(`unknown choice "${id}" in look (known: ${CHOICE_IDS.join(', ')})`);
          } else if (!LOOKS.includes(look)) {
            errors.push(`look["${id}"] must be "aluminium" or "v19", got ${JSON.stringify(look)}`);
          }
        }
      }
    }
    if (own(raw, 'optOutCss') && (typeof raw.optOutCss !== 'string' || !raw.optOutCss.trim())) {
      errors.push('optOutCss must be a non-empty string (a path relative to the config file)');
    }
    if (own(raw, 'pending') && (!Array.isArray(raw.pending) || raw.pending.some((id) => typeof id !== 'string'))) {
      errors.push('pending must be an array of strings');
    } else if (own(raw, 'pending')) {
      // An id the mappings once had (a change that has since landed in ODS) is not an error: it is applied by default now.
      for (const id of raw.pending.filter((item) => !PENDING_IDS.includes(item) && !LANDED_IDS.includes(item))) {
        errors.push(`unknown id "${id}" in pending (known: ${PENDING_IDS.length ? PENDING_IDS.join(', ') : 'none'})`);
      }
    }
  } catch (error) {
    errors.push(`the config cannot be read: ${error.message}`);
  }
  return errors;
}

/**
 * The normalized config: every choice present, optOutCss absolute (relative to the config file,
 * or to the working directory without one), pending without duplicates. Throws a ConfigError.
 */
function normalizeConfig(raw, { file } = {}) {
  const errors = validateConfig(raw);
  const path = file ? resolve(file) : null;
  if (errors.length) {
    throw new ConfigError(`${path ?? 'config'}: ${errors.join('; ')}`, errors);
  }
  const config = defaultConfig(path ? dirname(path) : process.cwd());
  for (const [id, look] of Object.entries(raw?.look ?? {})) {
    config.look[id] = look;
  }
  if (raw?.optOutCss !== undefined) {
    config.optOutCss = resolve(path ? dirname(path) : process.cwd(), raw.optOutCss.trim());
  }
  config.pending = [...new Set(raw?.pending ?? [])];
  config.file = path;
  return config;
}

/** Reads, parses and normalizes a config file. Throws a ConfigError for every failure. */
function loadConfig(path) {
  const file = resolve(path);
  let text;
  try {
    text = readFileSync(file, 'utf8');
  } catch (error) {
    throw new ConfigError(`${file}: ${error.code === 'ENOENT' ? 'no such file' : error.code === 'EISDIR' ? 'is a directory' : error.message}`, [error.message]);
  }
  let raw;
  try {
    raw = JSON.parse(text.replace(/^﻿/, ''));
  } catch (error) {
    throw new ConfigError(`${file}: invalid JSON: ${error.message}`, [error.message]);
  }
  return normalizeConfig(raw, { file });
}

/** The config file of a directory, or null. */
function findConfig(cwd) {
  const file = resolve(cwd, CONFIG_FILE);
  try {
    return existsSync(file) && statSync(file).isFile() ? file : null;
  } catch {
    return null;
  }
}

const v19Choices = (config) => CHOICES.filter(({ id }) => config?.look?.[id] === 'v19');

/**
 * The CSS that keeps the v19 look of the `css` choices set to v19, in page order, or null. The CLI
 * writes it to `config.optOutCss` under its own header.
 */
function optOutCss(config) {
  const blocks = v19Choices(config)
    .filter(({ kind, alternative }) => kind === 'css' && alternative.css)
    .map(({ alternative, id, title }) => `/* ${id}: ${title} */\n${alternative.css.trim()}\n`);
  return blocks.length ? blocks.join('\n') : null;
}

/** One line per choice set to v19, for the CLI summary. */
function describeConfig(config) {
  return v19Choices(config).map(({ id, kind, title }) => `${id}: v19 look kept (${title}), ${kind === 'css' ? 'by your v19-look stylesheet' : kind === 'tokens' ? 'in your stylesheets' : 'in your JSX'}`);
}

export {
  CHOICE_IDS,
  CONFIG_FILE,
  PENDING_IDS,
  ConfigError,
  LOOKS,
  defaultConfig,
  describeConfig,
  findConfig,
  loadConfig,
  normalizeConfig,
  optOutCss,
  validateConfig,
};
