import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, useId } from 'react';
import { type QueryFilterGroup, useQueryFilter } from '../../contexts/useQueryFilter';
import { QueryFilterOption } from '../query-filter-option/QueryFilterOption';
import style from './queryFilterGroup.module.scss';

interface QueryFilterGroupProp extends ComponentPropsWithRef<'div'> {
  group: QueryFilterGroup;
}

const QueryFilterGroup: FC<QueryFilterGroupProp> = ({
  className,
  group,
  ...props
}): JSX.Element => {
  const groupLabelId = useId();
  const { disabled, highlightedOptionValue } = useQueryFilter();

  return (
    <div
      aria-labelledby={ groupLabelId }
      className={ style['query-filter-group'] }
      role="group"
      { ...props }>
      <div
        className={ classNames(
          style['query-filter-group__label'],
          { [style['query-filter-group__label--disabled']]: disabled },
        )}
        id={ groupLabelId }
        role="presentation">
        { group.label }
      </div>

      {
        group.options.map((option) => (
          <QueryFilterOption
            className={ style['query-filter-group__option'] }
            isHighlighted={ highlightedOptionValue === option.value }
            item={ option }
            key={ option.value } />
        ))
      }
    </div>
  );
};

QueryFilterGroup.displayName = 'QueryFilterGroup';

export {
  QueryFilterGroup,
  type QueryFilterGroupProp,
};
