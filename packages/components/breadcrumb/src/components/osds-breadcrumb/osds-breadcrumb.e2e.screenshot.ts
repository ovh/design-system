import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import type { E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import type { OdsBreadcrumbAttribute } from './interfaces/attributes';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;

  async function setup({ attributes }: { attributes: OdsBreadcrumbAttribute }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<Partial<OdsBreadcrumbAttribute>>({ contrasted: attributes.contrasted }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb ${odsStringAttributes2Str(stringAttributes)} items=${JSON.stringify(attributes.items)}></osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
  }

  describe('screenshots', () => {
    it('should render with 4 visible items', async() => {
      const dummyItems = [
        { href: 'href1', label: 'label1' },
        { href: 'href2', label: 'label2' },
        { href: 'href3', label: 'label3' },
        { href: 'href4', label: 'label4' },
      ];
      await setup({ attributes: { items: dummyItems } });

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render with icons and text', async() => {
      const dummyItems = [
        { href: 'href1', icon: ODS_ICON_NAME.HOME },
        { href: 'href2', icon: ODS_ICON_NAME.BOOK, label: 'label2' },
        { href: 'href3', label: 'label3' },
        { href: 'href4', label: 'label4' },
      ];
      await setup({ attributes: { items: dummyItems } });

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render first and last items and a collapsed one in the middle', async() => {
      const dummyItems = [
        { href: 'href1', label: 'label1' },
        { href: 'href2', label: 'label2' },
        { href: 'href3', label: 'label3' },
        { href: 'href4', label: 'label4' },
        { href: 'href5', label: 'label5' },
        { href: 'href6', label: 'label6' },
      ];
      await setup({ attributes: { items: dummyItems } });

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render contrasted', async() => {
      const dummyItems = [
        { href: 'href1', label: 'label1' },
        { href: 'href2', label: 'label2' },
        { href: 'href3', label: 'label3' },
        { href: 'href4', label: 'label4' },
      ];
      await setup({ attributes: { contrasted: true, items: dummyItems } });

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
