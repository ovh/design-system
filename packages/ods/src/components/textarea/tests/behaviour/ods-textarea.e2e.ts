import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-textarea behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;
  let textarea: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-textarea');
    textarea = await page.find('ods-textarea >>> .ods-textarea__textarea');
  }

  beforeEach(jest.clearAllMocks);

  describe('methods', () => {
    describe('clear', () => {
      it('should emit an odsClear event', async() => {
        await setup('<ods-textarea value="value"></ods-textarea>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsClear event even if disabled', async() => {
        await setup('<ods-textarea is-disabled value="value"></ods-textarea>');
        const odsClearSpy = await page.spyOnEvent('odsClear');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBeNull();
        expect(odsClearSpy).toHaveReceivedEventTimes(1);
      });
    });

    describe('reset', () => {
      it('should emit an odsReset event', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-textarea value="value" default-value="${dummyDefaultValue}"></ods-textarea>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });

      it('should emit an odsReset event even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        await setup(`<ods-textarea is-disabled value="value" default-value="${dummyDefaultValue}"></ods-textarea>`);
        const odsResetSpy = await page.spyOnEvent('odsReset');

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(odsResetSpy).toHaveReceivedEventTimes(1);
      });
    });
  });

  describe('watchers', () => {
    describe('on value change', () => {
      it('should emit an odsChange event', async() => {
        const dummyValue = 'dummy value';
        await setup('<ods-textarea name="ods-textarea"></ods-textarea>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await textarea.type(dummyValue);
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyValue);
        expect(odsValueChangeSpy).toHaveReceivedEventTimes(dummyValue.length);
        expect(odsValueChangeSpy).toHaveReceivedEventDetail({
          name: 'ods-textarea',
          previousValue: dummyValue.slice(0, -1),
          validity: {},
          value: dummyValue,
        });
      });

      it('should do nothing if disabled', async() => {
        await setup('<ods-textarea is-disabled></ods-textarea>');
        const odsValueChangeSpy = await page.spyOnEvent('odsChange');

        await textarea.type('dummy value');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(null);
        expect(odsValueChangeSpy).not.toHaveReceivedEvent();
      });
    });
  });
});
