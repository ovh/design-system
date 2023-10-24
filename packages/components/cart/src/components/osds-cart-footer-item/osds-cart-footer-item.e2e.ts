import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { newE2EPage } from '@stencil/core/testing';

const logger = new OdsLogger('osds-cart-footer-item-e2e');

describe('e2e:osds-cart-footer-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup() {
    page = await newE2EPage();
    await page.setContent('<osds-cart-footer-item></osds-cart-footer-item>');
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-cart-footer-item');

    const root = await page.find('osds-cart-footer-item');
    const activeElId = await page.evaluate(() => document);
    logger.log(activeElId);
    logger.log(root);
  }

  it('should render', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });
});
