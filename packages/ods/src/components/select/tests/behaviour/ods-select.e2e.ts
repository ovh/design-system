import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-select behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isSelectOpen(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector('ods-select')?.shadowRoot?.querySelector('.ts-wrapper')?.classList.contains('dropdown-active') || false;
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-select');
  }

  beforeEach(jest.clearAllMocks);

  describe('form', () => {
    it('should get form data when submit button is triggered', async() => {
      await setup(`<form method="get">
        <ods-select name="odsSelect" value="1"><option value="1">1</option></ods-select>
        <button type="submit">Submit</button>
      </form>`);
      const submitButton = await page.find('button[type="submit"]');

      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsSelect')).toBe('1');
    });

    it('should reset form when reset button is triggered', async() => {
      await setup(`<form method="get">
        <ods-select name="odsSelect" value="1"><option value="1">1</option></ods-select>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>`);
      const resetButton = await page.find('button[type="reset"]');
      const submitButton = await page.find('button[type="submit"]');

      await resetButton.click();
      await submitButton.click();
      await page.waitForNetworkIdle();

      const url = new URL(page.url());
      expect(url.searchParams.get('odsSelect')).toBe('');
    });
  });

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-select name="ods-select" value="value"></ods-select>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-select name="ods-select" is-disabled value="value"></ods-select>');
        const odsClearSpy = await page.spyOnEvent('odsClear');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });

    describe('close', () => {
      it('should close the select dropdown', async() => {
        await setup('<ods-select><option>Value 1</option></ods-select>');
        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(true);

        await el.callMethod('close');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(false);
      });
    });

    describe('open', () => {
      it('should open the select dropdown', async() => {
        await setup('<ods-select><option>Value 1</option></ods-select>');

        expect(await isSelectOpen()).toBe(false);

        await el.callMethod('open');
        await page.waitForChanges();

        expect(await isSelectOpen()).toBe(true);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-select name="ods-select" value="value" default-value="${dummyDefaultValue}"></ods-select>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-select name="ods-select" is-disabled value="value" default-value="${dummyDefaultValue}"></ods-select>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: dummyDefaultValue,
        });
      });

      it('should emit an odsReset event without defaultValue', async() => {
        await setup('<ods-select name="ods-select" is-disabled value="value"></ods-select>');
        const odsResetSpy = await page.spyOnEvent('odsReset');
        const odsChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-select',
          previousValue: 'value',
          validity: {},
          value: null,
        });
      });
    });
  });

  describe('watchers', () => {
    describe('on value change', () => {
      it('should emit an odsChange event', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-select><option value="${dummyValue}">Value 1</option></ods-select>`);
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await el.callMethod('open');
        await page.evaluate(() => {
          document.querySelector('ods-select')?.shadowRoot?.querySelector<HTMLElement>('[role="option"]')?.click();
        });
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(1);
        expect(odsValueChangeSpy).toHaveReceivedEventDetail({
          validity: {},
          value: dummyValue,
        });
      });
    });
  });
});
