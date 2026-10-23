// Demo frames hosting a dropdown must stay put while it is used: opening,
// navigating and closing must neither resize the frame (the page below would
// jump) nor scroll the docs page. Run against the last demo of the page,
// scrolled near the viewport bottom — where both regressions showed up.
import { makeChecker } from './helpers.mjs';

const CASES = [
  { alignedPopup: true, component: 'select', trigger: '[data-part="trigger"]' },
  // The combobox popup aligns on its control, not on the inner input. Its
  // highlighted option is kept in view (WCAG 2.4.11), so keyboard navigation
  // scrolls the page when the list runs below the fold, by design.
  { alignedPopup: false, component: 'combobox', keyboardScrollsPage: true, trigger: 'input:not([disabled])' },
  { alignedPopup: true, component: 'menu', trigger: '[data-part="trigger"]' },
];

async function suite(browser, { base, version }) {
  const results = [];
  const check = makeChecker(results);
  const page = await browser.newPage({ viewport: { height: 800, width: 1280 } });

  for (const { alignedPopup, component, keyboardScrollsPage, trigger } of CASES) {
    await page.goto(`${base}/v${version}/components/${component}/examples`, { waitUntil: 'domcontentloaded' });
    await check(`${component}: the dropdown opens on its trigger, frame and page stay put`, async () => {
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
      // A demo flush with the frame edge had its popup shifted 8px off the
      // trigger (floating-ui keeps popups 8px inside the frame viewport).
      const offset = await (await frame.contentFrame()).evaluate((sel) => {
        const popup = [...document.querySelectorAll('[data-part="positioner"]')].find((el) => el.querySelector('[data-state="open"]'));
        return popup ? Math.round(popup.getBoundingClientRect().left - document.querySelector(sel).getBoundingClientRect().left) : null;
      }, trigger);
      if (alignedPopup && offset !== 0) {
        throw new Error(`popup ${offset}px off its trigger`);
      }
      const steps = [['open', await snapshot(), before]];
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(80);
      }
      const navigated = await snapshot();
      // Where the page may scroll while navigating, only the frame height must
      // hold, and closing must not scroll it any further.
      const heightOf = (state) => state.split(',')[0];
      steps.push(keyboardScrollsPage
        ? ['navigated', heightOf(navigated), heightOf(before)]
        : ['navigated', navigated, before]);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
      steps.push(['closed', await snapshot(), keyboardScrollsPage ? navigated : before]);
      const moved = steps.find(([, state, expected]) => state !== expected);
      if (moved) {
        throw new Error(`${moved[2]} → ${moved[1]} once ${moved[0]}`);
      }
    });
  }
  await page.close();
  return results;
}

export { suite };
