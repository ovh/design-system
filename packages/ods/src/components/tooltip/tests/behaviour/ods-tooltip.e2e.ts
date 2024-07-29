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
      it('should emit an odsHide event', async() => {
        const odsHideSpy = await page.spyOnEvent('odsHide');

        await tooltipElement.callMethod('hide');
        await page.waitForChanges();

        expect(odsHideSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('show', () => {
      it('should emit an odsShow event', async() => {
        const odsShowSpy = await page.spyOnEvent('odsShow');

        await tooltipElement.callMethod('show');
        await page.waitForChanges();

        expect(odsShowSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
