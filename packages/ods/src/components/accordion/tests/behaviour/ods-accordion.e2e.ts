import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-popover behaviour', () => {
  let accordionElement: E2EElement;
  let page: E2EPage;

  async function isDetailsOpen(): Promise<boolean> {
    return await page.evaluate(() => {
      const details = document.querySelector('ods-accordion')?.shadowRoot?.querySelector('.ods-accordion__details');
      return details?.getAttribute('open') === '';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    accordionElement = await page.find('ods-accordion');
  }

  describe('methods', () => {
    describe('close', () => {
      it('should close and emit an odsToggle event', async() => {
        await setup(`
          <ods-accordion is-open>
            <span slot="summary">Hello, world!</span>

            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </ods-accordion>
        `);
        const odsToggleSpy = await page.spyOnEvent('odsToggle');

        expect((await isDetailsOpen())).toBe(true);

        await accordionElement.callMethod('close');
        await page.waitForChanges();

        expect(odsToggleSpy).toHaveReceivedEventTimes(1);
        expect(odsToggleSpy).toHaveReceivedEventDetail({ isOpen: false });

        expect((await isDetailsOpen())).toBe(false);
      });
    });

    describe('open', () => {
      it('should open and emit an odsToggle event', async() => {
        await setup(`
          <ods-accordion>
            <span slot="summary">Hello, world!</span>

            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </ods-accordion>
        `);
        const odsToggleSpy = await page.spyOnEvent('odsToggle');

        expect((await isDetailsOpen())).toBe(false);

        await accordionElement.callMethod('open');
        await page.waitForChanges();

        expect(odsToggleSpy).toHaveReceivedEventTimes(1);
        expect(odsToggleSpy).toHaveReceivedEventDetail({ isOpen: true });

        expect((await isDetailsOpen())).toBe(true);
      });
    });

    describe('toggle', () => {
      it('should toggle and emit odsToggle events', async() => {
        await setup(`
          <ods-accordion>
            <span slot="summary">Hello, world!</span>

            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </ods-accordion>
        `);
        const odsToggleSpy = await page.spyOnEvent('odsToggle');

        expect((await isDetailsOpen())).toBe(false);

        await accordionElement.callMethod('toggle');
        await page.waitForChanges();

        expect(odsToggleSpy).toHaveReceivedEventTimes(1);
        expect(odsToggleSpy).toHaveReceivedEventDetail({ isOpen: true });

        expect((await isDetailsOpen())).toBe(true);

        await accordionElement.callMethod('toggle');
        await page.waitForChanges();

        expect(odsToggleSpy).toHaveReceivedEventTimes(2);
        expect(odsToggleSpy).toHaveReceivedEventDetail({ isOpen: false });

        expect((await isDetailsOpen())).toBe(false);
      });
    });
  });
});
