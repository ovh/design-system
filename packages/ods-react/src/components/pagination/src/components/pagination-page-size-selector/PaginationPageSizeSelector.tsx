import { usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef, useId } from 'react';
import { Select, SelectContent, SelectControl, type SelectItem, type SelectValueChangeDetail } from '../../../../select/src';
import { PAGINATION_PER_PAGE_OPTIONS } from '../../constants/pagination-per-page';
import { defaultRenderTotalItemsLabel, usePagination } from '../../contexts/usePagination';
import style from './paginationPageSizeSelector.module.scss';

interface PaginationPageSizeSelectorProp extends ComponentPropsWithRef<'div'> {
  /**
   * @default-value='of ${totalItems} results'
   * The label displayed near the per-page selector.
   */
  label?: ReactNode;
}

const PaginationPageSizeSelector: FC<PaginationPageSizeSelectorProp> = forwardRef(({
  className,
  label,
  ...props
}, ref): JSX.Element => {
  const { count: totalItems, pageSize } = usePaginationContext();
  const { handlePageSizeChange } = usePagination();
  const textId = useId();

  function handleValueChange(detail: SelectValueChangeDetail): void {
    if (detail.value[0]) {
      handlePageSizeChange(detail.value[0]);
    }
  }

  return (
    <div
      className={ classNames(style['pagination-page-size-selector'], className) }
      data-ods="pagination-page-size-selector"
      ref={ ref }
      { ...props }>
      <Select
        defaultValue={ [pageSize.toString()] }
        items={ PAGINATION_PER_PAGE_OPTIONS as SelectItem[] }
        onValueChange={ handleValueChange }>
        <SelectControl aria-labelledby={ textId } />
        <SelectContent />
      </Select>

      <span
        className={ style['pagination-page-size-selector__label'] }
        id={ textId }>
        { label || defaultRenderTotalItemsLabel({ totalItems }) }
      </span>
    </div>
  );
});

export {
  PaginationPageSizeSelector,
  type PaginationPageSizeSelectorProp,
};
