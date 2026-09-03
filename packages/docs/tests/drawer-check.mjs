// Mobile nav drawer interaction check against the gh-pages sim.
import { chromium } from 'playwright';
import { serveSite } from './ghpages-server.mjs';
import { setupSim } from './setup-sim.mjs';

const PORT = Number(process.env.DOCS_TEST_PORT ?? 8126);
const { simRoot, version } = setupSim();
const server = await serveSite(simRoot, PORT);
const base = `http://localhost:${PORT}/design-system/v${version}`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));

await page.goto(`${base}/components/button`, { waitUntil: 'domcontentloaded' });
await page.waitForSelector('.shell__topbar', { timeout: 30000 });

// 1. open the drawer
await page.getByRole('button', { name: 'Open navigation' }).click();
await page.waitForSelector('.shell__drawer [data-ods="tree-view"], .shell__drawer .shell__nav', { timeout: 5000 });
const drawerVisible = await page.locator('.shell__drawer').isVisible();
console.log(`drawer opens: ${drawerVisible}`);
await page.screenshot({ path: process.argv[2] + '/mobile-drawer-open.png' });

// 2. navigate from the tree
await page.locator('.shell__drawer').getByText('Get Started', { exact: true }).click();
await page.waitForURL('**/guides/get-started', { timeout: 10000 });
await page.waitForTimeout(800);
const drawerGone = !(await page.locator('.shell__drawer').isVisible().catch(() => false));
console.log(`navigated to get-started: true`);
console.log(`drawer closed after nav: ${drawerGone}`);

// 3. close button works
await page.getByRole('button', { name: 'Open navigation' }).click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Close navigation' }).click();
await page.waitForTimeout(500);
const closedByButton = !(await page.locator('.shell__drawer').isVisible().catch(() => false));
console.log(`drawer closes via X: ${closedByButton}`);

// 4. desktop unchanged: sidebar present, no hamburger
const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await desktop.goto(`${base}/components/button`, { waitUntil: 'domcontentloaded' });
await desktop.waitForSelector('.shell__sidebar', { timeout: 30000 });
const hamburgerHidden = (await desktop.getByRole('button', { name: 'Open navigation' }).count()) === 0;
console.log(`desktop sidebar present, hamburger absent: ${hamburgerHidden}`);

console.log(`pageerrors: ${errors.length}${errors.length ? ' — ' + errors[0].slice(0, 120) : ''}`);
await browser.close();
server.close();
