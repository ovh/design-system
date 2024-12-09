import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-toggle behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let slider: E2EElement;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-toggle');
    slider = await page.find('ods-toggle >>> .ods-toggle__container__slider');
  }

  describe('watcher', () => {
    describe('on value change', () => {
      it('should toggle value', async() => {
        await setup('<ods-toggle></ods-toggle>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await el.getProperty('value')).toBeNull();
        expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');

        await el.click();
        await page.waitForChanges();

        const sliderHasClassCheck = await page.evaluate(() => {
          const slider = document.querySelector('ods-toggle')?.shadowRoot?.querySelector('.ods-toggle__container__slider');
          return slider?.classList.contains('ods-toggle__container__slider--checked');
        });
        expect(await el.getProperty('value')).toBe(true);
        expect(sliderHasClassCheck).toBe(true);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: false,
          validity: {},
          value: true,
        });
      });

      it('should not toggle value if disabled', async() => {
        await setup('<ods-toggle is-disabled></ods-toggle>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await el.getProperty('value')).toBeNull();
        expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');

        await el.click();
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(slider).not.toHaveClass('ods-toggle__container__slider--checked');
        expect(odsChangeSpy).toHaveReceivedEventTimes(0);
      });

      it('should not do an infinite loop', async() => {
        await setup('<ods-toggle></ods-toggle>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await page.evaluate(() => {
          const odsToggle = document.querySelector('ods-toggle');
          odsToggle?.addEventListener('odsChange', ((event: CustomEvent): void => {
            if (event.detail.value) {
              odsToggle.setAttribute('value', '');
            } else {
              odsToggle.removeAttribute('value');
            }
          }) as unknown as EventListener);
        });

        await el.setAttribute('value', true);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(true);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should set value to null', async() => {
        await setup('<ods-toggle value></ods-toggle>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should set value to null even when disabled', async() => {
        await setup('<ods-toggle value is-disabled></ods-toggle>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        expect(await el.getProperty('value')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should set value to default', async() => {
        await setup('<ods-toggle default-value="true"></ods-toggle>');
        const odsResetSpy = await page.spyOnEvent('odsReset');

        expect(await el.getProperty('value')).toBe(true);

        await el.setProperty('value', false);
        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(true);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should set value to default even if disabled', async() => {
        await setup('<ods-toggle default-value="true" is-disabled></ods-toggle>');
        const odsResetSpy = await page.spyOnEvent('odsReset');

        expect(await el.getProperty('value')).toBe(true);

        await el.setProperty('value', false);
        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(true);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('toggle', () => {
      it('should toggle value', async() => {
        await setup('<ods-toggle default-value="true"></ods-toggle>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await el.getProperty('value')).toBe(true);

        await el.callMethod('toggle');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(false);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: true,
          validity: {},
          value: false,
        });

        await el.callMethod('toggle');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(true);
        expect(odsChangeSpy).toHaveReceivedEventTimes(2);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: false,
          validity: {},
          value: true,
        });
      });

      it('should toggle value even when disabled', async() => {
        await setup('<ods-toggle default-value="true" is-disabled></ods-toggle>');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        expect(await el.getProperty('value')).toBe(true);

        await el.callMethod('toggle');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(false);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: true,
          validity: {},
          value: false,
        });

        await el.callMethod('toggle');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(true);
        expect(odsChangeSpy).toHaveReceivedEventTimes(2);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          previousValue: false,
          validity: {},
          value: true,
        });
      });
    });
  });

  describe('form', () => {
    it('should submit form on Enter', async() => {
      await setup(`<form method="get">
        <ods-toggle name="odsToggle" value></ods-toggle>
      </form>`);

      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsToggle')).toBe('true');
    });
  });
});
