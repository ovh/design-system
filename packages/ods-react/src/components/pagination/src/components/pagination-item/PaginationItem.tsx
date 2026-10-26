import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_EMPHASIS, Button } from '../../../../button/src';
import { Link } from '../../../../link/src';
import { usePagination } from '../../contexts/usePagination';
import style from './paginationItem.module.scss';

interface PaginationItemProp {
  disabled?: boolean;
  index: number;
  page: {
    value: number;
  };
}

/** @internal The anchor attributes Ark puts on an item in link mode, dropped by the active page. */
type PaginationCurrentPageProp = ComponentPropsWithRef<'span'> & Pick<ComponentPropsWithRef<'a'>, 'href'>;

/**
 * The active page in link mode. It keeps the identity Ark puts on the item - `aria-current`,
 * `data-selected`, the label - but drops everything that would make it actionable: there is
 * nowhere to navigate to, so it reads as plain, emphasised text rather than as a link.
 * It is exposed as a disabled link all the same, as `aria-label` is prohibited on a role-less
 * (generic) element, and the label is what names the page.
 * @internal
 */
const PaginationCurrentPage: FC<PaginationCurrentPageProp> = forwardRef(({
  children,
  className,
  href,
  onClick,
  tabIndex,
  ...props
}, ref): JSX.Element => (
  <span
    aria-disabled="true"
    className={ classNames(style['pagination-item__current'], className) }
    ref={ ref }
    role="link"
    { ...props }>
    { children }
  </span>
));

PaginationCurrentPage.displayName = 'PaginationCurrentPage';

const PaginationItem: FC<PaginationItemProp> = ({
  disabled,
  index,
  page,
}): JSX.Element => {
  const { page: currentPage } = usePaginationContext();
  const { getPageUrl, linkAs } = usePagination();
  const isCurrentPage = currentPage === page.value;

  // Link mode. The item is a cell the size of a page button around a link that hugs its digits,
  // see paginationItem.module.scss.
  if (getPageUrl) {
    return (
      <span className={ classNames(style['pagination-item'], style['pagination-item--link']) }>
        <VendorPagination.Item
          asChild
          key={ index }
          type="page"
          { ...page }>
          {
            isCurrentPage
              ? <PaginationCurrentPage>{ page.value }</PaginationCurrentPage>
              : <Link
                as={ linkAs }
                className={ style['pagination-item__link'] }
                disabled={ disabled }>
                { page.value }
              </Link>
          }
        </VendorPagination.Item>
      </span>
    );
  }

  return (
    <VendorPagination.Item
      asChild
      className={ style['pagination-item'] }
      key={ index }
      type="page"
      { ...page }>
      <Button
        disabled={ disabled }
        emphasis={ isCurrentPage ? BUTTON_EMPHASIS.high : BUTTON_EMPHASIS.low }>
        { page.value }
      </Button>
    </VendorPagination.Item>
  );
};

export {
  PaginationItem,
  type PaginationItemProp,
};
