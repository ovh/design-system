import classNames from 'classnames';
import { type JSX } from 'react';
import { type OptionProps, components } from 'react-select';
import { type ComboboxItem, type ComboboxOptionItem, useCombobox } from '../../contexts/useCombobox';
import { ComboboxHighlight } from '../combobox-highlight/ComboboxHighlight';
import styles from './comboboxOption.module.scss';

const ComboboxOption = (props: OptionProps<ComboboxItem>): JSX.Element => {
  const { customOptionRenderer, highlightResults } = useCombobox();
  const isNew = (props.data as ComboboxOptionItem).__isNew__;

  return (
    <components.Option
      className={ classNames(
        styles['combobox-option'],
        { [styles['combobox-option--disabled']]: props.isDisabled },
        { [styles['combobox-option--focused']]: props.isFocused && !props.selectProps.isDisabled },
        { [styles['combobox-option--new']]: isNew },
        { [styles['combobox-option--selected']]: props.isSelected },
      )}
      { ...props }>
      <ComboboxHighlight
        highlight={ highlightResults }
        inputValue={ props.selectProps.inputValue }
        isNew={ isNew }>
        { customOptionRenderer ? customOptionRenderer(props.data) : props.children }
      </ComboboxHighlight>
    </components.Option>
  );
};

ComboboxOption.displayName = 'ComboboxOption';

export {
  ComboboxOption,
};
