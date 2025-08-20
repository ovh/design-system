import { type JSX } from 'react';
import { type InputProps } from 'react-select';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import styles from './comboboxInput.module.scss';

const ComboboxInput = (props: InputProps<ComboboxItem>): JSX.Element => {
  const { i18n, locale, placeholder, readOnly } = useCombobox();

  const {
    clearValue,
    cx,
    getClassNames,
    getStyles,
    getValue,
    hasValue,
    innerRef,
    isDisabled,
    isHidden,
    isMulti,
    isRtl,
    options,
    selectOption,
    selectProps,
    setValue,
    theme,
    ...innerProps
  } = props;

  function onClear(): void {
    if (!selectProps.isMulti) {
      clearValue();
    }
  }

  return (
    <Input
      { ...innerProps }
      className={ styles['combobox-input'] }
      clearable={ props.selectProps.isClearable }
      disabled={ isDisabled }
      i18n={ i18n }
      loading={ selectProps.isLoading }
      locale={ locale }
      onClear={ onClear }
      placeholder={ placeholder }
      readOnly={ readOnly }
      required={ selectProps.required }
      ref={ innerRef }
      type={ INPUT_TYPE.text } />
  );
};

ComboboxInput.displayName = 'ComboboxInput';

export {
  ComboboxInput,
};
