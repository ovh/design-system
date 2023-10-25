import type { OdsBreadcrumbItemAttribute } from './interfaces/attributes';
import type { E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_ICON_NAME } from '@ovhcloud/ods-component-icon';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-breadcrumb-item', () => {
  const baseAttribute = { href: '', isCollapsed: false, isExpandableItem: false, isLast: false };
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb-item ${odsStringAttributes2Str(stringAttributes)}></osds-breadcrumb-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
  }

  describe('screenshots', () => {
    it('should render', async() => {
      await setup({ attributes: { href: 'dummyHref', isCollapsed: false, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with text only', async() => {
      await setup({ attributes: { href: 'dummyHref', label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with icon only', async() => {
      await setup({ attributes: { href: 'dummyHref', icon: ODS_ICON_NAME.HOME } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with text and icon', async() => {
      await setup({ attributes: { href: 'dummyHref', icon: ODS_ICON_NAME.HOME, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link disabled', async() => {
      await setup({ attributes: { href: 'dummyHref', isLast: true, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render as collapsed item', async() => {
      await setup({ attributes: { href: 'dummyHref', isCollapsed: true, isExpandableItem: true, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render contrasted', async() => {
      await setup({ attributes: { contrasted: true, href: 'dummyHref', isCollapsed: false, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
