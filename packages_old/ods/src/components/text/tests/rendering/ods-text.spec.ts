import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_TEXT_PRESET, OdsText } from '../../src';

describe('ods-text rendering', () => {
  let page: SpecPage;
  let part: Element | undefined | null;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsText],
      html,
    });

    root = page.root;
    part = root?.shadowRoot?.querySelector('[part="text"]');
  }

  describe('preset', () => {
    it('should be reflected', async() => {
      const presetValue = 'caption';

      await setup(`<ods-text preset="${presetValue}"></ods-text>`);

      expect(root?.getAttribute('preset')).toBe(presetValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-text></ods-text>');

      expect(root?.getAttribute('preset')).toBe(ODS_TEXT_PRESET.paragraph);
    });

    it('should have correct class & tag', async() => {
      const presetValue = 'caption';

      await setup(`<ods-text preset="${presetValue}"></ods-text>`);

      expect(part?.classList.contains('ods-text--caption')).toBe(true);
      expect(part?.tagName).toBe('SPAN');
    });
  });
});
