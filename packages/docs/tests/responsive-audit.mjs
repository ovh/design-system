// Responsive audit: screenshots + overflow/pageerror report for key pages at
// mobile/tablet/desktop viewports, against the gh-pages sim of the current dist.
// Usage: node tests/responsive-audit.mjs <outDir>
import { chromium } from 'playwright';
import { serveSite } from './ghpages-server.mjs';
import { setupSim } from './setup-sim.mjs';
import fs from 'node:fs';

const OUT = process.argv[2] ?? 'responsive-audit';
fs.mkdirSync(OUT, { recursive: true });

const PORT = Number(process.env.DOCS_TEST_PORT ?? 8125);
const { simRoot, version } = setupSim();
const server = await serveSite(simRoot, PORT);
const base = `http://localhost:${PORT}/design-system/v${version}`;

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
];

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'component-doc', path: '/components/button' },
  { name: 'component-examples', path: '/components/datepicker/examples' },
  { name: 'component-technical', path: '/components/command/technical' },
  { name: 'guide', path: '/guides/get-started' },
  { name: 'gallery', path: '/components/icon/gallery' },
  { name: 'sandbox', path: '/tools/sandbox' },
  { name: 'themegen', path: '/tools/theme-generator' },
];

const browser = await chromium.launch();
const report = [];

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const p of PAGES) {
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    try {
      await page.goto(`${base}${p.path}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForSelector('.shell__content, .shell__error', { timeout: 30000 }).catch(() => {});
      await page.waitForTimeout(2500);
      // flush before capture (stale rasterization trap)
      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const overflowers = [];
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > window.innerWidth + 1 && r.width > 24) {
            overflowers.push(`${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]}(${Math.round(r.right)})`);
            if (overflowers.length >= 5) break;
          }
        }
        return {
          hScroll: doc.scrollWidth > window.innerWidth + 1,
          scrollWidth: doc.scrollWidth,
          innerWidth: window.innerWidth,
          sidebarVisible: !!document.querySelector('.shell__sidebar') && getComputedStyle(document.querySelector('.shell__sidebar')).display !== 'none',
          contentWidth: document.querySelector('.shell__content')?.getBoundingClientRect().width ?? 0,
          overflowers,
        };
      });
      await page.screenshot({ path: `${OUT}/${vp.name}-${p.name}.png` });
      report.push({ vp: vp.name, page: p.name, ...metrics, errors: errors.slice(0, 3) });
    } catch (e) {
      report.push({ vp: vp.name, page: p.name, failed: String(e).slice(0, 120) });
    }
    await page.close();
  }
  await ctx.close();
}

await browser.close();
server.close();
fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2));
for (const r of report) {
  const flag = r.failed ? 'FAIL' : r.hScroll ? 'H-SCROLL' : 'ok';
  console.log(`${flag.padEnd(9)} ${r.vp.padEnd(8)} ${r.page.padEnd(20)} content=${Math.round(r.contentWidth ?? 0)} ${r.overflowers?.length ? 'overflow: ' + r.overflowers.join(' ') : ''} ${r.errors?.length ? 'ERR: ' + r.errors[0].slice(0, 60) : ''} ${r.failed ?? ''}`);
}
