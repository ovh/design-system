import classNames from 'classnames';
import { type FC, type HTMLAttributes, type JSX, type Ref, forwardRef, useEffect, useId, useMemo, useState } from 'react';
import Select, { type FilterOptionOption, type InputActionMeta, type SelectInstance } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useFormField } from '../../../../form-field/src';
import { type ComboboxGroupItem, type ComboboxItem, ComboboxProvider, type ComboboxRootProp } from '../../contexts/useCombobox';
import { ComboboxContent } from '../combobox-content/ComboboxContent';
import { ComboboxControl } from '../combobox-control/ComboboxControl';
import { ComboboxCreateOption } from '../combobox-create-option/ComboboxCreateOption';
import { ComboboxInput } from '../combobox-input/ComboboxInput';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import { ComboboxTag } from '../combobox-tag/ComboboxTag';
import styles from './combobox.module.scss';

/**
 * @inheritDoc ComboboxRootProp
 */
interface ComboboxProp extends Pick<HTMLAttributes<'div'>, 'className' | 'id'>, ComboboxRootProp {
  /** @internal */
  ref?: Ref<SelectInstance<ComboboxItem>>,
}

const DEFAULT_EMPTY_LABEL = 'No results found';

const ClearIndicator = (): JSX.Element => <></>;
const DropdownIndicator = (): JSX.Element => <></>;
const IndicatorSeparator = (): JSX.Element => <></>;
const LoadingIndicator = (): JSX.Element => <></>;

const Combobox: FC<ComboboxProp> = forwardRef<SelectInstance<ComboboxItem>, ComboboxProp>(({
  allowCustomValue = true,
  className,
  clearable,
  createPortal = true,
  customFilter,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  i18n,
  id,
  invalid,
  items,
  loading,
  loadingLabel = DEFAULT_EMPTY_LABEL,
  locale,
  multiple,
  newElementLabel = 'Add ',
  noResultLabel = DEFAULT_EMPTY_LABEL,
  onBlur,
  onInputChange,
  onValueChange,
  placeholder = '',
  readOnly,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const defaultId = useId();
  const fieldContext = useFormField();
  const [comboboxValue, setComboboxValue] = useState<ComboboxItem | readonly ComboboxItem[] | null>();
  const [inputValue, setInputValue] = useState<string>();
  const Component = useMemo(() => allowCustomValue ? CreatableSelect : Select, [allowCustomValue]);
  const comboboxId = useMemo(() => id || defaultId, [defaultId, id]);

  useEffect(() => {
    // Not ideal, but there doesn't seems to be a way to add data-attribute to the root otherwise
    const rootElement = document.getElementById(comboboxId);

    if (rootElement) {
      rootElement.dataset.ods = 'combobox';
    }
  }, [comboboxId]);

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
  }, [defaultValue, multiple, value]);

  function handleChange(option: ComboboxItem | readonly ComboboxItem[] | null): void {
    setComboboxValue(option);
    setInputValue(option && !multiple ? (option as ComboboxItem).label : '');

    if (!option) {
      onValueChange?.([]);
    } else {
      onValueChange?.((Array.isArray(option) ? option : [option]).map((opt) => ({
        isNew: opt.__isNew__ === true,
        label: opt.label,
        value: opt.value,
      })));
    }
  }

  function handleInputChange(inputCurrentValue: string, { action }: InputActionMeta): void {
    if (action === 'input-change') {
      setInputValue(inputCurrentValue);

      onInputChange?.({ inputValue: inputCurrentValue });
    }
  }

  return (
    <ComboboxProvider
      customOptionRenderer={ customOptionRenderer }
      highlightResults={ highlightResults }
      i18n={ i18n }
      invalid={ invalid }
      locale={ locale }
      placeholder={ placeholder }
      readOnly={ readOnly }>
      <Component
        allowCreateWhileLoading
        className={ className }
        classNames={{
          container: ({ isFocused }) => classNames(
            styles['combobox'],
            { [styles['combobox--focused']]: isFocused },
          ),
          groupHeading: (state) => classNames(
            styles['combobox__content__group'],
            { [styles['combobox__content__group--disabled']]: (state.data as ComboboxGroupItem).disabled },
          ),
          loadingMessage: () => styles['combobox__content__loading'],
          menuPortal: () => styles['combobox__content__portal'],
          noOptionsMessage: () => styles['combobox__content__empty'],
          placeholder: () => styles['combobox__control__placeholder'],
        }}
        closeMenuOnSelect={ !multiple }
        components={{
          ClearIndicator,
          Control: ComboboxControl,
          DropdownIndicator,
          IndicatorSeparator,
          Input: ComboboxInput,
          LoadingIndicator,
          Menu: ComboboxContent,
          MultiValue: ComboboxTag,
          Option: ComboboxOption,
        }}
        controlShouldRenderValue={ !!multiple }
        createOptionPosition="first"
        defaultValue={ defaultValue }
        formatCreateLabel={ (inputCurrentValue) => <ComboboxCreateOption inputValue={ inputCurrentValue } newElementLabel={ newElementLabel } /> }
        id={ comboboxId }
        inputId={ fieldContext?.id }
        inputValue={ inputValue }
        isClearable={ clearable && !readOnly }
        isDisabled={ disabled }
        isOptionDisabled={ (option) => !!option.disabled }
        isLoading={ loading }
        isMulti={ multiple }
        loadingMessage={ () => loadingLabel }
        menuPlacement="auto"
        noOptionsMessage={ () => noResultLabel }
        onBlur={ onBlur }
        onChange={ handleChange }
        onInputChange={ handleInputChange }
        openMenuOnClick={ !readOnly }
        options={ items }
        // @ts-ignore react-select doesn't seem to provide a SelectInstance that handle both single and multi
        ref={ ref }
        required={ required }
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
        {
          ...(customFilter ? {
            filterOption: (option: FilterOptionOption<ComboboxItem>, inputValue) => customFilter(option.data, inputValue),
          } : {})
        }
        { ...(readOnly ? { menuIsOpen: false } : {}) }
        {
          ...(createPortal ? {
            menuPortalTarget: document.body,
          } : {
            menuPosition: 'fixed',
          })
        }
        { ...props } />
    </ComboboxProvider>
  );
});

Combobox.displayName = 'Combobox';

export {
  Combobox,
  type ComboboxProp,
  type SelectInstance as ComboboxInstance,
};
