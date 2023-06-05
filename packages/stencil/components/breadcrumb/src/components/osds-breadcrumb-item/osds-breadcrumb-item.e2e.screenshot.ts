import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsBreadcrumbItemAttributes,
  odsBreadcrumbItemDefaultAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsIconName
} from '@ovhcloud/ods-core';
import { odsBreadcrumbItemBaseAttributes, OdsCreateAttributes, OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('e2e:osds-breadcrumb-item', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}></osds-breadcrumb-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
  }

  describe('screenshots', () => {
    it('should render', async () => {
      await setup({ attributes: { href: 'dummyHref', isCollapsed: false, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with text only', async () => {
      await setup({ attributes: { href: 'dummyHref', label: 'dummyLabel' }});

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with icon only', async () => {
      await setup({ attributes: { href: 'dummyHref', icon: OdsIconName.HOME }});

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link with text and icon', async () => {
      await setup({ attributes: { href: 'dummyHref', icon: OdsIconName.HOME, label: 'dummyLabel' }});

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render link disabled', async () => {
      await setup({ attributes: { href: 'dummyHref', isLast: true, label: 'dummyLabel' }});

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render as collapsed item', async () => {
      await setup({ attributes: { href: 'dummyHref', isCollapsed: true, isCollapsedItem: true, label: 'dummyLabel' }});

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render contrasted', async () => {
      await setup({ attributes: { contrasted: true, href: 'dummyHref', isCollapsed: false, label: 'dummyLabel' } });

      const results = await page.compareScreenshot('breadcrumb-item', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
