import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-switch navigation', () => {
  let page: E2EPage;
  let switchItems: E2EElement[];

  async function isFocusedOnInputId(inputId: string): Promise<boolean> {
    return await page.evaluate((id) => {
      return document.activeElement?.parentElement?.getAttribute('input-id') === id;
    }, inputId);
  }

  async function isInputRadioChecked(switchItem: E2EElement): Promise<boolean> {
    const input = await switchItem.find('input[type="radio"]');
    return input.getProperty('checked');
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    switchItems = await page.findAll('ods-switch-item');
  }

  describe('Switch', () => {
    describe('focus', () => {
      it('should be focusable', async() => {
        await setup(`<ods-switch>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocusedOnInputId('label1')).toBe(true);
        expect(odsFocusSpy).toHaveReceivedEventTimes(1);
      });

      it('should not be focusable if switch disabled', async() => {
        await setup(`<ods-switch is-disabled>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        const odsFocusSpy = await page.spyOnEvent('odsFocus');
        await page.keyboard.press('Tab');
        expect(await isFocusedOnInputId('label1')).toBe(false);
        expect(await isFocusedOnInputId('label2')).toBe(false);
        expect(await isFocusedOnInputId('label3')).toBe(false);
        expect(odsFocusSpy).not.toHaveReceivedEvent();
      });
    });

    describe('selection', () => {
      it('should be selectable on press Space', async() => {
        await setup(`<ods-switch>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');
        expect(await isInputRadioChecked(switchItems[0])).toBe(true);
      });

      it('should be selectable on press Enter', async() => {
        await setup(`<ods-switch>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        expect(await isInputRadioChecked(switchItems[0])).toBe(true);
      });

      it('should be selectable on click', async() => {
        await setup(`<ods-switch>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        await switchItems[1].click();
        expect(await isInputRadioChecked(switchItems[1])).toBe(true);
      });

      it('should not be selectable on click if disabled', async() => {
        await setup(`<ods-switch is-disabled>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        await switchItems[0].click();
        expect(await isInputRadioChecked(switchItems[0])).toBe(false);
      });

      it('should not be selectable on Space or Enter if disabled', async() => {
        await setup(`<ods-switch is-disabled>
          <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
          <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
        </ods-switch>`);
        await page.keyboard.press('Tab');
        await page.keyboard.press('Enter');
        expect(await isInputRadioChecked(switchItems[0])).toBe(false);

        await page.keyboard.press('Space');
        expect(await isInputRadioChecked(switchItems[0])).toBe(false);
      });
    });
  });
});
