import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsAccordion } from '../../src';

describe('ods-accordion rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsAccordion],
      html,
    });

    root = page.root;
  }

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-accordion is-disabled></ods-accordion>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-accordion></ods-accordion>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isOpen', () => {
    it('should be reflected', async() => {
      await setup('<ods-accordion is-open></ods-accordion>');

      expect(root?.getAttribute('is-open')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-accordion></ods-accordion>');

      expect(root?.getAttribute('is-open')).toBeNull();
    });
  });
});
