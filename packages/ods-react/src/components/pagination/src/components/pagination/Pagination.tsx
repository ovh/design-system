import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef } from 'react';
import { PaginationProvider, type PaginationRootProp, usePagination } from '../../contexts/usePagination';
import style from './pagination.module.scss';

interface PaginationProp extends PaginationRootProp {}

const PaginationRoot: FC<PaginationProp> = forwardRef(({
  children,
  className,
  defaultPage,
  siblingCount,
  totalItems,
  ...props
}, ref): JSX.Element => {
  const { currentPage, getPageUrl, handlePageChange, itemsPerPage } = usePagination();

  return (
    <VendorPagination.Root
      className={ classNames(style['pagination'], className) }
      count={ totalItems }
      data-ods="pagination"
      defaultPage={ defaultPage }
      getPageUrl={ getPageUrl }
      onPageChange={ handlePageChange }
      page={ currentPage }
      pageSize={ itemsPerPage }
      ref={ ref }
      siblingCount={ siblingCount }
      type={ getPageUrl ? 'link' : 'button' }
      { ...props }>
      { children }
    </VendorPagination.Root>
  );
});

const Pagination: FC<PaginationProp> = forwardRef(({
  defaultPage,
  disabled,
  getPageUrl,
  labelTooltipNext,
  labelTooltipPrev,
  linkAs,
  onPageChange,
  onPageSizeChange,
  page,
  pageSize,
  totalItems,
  ...props
}, ref): JSX.Element => {
  return (
    <PaginationProvider
      defaultPage={ defaultPage }
      disabled={ disabled }
      getPageUrl={ getPageUrl }
      labelTooltipNext={ labelTooltipNext }
      labelTooltipPrev={ labelTooltipPrev }
      linkAs={ linkAs }
      onPageChange={ onPageChange }
      onPageSizeChange={ onPageSizeChange }
      page={ page }
      pageSize={ pageSize }
      totalItems={ totalItems }>
      <PaginationRoot
        defaultPage={ defaultPage }
        ref={ ref }
        totalItems={ totalItems }
        { ...props } />
    </PaginationProvider>
  );
});

Pagination.displayName = 'Pagination';

export {
  Pagination,
  type PaginationProp,
};
