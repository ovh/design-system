import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_MESSAGE_COLOR, ODS_MESSAGE_VARIANT, OdsMessage } from '../../src';

describe('ods-message rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsMessage],
      html,
    });

    root = page.root;
  }

  describe('color', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-message color="${dummyValue}">Dummy Message</ods-message>`);

      expect(root?.getAttribute('color')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-message>Dummy Message</ods-message>');

      expect(root?.getAttribute('color')).toBe(ODS_MESSAGE_COLOR.information);
    });
  });

  describe('variant', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-message variant="${dummyValue}">Dummy Message</ods-message>`);

      expect(root?.getAttribute('variant')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-message>Dummy Button</ods-message>');

      expect(root?.getAttribute('variant')).toBe(ODS_MESSAGE_VARIANT.default);
    });
  });
});
