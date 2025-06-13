import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useState } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { PaginationButtonWithTooltip } from '../pagination-button-with-tooltip/PaginationButtonWithTooltip';
import { PaginationItem } from '../pagination-item/PaginationItem';
import {
  PaginationPageSizeSelector,
  type PaginationTotalItemsLabelRenderer,
} from '../pagination-page-size-selector/PaginationPageSizeSelector';
import style from './pagination.module.scss';

interface PaginationPageChangeDetail {
  page: number;
}

interface PaginationProp extends ComponentPropsWithRef<'nav'> {
  disabled?: boolean;
  defaultPage?: number;
  labelTooltipNext?: string;
  labelTooltipPrev?: string;
  onPageChange?: (detail: PaginationPageChangeDetail) => void;
  page?: number;
  pageSize?: number;
  siblingCount?: number;
  totalItems: number;
  renderTotalItemsLabel?: PaginationTotalItemsLabelRenderer;
  withPageSizeSelector?: boolean;
}

const defaultRenderTotalItemsLabel: PaginationTotalItemsLabelRenderer = ({ totalItems }) => `of ${totalItems} results`;

const Pagination: FC<PaginationProp> = forwardRef(({
  className,
  disabled,
  defaultPage,
  labelTooltipNext,
  labelTooltipPrev,
  onPageChange,
  page,
  pageSize = 10,
  siblingCount,
  totalItems,
  renderTotalItemsLabel = defaultRenderTotalItemsLabel,
  withPageSizeSelector,
  ...props
}, ref): JSX.Element => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(pageSize);
  const [internalPage, setInternalPage] = useState<number>(defaultPage ?? 1);
  const isControlled = page !== undefined;
  const currentPage = isControlled && page ? page : internalPage;

  useEffect(() => {
    if (!isControlled) {
      setInternalPage(defaultPage ?? 1);
    }
  }, [totalItems, itemsPerPage, defaultPage, isControlled]);

  const handlePageChange = (detail: PaginationPageChangeDetail): void => {
    if (!isControlled) {
      setInternalPage(detail.page);
    }
    onPageChange?.(detail);
  };

  const handlePageSizeChange = (value: string): void => {
    setItemsPerPage(Number(value));
  };

  return (
    <VendorPagination.Root
      className={ classNames(style[ 'pagination' ], className) }
      count={ totalItems }
      defaultPage={ defaultPage }
      onPageChange={ handlePageChange }
      page={ currentPage }
      pageSize={ itemsPerPage }
      ref={ ref }
      siblingCount={ siblingCount }
      { ...props }>
      { withPageSizeSelector &&
        <PaginationPageSizeSelector
          onSelectChange={ handlePageSizeChange }
          renderTotalItemsLabel={ renderTotalItemsLabel } />
      }
      <PaginationButtonWithTooltip tooltip={ labelTooltipPrev }>
        <VendorPagination.PrevTrigger asChild>
          <Button disabled={ disabled } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronLeft } />
          </Button>
        </VendorPagination.PrevTrigger>
      </PaginationButtonWithTooltip>

      <VendorPagination.Context>
        { (pagination) =>
          pagination.pages.map((page, index) =>
            page.type === 'page' ? (
              <PaginationItem key={ index } page={ page } index={ index } disabled={ disabled } />
            ) : (
              <VendorPagination.Ellipsis
                asChild
                index={ index }
                key={ index }>
                <Button
                  disabled
                  variant={ BUTTON_VARIANT.ghost }>
                  &#8230;
                </Button>
              </VendorPagination.Ellipsis>
            ),
          )
        }
      </VendorPagination.Context>

      <PaginationButtonWithTooltip tooltip={ labelTooltipNext }>
        <VendorPagination.NextTrigger asChild>
          <Button disabled={ disabled } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronRight } />
          </Button>
        </VendorPagination.NextTrigger>
      </PaginationButtonWithTooltip>
    </VendorPagination.Root>
  );
});

Pagination.displayName = 'Pagination';

export {
  Pagination,
  type PaginationPageChangeDetail,
  type PaginationProp,
};
