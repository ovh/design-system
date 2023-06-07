import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsBreadcrumbItemAttributes,
  OdsComponentAttributes2StringAttributes,
  odsBreadcrumbItemDefaultAttributes,
  OdsIconName
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsBreadcrumbItemBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-breadcrumb-item', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes }: { attributes: Partial<OdsBreadcrumbItemAttributes> }) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}></osds-breadcrumb-item>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb-item');
  }

  it('should render', async () => {
    await setup({ attributes: {} });

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render not collapsed', async () => {
    await setup({ attributes: { isCollapsed: false } });

    expect(el).not.toHaveClass('collapsed');
  });

  it('should render collapsed', async () => {
    await setup({ attributes: { isCollapsed: true } });

    expect(el).toHaveClass('collapsed');
  });

  describe('item', () => {
    const dummyHref = '#dummy-href';
    const dummyIcon = OdsIconName.HOME;
    const dummyLabel = 'dummy label';
    let itemLinkElement: E2EElement;
    let iconElement: E2EElement;

    async function setupItem(attributes: Partial<OdsBreadcrumbItemAttributes>) {
      await setup({ attributes });

      itemLinkElement = await page.find('osds-breadcrumb-item >>> .item > osds-link');
      iconElement = await itemLinkElement.find('osds-icon');
    }

    it('should render link with text only', async () => {
      await setupItem({ href: dummyHref, label: dummyLabel });

      expect(itemLinkElement.getAttribute('href')).toBe(dummyHref);
      expect(itemLinkElement.getAttribute('disabled')).toBeNull();
      expect(itemLinkElement.innerText).toBe(dummyLabel);
      expect(iconElement).toBeNull();
    });

    it('should render link with icon only', async () => {
      await setupItem({ href: dummyHref, icon: dummyIcon });

      expect(itemLinkElement.getAttribute('href')).toBe(dummyHref);
      expect(itemLinkElement.getAttribute('disabled')).toBeNull();
      expect(itemLinkElement.innerText).toBe('');
      expect(iconElement.getAttribute('name')).toBe(dummyIcon);
    });

    it('should render link with text and icon', async () => {
      await setupItem({ href: dummyHref, icon: dummyIcon, label: dummyLabel });

      expect(itemLinkElement.getAttribute('href')).toBe(dummyHref);
      expect(itemLinkElement.getAttribute('disabled')).toBeNull();
      expect(itemLinkElement.innerText).toBe(dummyLabel);
      expect(iconElement.getAttribute('name')).toBe(dummyIcon);
    });

    it('should render link disabled', async () => {
      await setupItem({ href: dummyHref, isLast: true });

      expect(itemLinkElement.getAttribute('href')).toBe(dummyHref);
      expect(itemLinkElement.getAttribute('disabled')).not.toBeNull();
    });

    it('should render contrasted', async () => {
      await setupItem({ contrasted: true, href: dummyHref, icon: dummyIcon, label: dummyLabel });

      expect(itemLinkElement.getAttribute('contrasted')).not.toBeNull();
      expect(iconElement.getAttribute('contrasted')).not.toBeNull();
    });
  });

  describe('collapsed item', () => {
    let collapsedItem: E2EElement;

    async function setupCollapsedItem(attributes: Partial<OdsBreadcrumbItemAttributes>) {
      await setup({ attributes });

      collapsedItem = await page.find('osds-breadcrumb-item >>> osds-link.expandable');
    }

    it('should not be rendered if not isExpandableItem', async () => {
      await setupCollapsedItem({});

      expect(collapsedItem).toBeNull();
    });

    it('should be rendered if isExpandableItem', async () => {
      await setupCollapsedItem({ isExpandableItem: true });

      expect(collapsedItem).not.toBeNull();
    });

    it('should render contrasted', async () => {
      await setupCollapsedItem({ contrasted: true, isExpandableItem: true });

      expect(collapsedItem.getAttribute('contrasted')).not.toBeNull();
    });
  });

  describe('separator', () => {
    let separatorItem: E2EElement;

    async function setupSeparator(attributes: Partial<OdsBreadcrumbItemAttributes>) {
      await setup({ attributes });

      separatorItem = await page.find('osds-breadcrumb-item >>> osds-text.separator');
    }

    it('should not be rendered if isLast', async () => {
      await setupSeparator({ isLast: true });

      expect(separatorItem).toBeNull();
    });

    it('should not be rendered if isCollapsed but not isExpandableItem', async () => {
      await setupSeparator({ isCollapsed: true, isExpandableItem: false });

      expect(separatorItem).toBeNull();
    });

    it('should be rendered if isCollapsed and isExpandableItem', async () => {
      await setupSeparator({ isCollapsed: true, isExpandableItem: true });

      expect(separatorItem).not.toBeNull();
    });

    it('should be rendered if not isCollapsed', async () => {
      await setupSeparator({ isCollapsed: false });

      expect(separatorItem).not.toBeNull();
    });

    it('should render contrasted', async () => {
      await setupSeparator({ contrasted: true, isCollapsed: false });

      expect(separatorItem.getAttribute('contrasted')).not.toBeNull();
    });
  });
});
