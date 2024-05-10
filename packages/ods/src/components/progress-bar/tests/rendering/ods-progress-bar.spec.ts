import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsProgressBar } from '../../src';

describe('ods-progress-bar rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsProgressBar],
      html,
    });

    root = page.root;
  }

  describe('max', () => {
    it('should be reflected', async() => {
      const maxValue = 50;

      await setup(`<ods-progress-bar max="${maxValue}"></ods-progress-bar>`);

      expect(root?.getAttribute('max')).toBe(maxValue.toString());
    });

    it('should render with expected default value', async() => {
      await setup('<ods-progress-bar></ods-progress-bar>');

      expect(root?.getAttribute('max')).toBe('100');
    });
  });

  describe('value', () => {
    it('should be reflected', async() => {
      const value = 50;

      await setup(`<ods-progress-bar value="${value}"></ods-progress-bar>`);

      expect(root?.getAttribute('value')).toBe(value.toString());
    });

    it('should render with expected default value', async() => {
      await setup('<ods-progress-bar></ods-progress-bar>');

      expect(root?.getAttribute('value')).toBe('0');
    });
  });
});
