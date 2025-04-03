jest.mock('tom-select');
jest.mock('../../src/controller/ods-select', () => ({
  getInitialValue: jest.fn(),
  getSelectConfig: (): SelectConfig => {
    return { plugin: {}, template: {} } ;
  },
  inlineValue: jest.fn(),
  moveSlottedElements: jest.fn(),
  setFormValue: jest.fn(),
  setSelectValue: jest.fn(),
}));

import { type SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsSelect } from '../../src';
import { type SelectConfig } from '../../src/controller/ods-select';

describe('ods-select behaviour', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsSelect | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsSelect],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should clear the select', async() => {
        await setup('<ods-select value="value"></ods-select>');

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });

      it('should clear even if disabled', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-select value="${dummyValue}" is-disabled></ods-select>`);

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });
    });

    describe('reset', () => {
      it('should reset the select with the default value', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-select value="${dummyValue}" default-value="${dummyDefaultValue}"></ods-select>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });

      it('should reset the select with the default value even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-select value="${dummyValue}" default-value="${dummyDefaultValue}" is-disabled></ods-select>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });
    });
  });
});
