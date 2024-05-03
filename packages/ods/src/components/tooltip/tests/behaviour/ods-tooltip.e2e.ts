import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-tooltip behaviour', () => {
  const triggerId = 'trigger-id';
  let page: E2EPage;
  let tooltipElement: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    tooltipElement = await page.find('ods-tooltip');
  }

  beforeEach(async() => {
    await setup(`
      <button id="${triggerId}">
        Trigger
      </button>
      <ods-tooltip trigger-id="${triggerId}">
        Tooltip content
      </ods-tooltip>
    `);
  });

  describe('methods', () => {
    describe('hide', () => {
      it('should emit an odsTooltipHide event', async() => {
        const odsTooltipHideSpy = await page.spyOnEvent('odsTooltipHide');

        await tooltipElement.callMethod('hide');
        await page.waitForChanges();

        expect(odsTooltipHideSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('show', () => {
      it('should emit an odsTooltipShow event', async() => {
        const odsTooltipShowSpy = await page.spyOnEvent('odsTooltipShow');

        await tooltipElement.callMethod('show');
        await page.waitForChanges();

        expect(odsTooltipShowSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
