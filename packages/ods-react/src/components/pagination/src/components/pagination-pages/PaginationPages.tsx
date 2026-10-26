import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef } from 'react';
import { BUTTON_EMPHASIS, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { Link } from '../../../../link/src';
import { usePagination } from '../../contexts/usePagination';
import { PaginationButtonWithTooltip } from '../pagination-button-with-tooltip/PaginationButtonWithTooltip';
import { PaginationItem } from '../pagination-item/PaginationItem';
import style from './paginationPages.module.scss';

interface PaginationPagesProp extends ComponentPropsWithRef<'div'> {}

/**
 * A trigger with no page to lead to, see PaginationPages.
 * @internal
 */
const PaginationInertAnchor: FC<ComponentPropsWithRef<'a'>> = forwardRef(({
  children,
  href,
  ...props
}, ref): JSX.Element => <a ref={ ref } { ...props }>{ children }</a>);

PaginationInertAnchor.displayName = 'PaginationInertAnchor';

/**
 * The cell a trigger sits in when the pages are links, see paginationPages.module.scss.
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
  const { page, totalPages } = usePaginationContext();
  const isLink = !!getPageUrl;
  // In link mode zag only sets `data-disabled` at the boundaries, as an anchor takes no `disabled`
  // attribute. Link turns it into the `aria-disabled` contract, on the bounds Button mode uses. A
  // page below the first has no next page in range either, and an empty listing has no page at all.
  const hasPrevPage = page > 1 && totalPages > 0;
  const hasNextPage = page >= 1 && page < totalPages;
  const isPrevDisabled = isLink ? (disabled || !hasPrevPage) : disabled;
  const isNextDisabled = isLink ? (disabled || !hasNextPage) : disabled;
  // A trigger with no page to lead to is left a plain anchor: handing an undefined destination to a
  // routing library is at best meaningless, and next/link throws on it. Out of range (an empty
  // listing, a page past the last or below the first) zag still builds an href, which the anchor
  // drops. An anchor without href has no role either, hence the explicit one, as for the active page.
  const prevLinkAs = hasPrevPage ? linkAs : PaginationInertAnchor;
  const nextLinkAs = hasNextPage ? linkAs : PaginationInertAnchor;

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
                  disabled={ isPrevDisabled }
                  role={ isPrevDisabled ? 'link' : undefined }>
                  <Icon name={ ICON_NAME.chevronLeft } />
                </Link>
                : <Button disabled={ disabled } emphasis={ BUTTON_EMPHASIS.low }>
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
                      emphasis={ BUTTON_EMPHASIS.low }>
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
                  disabled={ isNextDisabled }
                  role={ isNextDisabled ? 'link' : undefined }>
                  <Icon name={ ICON_NAME.chevronRight } />
                </Link>
                : <Button disabled={ disabled } emphasis={ BUTTON_EMPHASIS.low }>
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
