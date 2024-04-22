jest.mock('../../src/controller/ods-textarea');

import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsTextarea } from '../../src';

describe('ods-textarea behaviour', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsTextarea | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTextarea],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should clear the textarea', async() => {
        await setup('<ods-textarea value="value"></ods-textarea>');

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });

      it('should clear even if disabled', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-textarea value="${dummyValue}" is-disabled></ods-textarea>`);

        await rootInstance?.clear();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBeNull();
      });
    });

    describe('reset', () => {
      it('should reset the textarea with the default value', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-textarea value="${dummyValue}" default-value="${dummyDefaultValue}"></ods-textarea>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });

      it('should reset the textarea with the default value even if disabled', async() => {
        const dummyDefaultValue = 'dummy defaultValue';
        const dummyValue = 'dummy value';
        await setup(`<ods-textarea value="${dummyValue}" default-value="${dummyDefaultValue}" is-disabled></ods-textarea>`);

        expect(root?.getAttribute('value')).toBe(dummyValue);

        await rootInstance?.reset();
        await page.waitForChanges();

        expect(root?.getAttribute('value')).toBe(dummyDefaultValue);
      });
    });
  });
});
