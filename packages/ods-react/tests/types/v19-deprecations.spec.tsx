/*
 * Type-level checks, enforced by `tsc -b` (this folder is part of the ods-react tsconfig).
 * A `@ts-expect-error` that no longer matches an error fails the build (TS2578).
 */
import type { FileUploadItemProp } from '../../src/components/file-upload/src';
import type { MenuProp } from '../../src/components/menu/src';
import type { PaginationProp } from '../../src/components/pagination/src';
import type { PopoverProp } from '../../src/components/popover/src';
import type { SelectProp } from '../../src/components/select/src';
import type { ToggleProp } from '../../src/components/toggle/src';
import type { TooltipProp } from '../../src/components/tooltip/src';

describe('v19 deprecations typings', () => {
  describe('removed props', () => {
    it('should not accept the overlay props moved to overlayConfig, removed in v20', () => {
      // @ts-expect-error position is removed in v20, use overlayConfig.position
      const menu: MenuProp = { position: 'top' };
      // @ts-expect-error position is removed in v20, use overlayConfig.position
      const popover: PopoverProp = { position: 'top' };
      // @ts-expect-error gutter is removed in v20, use overlayConfig.gutter
      const popoverGutter: PopoverProp = { gutter: 0 };
      // @ts-expect-error sameWidth is removed in v20, use overlayConfig.sameWidth
      const popoverSameWidth: PopoverProp = { sameWidth: true };
      // @ts-expect-error fitControlWidth is removed in v20, use overlayConfig.sameWidth
      const select: SelectProp = { fitControlWidth: false, items: [] };
      // @ts-expect-error position is removed in v20, use overlayConfig.position
      const tooltip: TooltipProp = { position: 'top' };

      expect([menu, popover, popoverGutter, popoverSameWidth, select, tooltip]).toHaveLength(6);
    });

    it('should not accept the Pagination props replaced by PaginationPageSizeSelector, removed in v20', () => {
      // @ts-expect-error withPageSizeSelector is removed in v20, render a PaginationPageSizeSelector
      const withSelector: PaginationProp = { children: null, totalItems: 10, withPageSizeSelector: true };
      // @ts-expect-error renderTotalItemsLabel is removed in v20, use the PaginationPageSizeSelector label
      const withLabel: PaginationProp = { children: null, renderTotalItemsLabel: (): string => '', totalItems: 10 };

      expect([withLabel, withSelector]).toHaveLength(2);
    });

    it('should not accept uploadSuccessLabel, removed in v20', () => {
      // @ts-expect-error uploadSuccessLabel is removed in v20, a successful upload shows an icon
      const item: FileUploadItemProp = { file: {} as File, uploadSuccessLabel: 'Uploaded' };

      expect(item).toBeDefined();
    });
  });

  describe('removed props through a spread object', () => {
    it('should not accept a removed prop carried by a spread object', () => {
      // Not fresh object literals: only the never member rejects them (no excess property check).
      // Each carries a valid prop too, or the all-optional props would reject it for that alone.
      const position = { open: true, position: 'top' } as const;
      const gutter = { gutter: 0, open: true };
      const sameWidth = { open: true, sameWidth: true };
      const fitControlWidth = { fitControlWidth: false, items: [] };
      const renderTotalItemsLabel = { children: null, renderTotalItemsLabel: (): string => '', totalItems: 10 };
      const withPageSizeSelector = { children: null, totalItems: 10, withPageSizeSelector: true };
      const uploadSuccessLabel = { file: {} as File, uploadSuccessLabel: 'Uploaded' };

      // @ts-expect-error position is removed in v20
      const menu: MenuProp = position;
      // @ts-expect-error position is removed in v20
      const popover: PopoverProp = position;
      // @ts-expect-error gutter is removed in v20
      const popoverGutter: PopoverProp = gutter;
      // @ts-expect-error sameWidth is removed in v20
      const popoverSameWidth: PopoverProp = sameWidth;
      // @ts-expect-error fitControlWidth is removed in v20
      const select: SelectProp = fitControlWidth;
      // @ts-expect-error position is removed in v20
      const tooltip: TooltipProp = position;
      // @ts-expect-error renderTotalItemsLabel is removed in v20
      const withLabel: PaginationProp = renderTotalItemsLabel;
      // @ts-expect-error withPageSizeSelector is removed in v20
      const withSelector: PaginationProp = withPageSizeSelector;
      // @ts-expect-error uploadSuccessLabel is removed in v20
      const item: FileUploadItemProp = uploadSuccessLabel;

      expect([item, menu, popover, popoverGutter, popoverSameWidth, select, tooltip, withLabel, withSelector]).toHaveLength(9);
    });
  });

  describe('required children', () => {
    it('should require the parts of a Pagination and of a Toggle, rendered by default in v19', () => {
      // @ts-expect-error a Pagination renders its children only in v20, such as PaginationPages
      const pagination: PaginationProp = { totalItems: 10 };
      // @ts-expect-error a Toggle renders its children only in v20, such as ToggleControl
      const toggle: ToggleProp = {};

      expect([pagination, toggle]).toHaveLength(2);
    });
  });
});
