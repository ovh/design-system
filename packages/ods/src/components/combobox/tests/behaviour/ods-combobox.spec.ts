jest.mock('tom-select');

import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsCombobox } from '../../src';

describe('ods-combobox behaviour', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsCombobox | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsCombobox],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should clear the combobox', async() => {
        await setup('<ods-combobox value="value"></ods-combobox>');

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });

      it('should clear even if disabled', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox value="${dummyValue}" is-disabled></ods-combobox>`);

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });
    });

    describe('reset', () => {
      it('should reset the combobox with the default value', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox value="${dummyValue}" default-value="${dummyDefaultValue}"></ods-combobox>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });

      it('should reset the combobox with the default value even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-combobox value="${dummyValue}" default-value="${dummyDefaultValue}" is-disabled></ods-combobox>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });
    });
  });
});
