import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, useEffect, useRef } from 'react';
import { type QueryFilterItem, useQueryFilter } from '../../contexts/useQueryFilter';
import { QueryFilterHighlight } from '../query-filter-highlight/QueryFilterHighlight';
import style from './queryFilterOption.module.scss';

interface QueryFilterOptionProp extends ComponentPropsWithRef<'div'> {
  isCustom?: boolean;
  isHighlighted: boolean,
  item: QueryFilterItem;
}

const QueryFilterOption: FC<QueryFilterOptionProp> = ({
  className,
  isCustom,
  isHighlighted,
  item,
  ...props
}): JSX.Element => {
  const {
    disabled,
    highlightOption,
    highlightResults,
    inputValue,
    newElementLabel,
    selectItem,
  } = useQueryFilter();
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (optionRef.current && isHighlighted) {
      optionRef.current.scrollIntoView({ block: 'nearest' });
    }
  }, [isHighlighted, optionRef]);

  function onClick(): void {
    if (!disabled) {
      selectItem(item, isCustom);
    }
  }

  return (
    <div // eslint-disable-line jsx-a11y/click-events-have-key-events
      aria-selected={ isHighlighted }
      className={ classNames(
        style['query-filter-option'],
        { [style['query-filter-option--disabled']]: disabled },
        { [style['query-filter-option--highlighted']]: isHighlighted },
        className,
      )}
      onClick={ onClick }
      onPointerEnter={ () => highlightOption(item) }
      ref={ optionRef }
      role="option"
      tabIndex={ -1 }
      { ...props }>
      {
        isCustom
          ? <div className={ style['query-filter-option__new-item'] }>
            { newElementLabel }{ item.label }
          </div>
          : <QueryFilterHighlight
            highlight={ highlightResults }
            inputValue={ inputValue }>
            { item.label }
          </QueryFilterHighlight>
      }
    </div>
  );
};

QueryFilterOption.displayName = 'QueryFilterOption';

export {
  QueryFilterOption,
  type QueryFilterOptionProp,
};
