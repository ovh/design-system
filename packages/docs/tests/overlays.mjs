// Demo frames hosting a dropdown must stay put while it is used: opening,
// navigating and closing must neither resize the frame (the page below would
// jump) nor scroll the docs page. Run against the last demo of the page,
// scrolled near the viewport bottom — where both regressions showed up.
import { makeChecker } from './helpers.mjs';

const CASES = [
  { component: 'select', trigger: '[data-part="trigger"]' },
  { component: 'combobox', trigger: 'input:not([disabled])' },
  { component: 'menu', trigger: '[data-part="trigger"]' },
];

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const page = await browser.newPage({ viewport: { height: 800, width: 1280 } });

  for (const { component, trigger } of CASES) {
    await page.goto(`${base}/v${version}/components/${component}/examples`, { waitUntil: 'domcontentloaded' });
    await check(`${component}: frame and page stay put while the dropdown is used`, async () => {
      await page.waitForFunction((sel) => [...document.querySelectorAll('iframe')].some((f) => f.contentDocument?.querySelector(sel)), trigger, { timeout: 30000 });
      await page.waitForTimeout(1000);
      const frames = await page.$$('iframe');
      let frame;
      for (const candidate of frames) {
        if (await (await candidate.contentFrame())?.$(trigger)) {
          frame = candidate;
        }
      }
      // Scrolls the docs container so the demo sits 120px above the fold.
      await page.evaluate((el) => {
        let container = el.parentElement;
        while (container && !(container.scrollHeight > container.clientHeight && /auto|scroll/.test(getComputedStyle(container).overflowY))) {
          container = container.parentElement;
        }
        window.__scroller = container ?? document.scrollingElement;
        window.__scroller.scrollTop += el.getBoundingClientRect().top - (innerHeight - 120);
      }, frame);
      await page.waitForTimeout(300);
      const snapshot = () => page.evaluate((el) => `height ${el.style.height}, scroll ${Math.round(window.__scroller.scrollTop)}`, frame);
      const before = await snapshot();
      // Mouse at coordinates, not locator.click: Playwright would scroll the
      // trigger into view itself and mask a page scroll.
      const box = await (await (await frame.contentFrame()).$(trigger)).boundingBox();
      await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
      await page.waitForTimeout(500);
      const steps = [['open', await snapshot()]];
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(80);
      }
      steps.push(['navigated', await snapshot()]);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
      steps.push(['closed', await snapshot()]);
      const moved = steps.find(([, state]) => state !== before);
      if (moved) {
        throw new Error(`${before} → ${moved[1]} once ${moved[0]}`);
      }
    });
  }
  await page.close();
  return results;
}

export { suite };
