//import puppeteer, { type Browser, type ElementHandle, type Page } from 'puppeteer';
//import { describe, it, beforeAll } from '../puppeteer-testing';
import { type Page } from 'puppeteer';
//import { describe, it } from '../../../_app/dynamic-renderer';
// import { ODS_TEXT_PRESET, OdsText } from '../../src';
import { OdsText } from '../../src';
// import { describe, it } from '../../../_app/dynamic-renderer2';
// import puppeteer from 'puppeteer';
// import 'expect-puppeteer';
// import 'jest-puppeteer';

// const isTestServer = typeof jest !== 'undefined';
// const jestGlobal =
//   (() => {
//     if (isTestServer) {
//       const t = require(['expect-puppeteer'][0])
//       console.log(t)
//       return t;
//     }
//   })()
// if (isTestServer) {
//   require(['jest-puppeteer'][0])
// } else {
//   // beforeAll = () => {};
//   // // @ts-ignore
//   // describe = () => {};
//   // // @ts-ignore
//   // page = {
//   //   $eval: () => {},
//   //   expect: () => {},
//   //   goto: () => {},
//   //   waitForSelector: () => {},
//   // };
// }

describe('OdsText rendering', () => {
  // it('should render with text',
  //   () => {
  //     return <OdsText>Hello World!</OdsText>;
  //   },
  //   async (page: Page) => {
  //     await new Promise((resolve) => setTimeout(resolve, 5000));
  //     await page.waitForSelector('.ods-text');
  //     const text = await page.$eval('.ods-text', (el: any) => el.innerHTML);
  //     const style = await page.$eval('.ods-text', (el: any) => window.getComputedStyle(el).getPropertyValue('color'));
  //     expect(style).toBe('toto');
  //     expect(text).toBe('Hello World!');
  //   }
  // );






  // beforeAll(async () => {
  //   await page.goto('https://google.com');
  // });
  //
  // it('should be titled "Google"', async () => {
  //   // await new Promise((resolve) => setTimeout(resolve, 100000));
  //   await expect(page.title()).resolves.toMatch('Google');
  // });

  // beforeAll(async () => {
  //   // @ts-ignore
  //   await page.goto('http://localhost:3000');
  // });

  // it('should render', async () => {
  //   // await new Promise((resolve) => setTimeout(resolve, 100000));
  //   await page.waitForSelector('.ods-text');
  //   const text = await page.$eval('.ods-text', (el: any) => el.innerHTML);
  //   expect(text).toBe('Hello World!');
  // });

  e2e('should render with text',
    () => (
      <OdsText>Hello World!</OdsText>
    ),
    async(page: Page) => {
      // await new Promise((resolve) => setTimeout(resolve, 1000000));
      const odsText = await page.waitForSelector('.ods-text');
      const text = await odsText?.evaluate(el => el.textContent);
      // const text = await page.$eval<string>('.ods-text', (el: HTMLElement) => el.innerText);
      // const style = await page.$eval('.ods-text', (el: Element) => window.getComputedStyle(el).getPropertyValue('color'));

      // expect(style).toBe('rgb(255, 0, 0)');
      expect(text).toBe('Hello World!');
    }
  );

  // @ts-ignore
  // e2e('should render with text 2',
  //   () => {
  //     return <OdsText preset={ ODS_TEXT_PRESET.heading6 }>Hello World 2!</OdsText>;
  //   },
  //   async (page: Page) => {
  //     await page.waitForSelector('.ods-text');
  //     const text = await page.$eval('.ods-text', (el: any) => el.innerHTML);
  //
  //     expect(text).toBe('Hello World 2!');
  //   }
  // );









  // it('should render with text 2',
  //   () => {
  //     return <OdsText preset={ ODS_TEXT_PRESET.heading6 }>Hello World 2!</OdsText>;
  //   },
  //   async (page: Page) => {
  //     await page.waitForSelector('.ods-text');
  //     const text = await page.$eval('.ods-text', (el: any) => el.innerHTML);
  //     expect(text).toBe('Hello World 2!');
  //   }
  // );




  // let browser: Browser;
  // let el: ElementHandle | null;
  // let page: Page;
  //
  // async function setup(content: string, customStyle?: string): Promise<void> {
  //   page = await browser.newPage();
  //
  //   await page.setContent(content);
  //   await page.evaluate(() => document.body.style.setProperty('margin', '0'));
  //
  //   if (customStyle) {
  //     await page.addStyleTag({ content: customStyle });
  //   }
  //
  //   el = await page.$('.ods-text');
  // }
  //
  // beforeAll(async () => {
  //   browser = await puppeteer.launch();
  //   page = await browser.newPage();
  // });
  //
  // afterAll(() => {
  //   browser.close();
  // });
  //
  // it('should render the component', async() => {
  //   await setup('<OdsText>some text</OdsText>');
  //
  //   expect(el).not.toBeNull();
  // });
});

