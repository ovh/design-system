// Orchestrator: build sim from dist, serve it with gh-pages semantics, run
// every suite, aggregate. Usage: node tests/run.mjs [suite…]
import { chromium } from 'playwright';
import { serveSite } from './ghpages-server.mjs';
import { setupSim } from './setup-sim.mjs';

const PORT = Number(process.env.DOCS_TEST_PORT ?? 8124);
const wanted = process.argv.slice(2);
// 'sandbox' replays every open-in-sandbox snippet through Monaco (minutes):
// opt-in only — `node tests/run.mjs sandbox`.
const DEFAULT_SUITES = ['snippets', 'smoke', 'sweep', 'themegen', 'gallery'];
const SUITES = wanted.length ? wanted : DEFAULT_SUITES;

const { simRoot, version } = setupSim();
const server = await serveSite(simRoot, PORT);
const browser = await chromium.launch();
const ctx = { base: `http://localhost:${PORT}/design-system`, version };

let failed = 0;
for (const name of SUITES) {
  const { suite } = await import(`./${name}.mjs`);
  console.log(`\n=== ${name}`);
  const results = await suite(browser, ctx);
  for (const line of results) {
    console.log(line);
  }
  failed += results.filter((l) => l.startsWith('KO')).length;
}
await browser.close();
server.close();
console.log(failed === 0 ? '\nAll green.' : `\n${failed} failure(s).`);
process.exit(failed ? 1 : 0);
