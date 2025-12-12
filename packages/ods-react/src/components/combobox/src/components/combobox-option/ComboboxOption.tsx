import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { type ComboboxOptionItem, useCombobox } from '../../contexts/useCombobox';
import { ComboboxHighlight } from '../combobox-highlight/ComboboxHighlight';
import style from './comboboxOption.module.scss';

interface ComboboxOptionProp extends ComponentPropsWithRef<'div'> {
  isHighlighted: boolean,
  item: ComboboxOptionItem;
}

const ComboboxOption: FC<ComboboxOptionProp> = ({
  className,
  isHighlighted,
  item,
  ...props
}): JSX.Element => {
  const {
    customOptionRenderer,
    disabled,
    highlightOption,
    highlightResults,
    inputValue,
    selection,
    selectItem,
  } = useCombobox();

  function onClick(): void {
    if (!disabled) {
      selectItem(item);
    }
  }

  return (
    <div // eslint-disable-line jsx-a11y/click-events-have-key-events
      aria-selected={ isHighlighted }
      className={ classNames(
        style['combobox-option'],
        { [style['combobox-option--disabled']]: disabled },
        { [style['combobox-option--highlighted']]: isHighlighted },
        { [style['combobox-option--new']]: item.isNewElement },
        { [style['combobox-option--selected']]: selection.some((s) => s.value === item.value) },
        className,
      )}
      onClick={ onClick }
      onPointerEnter={ () => highlightOption(item) }
      role="option"
      tabIndex={ -1 }
      { ...props }>
      {
        item.isNewElement
          ? <div className={ style['combobox-option__new-item'] }>
            <Icon name={ ICON_NAME.plus } /> { item.label }
          </div>
          : <ComboboxHighlight
            highlight={ highlightResults }
            inputValue={ inputValue }>
            { customOptionRenderer ? customOptionRenderer(item) : item.label }
          </ComboboxHighlight>
      }
    </div>
  );
};

ComboboxOption.displayName = 'ComboboxOption';

export {
  ComboboxOption,
  type ComboboxOptionProp,
};
