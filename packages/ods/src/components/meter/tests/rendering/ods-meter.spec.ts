import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsMeter } from '../../src';

describe('ods-meter rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsMeter],
      html,
    });

    root = page.root;
  }

  describe('max', () => {
    it('should be reflected', async () => {
      const maxValue = 200;

      await setup(`<ods-meter max="${maxValue}"></ods-meter>`);

      expect(root?.getAttribute('max')).toBe(maxValue.toString());
    });

    it('should render with expected default value', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('max')).toBe('100');
    });
  });

  describe('min', () => {
    it('should be reflected', async () => {
      const minValue = 10;

      await setup(`<ods-meter min="${minValue}"></ods-meter>`);

      expect(root?.getAttribute('min')).toBe(minValue.toString());
    });

    it('should render with expected default value', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('min')).toBe('0');
    });
  });

  describe('low', () => {
    it('should be reflected', async () => {
      const lowValue = 25;

      await setup(`<ods-meter low="${lowValue}"></ods-meter>`);

      expect(root?.getAttribute('low')).toBe(lowValue.toString());
    });

    it('should render with expected default value', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('low')).toBe('30');
    });
  });

  describe('high', () => {
    it('should be reflected', async () => {
      const highValue = 80;

      await setup(`<ods-meter high="${highValue}"></ods-meter>`);

      expect(root?.getAttribute('high')).toBe(highValue.toString());
    });

    it('should render with expected default value', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('high')).toBe('70');
    });
  });

  describe('value', () => {
    it('should be reflected', async () => {
      const value = 50;

      await setup(`<ods-meter value="${value}"></ods-meter>`);

      expect(root?.getAttribute('value')).toBe(value.toString());
    });

    it('should render with expected default value', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('value')).toBe('0');
    });
  });

  describe('aria-label', () => {
    it('should use the provided aria-label', async () => {
      const ariaLabel = 'Custom meter label';

      await setup(`<ods-meter aria-label="${ariaLabel}"></ods-meter>`);

      expect(root?.getAttribute('aria-label')).toBe(ariaLabel);
    });

    it('should render with the default aria-label', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('aria-label')).toBe('Meter showing progress');
    });
  });

  describe('aria-labelledby', () => {
    it('should use the provided aria-labelledby', async () => {
      const ariaLabelledby = 'custom-label-id';

      await setup(`<ods-meter aria-labelledby="${ariaLabelledby}"></ods-meter>`);

      expect(root?.getAttribute('aria-labelledby')).toBe(ariaLabelledby);
    });

    it('should not render aria-labelledby if not provided', async () => {
      await setup('<ods-meter></ods-meter>');

      expect(root?.getAttribute('aria-labelledby')).toBeNull();
    });
  });
});