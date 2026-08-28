#!/usr/bin/env zx
/**
 * execution from monorepo:
 * `npx zx scripts/generate-gh-pages.mjs`
 */
import { resolve } from 'path';
import { tmpdir } from 'os';

const currentVersion = require('../lerna.json').version;

// Dual lineage: 19.7.3 is the last version released as the Storybook site
// (@ovhcloud/ods-storybook); everything above it is the docs platform
// (@ovhcloud/ods-docs). The boundary is explicit rather than implied by the
// order of packageNames, so a version that ends up published in both
// lineages still deploys the build that actually shipped for it.
const packageNames = ['@ovhcloud/ods-storybook', '@ovhcloud/ods-docs'];

// Sortable key from major.minor.patch. Enough to place a version relative to
// the boundary: a prerelease never straddles it (19.7.3-alpha.0 ranks with
// 19.7.3, 20.0.0-alpha.0 ranks with 20.0.0).
const rank = (version) => version.split('-')[0].split('.')
  .reduce((acc, part) => acc * 1000 + Number(part), 0);
const STORYBOOK_LINEAGE_MAX = rank('19.7.3');
const tmpDirName = 'ods-gh-pages';
const outDirName = 'docs';

(async () => {

  await $`rm -rf dist`;
  await $`mkdir -p dist`;
  await $`echo "Documentation generated for version ${currentVersion} at ${new Date().toISOString()}" > dist/status.html`;

  // clean tmp specific dir
  const tmpOdsDir = resolve(tmpdir(), `${tmpDirName}`);
  await $`rm -rf ${tmpOdsDir}/*`;

  // Keyed by version: a version is deployed once, by the lineage that owns it.
  const lineages = new Map();
  for (const packageName of packageNames) {
    try {
      // npm prints a bare string (not an array) when exactly one version is
      // published, hence the [].concat normalization.
      const list = [].concat(JSON.parse(await $`npm view ${packageName} versions --json`));
      for (const version of list) {
        const owner = rank(version) <= STORYBOOK_LINEAGE_MAX ? packageNames[0] : packageNames[1];
        if (packageName !== owner) {
          console.error(`skipping ${packageName}@${version}: ${owner} owns this version`);
          continue;
        }
        lineages.set(version, { packageName, version });
      }
    } catch (e) {
      // E404 = never published (ods-docs before its first release): a
      // legitimately empty lineage. Any other failure (network, registry
      // outage, auth) must abort here: continuing would reach the
      // `rm -rf ${outDirName}/v*` below with a partial lineage and wipe the
      // archived versions from the deployed site.
      if (`${e.stderr ?? e}`.includes('E404')) {
        console.error(`no published versions for ${packageName}, skipping`);
      } else {
        throw e;
      }
    }
  }

  for (const { packageName, version } of lineages.values()) {
    // create a dir for this version
    const dir = resolve(tmpOdsDir, `${version}`);
    await $`mkdir -p ${dir}`;

    try {
    if (process.env.CDS_INTEGRATION_ARTIFACT_MANAGER_TOKEN) {
      // npm pack respects the configured registry + auth (Artifactory)
      await $`npm pack ${packageName}@${version} --pack-destination ${dir}`;
      const tgzName = `${packageName.replace('@', '').replace('/', '-')}-${version}.tgz`;
      const tgzPath = resolve(dir, tgzName);
      await $`tar -xzf ${tgzPath} -C ${dir} --strip 1`;
      await $`rm ${tgzPath}`;
    } else {
      let tarball = await $`npm view ${packageName}@${version} dist.tarball`;
      tarball = `${tarball.stdout.trim()}`;
      const command = `curl -sS "${tarball}" | tar -xzf - -C ${dir} --strip 1`;
      await $([command]);
    }

    } catch (e) {
      // One unfetchable version (unpublished, auth) must not sink the deploy.
      console.error(`cannot fetch ${packageName}@${version}, skipping`, e);
      continue;
    }

    try {
      // Replace, never nest: same reason as the current-build block below.
      await $`rm -rf dist/v${version}`;
      await $`mv ${dir}/dist dist/v${version}`;
    } catch (e) {
      console.error(`No dist dir found, ignoring the version`, e);
    }
  }
  try {
    // add the current build (released just done). The npm loop may already
    // have deployed this same version (manual re-deploy on a released
    // master): replace it, or cp would nest into the existing dir.
    await $`rm -rf dist/v${currentVersion}`;
    await $`cp -r packages/docs/dist dist/v${currentVersion}`;
    await $`ln -s v${currentVersion} dist/latest`;
  } catch (e) {
    console.error(`cannot add the current docs build. ignore it`, e);
  }
  try {
    // move all into out dir
    await $`rm -rf ${outDirName}/v*`;
    await $`mv dist/* ${outDirName}`;
  } catch (e) {
    console.error(`cannot move files into outDir.`, e);
  }
  try {
    // SPA deep links: GitHub Pages serves 404.html for unknown paths; it
    // bounces /vX/route to /vX/?p=/route, restored client-side by the app.
    await $`cp scripts/gh-pages-404.html ${outDirName}/404.html`;
  } catch (e) {
    console.error(`cannot install the 404 redirect page.`, e);
  }
  try {
    // Root llms.txt (llmstxt.org convention): agents probe <site-root>/llms.txt.
    // Regenerated at each deploy from what is actually on disk, so only the
    // versions that really ship an llms set are listed.
    const { existsSync, readdirSync, writeFileSync } = require('node:fs');
    // Prereleases are excluded from the listing (agents should not be pointed
    // at an alpha), which also spares rank() its release/prerelease tie.
    const llmsVersions = readdirSync(outDirName)
      .filter((name) => /^v\d/.test(name) && !name.includes('-') && existsSync(`${outDirName}/${name}/llms/llms.txt`))
      .sort((a, b) => rank(b.slice(1)) - rank(a.slice(1)));
    writeFileSync(`${outDirName}/llms.txt`, [
      '# OVHcloud Design System Documentation for LLMs',
      '',
      '> OVHcloud Design System is a collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products.',
      '',
      `Current version: ${currentVersion}`,
      '',
      '## Documentation Sets (latest release)',
      '',
      '- [Entry point](./latest/llms/llms.txt): summary of the latest documentation set',
      '- [Complete documentation](./latest/llms/llms-full.txt): the full documentation in one file',
      '- [Machine-readable index](./latest/llms/llms-index.json): every file with type, token estimate and canonical URL',
      '',
      '## Versions',
      '',
      'Each release ships an immutable copy of its documentation set. Match the documentation to the @ovhcloud/ods-react version you use:',
      '',
      '1. Prefer the local copy shipped in the npm package: node_modules/@ovhcloud/ods-react/dist/llms/ (always the installed version, works offline)',
      '2. Otherwise use the pinned set matching your package.json version below',
      '3. Fall back to [latest](./latest/llms/llms.txt) only when the version is unknown',
      '',
      ...llmsVersions.map((name) => `- [${name}](./${name}/llms/llms.txt)`),
      '',
    ].join('\n'));
  } catch (e) {
    console.error(`cannot write the root llms.txt.`, e);
  }
})();
