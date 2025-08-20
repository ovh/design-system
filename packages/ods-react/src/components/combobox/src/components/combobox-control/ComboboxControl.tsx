import { type JSX } from 'react';
import { type InputProps } from 'react-select';
import { INPUT_TYPE, Input } from '../../../../input/src';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import styles from './comboboxControl.module.scss';

const ComboboxControl = (props: InputProps<ComboboxItem>): JSX.Element => {
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
    selectOption,
    selectProps,
    setValue,
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
      className={ styles['combobox-control'] }
      clearable={ props.selectProps.isClearable }
      disabled={ isDisabled }
      i18n={ i18n }
      loading={ selectProps.isLoading }
      locale={ locale }
      onClear={ onClear }
      placeholder={ placeholder }
      readOnly={ readOnly }
      ref={ innerRef }
      type={ INPUT_TYPE.text } />
  );
};

ComboboxControl.displayName = 'ComboboxControl';

export {
  ComboboxControl,
};
