// Shared bits for the doc platform test suites.
// IMPORTANT screenshot lesson: always force a style flush (any
// getComputedStyle call) before capturing — first rasterization of freshly
// mounted controls can be stale and lie about the real rendering.
function makeChecker(results) {
  return async function check(name, fn) {
    try {
      await fn();
      results.push(`OK  ${name}`);
    } catch (err) {
      results.push(`KO  ${name} — ${String(err).split('\n')[0].slice(0, 120)}`);
    }
  };
}

/* The pre-rendered HTML holds the page before any script runs (#root main included): what clicks or
   reads what the scripts render waits for them. Hydrated, React holds the version select. */
function waitHydrated(page, timeout = 15000) {
  return page.waitForFunction(() => {
    const trigger = document.querySelector('[data-testid="version-select"] [data-part="trigger"]');
    return trigger && Object.keys(trigger).some((key) => key.startsWith('__react'));
  }, null, { timeout });
}

export { makeChecker, waitHydrated };
