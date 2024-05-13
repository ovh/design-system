import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-popover behaviour', () => {
  const triggerId = 'trigger-id';
  let page: E2EPage;
  let popoverElement: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    popoverElement = await page.find('ods-popover');
  }

  beforeEach(async() => {
    await setup(`
      <button id="${triggerId}">
        Trigger
      </button>
      <ods-popover trigger-id="${triggerId}">
        Popover content
      </ods-popover>
    `);
  });

  describe('methods', () => {
    describe('hide', () => {
      it('should emit an odsPopoverHide event', async() => {
        const odsPopoverHideSpy = await page.spyOnEvent('odsPopoverHide');

        await popoverElement.callMethod('hide');
        await page.waitForChanges();

        expect(odsPopoverHideSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('show', () => {
      it('should emit an odsPopoverShow event', async() => {
        const odsPopoverShowSpy = await page.spyOnEvent('odsPopoverShow');

        await popoverElement.callMethod('show');
        await page.waitForChanges();

        expect(odsPopoverShowSpy).toHaveReceivedEventTimes(1);
      });
    });
  });
});
