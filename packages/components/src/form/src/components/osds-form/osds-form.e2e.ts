import type { OdsFormAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-form', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes= {} }: { attributes?: Partial<OdsFormAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-form ${odsStringAttributes2Str(stringAttributes)}></osds-form>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-form');
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('dummy', () => {
    it('should have a dummy attribute', async() => {
      const dummyValue = 'dummy';
      await setup({ attributes: { dummy: dummyValue } });
      expect(await el.getProperty('dummy')).toBe(dummyValue);
    });
  });
});
