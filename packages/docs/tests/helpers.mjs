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

export { makeChecker };
