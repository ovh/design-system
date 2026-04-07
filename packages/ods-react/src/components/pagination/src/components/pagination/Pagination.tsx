import { Pagination as VendorPagination } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef, useEffect } from 'react';
import { PaginationProvider, type PaginationRootProp, defaultRenderTotalItemsLabel, usePagination } from '../../contexts/usePagination';
import { PaginationPageSizeSelector } from '../pagination-page-size-selector/PaginationPageSizeSelector';
import { PaginationPages } from '../pagination-pages/PaginationPages';
import style from './pagination.module.scss';

interface PaginationProp extends PaginationRootProp {}

const PaginationRoot: FC<PaginationProp> = forwardRef(({
  children,
  className,
  defaultPage,
  renderTotalItemsLabel = defaultRenderTotalItemsLabel,
  siblingCount,
  totalItems,
  withPageSizeSelector,
  ...props
}, ref): JSX.Element => {
  const { currentPage, handlePageChange, itemsPerPage } = usePagination();

  useEffect(() => {
    if (!children) {
      console.warn('[DEPRECATED]: Usage of <Pagination /> alone is not recommended. Please use a full composition. Like the following <Pagination><PaginationPages /></Pagination>');
    }
  }, [children]);

  return (
    <VendorPagination.Root
      className={ classNames(style['pagination'], className) }
      count={ totalItems }
      data-ods="pagination"
      defaultPage={ defaultPage }
      onPageChange={ handlePageChange }
      page={ currentPage }
      pageSize={ itemsPerPage }
      ref={ ref }
      siblingCount={ siblingCount }
      { ...props }>
      {/* [Deprecated] remove non children default render on next major release */}
      {
        children
        ?? <>
          {
            withPageSizeSelector &&
            <PaginationPageSizeSelector label={ renderTotalItemsLabel({ totalItems }) } />
          }

          <PaginationPages />
        </>
      }
    </VendorPagination.Root>
  );
});

const Pagination: FC<PaginationProp> = forwardRef(({
  defaultPage,
  disabled,
  labelTooltipNext,
  labelTooltipPrev,
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
      labelTooltipNext={ labelTooltipNext }
      labelTooltipPrev={ labelTooltipPrev }
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
