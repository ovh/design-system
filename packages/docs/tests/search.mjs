// DX lot 1: full-text palette search, View-as-Markdown links, heading anchors.
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
      const scrolledToSection = await page.evaluate(() => (document.querySelector('.shell__main')?.scrollTop ?? 0) > 0);
      ok('the section is scrolled into view (SPA nav)', scrolledToSection);
    }
    // Flash highlight (CSS Custom Highlight API): painted on arrival…
    const flashed = await page.evaluate(() => CSS.highlights?.has('ods-search') ?? false);
    ok('searched terms are flash-highlighted on arrival', flashed);
    // …and self-cleared shortly after.
    await page.waitForTimeout(2800);
    const cleared = await page.evaluate(() => !(CSS.highlights?.has('ods-search') ?? false));
    ok('the flash highlight clears itself', cleared);
  }

  // Mixed-language query: the strict all-terms pass finds nothing, the
  // any-term fallback must still surface the cognate ("validation").
  await page.keyboard.press(process.platform === 'darwin' ? 'Meta+k' : 'Control+k');
  await page.waitForSelector('[data-ods="command-filter"]', { timeout: 5000 });
  await page.locator('[data-ods="command-filter"]').fill('validation formulaire');
  await page.waitForTimeout(900);
  ok('fallback surfaces hits for a mixed FR/EN query', (await page.locator('.shell__search-option--content').count()) > 0);
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

    // Deep link to a section: the lazy content must still honor the hash.
    const targetId = await page.locator('h2[id]').first().getAttribute('id');
    const deep = await ctx.newPage();
    deep.on('pageerror', (e) => errors.push(e.message));
    await deep.goto(`${root}/components/button#${targetId}`, { waitUntil: 'domcontentloaded' });
    await deep.waitForSelector(`h2[id="${targetId}"]`, { state: 'attached', timeout: 30000 });
    await deep.waitForTimeout(1500);
    const scrolled = await deep.evaluate(() => (document.querySelector('.shell__main')?.scrollTop ?? 0) > 0);
    ok(`#hash deep link scrolls to the section (#${targetId})`, scrolled);
    await deep.close();
  } catch (error) {
    ok('heading anchors', false, String(error).slice(0, 120));
  }

  ok('zero pageerror', errors.length === 0, errors[0] ?? '');
  await ctx.close();
  return results;
}

export { suite };
