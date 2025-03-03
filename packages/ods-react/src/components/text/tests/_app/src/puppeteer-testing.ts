import {
  afterAll as jestAfterAll,
  afterEach as jestAfterEach,
  beforeAll as jestBeforeAll,
  beforeEach as jestBeforeEach,
  describe as jestDescribe,
  it as jestIt,
} from '@jest/globals';
import * as childProcess from 'child_process';
// import { resolve } from 'path';
import puppeteer, { type Browser, type Page } from 'puppeteer';

const componentFactories: any = {};
const contextNames: string[] = [];

// const child_process = isTestServer ? require(['child_process'][0]) : null;
// const jest_globals = isTestServer ? require(['@jest/globals'][0]) : null;
// const puppeteer = isTestServer ? require(['puppeteer'][0]) : null;
// const port = isTestServer ? 3111 + Number(process.env.JEST_WORKER_ID) : null;
const port = 3000;

let browser: Browser;
let page: Page;
let server: childProcess.ChildProcess;

function describe(name: string, fn: any) {
  console.log('IN DESCRIBE')
  console.log()
  contextNames.push(name);
  console.log(`> push context ${name}`)

  jestDescribe(name, () => {
    fn();

    if (contextNames.length > 1) {
      return;
    }

    jestBeforeAll(async() => {
      // console.log('> spawn npm start')
      // server = childProcess.spawn('npm', ['start'], {
      //   cwd: resolve(process.cwd(), '_app'),
      //   detached: true,
      //   env: {
      //     ...process.env,
      //     // REACT_APP_FILE_NAME: module.parent.filename.replace(process.cwd() + '/', './'),
      //     // PORT: port
      //   },
      //   stdio: 'ignore',
      // });

      browser = await puppeteer.launch();
      page = await browser.newPage();

      for (let i = 0; i < 40; i++) {
        try {
          console.log(`> go to localhost:${port}`)
          await page.goto(`http://localhost:${port}`);
          await page.waitForSelector('#ready', { timeout: 2000 });
          console.log('> ready id found, ok')
          break;
        }
        catch (error) {
          console.log('### ERROR', error)
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      await page.close();
    }, 20000);

    jestBeforeEach(async() => {
      page = await browser.newPage();
    });

    jestAfterEach(async() => {
      await page.close();
    });

    jestAfterAll(async() => {
      await browser.close();

      if (server.pid) {
        process.kill(-server.pid);
      }
    });
  });

  contextNames.pop();
}

function it(name: string, factory: any, fn: any) {
  const testName = contextNames.join('.') + '.' + name;
  componentFactories[testName] = factory;

  // if (isTestServer) {
    return jestIt(name, async () => {
      await page.goto(`http://localhost:${port}?${new URLSearchParams({ testName })}`);
      await fn(page);
    });
  // }
}

function beforeAll(fn: any) {
  // if (isTestServer) {
    return jestBeforeAll(fn);
  // }
}

function afterAll(fn: any) {
  // if (isTestServer) {
    return jestAfterAll(fn);
  // }
}

export {
  afterAll,
  beforeAll,
  componentFactories,
  describe,
  it,
}
