import type { OdsMenuAttribute } from './interfaces/attributes';
import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-menu', () => {
  let page: E2EPage;
  let el: E2EElement;
  let menuTitleSlot: E2EElement;
  let menuTitleContent: E2EElement;
  let menuItemsSlot: E2EElement;
  let menuItemsSlotContent: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsMenuAttribute>, html?: string }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsMenuAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-menu ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-menu>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-menu');
    menuTitleSlot = await page.find('osds-menu >>> slot[name="menu-title"]');
    menuTitleContent = await page.find('[slot="menu-title"]');
    menuItemsSlot = await page.find('osds-menu >>> slot:not([name])');
    menuItemsSlotContent = await page.find('osds-menu >>> ocdk-surface');
  }

  const template = `
  <osds-button slot="menu-title" color="primary">Button</osds-button>
  <osds-menu-item><osds-button color="primary" size='sm' variant='ghost' flex disabled><span slot="start">Action</span></osds-button></osds-menu-item>
  `;

  it('should render', async () => {
    await setup({ attributes: { } });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('menu title slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(menuTitleSlot).not.toBeNull();
    });

    it('should display a menu title as a ODS button', async () => {
      const button = `<osds-button slot="menu-title" color="primary" tabindex="0" size="md" type="button" variant="flat" class="hydrated" text-align="center">Button</osds-button>`;
      await setup({ attributes: { }, html: button });
      expect(menuTitleContent.outerHTML).toBe(button);
    });

    it('should display a menu title as a ODS icon', async () => {
      const icon = `<osds-icon slot="menu-title" name="home" size="xs" aria-hidden="" alt="" aria-name="" color="default" class="hydrated ods-icon"></osds-icon>`;
      await setup({ attributes: { }, html: icon });
      expect(menuTitleContent.outerHTML).toBe(icon);
    });

    it('should change the display of the surface when clicked on', async () => {
      await setup({ attributes: { }, html: template });
      await menuTitleContent.click();
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open');
    });

    it('should change the display of the surface when enter or space is pressed', async () => {
      await setup({ attributes: { }, html: template });
      await menuTitleContent.focus();
      await menuTitleContent.press('Enter');
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open');

      await menuTitleContent.press('Escape');

      await menuTitleContent.focus();
      await menuTitleContent.press('Space');
      expect(menuItemsSlotContent).toHaveClass('ocdk-surface--open');
    });

    it('should close the surface when escape is pressed', async () => {
      await setup({ attributes: { }, html: template });
      await menuTitleContent.press('Escape');
      expect(menuItemsSlotContent).not.toHaveClass('ocdk-surface--open');
    });
  });

  describe('disabled', () => {
    it('should have disabled attribute on menu-title slot element', async () => {
      await setup({ attributes: { }, html: template });
      const trigger = await page.find('osds-button');
      el.setAttribute('disabled', 'disabled');
      await page.waitForChanges();
      expect(trigger).toHaveAttribute('disabled');
    });
  });

  describe('menu items slot', () => {
    it('should have a slot', async () => {
      await setup({ attributes: { }, html: `` });
      expect(menuItemsSlot).not.toBeNull();
    });

    it('should hide the surface when a click happened outside of the surface', async () => {
      await setup({ attributes: { }, html: template });
      await menuTitleContent.click();
      await el.click();
      expect(menuItemsSlotContent).not.toHaveClass('ocdk-surface--open')
    });

    it('should display a ODS Divider', async () => {
      const button = `<osds-button slot="menu-title" color="primary">Button</osds-button>`;
      const divider = `<osds-divider color="text" separator="" size="6" class="hydrated"></osds-divider>`;
      await setup({ attributes: { }, html: button + divider });
      expect(el.innerHTML).toContain(divider);
    });
  });
});
