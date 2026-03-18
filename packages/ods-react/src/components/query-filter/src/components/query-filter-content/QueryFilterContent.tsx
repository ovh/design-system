import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { POPOVER_POSITION, Popover, PopoverContent, type PopoverPositionChangeDetail } from '../../../../popover/src';
import { useQueryFilter } from '../../contexts/useQueryFilter';
import { QueryFilterGroup } from '../query-filter-group/QueryFilterGroup';
import { QueryFilterOption } from '../query-filter-option/QueryFilterOption';
import style from './queryFilterContent.module.scss';

interface QueryFilterContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
}

const QueryFilterContent: FC<QueryFilterContentProp> = forwardRef(({
  className,
  createPortal = true,
  id,
  ...props
}, ref): JSX.Element => {
  const {
    allowCustomValue,
    contentPosition,
    controlId,
    filteredGroup,
    highlightedOptionValue,
    isOpen,
    inputValue,
    invalid,
    noResultLabel,
    setContentId,
    setContentPosition,
  } = useQueryFilter();
  const defaultId = useId();
  const computedId = useMemo(() => id ?? defaultId, [defaultId, id]);

  useEffect(() => {
    setContentId(computedId);
  }, [computedId, setContentId]);

  function handlePositionChange({ position }: PopoverPositionChangeDetail): void {
    setContentPosition(position);
  }

  return (
    <Popover
      autoFocus={ false }
      gutter={ -1 }
      onPositionChange={ handlePositionChange }
      open={ isOpen }
      position={ POPOVER_POSITION.bottom }
      sameWidth={ true }
      triggerId={ controlId }>
      <PopoverContent
        className={ classNames(
          style['query-filter-content'],
          { [style['query-filter-content--invalid']]: invalid },
          { [style['query-filter-content--open-bottom']]: contentPosition === POPOVER_POSITION.bottom },
          { [style['query-filter-content--open-top']]: contentPosition === POPOVER_POSITION.top },
          className,
        )}
        createPortal={ createPortal }
        data-ods="query-filter-content"
        id={ computedId }
        ref={ ref }
        { ...props }
        role="listbox">
        {
          !allowCustomValue && filteredGroup?.options?.length === 0 &&
          <div className={ style['query-filter-content__empty'] }>
            { noResultLabel }
          </div>
        }

        {
          allowCustomValue && inputValue &&
          <QueryFilterOption
            isCustom={ true }
            isHighlighted={ highlightedOptionValue === inputValue }
            item={{ label: inputValue, value: inputValue }} />
        }

        {
          filteredGroup && filteredGroup.options?.length > 0 &&
          <QueryFilterGroup group={ filteredGroup } />
        }
      </PopoverContent>
    </Popover>
  );
});

QueryFilterContent.displayName = 'QueryFilterContent';

export {
  QueryFilterContent,
  type QueryFilterContentProp,
};
