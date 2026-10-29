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
  const isPointerHighlightRef = useRef(false);

  // An option highlighted by the pointer is already visible: scrolling then
  // would only move the page under the pointer and highlight another option.
  // Keyed on the highlight source, not the hover: an option still under the
  // pointer but reached back by keyboard must scroll into view. The pointer
  // highlights on move, not on enter: a scroll under a resting mouse fires
  // pointerenter on the option that slides under it, but no pointermove.
  useEffect(() => {
    if (optionRef.current && isHighlighted && !isPointerHighlightRef.current) {
      optionRef.current.scrollIntoView({ block: 'nearest' });
    }
    isPointerHighlightRef.current = false;
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
      onPointerMove={ () => {
        if (!isHighlighted) {
          isPointerHighlightRef.current = true;
          highlightOption(item);
        }
      } }
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
