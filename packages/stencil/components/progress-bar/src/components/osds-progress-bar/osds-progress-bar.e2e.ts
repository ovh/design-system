import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsProgressBarAttributes,
  OdsComponentAttributes2StringAttributes,
  odsProgressBarDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsProgressBarBaseAttributes,
} from '@ovhcloud/ods-testing';

describe('e2e:osds-progress-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsProgressBarAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsProgressBarAttributes = OdsCreateAttributes(attributes, odsProgressBarBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsProgressBarAttributes>(minimalAttributes, odsProgressBarDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-progress-bar ${OdsStringAttributes2Str(stringAttributes)}>
      ${html}
    </osds-progress-bar>`);

    await page.waitForChanges()
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-progress-bar');
  }

  it('should render', async () => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    // E2E testing
  })

  describe('slots', () => {
    it('should fill the end slot', async () => {
      await setup({ html: '<span slot="end">100%</span>' });
      expect(await page.content()).toContain('100%');
    });
  });

});
