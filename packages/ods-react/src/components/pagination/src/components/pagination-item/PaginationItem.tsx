import { Pagination as VendorPagination, usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
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
type PaginationCurrentPageProp = ComponentPropsWithRef<'span'> & Pick<ComponentPropsWithRef<'a'>, 'href' | 'type'>;

/**
 * The active page in link mode. It keeps the identity Ark puts on the item - `aria-current`,
 * `data-selected`, the label - but drops everything that would make it actionable: there is
 * nowhere to navigate to, so it reads as plain, emphasised text rather than as a link.
 * @internal
 */
const PaginationCurrentPage: FC<PaginationCurrentPageProp> = forwardRef(({
  children,
  className,
  href,
  onClick,
  tabIndex,
  type,
  ...props
}, ref): JSX.Element => (
  <span
    className={ classNames(style['pagination-item__current'], className) }
    ref={ ref }
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
  const { getPageUrl } = usePagination();
  const isCurrentPage = currentPage === page.value;

  // Link mode. The item lives inside a plain box holding the rhythm of the bar, so that the link
  // hugs its digits: its underline would otherwise run far wider than the page number.
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
        variant={ isCurrentPage ? BUTTON_VARIANT.default : BUTTON_VARIANT.ghost }>
        { page.value }
      </Button>
    </VendorPagination.Item>
  );
};

export {
  PaginationItem,
  type PaginationItemProp,
};
