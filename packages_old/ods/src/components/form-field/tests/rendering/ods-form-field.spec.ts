import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsFormField } from '../../src';

describe('ods-form-field rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsFormField],
      html,
    });

    root = page.root;
  }

  describe('error', () => {
    it('should be reflected', async() => {
      const errorValue = 'Wrong format.';

      await setup(`<ods-form-field error="${errorValue}"></ods-form-field>`);

      expect(root?.getAttribute('error')).toBe(errorValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-form-field></ods-form-field>');

      expect(root?.getAttribute('error')).toBe('');
    });
  });
});
