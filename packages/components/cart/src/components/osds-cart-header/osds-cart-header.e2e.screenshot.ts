import type { E2EPage } from '@stencil/core/testing';
import type { OdsCartHeaderAttribute } from './interfaces/attributes';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

const logger = new OdsLogger('osds-cart-header-e2e');

describe('e2e:osds-cart-header', () => {
  let page: E2EPage;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCartHeaderAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartHeaderAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-cart-header ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-cart-header>`, { timeout: 20000 });
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    const root = await page.find('osds-cart-header');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  describe('screenshots', () => {
    fit('should display a cart header without hr', async () => {
      await setup({
        attributes: {}, html: `
      <osds-cart>
        <osds-cart-header slot="header">My selection</osds-cart-header>
      </osds-cart>`,
      });

      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-header') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('without a hr', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    fit('should display a cart header with hr', async () => {
      await setup({
        attributes: {}, html: `
      <osds-cart collapsible>
        <osds-cart-header slot="header">My selection</osds-cart-header>
      </osds-cart>`,
      });

      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('osds-cart-header') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('with a hr', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
