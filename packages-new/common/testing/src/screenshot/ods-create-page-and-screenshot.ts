import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsE2EComponentApplyFunction } from '../e2e/ods-e2e-component-apply-function';
import { odsPuppeteerScreenshot } from './ods-puppeteer-screenshot';
import { newE2EPage } from '@stencil/core/testing';
import fs from 'fs';

const screenshotFolder = `screenshot/pages`;

/**
 * Creates the e2e page for screenshots and snap it
 * @param applyFunction - An optional callback to trigger on the element
 * @param componentTag - The component HTML tag
 * @param extraFunction - An optional callback to trigger
 * @param fixedHeight - The wanted width of the page
 * @param fixedWidth - The wanted width of the page
 * @param html - The HTML to render
 * @returns The e2e created (and snapshot) page
 */
async function odsCreatePageAndSnapshot({
                                                  applyFunction = () => null,
                                                  componentTag,
                                                  extraFunction = () => null,
                                                  height: fixedHeight,
                                                  html,
                                                  width: fixedWidth,
                                                }: {
  applyFunction?: (option: {page?: E2EPage, element:E2EElement}) => void,
  componentTag: string
  extraFunction?: OdsE2EComponentApplyFunction<E2EPage, E2EElement>,
  height?: number,
  html: string,
  width?: number,
}): Promise<E2EPage> {
  const page: E2EPage = await newE2EPage({ html });

  const element = await page.find(componentTag);

  applyFunction({ page, element });

  extraFunction({ page, element });

  await page.waitForChanges();

  /**
   * We are converting the test name from Jest to a file name
   * ex: `e2e:screenshot:button:color:primary` = `e2e-screenshot-button-color-primary`
   */
  const fileName = expect.getState().currentTestName
    .replace(/[\s=_|>:]/g, '-')
    .replace(/=""/g, '')
    .replace(/-+/g, '-')
    .toLowerCase();

  !fs.existsSync(screenshotFolder) && fs.mkdirSync(screenshotFolder);
  page.content().then(content => fs.writeFileSync(`${screenshotFolder}/${fileName}.html`, content));
  await odsPuppeteerScreenshot({ page, fixedWidth, fixedHeight });
  return page;
}

export {
  odsCreatePageAndSnapshot
}