// import type { E2EElement, E2EPage } from '@stencil/core/testing';
// import { newE2EPage } from '@stencil/core/testing';
//
// describe('ods-text rendering', () => {
//   let el: E2EElement;
//   let page: E2EPage;
//   let part: E2EElement;
//
//   async function setup(content: string, customStyle?: string): Promise<void> {
//     page = await newE2EPage();
//
//     await page.setContent(content);
//     await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
//
//     if (customStyle) {
//       await page.addStyleTag({ content: customStyle });
//     }
//
//     el = await page.find('ods-text');
//     part = await page.find('ods-text >>> [part="text"]');
//   }
//
//   it('should render the web component', async() => {
//     await setup('<ods-text>some text</ods-text>');
//
//     expect(el.shadowRoot).not.toBeNull();
//   });
//
//   describe('part', () => {
//     it('should render with custom style applied', async() => {
//       await setup('<ods-text>some text</ods-text>', 'ods-text::part(text) { color: #00ff00; }');
//       const partStyle = await part.getComputedStyle();
//       expect(partStyle.getPropertyValue('color')).toBe('rgb(0, 255, 0)');
//     });
//   });
//
//   describe('preset', () => {
//     it('should render default preset', async() => {
//       await setup('<ods-text>some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('paragraph');
//     });
//
//     it('should render with preset caption', async() => {
//       await setup('<ods-text preset="caption">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('caption');
//       expect(part.tagName).toBe('SPAN');
//     });
//
//     it('should render with preset code', async() => {
//       await setup('<ods-text preset="code">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('code');
//       expect(part.tagName).toBe('CODE');
//     });
//
//     it('should render with preset paragraph', async() => {
//       await setup('<ods-text preset="paragraph">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('paragraph');
//       expect(part.tagName).toBe('P');
//     });
//
//     it('should render with preset span', async() => {
//       await setup('<ods-text preset="span">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('span');
//       expect(part.tagName).toBe('SPAN');
//     });
//
//     it('should render with preset heading-1', async() => {
//       await setup('<ods-text preset="heading-1">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-1');
//       expect(part.tagName).toBe('H1');
//     });
//
//     it('should render with preset heading-2', async() => {
//       await setup('<ods-text preset="heading-2">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-2');
//       expect(part.tagName).toBe('H2');
//     });
//
//     it('should render with preset heading-3', async() => {
//       await setup('<ods-text preset="heading-3">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-3');
//       expect(part.tagName).toBe('H3');
//     });
//
//     it('should render with preset heading-4', async() => {
//       await setup('<ods-text preset="heading-4">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-4');
//       expect(part.tagName).toBe('H4');
//     });
//
//     it('should render with preset heading-5', async() => {
//       await setup('<ods-text preset="heading-5">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-5');
//       expect(part.tagName).toBe('H5');
//     });
//
//     it('should render with preset heading-6', async() => {
//       await setup('<ods-text preset="heading-6">some text</ods-text>');
//       expect(el.getAttribute('preset')).toBe('heading-6');
//       expect(part.tagName).toBe('H6');
//     });
//   });
// });
