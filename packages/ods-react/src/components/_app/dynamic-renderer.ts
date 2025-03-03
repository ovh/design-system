import { type Browser, type Page } from 'puppeteer';
// import * as child_process from 'child_process';

export const isTestServer = typeof jest !== 'undefined';

export const componentFactories: any = {};
export const contextNames: string[] = [];

// const child_process = isTestServer ? require(['child_process'][0]) : null;
const jest_globals = isTestServer ? require(['@jest/globals'][0]) : null;
const puppeteer = isTestServer ? require(['puppeteer'][0]) : null;
//const port = isTestServer ? 3111 + Number(process.env.JEST_WORKER_ID) : null;
const port = 3000;

let browser: Browser;
let page: Page;
let server: any = null;

// TODO kill spawned server on manual exit SIGTERM...

export function describe(name: string, fn: any) {
  contextNames.push(name);

  if (isTestServer) {
    jest_globals.describe(name, () => {
      fn();

      if (contextNames.length > 1) {
        return;
      }

      console.log('> Custom DESCRIBE')
      // console.log(module.parent!.filename.replace(process.cwd() + '/', './'))

      jest_globals.beforeAll(async () => {
        try {
          console.log('>> Inside DESCRIBE beforeAll')
          // const testFile = module.parent!.filename.replace(/.*\/components\//, '');

          // server = child_process.spawn('npm', ['run', 'start', '--prefix', '../_app'], {
          //   detached: true,
          //   env: {
          //     ...process.env,
          //     DEV_PATH: testFile,//'text/tests/rendering/ods-text.e2e.tsx',
          //   },
          //   // stdio: 'inherit',
          //   stdio: 'ignore',
          // });

          browser = await puppeteer.launch();
          page = await browser.newPage();

          for (let i = 0; i < 20; i++) {
            try {
          //     // console.log('>> goto localhost')
              await page.goto(`https://google.com`);
          //     await page.goto(`http://localhost:${port}`);
          //     console.log('OK SERVER')
          //     await page.waitForSelector("#ready", { timeout: 2_000 });
          //     console.log('OK READY')
          //     break;
            } catch (error: any) {
              // console.log('# ERROR:', error)
              // console.log('>> nop, retry in a sec')
              if (i === 20) {
                throw new Error(error);
              }

              await new Promise(resolve => setTimeout(resolve, 1000));
            }
          }

          await page.close();
        } catch (error) {
          console.log('INIT FAILED', error)
          if (server && server.pid) {
            process.kill(-server.pid);
          }
        }
      }, 21_000);

      jest_globals.beforeEach(async () => {

        // const pages = await browser.pages();
        // if (pages.length) {
        //   page = pages[0];
        // } else {
        //   page = await browser.newPage();
        // }

        page = await browser.newPage();
      });

      jest_globals.afterEach(async () => {
        await page.close();
      });

      jest_globals.afterAll(async () => {
        await browser.close();

        if (server && server.pid) {
          process.kill(-server.pid);
        }
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
    console.log('> Custom IT')
    // const testFile = module.parent!.filename.replace(process.cwd() + '/tests/', '../../');

    return jest_globals.it(name, async () => {
      console.log('>> Inside IT')

      // console.log(`start test, goto: http://localhost:${port}?${new URLSearchParams({testName})}&${new URLSearchParams({testFile})}`)
      await page.goto(`http://localhost:${port}?${new URLSearchParams({testName})}`);
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
