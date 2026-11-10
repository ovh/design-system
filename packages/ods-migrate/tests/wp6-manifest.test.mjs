import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { minMajor, parseJson, scanLlmsUrls, transformManifest } from '../src/manifest.mjs';

const fixtures = new URL('./fixtures/wp6/manifest/', import.meta.url);
const read = (name) => readFileSync(new URL(name, fixtures), 'utf8');
const json = (object) => `${JSON.stringify(object, null, 2)}\n`;
const messages = (list) => list.map(({ message }) => message);

describe('manifest: package.json', () => {
  it('migrates a v19 app package.json in place (shiki, recipes, storybook, overrides, notes)', () => {
    const report = transformManifest(read('app.input.json'), { hasTailwindConfig: true, lockfile: 'npm' });
    assert.equal(report.output, read('app.output.json'));
    assert.deepEqual(report.changes.map(({ line }) => line), [...report.changes.map(({ line }) => line)].sort((a, b) => a - b));
    assert.equal(report.changes.length, 5);
    const notes = messages(report.notes).join('\n');
    assert.match(notes, /@types\/react-dom \^18\.3\.0 on React 19/);
    assert.match(notes, /scripts\.docs reads @ovhcloud\/ods-storybook/);
    assert.match(notes, /Vite app, not a Storybook build/);
    assert.match(notes, /browserslist: ods-react 20 is built for Chrome 111, Edge 111, Firefox 114, Safari 16\.4/);
  });

  it('is idempotent', () => {
    const report = transformManifest(read('app.output.json'), { hasTailwindConfig: true, lockfile: 'npm' });
    assert.equal(report.output, read('app.output.json'));
    assert.deepEqual(report.changes, []);
  });

  it('keeps CRLF and tabs', () => {
    assert.equal(transformManifest(read('crlf.input.json')).output, read('crlf.output.json'));
  });

  it('leaves a Shiki range already on 4, and ranges it cannot read', () => {
    const source = json({ dependencies: { '@shikijs/langs': '>=4.0.0', '@shikijs/themes': 'workspace:*', '@shikijs/types': 'latest', shiki: '^3.0.0' } });
    assert.equal(transformManifest(source).output, source);
  });

  it('only notes tailwindcss when no tailwind.config sits next to the package.json', () => {
    const source = json({ dependencies: { '@ovhcloud/ods-recipes': '^19.0.0' } });
    const report = transformManifest(source, { hasTailwindConfig: false });
    assert.equal(report.output, source);
    assert.match(messages(report.notes)[0], /no longer installs tailwindcss/);
  });

  it('creates devDependencies for tailwindcss when there is none', () => {
    const source = json({ name: 'a', dependencies: { '@ovhcloud/ods-recipes': '^19.0.0' } });
    const output = transformManifest(source, { hasTailwindConfig: true }).output;
    assert.deepEqual(JSON.parse(output).devDependencies, { tailwindcss: '^3.4.18' });
  });

  it('does nothing for tailwindcss when the app already declares it', () => {
    const source = json({ dependencies: { '@ovhcloud/ods-recipes': '^19.0.0' }, devDependencies: { tailwindcss: '^3.3.0' } });
    const report = transformManifest(source, { hasTailwindConfig: true });
    assert.equal(report.output, source);
    // Only the reminder to bump ods-recipes.
    assert.deepEqual(messages(report.notes).map((message) => message.split(':')[0]), ['@ovhcloud/ods-recipes ^19.0.0']);
  });

  it('reminds to bump the ODS 19 ranges, once per package.json, and never bumps them', () => {
    const source = json({ dependencies: { '@ovhcloud/ods-react': '19.7.3', '@ovhcloud/ods-themes': '^19.2.0', '@ovhcloud/ods-recipes': '19.7.3', tailwindcss: '^3.4.18' } });
    const report = transformManifest(source);
    assert.equal(report.output, source);
    assert.equal(report.notes.length, 1);
    assert.equal(report.notes[0].line, 3);
    assert.match(report.notes[0].message, /^@ovhcloud\/ods-react 19\.7\.3, @ovhcloud\/ods-themes \^19\.2\.0, @ovhcloud\/ods-recipes 19\.7\.3: bump them to \^20\.0\.0 once you have reviewed the changes of ods-migrate, install, then run your type check \(step 4 of MIGRATION\.md\)\..*--from 19/);
    for (const range of ['^20.0.0', 'workspace:*', '18.6.0']) {
      assert.deepEqual(transformManifest(json({ dependencies: { '@ovhcloud/ods-react': range } })).notes, [], range);
    }
  });

  it('points an app on Tailwind and ODS 19 to @ovhcloud/ods-tailwind (BC-30)', () => {
    const v4 = transformManifest(json({ dependencies: { '@ovhcloud/ods-react': '19.7.3' }, devDependencies: { tailwindcss: '^4.1.0' } }));
    const note = messages(v4.notes).find((message) => message.startsWith('tailwindcss'));
    assert.match(note, /^tailwindcss \^4\.1\.0: ODS v20 ships @ovhcloud\/ods-tailwind, .*: add "@ovhcloud\/ods-tailwind": "\^20\.0\.0", import it before the ODS theme, and remove the ODS keys of your @theme .*the Tailwind CSS guide/);
    // Tailwind v3: the CLI says it where a configuration declares the ODS keys (other-formats.test.mjs).
    const v3 = transformManifest(json({ dependencies: { '@ovhcloud/ods-react': '19.7.3' }, devDependencies: { tailwindcss: '^3.4.0' } }));
    assert.equal(messages(v3.notes).filter((message) => message.startsWith('tailwindcss')).length, 0);
    const already = transformManifest(json({ dependencies: { '@ovhcloud/ods-react': '19.7.3', '@ovhcloud/ods-tailwind': '^20.0.0' }, devDependencies: { tailwindcss: '^4.1.0' } }));
    assert.equal(messages(already.notes).filter((message) => message.startsWith('tailwindcss')).length, 0);
  });

  it('tells an app on ODS 19 that also uses the ODS 18 components to keep the v19 theme loaded', () => {
    const source = json({ dependencies: { '@ovh-ux/manager-react-components': '2.43.1', '@ovhcloud/ods-components': '18.6.2', '@ovhcloud/ods-react': '^19.3.0', '@ovhcloud/ods-themes': '^19.3.0' } });
    const report = transformManifest(source);
    assert.equal(report.output, source);
    const note = messages(report.notes).find((message) => message.startsWith('@ovh-ux/manager-react-components'));
    assert.equal(report.notes.find(({ message }) => message === note).line, 3);
    assert.match(note, /^@ovh-ux\/manager-react-components 2\.43\.1, @ovhcloud\/ods-components 18\.6\.2: these components read the --ods-\* tokens of the @ovhcloud\/ods-themes 19 theme, .* they lose their colours\. .*"@ovhcloud\/ods-themes-v19": "npm:@ovhcloud\/ods-themes@\^19\.3\.0" and import '@ovhcloud\/ods-themes-v19\/default\/css'/);
    // ODS 17 (and manager-react-components 1, built on it) brings its own theme; without ods-themes 19, nothing to keep.
    for (const dependencies of [
      { '@ovh-ux/manager-react-components': '1.48.0', '@ovhcloud/ods-components': '17.2.2', '@ovhcloud/ods-react': '19.7.3', '@ovhcloud/ods-themes': '19.7.3' },
      { '@ovhcloud/ods-components': '18.6.2', '@ovhcloud/ods-react': '^20.0.0', '@ovhcloud/ods-themes': '^20.0.0' },
      { '@ovhcloud/ods-react': '19.7.3', '@ovhcloud/ods-themes': '19.7.3' },
    ]) {
      assert.equal(messages(transformManifest(json({ dependencies })).notes).filter((message) => /lose their colours/.test(message)).length, 0, JSON.stringify(dependencies));
    }
  });

  it('writes the @types/react overrides under the key of the lockfile', () => {
    const source = json({ dependencies: { react: '^19.0.0' } });
    assert.deepEqual(JSON.parse(transformManifest(source, { lockfile: 'yarn' }).output).resolutions, { '@types/react': '^19', '@types/react-dom': '^19' });
    assert.deepEqual(JSON.parse(transformManifest(source, { lockfile: 'pnpm' }).output).pnpm, { overrides: { '@types/react': '^19', '@types/react-dom': '^19' } });
    const withPnpm = json({ dependencies: { react: '^19.0.0' }, pnpm: { overrides: { '@types/react': '^19' } } });
    assert.deepEqual(JSON.parse(transformManifest(withPnpm, { lockfile: 'pnpm' }).output).pnpm.overrides, { '@types/react': '^19', '@types/react-dom': '^19' });
  });

  it('says why it adds the overrides, and leaves them to a pnpm-workspace.yaml that keeps its own', () => {
    const source = json({ name: 'a', dependencies: { react: '^19.0.0' } });
    assert.match(messages(transformManifest(source, { lockfile: 'pnpm' }).changes)[0], /^pnpm\.overrides: @types\/react, @types\/react-dom \^19 added, so that every package of the install uses the same React 19 types/);
    // pnpm also reads the overrides of pnpm-workspace.yaml: when the file exists, the types go there, by hand.
    const kept = transformManifest(source, { lockfile: 'pnpm', workspaceOverrides: ['lodash', '@types/react'] });
    assert.equal(kept.output, source);
    assert.match(messages(kept.notes)[0], /your pnpm-workspace\.yaml holds the pnpm settings: add "@types\/react-dom": "\^19" under its overrides/);
    assert.equal(transformManifest(source, { lockfile: 'pnpm', workspaceOverrides: ['@types/react', '@types/react-dom'] }).notes.length, 0);
    // A pnpm-workspace.yaml without overrides (allowBuilds, minimumReleaseAge only) holds the settings all the same.
    const settings = transformManifest(source, { lockfile: 'pnpm', workspaceOverrides: [] });
    assert.equal(settings.output, source);
    assert.match(messages(settings.notes)[0], /add "@types\/react": "\^19" and "@types\/react-dom": "\^19" under its overrides/);
    // pnpm 11 ignores the "pnpm" field of package.json: the note says to create the file.
    const pnpm11 = json({ name: 'a', packageManager: 'pnpm@11.1.1', dependencies: { react: '^19.0.0' } });
    const created = transformManifest(pnpm11, { lockfile: 'pnpm' });
    assert.equal(created.output, pnpm11);
    assert.match(messages(created.notes)[0], /create a pnpm-workspace\.yaml next to this package\.json \(pnpm 11 ignores the "pnpm" field of package\.json\)/);
    assert.ok(JSON.parse(transformManifest(json({ packageManager: 'pnpm@10.14.0', dependencies: { react: '^19.0.0' } }), { lockfile: 'pnpm' }).output).pnpm.overrides);
  });

  it('uses the React major of the workspace for a root package.json', () => {
    const source = json({ name: 'root', private: true });
    assert.deepEqual(JSON.parse(transformManifest(source, { lockfile: 'npm', reactMajor: 19 }).output).overrides, { '@types/react': '^19', '@types/react-dom': '^19' });
    assert.equal(transformManifest(source, { lockfile: 'npm', reactMajor: 18 }).output, source);
  });

  it('adds nothing on React 18, and only notes when the package manager is unknown', () => {
    assert.equal(transformManifest(json({ dependencies: { react: '^18.2.0' } }), { lockfile: 'npm' }).output, json({ dependencies: { react: '^18.2.0' } }));
    const report = transformManifest(json({ name: 'a', dependencies: { react: '^19.0.0' } }), { lockfile: null });
    assert.deepEqual(report.changes, []);
    assert.match(messages(report.notes)[0], /single @types\/react version/);
  });

  it('notes a .browserslistrc', () => {
    assert.match(messages(transformManifest(json({ name: 'a' }), { hasBrowserslistrc: true }).notes)[0], /^\.browserslistrc: /);
  });

  it('renames ods-storybook in place, and only notes it when ods-docs is already there', () => {
    const report = transformManifest(json({ devDependencies: { '@ovhcloud/ods-docs': '^20.0.0', '@ovhcloud/ods-storybook': '^19.0.0' } }));
    assert.deepEqual(report.changes, []);
    assert.match(messages(report.notes)[0], /already declared/);
  });

  it('throws a SyntaxError on invalid JSON', () => {
    assert.throws(() => transformManifest('{ "a": 1, }'), SyntaxError);
    assert.throws(() => parseJson('{ "a": 1 } x'), /trailing content/);
  });
});

