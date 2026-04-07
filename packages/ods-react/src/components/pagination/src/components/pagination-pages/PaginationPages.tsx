import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { usePagination } from '../../contexts/usePagination';
import { PaginationButtonWithTooltip } from '../pagination-button-with-tooltip/PaginationButtonWithTooltip';
import { PaginationItem } from '../pagination-item/PaginationItem';
import style from './paginationPages.module.scss';

interface PaginationPagesProp extends ComponentPropsWithRef<'div'> {}

const PaginationPages: FC<PaginationPagesProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { disabled, labelTooltipNext, labelTooltipPrev } = usePagination();

  return (
    <div
      className={ classNames(style['pagination-pages'], className) }
      data-ods="pagination-pages"
      ref={ ref }
      { ...props }>
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
    </div>
  );
});

PaginationPages.displayName = 'PaginationPages';

export {
  PaginationPages,
  type PaginationPagesProp,
};
