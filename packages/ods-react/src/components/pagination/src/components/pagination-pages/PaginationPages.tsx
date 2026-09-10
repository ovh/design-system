import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { Link } from '../../../../link/src';
import { usePagination } from '../../contexts/usePagination';
import { PaginationButtonWithTooltip } from '../pagination-button-with-tooltip/PaginationButtonWithTooltip';
import { PaginationItem } from '../pagination-item/PaginationItem';
import style from './paginationPages.module.scss';

interface PaginationPagesProp extends ComponentPropsWithRef<'div'> {}

/**
 * In link mode the trigger hugs its chevron, the way an icon only Link does, so that its
 * underline is the width of the glyph. A cell then holds the slot of a page button around it.
 * @internal
 */
const PaginationTriggerCell: FC<{ children: ReactNode, isLink: boolean }> = ({
  children,
  isLink,
}): JSX.Element => isLink
  ? <span className={ style['pagination-pages__cell'] }>{ children }</span>
  : <>{ children }</>;

const PaginationPages: FC<PaginationPagesProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { disabled, getPageUrl, labelTooltipNext, labelTooltipPrev, linkAs } = usePagination();
  const { nextPage, previousPage } = usePaginationContext();
  const isLink = !!getPageUrl;
  // In link mode zag drops the href at the boundaries but never marks the trigger disabled, as
  // an anchor takes no `disabled` attribute. Link turns it into the `aria-disabled` contract.
  const isPrevDisabled = isLink ? (disabled || !previousPage) : disabled;
  const isNextDisabled = isLink ? (disabled || !nextPage) : disabled;
  // A trigger that leads nowhere carries no href, so it is left a plain anchor: handing an
  // undefined destination to a routing library is at best meaningless, and next/link throws on it.
  const prevLinkAs = isPrevDisabled ? undefined : linkAs;
  const nextLinkAs = isNextDisabled ? undefined : linkAs;

  return (
    <div
      className={ classNames(style['pagination-pages'], className) }
      data-ods="pagination-pages"
      ref={ ref }
      { ...props }>
      <PaginationTriggerCell isLink={ isLink }>
        <PaginationButtonWithTooltip tooltip={ labelTooltipPrev }>
          <VendorPagination.PrevTrigger asChild>
            {
              isLink
                ? <Link
                  as={ prevLinkAs }
                  className={ style['pagination-pages__trigger'] }
                  disabled={ isPrevDisabled }>
                  <Icon name={ ICON_NAME.chevronLeft } />
                </Link>
                : <Button disabled={ disabled } variant={ BUTTON_VARIANT.ghost }>
                  <Icon name={ ICON_NAME.chevronLeft } />
                </Button>
            }
          </VendorPagination.PrevTrigger>
        </PaginationButtonWithTooltip>
      </PaginationTriggerCell>

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
                {
                  isLink
                    ? <span className={ style['pagination-pages__ellipsis'] }>&#8230;</span>
                    : <Button
                      disabled
                      variant={ BUTTON_VARIANT.ghost }>
                      &#8230;
                    </Button>
                }
              </VendorPagination.Ellipsis>
            ),
          )
        }
      </VendorPagination.Context>

      <PaginationTriggerCell isLink={ isLink }>
        <PaginationButtonWithTooltip tooltip={ labelTooltipNext }>
          <VendorPagination.NextTrigger asChild>
            {
              isLink
                ? <Link
                  as={ nextLinkAs }
                  className={ style['pagination-pages__trigger'] }
                  disabled={ isNextDisabled }>
                  <Icon name={ ICON_NAME.chevronRight } />
                </Link>
                : <Button disabled={ disabled } variant={ BUTTON_VARIANT.ghost }>
                  <Icon name={ ICON_NAME.chevronRight } />
                </Button>
            }
          </VendorPagination.NextTrigger>
        </PaginationButtonWithTooltip>
      </PaginationTriggerCell>
    </div>
  );
});

PaginationPages.displayName = 'PaginationPages';

export {
  PaginationPages,
  type PaginationPagesProp,
};
