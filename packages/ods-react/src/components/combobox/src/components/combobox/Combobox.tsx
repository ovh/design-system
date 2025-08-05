import { type ComboboxInputValueChangeDetails, type ComboboxValueChangeDetails, Combobox as VendorCombobox, createListCollection } from '@ark-ui/react/combobox';
import { type FC, type JSX, forwardRef, useEffect, useMemo, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ComboboxProvider, type ComboboxRootProp } from '../../contexts/useCombobox';
import { findLabelForValue, flattenItems, getFilteredItems } from '../../controller/combobox';

/**
 * @inheritDoc ComboboxRootProp
 */
interface ComboboxProp extends ComboboxRootProp {}

const Combobox: FC<ComboboxProp> = forwardRef(({
  allowCustomValue = true,
  children,
  className,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  i18n,
  items,
  invalid,
  locale,
  multiple,
  newElementLabel = 'Add ',
  noResultLabel = 'No results found',
  onValueChange,
  readOnly,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const [inputValue, setInputValue] = useState('');
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);
  const currentValue = value && value.length > 0 ? value : internalValue;
  const isInvalid = invalid || fieldContext?.invalid;

  useEffect(() => {
    if (!multiple && currentValue.length > 0) {
      const label = findLabelForValue(items, currentValue[0]);
      setInputValue(label);
    } else if (multiple) {
      setInputValue('');
    }
  }, [currentValue, items, multiple]);

  const filteredItems = useMemo(() => getFilteredItems({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    multiple,
    newElementLabel,
    value: currentValue,
  }), [allowCustomValue, customOptionRenderer, inputValue, items, multiple, newElementLabel, currentValue]);

  const flatItems = useMemo(() => flattenItems(filteredItems), [filteredItems]);
  const collection = useMemo(() => createListCollection({ items: flatItems }), [flatItems]);

  function handleInputValueChange(details: ComboboxInputValueChangeDetails): void {
    setInputValue(details.inputValue);
  }

  function handleValueChange(details: ComboboxValueChangeDetails): void {
    if (!multiple && details.value.length > 0) {
      const label = findLabelForValue(items, details.value[0]);
      setInputValue(label);
    } else if (multiple) {
      setInputValue('');
    }

    if (!value) {
      setInternalValue(details.value);
    }

    onValueChange && onValueChange({ value: details.value });
  }

  return (
    <ComboboxProvider
      customOptionRenderer={ customOptionRenderer }
      filteredItems={ filteredItems }
      highlightResults={ highlightResults }
      i18n={ i18n }
      invalid={ isInvalid }
      items={ items }
      locale={ locale }
      newElementLabel={ newElementLabel }
      noResultLabel={ noResultLabel }
      readOnly={ readOnly }>
      <VendorCombobox.Root
        allowCustomValue={ allowCustomValue }
        className={ className }
        closeOnSelect={ !multiple }
        collection={ collection }
        defaultValue={ defaultValue }
        disabled={ disabled }
        ids={{
          input: fieldContext?.id,
        }}
        inputValue={ inputValue }
        invalid={ isInvalid }
        multiple={ multiple }
        onInputValueChange={ handleInputValueChange }
        onValueChange={ handleValueChange }
        positioning={{
          gutter: -1,
          sameWidth: true,
        }}
        readOnly={ readOnly }
        ref={ ref }
        required={ multiple ? false : required } // FIXME required on multiple mode should be manually handled
        selectionBehavior={ multiple ? 'clear' : 'replace' }
        value={ currentValue }
        { ...props }>
        { children }
      </VendorCombobox.Root>
    </ComboboxProvider>
  );
});

Combobox.displayName = 'Combobox';

export {
  Combobox,
  type ComboboxProp,
};
