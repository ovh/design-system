import { E2EPage } from '@stencil/core/testing';

/**
 * Creates a screenshot of the current page.
 * @param page - The created page
 * @param fixedWidth - (optional) The set width of page before taking the screenshot
 * @param fixedHeight - (optional) The set height of page before taking the screenshot
 */
async function odsPuppeteerScreenshot({ page, fixedWidth, fixedHeight }: {
  page: E2EPage,
  fixedWidth?: number,
  fixedHeight?: number
}): Promise<void> {
  const { width, height } = await page.evaluate(() => {
    document.body.style.cssText = `
        background: transparent;
        box-sizing: border-box;
        display: inline-block;
        font-size: 0;
        margin: 0;
        overflow: hidden;
        padding: 0;
      `;
    return { width: document.body.clientWidth, height: document.body.clientHeight };
  });
  await page.setViewport({ width: fixedWidth || width, height: fixedHeight || height });

  expect(await page.compareScreenshot(expect.getState().currentTestName, {
    fullPage: false,
    omitBackground: true,
  })).toMatchScreenshot({ allowableMismatchedRatio: 0 });
}

export {
  odsPuppeteerScreenshot
}
