import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsTooltipAttributes, OdsComponentAttributes2StringAttributes, odsTooltipDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsTooltipBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-tooltip', () => {
  let page: E2EPage;
  let el: E2EElement;
  let anchorElement: E2EElement;
  let tooltipSurface: E2EElement;

  function isTooltipVisible(): boolean {
    return !!tooltipSurface && tooltipSurface.getAttribute('opened') !== null
  }

  async function setup({ attributes = {}, extraContent = '' }: { attributes?: Partial<OdsTooltipAttributes>, extraContent?: string } = {}) {
    const minimalAttributes: OdsTooltipAttributes = OdsCreateAttributes(attributes, odsTooltipBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipAttributes>(minimalAttributes, odsTooltipDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
      <osds-tooltip ${OdsStringAttributes2Str(stringAttributes)}>
        <osds-tooltip-content slot="tooltip-content">
          Tooltip content
        </osds-tooltip-content>
        Hover me
      </osds-tooltip>
      ${extraContent}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-tooltip');
    anchorElement = await page.find('osds-tooltip >>> .tooltip-trigger');
    tooltipSurface = await page.find('osds-tooltip >>> ocdk-surface');
  }

  it('should render with tooltip hidden', async () => {
    await setup();
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
    expect(isTooltipVisible()).toBe(false);
  });

  it('should display the tooltip on anchor click', async () => {
    await setup();

    await anchorElement.click();

    expect(isTooltipVisible()).toBe(true);
  });

  //FIXME
  xit('should toggle the tooltip on mouse hover/leave', async () => {
    await setup();

    await page.mouse.move(5, 5);
    await page.waitForTimeout(500) // wait for debounce to resolve
    expect(isTooltipVisible()).toBe(true);

    await page.mouse.move(500, 500);
    await page.waitForTimeout(500) // wait for debounce to resolve
    expect(isTooltipVisible()).toBe(false);
  });

  // FIXME
  xit('should display the tooltip on anchor focus', async () => {
    await setup({ attributes: {} });

    await anchorElement.focus();
    await page.waitForTimeout(500) // wait for debounce to resolve

    expect(isTooltipVisible()).toBe(true);
  });

  it('should close the tooltip on outside click', async () => {
    await setup({ extraContent: '<button>Outside element</button>' });
    const outsideElement = await page.find('button');

    await anchorElement.click();
    expect(isTooltipVisible()).toBe(true);

    await outsideElement.click();
    expect(isTooltipVisible()).toBe(false);
  });
});
