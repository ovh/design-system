import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsPagination } from '../../src';

describe('ods-pagination rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsPagination],
      html,
    });

    root = page.root;
  }

  describe('attributes', () => {
    describe('defaultCurrentPage', () => {
      it('should be reflected', async() => {
        const defaultCurrentPageValue = 5;

        await setup(`<ods-pagination default-current-page="${defaultCurrentPageValue}"></ods-pagination>`);

        expect(root?.getAttribute('default-current-page')).toBe(String(defaultCurrentPageValue));
      });

      it('should be set to its default value', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('default-current-page')).toBe('1');
      });
    });

    describe('defaultItemsPerPage', () => {
      it('should be reflected', async() => {
        const defaultItemsPerPageValue = 25;

        await setup(`<ods-pagination default-items-per-page="${defaultItemsPerPageValue}"></ods-pagination>`);

        expect(root?.getAttribute('default-items-per-page')).toBe(String(defaultItemsPerPageValue));
      });

      it('should be set to its default value', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('default-items-per-page')).toBe('10');
      });
    });

    describe('isDisabled', () => {
      it('should be reflected', async() => {
        const isDisabledValue = 'true';

        await setup(`<ods-pagination is-disabled="${isDisabledValue}"></ods-pagination>`);

        expect(root?.getAttribute('is-disabled')).toBe(isDisabledValue);
      });

      it('should be set to its default value', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.hasAttribute('is-disabled')).toBe(false);
      });
    });

    describe('labelTooltipNext', () => {
      it('should be reflected', async() => {
        const labelTooltipNextValue = 'Next';

        await setup(`<ods-pagination label-tooltip-next="${labelTooltipNextValue}"></ods-pagination>`);

        expect(root?.getAttribute('label-tooltip-next')).toBe(labelTooltipNextValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('label-tooltip-next')).toBeNull();
      });
    });

    describe('labelTooltipPrevious', () => {
      it('should be reflected', async() => {
        const labelTooltipPreviousValue = 'Previous';

        await setup(`<ods-pagination label-tooltip-previous="${labelTooltipPreviousValue}"></ods-pagination>`);

        expect(root?.getAttribute('label-tooltip-previous')).toBe(labelTooltipPreviousValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('label-tooltip-previous')).toBeNull();
      });
    });

    describe('totalItems', () => {
      it('should be reflected', async() => {
        const totalItemsValue = 100;

        await setup(`<ods-pagination total-items="${totalItemsValue}"></ods-pagination>`);

        expect(root?.getAttribute('total-items')).toBe(String(totalItemsValue));
      });

      it('should not be set by default', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('total-items')).toBeNull();
      });
    });

    describe('totalPages', () => {
      it('should be reflected', async() => {
        const totalPagesValue = 10;

        await setup(`<ods-pagination total-pages="${totalPagesValue}"></ods-pagination>`);

        expect(root?.getAttribute('total-pages')).toBe(String(totalPagesValue));
      });

      it('should be set to its default value', async() => {
        await setup('<ods-pagination></ods-pagination>');

        expect(root?.getAttribute('total-pages')).toBe('1');
      });
    });
  });
});
