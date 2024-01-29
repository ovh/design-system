import type { OdsTextareaAttribute } from './interfaces/attributes';
import type { OdsTextareaValueChangeEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-textarea', () => {
  const baseAttribute = { ariaLabel: null, defaultValue: null, disabled: false, error: false, name: '', spellcheck: false, value: null };
  let page: E2EPage;
  let el: E2EElement;
  let textareaElement: E2EElement;

  async function setup({ attributes = {}, onPage }: { attributes?: Partial<OdsTextareaAttribute>, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTextareaAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-textarea ${odsStringAttributes2Str(stringAttributes)}>
      </osds-textarea>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-textarea');
    textareaElement = await page.find('osds-textarea >>> textarea');
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup();
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');
    });

    it('should have a textarea element', async() => {
      expect(textareaElement).not.toBeNull();
    });
  });

  describe('methods', () => {
    describe('reset', () => {
      it('should reset the value to empty string when defaultValue is missing', async() => {
        await setup({ attributes: { value: 'dummy text' } });

        await el.callMethod('reset');
        await page.waitForChanges();

        const elValue = await el.getProperty('value');
        const value = await textareaElement.getProperty('value');
        expect(elValue).toBe('');
        expect(value).toBe('');
      });

      it('should reset the value to the defaultValue', async() => {
        const dummyDefaultValue = 'dummy default text';
        await setup({ attributes: { defaultValue: dummyDefaultValue, value: 'dummy text' } });

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.getProperty('value')).toBe(dummyDefaultValue);
        expect(await textareaElement.getProperty('value')).toBe(dummyDefaultValue);
      });
    });

    describe('setFocus', () => {
      it('should set setFocus on textarea element', async() => {
        const dummyTextareaId = 'dummy textarea id';
        await setup({ attributes: { textAreaId: dummyTextareaId } });

        await el.callMethod('setFocus');
        await page.waitForChanges();

        const activeElementId = await page.$eval('osds-textarea', (el) => el.shadowRoot?.activeElement?.id);
        expect(activeElementId).toBe(dummyTextareaId);
      });

      it('should do nothing if component is disabled', async() => {
        await setup({ attributes: { disabled: true } });
        await page.waitForChanges();

        await el.callMethod('setFocus');
        await page.waitForChanges();

        const activeElementId = await page.$eval('osds-textarea', (el) => el.shadowRoot?.activeElement?.id);
        expect(activeElementId).toBe(undefined);
      });
    });
  });

  describe('events', () => {
    describe('odsValueChange', () => {
      let odsTextareaValueChangeEventDetailBase: OdsTextareaValueChangeEventDetail;

      beforeEach(() => {
        odsTextareaValueChangeEventDetailBase = {
          name: '',
          oldValue: '',
          validity: {
            badInput: false,
            customError: false,
            forbiddenValue: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valid: true,
            valueMissing: false,
          },
          value: '',
        };
      });

      it('should emit when component value property change', async() => {
        const newValue = 'Lorem ipsum';
        await setup();
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', newValue);
        await page.waitForChanges();

        expect(odsValueChange).toHaveReceivedEventTimes(1);
        expect(odsValueChange).toHaveReceivedEventDetail({
          ...odsTextareaValueChangeEventDetailBase,
          oldValue: '',
          value: `${newValue}`,
        });
      });

      it('should emit if we write inside the textarea', async() => {
        const initialValue = 'Lorem';
        const newValue = ' ipsum';
        await setup();
        const odsValueChange = await el.spyOnEvent('odsValueChange');

        el.setProperty('value', initialValue);
        await page.waitForChanges();

        await el.callMethod('setFocus');
        await page.waitForChanges();
        await page.keyboard.type(newValue);

        expect(odsValueChange).toHaveReceivedEventTimes(newValue.length + 1);
        expect(odsValueChange).toHaveReceivedEventDetail({
          ...odsTextareaValueChangeEventDetailBase,
          oldValue: 'Lorem ipsu',
          value: 'Lorem ipsum',
        });
      });
    });
  });
});
