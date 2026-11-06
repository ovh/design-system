#!/usr/bin/env node
// Runs the ods/v20-migration rule on the given files, without touching the project's ESLint config.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import parser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import plugin from '../src/eslint-plugin.mjs';

// Rooted at / so that a file outside the current directory is linted too.
const linter = new Linter({ configType: 'flat', cwd: '/' });
const config = [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: { parser, parserOptions: { ecmaFeatures: { jsx: true } } },
  plugins: { ods: plugin },
  rules: { 'ods/v20-migration': 'error' },
}];

let count = 0;
for (const file of process.argv.slice(2)) {
  for (const { line, message } of linter.verify(readFileSync(file, 'utf8'), config, resolve(file))) {
    console.log(`${file}:${line}  ${message}`);
    count += 1;
  }
}
console.log(`${count} problem(s)`);
process.exitCode = count > 0 ? 1 : 0;
