import { type EnvironmentContext, type JestEnvironmentConfig } from '@jest/environment';
import * as childProcess from 'child_process';
import { TestEnvironment } from 'jest-environment-puppeteer';
import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { join, parse } from 'path';
import puppeteer, { type Browser, type Page } from 'puppeteer';
import { type JSX } from 'react';
import { renderToString } from 'react-dom/server';
// @ts-ignore
import waitOn from 'wait-on';

const APP_PORT = 3000;
const REMOTE_DEBUGGING_PORT = 21222; // TODO share with jest-puppeteer config file
const APP_URL = `http://localhost:${APP_PORT}`;
const REMOTE_DEBUGGING_URL = `http://localhost:${REMOTE_DEBUGGING_PORT}`;

function findFilesByExtension(path: string, extension: string): string[] {
  const files: string[] = readdirSync(path);
  let result: string[] = [];

  files.forEach((file) => {
    const newPath = join(path, file);

    if (statSync(newPath).isDirectory()) {
      result = result.concat(findFilesByExtension(newPath, extension));
    } else {
      if (parse(file).ext === extension) {
        result.push(newPath);
      }
    }
  });

  return result;
}

class CustomEnvironment extends TestEnvironment {
  private cssStyle: string = '';
  private server?: childProcess.ChildProcess;

  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);

    const styleDirectory = join(process.cwd(), 'dist', 'test-styles');

    if (existsSync(styleDirectory)) {
      const cssFiles = findFilesByExtension(styleDirectory, '.css');

      cssFiles.forEach((cssFile) => {
        this.cssStyle += readFileSync(cssFile, 'utf8');
      });
    }
  }

  async setup(): Promise<void> {
    await super.setup();

    //this.server = child_process.spawn('npm', ['run', 'start', '--prefix', '../_app'], {
    this.server = childProcess.spawn('npm', ['run', 'toto', '--prefix', '../_app'], {
      detached: true,
      stdio: 'ignore',
    });

    try {
      await waitOn({ resources: [APP_URL] });

      this.global.__BROWSER__ = await puppeteer.connect({
        browserURL: REMOTE_DEBUGGING_URL,
      });
    } catch (err) {
      console.error('Dev server is still not reachable', err);
    }

    this.global.e2e = (name: string, renderer: () => JSX.Element, testFn: (page: Page) => void) => {
      return this.global.it(name, async() => {
        const page = await (this.global.__BROWSER__ as Browser).newPage();

        await page.evaluateOnNewDocument(({ component, style }) => {
          // @ts-ignore
          window.odsTmp = component;
          // @ts-ignore
          window.odsTmpStyle = style;
        }, {
          component: renderToString(renderer()),
          style: this.cssStyle,
        });

        await page.goto(APP_URL);
        await testFn(page);
        await page.close();
      });
    }
  }

  async teardown(): Promise<void> {
    await super.teardown();

    if (this.server && this.server.pid) {
      process.kill(-this.server.pid);
    }
  }
}

export default CustomEnvironment;
