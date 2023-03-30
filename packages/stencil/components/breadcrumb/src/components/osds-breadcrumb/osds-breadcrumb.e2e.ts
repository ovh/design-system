import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsBreadcrumbAttributes, OdsComponentAttributes2StringAttributes, odsBreadcrumbDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-breadcrumb', () => {
  let page: E2EPage;
  let el: E2EElement;
  let itemElement: E2EElement;
  let itemLinkElement: E2EElement;
  let itemTextElement: E2EElement;
  let itemIconElement: E2EElement;

  async function setup({
    attributes = {},
    onPage,
    html = ``,
  }: { attributes?: Partial<OdsBreadcrumbAttributes>; html?: string; onPage?: ({ page }: { page: E2EPage }) => void } = {}) {
    const minimalAttributes: OdsBreadcrumbAttributes = OdsCreateAttributes(attributes, odsBreadcrumbBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbAttributes>(minimalAttributes, odsBreadcrumbDefaultAttributes);

    page = await newE2EPage();
    onPage && onPage({ page });
    await page.setContent(`<osds-breadcrumb ${OdsStringAttributes2Str(stringAttributes)}>
    ${html}
    </osds-breadcrumb>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb');
    itemElement = await page.find('osds-breadcrumb > osds-breadcrumb-item');
    itemLinkElement = await page.find('osds-breadcrumb > osds-breadcrumb-item > osds-link');
    itemTextElement = await page.find('osds-breadcrumb > osds-breadcrumb-item > osds-text');
    itemIconElement = await page.find('osds-breadcrumb > osds-breadcrumb-item > osds-link > osds-icon');
  }

  describe('defaults items with link text and icon', () => {
    beforeEach(async () => {
      await setup({
        html: '<osds-breadcrumb-item><osds-link></osds-link></osds-breadcrumb-item> <osds-breadcrumb-item><osds-text></osds-text></osds-breadcrumb-item><osds-breadcrumb-item><osds-link><osds-icon></osds-icon></osds-link></osds-breadcrumb-item> ',
      });
    });

    it('should render', async () => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');

      expect(itemElement).not.toBeNull();
      expect(itemElement).toHaveClass('hydrated');
    });

    it('should have a link element', async () => {
      expect(itemElement).not.toBeNull();
      expect(itemLinkElement).not.toBeNull();
    });
    it('should have a text element', async () => {
      expect(itemElement).not.toBeNull();
      expect(itemTextElement).not.toBeNull();
    });
    it('should have a icon ellipsis element', async () => {
      expect(itemElement).not.toBeNull();
      expect(itemIconElement).not.toBeNull();
    });
    it('should have a default collapsed', async () => {
      expect(await el.getProperty('collapsed')).toBe(odsBreadcrumbDefaultAttributes.collapsed);
    });
  });
  describe('test with less than 4 items and collapsed is false', () => {
    beforeEach(async () => {
      await setup({
        attributes: { collapsed: false },
        html: '<osds-breadcrumb-item><osds-link >item1</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-link >item2</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-text>item3</osds-text></osds-breadcrumb-item>',
      });
    });
    it('items are not collapsed ', async () => {
      expect(await el.getProperty('collapsed')).toBe(odsBreadcrumbDefaultAttributes.collapsed);
    });
  });
  describe('test with more than 4 items and collapsed is true', () => {
    beforeEach(async () => {
      await setup({
        attributes: { collapsed: true },
        html: '<osds-breadcrumb-item><osds-link >item1</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-link >item2</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-link >item3</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-link >item5</osds-link></osds-breadcrumb-item><osds-breadcrumb-item><osds-text>item5</osds-text></osds-breadcrumb-item>',
      });
    });
    it('items are  collapsed ', async () => {
      expect(await el.getProperty('collapsed')).not.toBe(odsBreadcrumbDefaultAttributes.collapsed);
    });
  });
});
