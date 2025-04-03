import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_CARD_COLOR, OdsCard } from '../../src';

describe('ods-card rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsCard],
      html,
    });

    root = page.root;
  }

  describe('attributes', () => {
    describe('color', () => {
      it('should be reflected', async() => {
        const colorValue = ODS_CARD_COLOR.neutral;

        await setup(`<ods-card color="${colorValue}"></ods-card>`);

        expect(root?.getAttribute('color')).toBe(colorValue);
      });

      it('should be set to its default value', async() => {
        await setup('<ods-card></ods-card>');

        expect(root?.getAttribute('color')).toBe(ODS_CARD_COLOR.primary);
      });
    });
  });
});