describe('manifest: versions', () => {
  it('reads the major of the lowest version a range accepts', () => {
    assert.equal(minMajor('^19.1.0'), 19);
    assert.equal(minMajor('~19'), 19);
    assert.equal(minMajor('19.x'), 19);
    assert.equal(minMajor('>=18 <20'), 18);
    assert.equal(minMajor('^20.0.0 || ^19.2.0'), 19);
    assert.equal(minMajor('19.0.0 - 20.0.0'), 19);
    assert.equal(minMajor('npm:@ovhcloud/ods-react@^19.3.0'), 19);
    assert.equal(minMajor('workspace:^20.0.0'), 20);
    assert.equal(minMajor('workspace:*'), null);
    assert.equal(minMajor('latest'), null);
    assert.equal(minMajor('file:../ods'), null);
    assert.equal(minMajor('<20'), null);
  });
});

describe('manifest: llms URLs', () => {
  it('notes the two llms files removed in v20, with their lines', () => {
    const source = "const a = 'https://ovh.github.io/design-system/latest/llms/react-components-gallery.txt';\n\nfetch(`${base}/react-components-icon--gallery.txt`);\nconst ok = 'llms/ods-components-index.txt';\n";
    const notes = scanLlmsUrls(source);
    assert.deepEqual(notes.map(({ line }) => line), [1, 3]);
    assert.match(notes[0].message, /ods-components-index\.txt/);
    assert.match(notes[1].message, /react-components-icon--documentation\.txt/);
  });
});
