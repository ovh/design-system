import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_MODAL_COLOR, OdsModal } from '../../src';

describe('ods-modal rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsModal],
      html,
    });

    root = page.root;
  }

  describe('attributes', () => {
    describe('color', () => {
      it('should be reflected', async() => {
        const colorValue = ODS_MODAL_COLOR.warning;

        await setup(`<ods-modal color="${colorValue}"></ods-modal>`);

        expect(root?.getAttribute('color')).toBe(colorValue);
      });

      it('should be set to its default value', async() => {
        await setup('<ods-modal></ods-modal>');

        expect(root?.getAttribute('color')).toBe(ODS_MODAL_COLOR.information);
      });
    });

    describe('isDismissible', () => {
      it('should be reflected', async() => {
        const isDismissibleValue = 'true';

        await setup(`<ods-modal is-dismissible="${isDismissibleValue}"></ods-modal>`);

        expect(root?.getAttribute('is-dismissible')).toBe(isDismissibleValue);
      });

      it('should be set by default', async() => {
        await setup('<ods-modal></ods-modal>');

        expect(root?.getAttribute('is-dismissible')).not.toBeNull();
      });
    });

    describe('isOpen', () => {
      it('should be reflected', async() => {
        const isOpenValue = 'true';

        await setup(`<ods-modal is-open="${isOpenValue}"></ods-modal>`);

        expect(root?.getAttribute('is-open')).toBe(isOpenValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-modal></ods-modal>');

        expect(root?.getAttribute('is-open')).toBeNull();
      });
    });
  });
});
