import type { OdsTooltipAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';


describe('e2e:osds-tooltip', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function isTooltipVisible(): Promise<boolean> {
    return page.evaluate(() => {
      return !! document.querySelector('osds-tooltip')?.shadowRoot?.querySelector('.ocdk-surface--open');
    });
  }

  async function setup({ attributes = {}, extraContent = '' }: { attributes?: Partial<OdsTooltipAttribute>, extraContent?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTooltipAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`
      <osds-tooltip ${odsStringAttributes2Str(stringAttributes)}>
        <osds-tooltip-content slot="tooltip-content">
          Tooltip content
        </osds-tooltip-content>
        Hover me
      </osds-tooltip>
      ${extraContent}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tooltip');
  }

  it('should render with tooltip hidden', async() => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
    expect(await isTooltipVisible()).toBe(false);
  });

  describe('methods', () => {
    describe('closeSurface', () => {
      it('should close the tooltip', async() => {
        await setup();

        await el.click();
        await page.waitForChanges();
        expect(await isTooltipVisible()).toBe(true);

        await el.callMethod('closeSurface');
        await page.waitForChanges();

        expect(await isTooltipVisible()).toBe(true);
      });
    });

    describe('setTabindex', () => {
      it('should set tabindex', async() => {
        const dummyTabindex = 42;
        await setup();

        await el.callMethod('setTabindex', dummyTabindex);
        await page.waitForChanges();

        expect(el.getAttribute('tabindex')).toBe(dummyTabindex.toString());
      });
    });
  });

  it('should display the tooltip on anchor click', async() => {
    await setup();

    await el.click();

    expect(await isTooltipVisible()).toBe(true);
  });

  it('should toggle the tooltip on mouse hover/leave', async() => {
    await setup();

    await page.mouse.move(5, 5);
    await page.waitForTimeout(500); // wait for debounce to resolve
    expect(await isTooltipVisible()).toBe(true);

    await page.mouse.move(500, 500);
    await page.waitForTimeout(500); // wait for debounce to resolve
    expect(await isTooltipVisible()).toBe(false);
  });

  // FIXME focus() method does not trigger the onFocus handler, although the activeElement is correctly updated
  xit('should toggle the tooltip on anchor focus/blur', async() => {
    await setup({ attributes: {} });

    await el.focus();
    await page.waitForChanges();
    expect(await isTooltipVisible()).toBe(true);

    await page.evaluate(() => {
      (document.querySelector('osds-tooltip') as HTMLElement).blur();
    });
    await page.waitForChanges();

    expect(await isTooltipVisible()).toBe(false);
  });

  it('should close the tooltip on outside click', async() => {
    await setup({ extraContent: '<button>Outside element</button>' });
    const outsideElement = await page.find('button');

    await el.click();
    expect(await isTooltipVisible()).toBe(true);

    await outsideElement.click();
    expect(await isTooltipVisible()).toBe(false);
  });
});
