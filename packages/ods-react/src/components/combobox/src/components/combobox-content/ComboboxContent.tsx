import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useMemo } from 'react';
import { POPOVER_POSITION, Popover, PopoverContent, type PopoverPositionChangeDetail } from '../../../../popover/src';
import { useCombobox } from '../../contexts/useCombobox';
import { isGroup } from '../../controller/combobox';
import { ComboboxGroup } from '../combobox-group/ComboboxGroup';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import style from './comboboxContent.module.scss';

interface ComboboxContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
}

const ComboboxContent: FC<ComboboxContentProp> = forwardRef(({
  className,
  createPortal = true,
  id,
  ...props
}, ref): JSX.Element => {
  const {
    contentPosition,
    controlId,
    filteredItems,
    highlightedOptionValue,
    isOpen,
    noResultLabel,
    setContentId,
    setContentPosition,
  } = useCombobox();
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
          style['combobox-content'],
          { [style['combobox-content--open-bottom']]: contentPosition === POPOVER_POSITION.bottom },
          { [style['combobox-content--open-top']]: contentPosition === POPOVER_POSITION.top },
          className,
        )}
        createPortal={ createPortal }
        data-ods="combobox-content"
        id={ computedId }
        ref={ ref }
        { ...props }
        role="listbox">
        {
          filteredItems.length === 0 &&
          <div className={ style['combobox-content__empty'] }>
            { noResultLabel }
          </div>
        }

        {
          filteredItems.map((item) => {
            if (isGroup(item)) {
              return (
                <ComboboxGroup
                  item={ item }
                  key={ item.label } />
              );
            }

            return (
              <ComboboxOption
                id={ `${controlId}-${item.value}` }
                isHighlighted={ highlightedOptionValue === item.value }
                item={ item }
                key={ item.value } />
            );
          })
        }
      </PopoverContent>
    </Popover>
  );
});

ComboboxContent.displayName = 'ComboboxContent';

export {
  ComboboxContent,
  type ComboboxContentProp,
};
