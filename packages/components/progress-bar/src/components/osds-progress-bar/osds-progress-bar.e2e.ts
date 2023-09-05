import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsProgressBarAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-progress-bar', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsProgressBarAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsProgressBarAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-progress-bar ${odsStringAttributes2Str(stringAttributes)}>
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
  })

  describe('slots', () => {
    it('should fill the end slot', async () => {
      await setup({ html: '<span slot="end">100%</span>' });
      expect(await page.content()).toContain('100%');
    });
  });

});
