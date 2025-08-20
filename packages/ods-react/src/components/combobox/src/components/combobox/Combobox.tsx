import classNames from 'classnames';
import { type FC, type JSX, useEffect, useState } from 'react';
import { type InputActionMeta } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useFormField } from '../../../../form-field/src';
import { type ComboboxItem, ComboboxProvider, type ComboboxRootProp } from '../../contexts/useCombobox';
import { ComboboxControl } from '../combobox-control/ComboboxControl';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import { ComboboxTag } from '../combobox-tag/ComboboxTag';
import styles from './combobox.module.scss';

/**
 * @inheritDoc ComboboxRootProp
 */
interface ComboboxProp extends ComboboxRootProp {}

// TODO
//  - (multiple) hide clearable if no input value
//  - disable specific group
//  - use Select if not allowCustomValue
//  - remove all default style to ensure all css is layered?
//  - tag not removed on Enter press
//  - test generic type on custom data
//  - click on clearable toggle content
//  - clearable does not appear on option selection (need a blur)
//  - (controlled) => delete value then blur => does not trigger a change nor put back the previous value
//  - clearable outline KO
//  - custom style
//  - in modal, click on an option closed the modal
//  - add onInputChange
//  - add custom filter function

const ClearIndicator = (): JSX.Element => <></>;
const DropdownIndicator = (): JSX.Element => <></>;
const IndicatorSeparator = (): JSX.Element => <></>;
const LoadingIndicator = (): JSX.Element => <></>;

const Combobox: FC<ComboboxProp> = ({ // forwardRef(({
  allowCustomValue = true,
  // children,
  // className,
  clearable,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  i18n,
  invalid,
  items,
  loading,
  locale,
  multiple,
  newElementLabel = 'Add ',
  noResultLabel = 'No results found',
  onValueChange,
  placeholder = '',
  readOnly,
  // required,
  value,
  // ...props
}): JSX.Element => {
// }, ref): JSX.Element => {
  const fieldContext = useFormField();
  const [comboboxValue, setComboboxValue] = useState<ComboboxItem | readonly ComboboxItem[] | null>();
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    if (multiple) {
      if (value && value.length) {
        setComboboxValue(value);
      }
      return;
    }
    if (value && value.length) {
      setInputValue(value[0].label);
    } else if (defaultValue && defaultValue.length) {
      setInputValue(defaultValue[0].label);
    }
    //setInputValue(Array.isArray(defaultValue) ? defaultValue[0].label : defaultValue?.label)
  }, [defaultValue, multiple, value]);

  function onChange(option: ComboboxItem | readonly ComboboxItem[] | null): void {
    // console.log(`onChange: `, option)
    setComboboxValue(option);
    setInputValue(option && !multiple ? (option as ComboboxItem).label : '');

    if (!option) {
      //onValueChange?.({ value: [] });
      onValueChange?.([]);
    } else {
      //onValueChange?.({ value: (Array.isArray(option) ? option : [option]).map((opt) => opt.value) });
      onValueChange?.((Array.isArray(option) ? option : [option]).map((opt) => ({
        isNew: opt.__isNew__ === true,
        label: opt.label,
        value: opt.value,
      })));
    }
  }

  function onInputChange(inputValue: string, { action }: InputActionMeta): void {
    // console.log(`onInputChange: ${inputValue} | ${action}`)
    if (action === 'input-change') {// || action === 'set-value') { ?
      setInputValue(inputValue);
    }
  }

  return (
    <ComboboxProvider
      customOptionRenderer={ customOptionRenderer }
      highlightResults={ highlightResults }
      i18n={ i18n }
      locale={ locale }
      placeholder={ placeholder }
      readOnly={ readOnly }>
      <CreatableSelect
        // menuIsOpen
        allowCreateWhileLoading
        classNames={{
          container: ({ isFocused }) => classNames(
            styles['combobox'],
            { [styles['combobox--focused']]: isFocused },
          ),
          control: ({ selectProps }) => classNames(
            styles['combobox__control'],
            { [styles['combobox__control--disabled']]: selectProps.isDisabled },
            { [styles['combobox__control--invalid']]: invalid },
            { [styles['combobox__control--read-only']]: readOnly && !selectProps.isDisabled },
          ),
          groupHeading: () => styles['combobox__content__group'],
          // group: (state) => classNames(
          //   styles['combobox__content__group'],
          //   { [styles['combobox__content__group--disabled']]: state.data.disabled },
          // ),
          loadingMessage: () => styles['combobox__content__empty'],
          menu: ({ selectProps }) => classNames(
            styles['combobox__content'],
            { [styles['combobox__content--disabled']]: selectProps.isDisabled },
          ),
          menuPortal: () => styles['combobox__content__portal'],
          noOptionsMessage: () => styles['combobox__content__empty'],
          placeholder: () => styles['combobox__control__placeholder'],
        }}
        components={{
          ClearIndicator,
          DropdownIndicator,
          IndicatorSeparator,
          Input: ComboboxControl,
          LoadingIndicator,
          MultiValue: ComboboxTag,
          Option: ComboboxOption,
        }}
        controlShouldRenderValue={ !!multiple }
        createOptionPosition="first"
        defaultValue={ defaultValue }
        formatCreateLabel={ (inputValue) => `${newElementLabel}${inputValue}` }
        inputId={ fieldContext?.id }
        inputValue={ inputValue }
        isClearable={ clearable && !readOnly }
        isDisabled={ disabled }
        isOptionDisabled={ (option) => !!option.disabled }
        isLoading={ loading }
        isMulti={ multiple }
        // // TODO this break filter if value exists, maybe switch Select|CreatableSelect instead?
        isValidNewOption={ (inputValue) => allowCustomValue && !!inputValue }
        loadingMessage={ () => noResultLabel }
        menuPlacement="auto"
        menuPortalTarget={ document.body }
        noOptionsMessage={ () => noResultLabel }
        onChange={ onChange }
        onInputChange={ onInputChange }
        openMenuOnClick={ !readOnly }
        options={ items }
        styles={{
          container: () => ({}),
          control: () => ({}),
          groupHeading: () => ({}),
          menuPortal: ({ zIndex, ...css }) => css,
          option: () => ({}),
        }}
        tabSelectsValue={ false }
        unstyled
        value={ comboboxValue }
        { ...(readOnly ? { menuIsOpen: false } : {}) }
        // ref={ ref } + { ...props } ?
      />
    </ComboboxProvider>
  );
};

Combobox.displayName = 'Combobox';

export {
  Combobox,
  type ComboboxProp,
};
