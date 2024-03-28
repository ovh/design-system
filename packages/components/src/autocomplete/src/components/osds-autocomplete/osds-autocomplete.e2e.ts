import type { OdsAutocompleteAttribute } from './interfaces/attributes';
import type { OdsAutocompleteValueChangeEventDetail } from './interfaces/events';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-autocomplete', () => {
  const baseAttribute = { ariaLabel: null, ariaLabelledby: '', clearable: false, defaultValue: '', disabled: false, error: false, icon: undefined, inline: false, isLoading: false, minimumNumberOfCharacters: 0, name: undefined, opened: false, placeholder: '', required: false, value: '' };
  let page: E2EPage;
  let el: E2EElement;
  let inputElement: E2EElement;
  let optionElement: E2EElement;

  async function setup({ attributes = {}, html, onPage }: { attributes?: Partial<OdsAutocompleteAttribute>, html?: string, onPage?: ({ page }: { page: E2EPage }) => void } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsAutocompleteAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    onPage && onPage({ page });

    await page.setContent(`
      <osds-autocomplete ${odsStringAttributes2Str(stringAttributes)}>
        ${html ?? ''}
        <osds-select-option value="FR">Bonjour</osds-select-option>
        <osds-select-option value="IT">Bongiorno</osds-select-option>
        <osds-select-option value="EN">Hello</osds-select-option>
      </osds-autocomplete>
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-autocomplete');
    inputElement = await page.find('osds-autocomplete >>> osds-input');
    optionElement = await page.find('osds-autocomplete > osds-select-option');
    await page.waitForChanges();
  }

  describe('defaults', () => {
    beforeEach(async() => {
      await setup({ });
    });

    it('should render', async() => {
      expect(el).not.toBeNull();
      expect(el).toHaveClass('hydrated');

      expect(optionElement).not.toBeNull();
      expect(optionElement).toHaveClass('hydrated');
    });

    it('should display a new option', async() => {
      await setup({ attributes: { }, html: '<osds-select-option value="DE">Guten tag</osds-select-option>' });

      const selectedLabel = await page.find('osds-select-option[value="DE"]');

      expect(selectedLabel).toBeDefined();
    });
  });

  it('should render & display the correct value', async() => {
    await setup({ attributes: { value: 'my-value' } });
    const value = await el.getProperty('value');
    expect(value).toBe('my-value');
    const inputValue = await inputElement.getProperty('value');
    expect(inputValue).toBe('my-value');
  });

  it('should open the surface on click', async() => {
    await setup({ });
    await el.click();
    await page.waitForChanges();
    expect(await el.getProperty('opened')).toBe(true);
  });

  describe('minimumNumberOfCharacters', () => {
    it('should not open the surface if input value is smaller than minimumNumberOfCharacters', async() => {
      await setup({ attributes: { minimumNumberOfCharacters: 3 } });

      await inputElement.setProperty('value', 'my');
      await el.click();
      await page.waitForChanges();
      expect(await el.getProperty('opened')).toBe(false);
    });

    it('should not open the surface if input value is smaller than minimumNumberOfCharacters', async() => {
      await setup({ attributes: { minimumNumberOfCharacters: 3 } });
      await inputElement.setProperty('value', 'my-value');
      await el.click();
      await page.waitForChanges();
      expect(await el.getProperty('opened')).toBe(true);
    });

    it('should hide the surface if, while typing, input value length goes under minimumNumberOfCharacters', async() => {
      await setup({ attributes: { minimumNumberOfCharacters: 5 } });
      await inputElement.setProperty('value', 'my-value');
      await el.click();
      await page.waitForChanges();
      expect(await el.getProperty('opened')).toBe(true);
      await inputElement.setProperty('value', 'my');
      await page.waitForChanges();
      expect(await el.getProperty('opened')).toBe(false);
    });
  });

  describe('keyboard navigation', () => {
    it('should close the surface on Escape', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('Escape');
      expect(await el.getProperty('opened')).toBe(false);
    });

    it('should focus on the options when navigating with Tab', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect(await optionElement.getProperty('selected')).toBe(true);
      await page.keyboard.press('Tab');
      await page.waitForChanges();
      expect(await optionElement.getProperty('selected')).toBe(false);
    });

    it('should focus on the options when navigating with the arrows', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      expect(await optionElement.getProperty('selected')).toBe(true);
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      expect(await optionElement.getProperty('selected')).toBe(false);
    });

    it('should select a focused option when pressing Enter', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('FR');
    });

    it('should keep keyboard navigation on selected option even if opened and closed', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('IT');
      await page.keyboard.press('ArrowDown');
      await page.waitForChanges();
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('EN');
    });

    it('should select last option if pressing ArrowUp on first option', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('ArrowUp');
      await page.waitForChanges();
      await page.keyboard.press('Enter');
      await page.waitForChanges();
      expect(await el.getProperty('value')).toBe('EN');
    });
  });

  describe('setInputTabindex', () => {
    it('should set inputTabindex to -1', async() => {
      await setup({ attributes: { } });
      await el.callMethod('setInputTabindex', '-1');
      await page.waitForChanges();
      const value = el.getAttribute('tabindex');
      expect(value).toBe('-1');
    });
  });

  describe('clear', () => {
    it('should clear the value', async() => {
      await setup({ attributes: { value: 'my-value' } });
      await el.callMethod('clear');
      await page.waitForChanges();
      const value = await el.getProperty('value');
      expect(value).toBe('');
    });
  });

  describe('checkForClickOutside', () => {
    it('should close the surface if click outside', async() => {
      await setup({ });
      await el.click();
      await page.waitForChanges();
      await page.click('body');
      await page.waitForChanges();
      expect(await el.getProperty('opened')).toBe(false);
    });
  });

  describe('isLoading', () => {
    it('should display a loading spinner', async() => {
      await setup({ attributes: { isLoading: true } });
      const spinner = await page.find('osds-autocomplete >>> osds-spinner');
      expect(spinner).not.toBeNull();
    });
  });

  describe('odsValueChange', () => {

    let OdsAutocompleteValueChangeEventDetail: OdsAutocompleteValueChangeEventDetail;

    beforeEach(() => {
      OdsAutocompleteValueChangeEventDetail = {
        oldValue: '',
        selection: null,
        validity: {
          customError: false,
          forbiddenValue: false,
          invalid: false,
          stepMismatch: false,
          valid: true,
          valueMissing: false,
        },
        value: '',
      };
    });

    it('should emit when component value property change', async() => {
      const newValue = 'my-new-value';
      await setup({ });
      const odsValueChange = await el.spyOnEvent('odsValueChange');

      el.setProperty('value', `${newValue}`);
      await page.waitForChanges();

      const expected: OdsAutocompleteValueChangeEventDetail = {
        ...OdsAutocompleteValueChangeEventDetail,
        oldValue: '',
        value: `${newValue}`,
      };

      expect(odsValueChange).toHaveReceivedEventDetail(expected);
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });
  });
});
