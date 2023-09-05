import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsBreadcrumbAttributeItem } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';

describe('e2e:osds-breadcrumb', () => {
  const dummyItems = [
    {href: 'href1', label: 'label1'},
    {href: 'href2', label: 'label2'},
    {href: 'href3', label: 'label3'},
    {href: 'href4', label: 'label4'},
  ];
  let page: E2EPage;
  let el: E2EElement;
  let breadcrumbItemElements: E2EElement[];

  function isItemVisible(breadcrumbItemElement: E2EElement): boolean {
    return !breadcrumbItemElement.classList.contains('collapsed');
  }

  function isExpandableItem(breadcrumbItemElement: E2EElement): boolean {
    return !!breadcrumbItemElement.shadowRoot.querySelector('osds-link.expandable');
  }

  async function setup(items: OdsBreadcrumbAttributeItem[] = []) {
    page = await newE2EPage();

    await page.setContent(`<osds-breadcrumb items=${JSON.stringify(items)}></osds-breadcrumb>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-breadcrumb');
    breadcrumbItemElements = await page.findAll('osds-breadcrumb >>> osds-breadcrumb-item');
  }

  it('should render', async () => {
    await setup();

    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  it('should render with 4 visible items', async () => {
    await setup(dummyItems);

    expect(breadcrumbItemElements.length).toBe(dummyItems.length);

    expect(isItemVisible(breadcrumbItemElements[0])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[0])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[1])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[1])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[2])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[2])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[3])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[3])).toBe(false);
  });

  it('should render first and last items and a collapsed one in the middle', async () => {
    const moreDummyItems = [...dummyItems,
      {href: 'href5', label: 'label5'},
      {href: 'href6', label: 'label6'},
    ];
    await setup(moreDummyItems);

    expect(breadcrumbItemElements.length).toBe(moreDummyItems.length);

    expect(isItemVisible(breadcrumbItemElements[0])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[0])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[1])).toBe(false);
    expect(isExpandableItem(breadcrumbItemElements[1])).toBe(true);

    expect(isItemVisible(breadcrumbItemElements[2])).toBe(false);
    expect(isExpandableItem(breadcrumbItemElements[2])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[3])).toBe(false);
    expect(isExpandableItem(breadcrumbItemElements[3])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[4])).toBe(false);
    expect(isExpandableItem(breadcrumbItemElements[4])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[5])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[5])).toBe(false);
  });

  it('should render all on collapsed item click', async () => {
    const moreDummyItems = [...dummyItems,
      { href: 'href5', label: 'label5' },
      { href: 'href6', label: 'label6' },
    ];
    await setup(moreDummyItems);

    expect(breadcrumbItemElements.length).toBe(moreDummyItems.length);

    expect(isItemVisible(breadcrumbItemElements[1])).toBe(false);
    expect(isExpandableItem(breadcrumbItemElements[1])).toBe(true);

    await page.evaluate((index) => {
      const breadcrumbItemElements = document.querySelector('osds-breadcrumb')?.shadowRoot?.querySelectorAll('osds-breadcrumb-item');
      if (breadcrumbItemElements && breadcrumbItemElements.length > index) {
        const collapsedItem = breadcrumbItemElements[index].shadowRoot?.querySelector('osds-link.expandable') as HTMLButtonElement;

        if (collapsedItem) {
          collapsedItem.click();
        }
      }
    }, 1);
    await page.waitForChanges();

    expect(isItemVisible(breadcrumbItemElements[0])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[0])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[1])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[1])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[2])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[2])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[3])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[3])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[4])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[4])).toBe(false);

    expect(isItemVisible(breadcrumbItemElements[5])).toBe(true);
    expect(isExpandableItem(breadcrumbItemElements[5])).toBe(false);
  });
});
