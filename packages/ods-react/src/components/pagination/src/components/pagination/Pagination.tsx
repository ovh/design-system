import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src/index';
import { ICON_NAME, Icon } from '../../../../icon/src/index';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../../tooltip/src/index';
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
}

const PaginationButtonWithTooltip: FC<{
  tooltip?: string;
  children: ReactNode;
}> = ({ tooltip, children }) =>
  tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>{ children }</TooltipTrigger>
      <TooltipContent>{ tooltip }</TooltipContent>
    </Tooltip>
  ) : (
    <>{ children }</>
  );

const Pagination: FC<PaginationProp> = forwardRef(({
  className,
  disabled,
  defaultPage,
  labelTooltipNext,
  labelTooltipPrev,
  totalItems,
  pageSize = 10,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorPagination.Root
      className={ classNames(style[ 'pagination' ], className) }
      count={ totalItems }
      defaultPage={ defaultPage }
      pageSize={ pageSize }
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
              <VendorPagination.Item
                asChild
                className={ style[ 'pagination__item' ] }
                key={ index } { ...page }>
                <Button
                  disabled={ disabled }
                  variant={ BUTTON_VARIANT.ghost }>
                  { page.value }
                </Button>
              </VendorPagination.Item>
            ) : (
              <VendorPagination.Ellipsis
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
