import { E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsBreadcrumbAttributeItem, OdsIconName } from '@ovhcloud/ods-core';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;

  async function setup(items: OdsBreadcrumbAttributeItem[] = []) {
    page = await newE2EPage();

    await page.setContent(`<osds-breadcrumb items=${JSON.stringify(items)}></osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots', () => {
    it('should render with 4 visible items', async () => {
      const dummyItems = [
        {href: 'href1', label: 'label1'},
        {href: 'href2', label: 'label2'},
        {href: 'href3', label: 'label3'},
        {href: 'href4', label: 'label4'},
      ];
      await setup(dummyItems);

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render with icons and text', async () => {
      const dummyItems = [
        {href: 'href1', icon: OdsIconName.HOME },
        {href: 'href2', icon: OdsIconName.BOOK, label: 'label2'},
        {href: 'href3', label: 'label3'},
        {href: 'href4', label: 'label4'},
      ];
      await setup(dummyItems);

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });

    it('should render first and last items and a collapsed one in the middle', async () => {
      const dummyItems = [
        {href: 'href1', label: 'label1'},
        {href: 'href2', label: 'label2'},
        {href: 'href3', label: 'label3'},
        {href: 'href4', label: 'label4'},
        {href: 'href5', label: 'label5'},
        {href: 'href6', label: 'label6'},
      ];
      await setup(dummyItems);

      const results = await page.compareScreenshot('breadcrumb', { fullPage: false, omitBackground: true });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
    });
  });
});
