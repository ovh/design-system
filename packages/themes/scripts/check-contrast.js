#! /usr/bin/env node

/*
 * Checks the WCAG contrast ratio of the semantic color pairs a theme relies on, from the `root`
 * object of a generated tokens.json. A pair whose colors are not both 3- or 6-digit hex literals
 * (an alpha channel, a color function) is reported as SKIP and fails the check: a
 * listed pair must be computable. A token key missing from `root` is a MISSING pair and fails too, so
 * a renamed token cannot pass silently.
 *
 * Each pair is printed as `OK|KO <ratio> <fg> on <bg> (min <n>)`, the ratio floored (not rounded) to
 * 2 decimals and judged on that printed value, so a KO never prints as its minimum. Names are written
 * without the `--ods-semantic-color-` prefix. The exit code is 1 if any pair is KO, MISSING or SKIP,
 * or if a file cannot be read or parsed; every file is checked before exiting.
 *
 * Usage: node scripts/check-contrast.js <tokens.json> [...]
 */

const fs = require('fs');
const path = require('path');

const PREFIX = '--ods-semantic-color-';

/* The pairs a component actually draws: body text and headings on the surfaces they sit on, the
   visited link on the page, each ink on the tinted surface it is made for and on the solid surfaces
   that carry text (brand, control, selection, neutral, critical), the status inks on the page, on a
   hovered row and on the slate surfaces of the header and the selection, and the non-text parts that
   WCAG 1.4.11 asks 3:1 of (control borders, solid fills, the focus ring). No component writes on the
   information, success and warning solids, so their inks are not listed. The accent solid pair is
   kept although no component reads `content-on-accent-solid` yet. */
const CONTRAST_PAIRS = [
  { fg: 'content-text', bg: 'surface-page', min: 4.5 },
  { fg: 'content-text', bg: 'surface-raised', min: 4.5 },
  { fg: 'content-heading', bg: 'surface-page', min: 4.5 },
  { fg: 'content-placeholder', bg: 'surface-control', min: 4.5 },
  { fg: 'content-brand', bg: 'surface-raised', min: 4.5 },
  { fg: 'interaction-brand-visited', bg: 'surface-page', min: 4.5 },
  { fg: 'content-on-brand-solid', bg: 'surface-brand', min: 4.5 },
  { fg: 'content-on-control-solid', bg: 'surface-control-solid', min: 4.5 },
  { fg: 'content-on-selected', bg: 'surface-selected', min: 4.5 },
  { fg: 'content-on-selected-solid', bg: 'surface-selected-solid', min: 4.5 },
  { fg: 'content-on-neutral-solid', bg: 'surface-neutral', min: 4.5 },
  { fg: 'content-on-critical-solid', bg: 'surface-critical', min: 4.5 },
  { fg: 'content-on-information', bg: 'surface-information-subtle', min: 4.5 },
  { fg: 'content-on-success', bg: 'surface-success-subtle', min: 4.5 },
  { fg: 'content-on-warning', bg: 'surface-warning-subtle', min: 4.5 },
  { fg: 'content-on-critical', bg: 'surface-critical-subtle', min: 4.5 },
  { fg: 'content-information', bg: 'surface-page', min: 4.5 },
  { fg: 'content-success', bg: 'surface-page', min: 4.5 },
  { fg: 'content-warning', bg: 'surface-page', min: 4.5 },
  { fg: 'content-critical', bg: 'surface-page', min: 4.5 },
  { fg: 'content-critical', bg: 'surface-raised', min: 4.5 },
  { fg: 'content-text', bg: 'interaction-highlight', min: 4.5 },
  { fg: 'content-text', bg: 'interaction-selected-highlight', min: 4.5 },
  { fg: 'content-critical', bg: 'interaction-highlight', min: 4.5 },
  { fg: 'content-information', bg: 'surface-selected', min: 4.5 },
  { fg: 'content-success', bg: 'surface-selected', min: 4.5 },
  { fg: 'content-warning', bg: 'surface-selected', min: 4.5 },
  { fg: 'content-critical', bg: 'surface-selected', min: 4.5 },
  { fg: 'content-warning', bg: 'surface-header', min: 4.5 },
  { fg: 'border-control', bg: 'surface-control', min: 3 },
  { fg: 'surface-brand', bg: 'surface-page', min: 3 },
  { fg: 'surface-control-solid', bg: 'surface-page', min: 3 },
  { fg: 'border-brand-minor', bg: 'surface-page', min: 3 },
  { fg: 'content-on-accent', bg: 'surface-accent-subtle', min: 4.5 },
  { fg: 'content-on-accent-solid', bg: 'surface-accent', min: 4.5 },
  // Not a WCAG rule, and not from a standard: an empirical floor so that the hover of a solid brand
  // control stays visibly different from its rest state.
  { fg: 'interaction-brand-hover', bg: 'surface-brand', min: 1.2 },
  // `focus` is the token `--ods-semantic-color-focus`, not a surface.
  { fg: 'focus', bg: 'surface-page', min: 3 },
  { fg: 'focus', bg: 'surface-raised', min: 3 },
];

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

function toRgb(value) {
  if (typeof value !== 'string' || !HEX.test(value.trim())) {
    return null;
  }

  let digits = value.trim().slice(1);
  if (digits.length === 3) {
    digits = digits
      .split('')
      .map((digit) => digit + digit)
      .join('');
  }

  return [0, 2, 4].map((offset) => parseInt(digits.slice(offset, offset + 2), 16));
}

// WCAG 2.x relative luminance of an sRGB color.
function luminance(rgb) {
  const [r, g, b] = rgb.map((channel) => {
    const srgb = channel / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(first, second) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);

  return (lighter + 0.05) / (darker + 0.05);
}

function readRoot(file) {
  try {
    const { root } = JSON.parse(fs.readFileSync(file, 'utf8'));

    if (root && typeof root === 'object') {
      return root;
    }

    console.log(`ERROR ${file}: no \`root\` object`);
  } catch (error) {
    console.log(`ERROR ${file}: ${error.message}`);
  }

  return null;
}

function checkFile(file) {
  const root = readRoot(file);

  if (!root) {
    return true;
  }

  let failed = false;

  for (const { fg, bg, min } of CONTRAST_PAIRS) {
    const fgKey = `${PREFIX}${fg}`;
    const bgKey = `${PREFIX}${bg}`;
    const missingKeys = [fgKey, bgKey].filter((key) => !(key in root));

    if (missingKeys.length > 0) {
      console.log(`MISSING ${fg} on ${bg} (${missingKeys.join(', ')} not in root)`);
      failed = true;
      continue;
    }

    const fgRgb = toRgb(root[fgKey]);
    const bgRgb = toRgb(root[bgKey]);

    if (!fgRgb || !bgRgb) {
      console.log(`SKIP ${fg} on ${bg} (min ${min})`);
      failed = true;
      continue;
    }

    const floored = Math.floor(contrastRatio(fgRgb, bgRgb) * 100) / 100;
    const status = floored >= min ? 'OK' : 'KO';
    failed ||= status === 'KO';

    console.log(`${status} ${floored.toFixed(2)} ${fg} on ${bg} (min ${min})`);
  }

  return failed;
}

function main(files) {
  if (files.length === 0) {
    console.error('Usage: node scripts/check-contrast.js <tokens.json> [...]');
    return 1;
  }

  let failed = false;

  for (const file of files) {
    if (files.length > 1) {
      console.log(`# ${path.relative(process.cwd(), file)}`);
    }

    failed = checkFile(file) || failed;
  }

  return failed ? 1 : 0;
}

process.exitCode = main(process.argv.slice(2));
