// DX lot 1: full-text palette search, View-as-Markdown links, heading anchors.
// The page content scrolls in .shell__content: a section is in view once its
// heading sits at the top of it.
const isSectionInView = (id) => {
  const scroller = document.querySelector('.shell__content');
  const target = document.getElementById(id);
  if (!scroller || !target) {
    return false;
  }
  const offset = target.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
  return offset >= -2 && offset < scroller.clientHeight / 3;
};

async function suite(browser, { base, version }) {
  const root = `${base}/v${version}`;
  const results = [];
  const ok = (label, pass, detail = '') => results.push(`${pass ? 'OK ' : 'KO '} ${label}${pass ? '' : ` — ${detail}`}`);

  const ctx = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));

  // The emitted index is served next to the app and reasonably sized.
  const res = await page.request.get(`${root}/search-index.json`);
  const index = res.ok() ? await res.json() : [];
  ok('search-index.json served with a real corpus', res.ok() && index.length > 150, `status ${res.status()}, ${index.length} entries`);
  const weight = JSON.stringify(index).length;
  ok('search index stays lazy-load sized (< 1.5 MB)', weight < 1_500_000, `${Math.round(weight / 1024)} KB`);

  // Full-text search: a term that appears in NO page title must surface
  // content hits, and selecting one must navigate.
  await page.goto(`${root}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.shell__topbar');
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+k' : 'Control+k');
  await page.waitForSelector('[data-ods="command-filter"]', { timeout: 5000 });
  await page.locator('[data-ods="command-filter"]').fill('aria-describedby');
  // First real query: covers the lazy fetch of the index + the async render
  // of the "In the docs" group (no DOM signal to await when it stays empty).
  await page.waitForTimeout(1200);
  const contentGroup = page.getByText('In the docs', { exact: true });
  const hasContentHits = (await contentGroup.count()) > 0;
  ok('palette surfaces full-text hits ("aria-describedby")', hasContentHits, 'no "In the docs" group');
  if (hasContentHits) {
    const snippet = await page.locator('.shell__search-snippet').first().textContent();
    ok('content hit carries a matched snippet', /aria-describedby/i.test(snippet ?? ''), (snippet ?? '(none)').slice(0, 80));
    const marks = await page.locator('.shell__search-mark').count();
    ok('matched terms are bolded in the snippet', marks > 0, `${marks} marks`);
    await page.locator('.shell__search-option--content').first().click();
    await page.waitForTimeout(1500);
    ok('selecting a content hit navigates', !page.url().endsWith(`${root}/`), page.url());
    const hash = new URL(page.url()).hash;
    ok('the hit deep-links to its section', hash.length > 1, page.url());
    if (hash.length > 1) {
      const scrolledToSection = await page.evaluate(isSectionInView, decodeURIComponent(hash.slice(1)));
      ok('the section is scrolled into view (SPA nav)', scrolledToSection);
    }
    // Flash highlight (CSS Custom Highlight API): painted on arrival…
    const flashed = await page.evaluate(() => CSS.highlights?.has('ods-search') ?? false);
    ok('searched terms are flash-highlighted on arrival', flashed);
    // …and self-cleared shortly after. Coupled to CLEAR_AFTER_MS (2600) in
    // src/doc/searchHighlight.ts: keep this wait above CLEAR_AFTER_MS.
    await page.waitForTimeout(2800);
    const cleared = await page.evaluate(() => !(CSS.highlights?.has('ods-search') ?? false));
    ok('the flash highlight clears itself', cleared);
  }

  // Selecting a hit closes the palette programmatically: ⌘K must reopen it on
  // an empty filter, not on the previous query and its results.
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+k' : 'Control+k');
  await page.waitForSelector('[data-ods="command-filter"]', { timeout: 5000 });
  const reopenedQuery = await page.locator('[data-ods="command-filter"]').inputValue();
  ok('the palette reopens on an empty query after a selection', reopenedQuery === '', `"${reopenedQuery}"`);

  // A term found only in a section heading (moved out of the body at build
  // time) still finds that section.
  await page.locator('[data-ods="command-filter"]').fill('textarea placement');
  await page.waitForTimeout(900);
  const placementHint = await page.locator('.shell__search-option--content .shell__search-option-hint').first().textContent();
  ok('a heading-only term finds its section ("textarea placement")', placementHint === 'Placement', placementHint ?? '(no content hit)');

  // Hidden pages (Roadmap) stay out of the full-text hits too, not only of the
  // title matches, while the index still holds them. Other pages mentioning
  // the roadmap (What's new) are still found.
  await page.locator('[data-ods="command-filter"]').fill('roadmap');
  await page.waitForTimeout(900);
  const hitTitles = await page.locator('.shell__search-option--content > span:not([class])').allTextContents();
  const roadmapHits = hitTitles.filter((title) => title === 'Roadmap').length;
  ok('hidden pages stay out of the full-text hits ("roadmap")', index.some((entry) => entry.r.startsWith('/guides/roadmap')) && roadmapHits === 0, `${roadmapHits} hit(s)`);

  // Mixed-language query: the strict all-terms pass finds nothing, the
  // any-term fallback must still surface the cognate ("validation").
  await page.locator('[data-ods="command-filter"]').fill('validation formulaire');
  await page.waitForTimeout(900);
  ok('fallback surfaces hits for a mixed FR/EN query', (await page.locator('.shell__search-option--content').count()) > 0);

  // Status badges are matched too: "deprecated" lists the deprecated pages
  // (Switch) in their own group, not only as full-text hits.
  await page.locator('[data-ods="command-filter"]').fill('deprecated');
  await page.waitForTimeout(900);
  const deprecatedSwitch = page.getByRole('group', { name: 'Components' }).locator('[data-ods="command-option"]', { hasText: 'Switch' });
  ok('"deprecated" lists Switch in the Components group', (await deprecatedSwitch.count()) > 0);

  // A page listed by title is not repeated as a content hit, whatever the
  // #section of the hit: no "In the docs" entry may land on the Button
  // documentation page (its technical tab is another page, allowed).
  await page.locator('[data-ods="command-filter"]').fill('button');
  await page.waitForTimeout(900);
  const labelsOf = (pattern) => new Set(index.filter((entry) => pattern.test(entry.r)).map((entry) => entry.s));
  const technicalLabels = labelsOf(/^\/components\/button\/technical(#|$)/);
  const documentationLabels = [...labelsOf(/^\/components\/button(#|$)/)].filter((label) => !technicalLabels.has(label));
  const repeated = await page.locator('.shell__search-option--content').evaluateAll((options, labels) => options
    .map((option) => [option.children[1]?.textContent, option.querySelector('.shell__search-option-hint')?.textContent])
    .filter(([title, hint]) => title === 'Button' && labels.includes(hint))
    .map(([, hint]) => hint), documentationLabels);
  ok('"button" does not repeat the Button page under "In the docs"', documentationLabels.length > 0 && repeated.length === 0, `repeated sections: ${repeated.join(', ') || '(no doc labels in index)'}`);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  // View as Markdown: the topbar link targets the page's llms document.
  await page.goto(`${root}/components/button`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('[data-testid="view-as-markdown"]', { timeout: 10000 });
  const mdHref = await page.locator('[data-testid="view-as-markdown"]').getAttribute('href');
  ok('View as Markdown targets the page llms doc', /llms\/react-components-button--documentation\.txt$/.test(mdHref ?? ''), mdHref ?? '(none)');
  const mdRes = await page.request.get(mdHref);
  const md = mdRes.ok() ? await mdRes.text() : '';
  ok('the linked markdown resolves and is the right page', mdRes.ok() && /^---\n/.test(md) && /button/i.test(md.slice(0, 300)), `status ${mdRes.status()}`);

  // The link hides where no llms document exists.
  await page.goto(`${root}/tools/sandbox`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.shell__topbar');
  await page.waitForTimeout(500);
  ok('View as Markdown hidden on tool pages', (await page.locator('[data-testid="view-as-markdown"]').count()) === 0);

  // Heading anchors: hover-revealed, native hash href. (Own try: a missing
  // heading must report KO, not kill the whole run.)
  try {
    await page.goto(`${root}/components/button`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.doc__anchor', { state: 'attached', timeout: 30000 });
    const anchor = page.locator('.doc__anchor').first();
    ok('headings carry an anchor link', (await anchor.count()) > 0);
    const href = await anchor.getAttribute('href');
    ok('anchor href targets the heading id', Boolean(href?.startsWith('#')), href ?? '(none)');

    // Deep link to a section: the lazy content must still honor the hash. The
    // last section, as the first one is in view without any scroll.
    const targetId = await page.locator('h2[id]').last().getAttribute('id');
    const deep = await ctx.newPage();
    deep.on('pageerror', (e) => errors.push(e.message));
    await deep.goto(`${root}/components/button#${targetId}`, { waitUntil: 'domcontentloaded' });
    await deep.waitForSelector(`h2[id="${targetId}"]`, { state: 'attached', timeout: 30000 });
    await deep.waitForTimeout(1500);
    const scrolled = await deep.evaluate(isSectionInView, targetId);
    ok(`#hash deep link scrolls to the section (#${targetId})`, scrolled);
    await deep.close();
  } catch (error) {
    ok('heading anchors', false, String(error).slice(0, 120));
  }

  // Index deep-links land on a real heading id: sample 5 `#` routes across
  // the route families (component doc, technical tab, guide, helper, +1).
  const hashed = index.filter((entry) => entry.r.includes('#'));
  const families = [/^\/components\/[^/]+#/, /^\/components\/[^/]+\/technical#/, /^\/guides\//, /^\/helpers\//];
  const sample = families.map((family) => hashed.find((entry) => family.test(entry.r))).filter(Boolean);
  sample.push(...hashed.filter((_, at) => at === Math.floor(hashed.length / 2)));
  const routes = [...new Set(sample.map((entry) => entry.r))].slice(0, 5);
  for (const route of routes) {
    const hash = route.split('#')[1];
    const landing = await ctx.newPage();
    landing.on('pageerror', (e) => errors.push(e.message));
    try {
      await landing.goto(`${root}${route}`, { waitUntil: 'domcontentloaded' });
      await landing.waitForFunction((id) => document.getElementById(id) !== null, hash, { timeout: 30000 });
      ok(`index deep-link resolves to a heading id (${route})`, true);
    } catch {
      ok(`index deep-link resolves to a heading id (${route})`, false, `no element #${hash}`);
    }
    await landing.close();
  }
  ok('5 index deep-links sampled', routes.length === 5, `${routes.length} sampled`);

  // Repeated heading labels get unique ids (accessibility guide: one "Related
  // Sources" per section), deep links reach the right one, and the Technical
  // tab's enum names carry an id and an anchor too.
  const repeatedPage = await ctx.newPage();
  repeatedPage.on('pageerror', (e) => errors.push(e.message));
  try {
    await repeatedPage.goto(`${root}/guides/accessibility#related-sources-2`, { waitUntil: 'domcontentloaded' });
    await repeatedPage.waitForFunction(() => document.getElementById('related-sources-2') !== null, null, { timeout: 30000 });
    const ids = await repeatedPage.$$eval('.doc__heading[id]', (els) => els.map((el) => el.id));
    const duplicates = ids.filter((id, at) => ids.indexOf(id) !== at);
    ok('heading ids are unique on a page with repeated labels', duplicates.length === 0, duplicates.join(','));
    const anchorsMatch = await repeatedPage.$$eval('.doc__heading-row', (rows) => rows.every((row) => {
      const heading = row.querySelector('.doc__heading');
      return row.querySelector('.doc__anchor')?.getAttribute('href') === `#${heading?.id}`;
    }));
    ok('each hover anchor targets its own heading', anchorsMatch);
    const all = await repeatedPage.$$eval('.doc__heading', (els) => els.filter((el) => el.textContent?.trim() === 'Related Sources').length);
    ok('the guide repeats "Related Sources" (fixture still valid)', all > 1, `${all} found`);
  } catch (error) {
    ok('repeated heading labels', false, String(error).slice(0, 120));
  }
  await repeatedPage.close();

  // The ToC collects the ids after the dedupe pass: the second "Dependency" of
  // the migration guide links to its own heading, not to the first one.
  const toc = await ctx.newPage();
  toc.on('pageerror', (e) => errors.push(e.message));
  try {
    await toc.goto(`${root}/guides/migration-14-to-15`, { waitUntil: 'domcontentloaded' });
    await toc.waitForFunction(() => document.getElementById('dependency-2') !== null, null, { timeout: 30000 });
    await toc.locator('.doc-layout__toc-node', { hasText: /^Dependency$/ }).nth(1).click();
    await toc.waitForTimeout(300);
    const tocHash = await toc.evaluate(() => location.hash);
    ok('the ToC links a repeated heading to its own id', tocHash === '#dependency-2', tocHash || '(no hash)');
  } catch (error) {
    ok('ToC of repeated headings', false, String(error).slice(0, 120));
  }
  await toc.close();

  const technical = await ctx.newPage();
  technical.on('pageerror', (e) => errors.push(e.message));
  try {
    await technical.goto(`${root}/components/badge/technical`, { waitUntil: 'domcontentloaded' });
    await technical.waitForSelector('#badge-size', { timeout: 30000 });
    const href = await technical.locator('#badge-size').locator('xpath=..').locator('.doc__anchor').getAttribute('href');
    ok('enum headings of the Technical tab carry an id and an anchor', href === '#badge-size', href ?? '(none)');
  } catch (error) {
    ok('enum headings of the Technical tab', false, String(error).slice(0, 120));
  }
  await technical.close();

  ok('zero pageerror', errors.length === 0, errors[0] ?? '');
  await ctx.close();
  return results;
}

export { suite };
