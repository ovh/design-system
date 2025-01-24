import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-popover behaviour', () => {
  const triggerId = 'trigger-id';
  let page: E2EPage;
  let popoverElement: E2EElement;
  let buttonElement: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    popoverElement = await page.find('ods-popover');
    buttonElement = await page.find('button');
  }

  describe('methods', () => {
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

    describe('hide', () => {
      it('should emit an odsHide event', async() => {
        const odsHideSpy = await page.spyOnEvent('odsHide');

        await popoverElement.callMethod('hide');
        await page.waitForChanges();

        expect(odsHideSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('show', () => {
      it('should emit an odsShow event', async() => {
        const odsShowSpy = await page.spyOnEvent('odsShow');

        await popoverElement.callMethod('show');
        await page.waitForChanges();

        expect(odsShowSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('trigger', () => {
    it('should open the tooltip with complex triggerId', async() => {
      const triggerId = 'trigger:id';
      await setup(`
        <button id="${triggerId}">
          Trigger
        </button>
        <ods-popover trigger-id="${triggerId}">
          Popover content
        </ods-popover>
      `);
      const odsShowSpy = await page.spyOnEvent('odsShow');

      await buttonElement.click();
      await page.waitForChanges();

      const tooltipStyle = await popoverElement.getComputedStyle();
      expect(tooltipStyle.display).toBe('block');
      expect(odsShowSpy).toHaveReceivedEventTimes(1);
    });
  });
});
