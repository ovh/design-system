import { usePaginationContext } from '@ark-ui/react/pagination';
import { type FC, type JSX, useId } from 'react';
import { Select, SelectContent, SelectControl, type SelectItem } from '../../../../select/src';
import { PAGINATION_PER_PAGE_OPTIONS } from '../../constants/pagination-per-page';
import style from './paginationPageSizeSelector.module.scss';

/** @internal */
type PaginationTotalItemsLabelRenderer = (params: { totalItems: number }) => string | number;
type HandleValueChange = (detail: { value: string[] }) => void;

interface PaginationPageSizeSelectorProp {
  onSelectChange?: (value: string) => void;
  renderTotalItemsLabel: PaginationTotalItemsLabelRenderer;
}

const PaginationPageSizeSelector: FC<PaginationPageSizeSelectorProp> = ({
  onSelectChange,
  renderTotalItemsLabel,
}): JSX.Element => {
  const { count: totalItems, pageSize } = usePaginationContext();
  const textId = useId();

  const handleValueChange: HandleValueChange = (detail) => {
    if (onSelectChange && detail.value[0]) {
      onSelectChange(detail.value[0]);
    }
  };

  return (
    <div className={ style['pagination-page-size-selector'] }>
      <Select
        defaultValue={ [pageSize.toString()] }
        items={ PAGINATION_PER_PAGE_OPTIONS as SelectItem[] }
        onValueChange={ handleValueChange }>
        <SelectControl aria-labelledby={ textId } />
        <SelectContent />
      </Select>

      <p
        className={ style['pagination-page-size-selector__label'] }
        id={ textId }>
        { renderTotalItemsLabel({ totalItems }) }
      </p>
    </div>
  );
};

export {
  PaginationPageSizeSelector,
  type PaginationPageSizeSelectorProp,
  type PaginationTotalItemsLabelRenderer,
};
