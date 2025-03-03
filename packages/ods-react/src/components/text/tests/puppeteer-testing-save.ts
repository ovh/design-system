import { type Browser, type Page } from 'puppeteer';

export const isTestServer = typeof jest !== 'undefined';

export const componentFactories: any = {};
export const contextNames: string[] = [];

const child_process = isTestServer ? require(['child_process'][0]) : null;
const jest_globals = isTestServer ? require(['@jest/globals'][0]) : null;
const puppeteer = isTestServer ? require(['puppeteer'][0]) : null;
const port = isTestServer ? 3111 + Number(process.env.JEST_WORKER_ID) : null;

let browser: Browser;
let page: Page;
let server: any = null;

export function describe(name: string, fn: any) {
  contextNames.push(name);

  if (isTestServer) {
    jest_globals.describe(name, () => {
      fn();

      if (contextNames.length > 1)
        return;

      jest_globals.beforeAll(async () => {
        server = child_process.spawn('npm', ['start'], {
          cwd: process.cwd() + '/test-env',
          env: {
            ...process.env,
            // @ts-ignore TODO
            REACT_APP_FILE_NAME: module.parent.filename.replace(process.cwd() + '/', './'),
            PORT: port
          },
          stdio: ['ignore', 'ignore', 'ignore'],
          detached: true
        });

        browser = await puppeteer.launch();
        page = await browser.newPage();

        for (let i = 0; i < 40; i++) {
          try {
            await page.goto(`http://localhost:${port}`);
            await page.waitForSelector(".ready", { timeout: 2_000 });
            break;
          }
          catch (error) {
            await new Promise(resolve => setTimeout(resolve, 500));
          }
        }

        await page.close();
      }, 20_000);

      jest_globals.beforeEach(async () => {
        page = await browser.newPage();
      });

      jest_globals.afterEach(async () => {
        await page.close();
      });

      jest_globals.afterAll(async () => {
        await browser.close();
        process.kill(-server.pid);
      });
    });
  }
  else {
    fn();
  }

  contextNames.pop();
}

export function it(name: string, factory: any, fn: any) {
  const testName = contextNames.join('.') + '.' + name;
  componentFactories[testName] = factory;

  if (isTestServer) {
    return jest_globals.it(name, async () => {
      await page.goto(`http://localhost:${port}?${new URLSearchParams({ testName })}`);
      await fn(page);
    });
  }
}

export function beforeAll(fn: any) {
  if (isTestServer) {
    return jest_globals.beforeAll(fn);
  }
}

export function afterAll(fn: any) {
  if (isTestServer) {
    return jest_globals.afterAll(fn);
  }
}
