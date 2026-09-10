import { usePaginationContext } from '@ark-ui/react/pagination';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type ReactNode, forwardRef, useId } from 'react';
import { Select, SelectContent, SelectControl, type SelectItem, type SelectValueChangeDetail } from '../../../../select/src';
import { PAGINATION_PER_PAGE_OPTIONS } from '../../constants/pagination-per-page';
import { defaultRenderTotalItemsLabel, usePagination } from '../../contexts/usePagination';
import style from './paginationPageSizeSelector.module.scss';

interface PaginationPageSizeSelectorProp extends ComponentPropsWithRef<'div'> {
  /**
   * \@default-value='of $\{totalItems\} results'
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
  const { getPageUrl, handlePageSizeChange, onPageSizeChange } = usePagination();
  const textId = useId();

  // Warned at render time rather than in an effect, as link mode is meant for server rendered
  // listings where an effect never runs.
  if (getPageUrl && !onPageSizeChange) {
    console.warn('getPageUrl renders the pages as links, so the URL holds the number of items per page. This selector has no link to follow: please handle onPageSizeChange and navigate to the matching URL, otherwise picking a size does nothing.');
  }

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
        items={ PAGINATION_PER_PAGE_OPTIONS as SelectItem[] }
        onValueChange={ handleValueChange }
        value={ [pageSize.toString()] }>
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
