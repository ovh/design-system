import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useState } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src/index';
import { ICON_NAME, Icon } from '../../../../icon/src/index';
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
  pageSize?: number;
  page?: number;
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
  totalItems,
  siblingCount,
  pageSize = 10,
  renderTotalItemsLabel = defaultRenderTotalItemsLabel,
  withPageSizeSelector,
  ...props
}, ref): JSX.Element => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(pageSize);
  const handlePageSizeChange = (value: string): void => {
    setItemsPerPage(Number(value));
  };
  return (
    <VendorPagination.Root
      className={ classNames(style[ 'pagination' ], className) }
      count={ totalItems }
      defaultPage={ defaultPage }
      pageSize={ itemsPerPage }
      siblingCount={ siblingCount }
      ref={ ref }
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
