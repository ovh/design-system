jest.mock('../../src/controller/ods-input');
import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsInput } from '../../src';

describe('ods-input behaviour', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsInput | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsInput],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  describe('methods', () => {
    describe('clear', () => {
      it('should clear the input', async() => {
        await setup('<ods-input value="value"></ods-input>');
        await rootInstance?.clear();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBeNull();
      });
    });

    describe('reset', () => {
      it('should reset input with default value', async() => {
        const defaultValue = 'defaultValue';
        const value = 'value';
        await setup(`<ods-input value="${value}" default-value="${defaultValue}"></ods-input>`);
        expect(root?.getAttribute('value')).toBe(value);
        await rootInstance?.reset();
        await page.waitForChanges();
        expect(root?.getAttribute('value')).toBe(defaultValue);
      });
    });

    describe('toggleMasked', () => {
      it('should change masked', async() => {
        await setup('<ods-input is-masked></ods-input>');
        expect(root?.getAttribute('is-masked')).toBe('');
        await rootInstance?.toggleMask();
        await page.waitForChanges();
        expect(root?.getAttribute('is-masked')).toBeNull();
      });
    });
  });
});
