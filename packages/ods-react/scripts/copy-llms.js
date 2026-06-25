#!/usr/bin/env node

// Ship the LLM documentation inside the published package so integrators can
// feed it to their AI tools locally (node_modules/@ovhcloud/ods-react/dist/llms)
// without fetching it from the web. The source of truth is the committed
// storybook assets, so this works regardless of whether the Storybook llms
// extraction ran in the same build. Links inside the files are relative, so
// they resolve correctly from this local location too.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(dirname, '..', '..', 'storybook', 'assets', 'llms');
const DEST = path.join(dirname, '..', 'dist', 'llms');

if (!fs.existsSync(SRC)) {
  console.warn(`ℹ️ No llms source found at ${SRC}. Skipping llms copy.`);
  process.exit(0);
}

fs.rmSync(DEST, { recursive: true, force: true });
fs.mkdirSync(DEST, { recursive: true });
fs.cpSync(SRC, DEST, { recursive: true });

const count = fs.readdirSync(DEST).length;
console.log(`✅ Copied ${count} llms files into dist/llms`);
