import { type ComboboxInputValueChangeDetails, type ComboboxValueChangeDetails, Combobox as VendorCombobox, type ListCollection } from '@ark-ui/react/combobox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { ComboboxProvider, type ComboboxRootProp, useCombobox } from '../../contexts/useCombobox';
import { NEW_OPTION_VALUE, createNewOption, replaceNewOptionValue } from '../../controller/combobox';

/**
 * @inheritDoc ComboboxRootProp
 */
interface ComboboxProp extends ComboboxRootProp {}

interface LocalComboboxRootProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue' | 'onSelect'>, Pick<ComboboxProp, 'defaultValue' | 'disabled' | 'multiple' | 'onValueChange' | 'required' | 'value'> {}

// TODO controller
function getDefaultInputValue(collection: ListCollection, defaultValue?: string[], value?: string[], multiple?: boolean): string {
  if (multiple) {
    return '';
  }

  if (value && value .length) {
    return collection.find(value[0])?.label || '';
  }

  return defaultValue && defaultValue.length ? collection.find(defaultValue[0])?.label : '';
}

const ComboboxRoot: FC<LocalComboboxRootProp> = forwardRef(({
  children,
  className,
  defaultValue,
  disabled,
  multiple,
  onValueChange,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const { updateItem, allowCustomValue, collection, filterItems, invalid, readOnly, removeItem, setItems, upsertItem, vendorItems } = useCombobox();
  const [inputValue, setInputValue] = useState<string>(getDefaultInputValue(collection, defaultValue, value, multiple));
  const [selectedValues, setSelectedValues] = useState<string[]>(value || defaultValue || []);

  useEffect(() => {
    if (selectedValues.length) {
      if (multiple) {
        setItems(vendorItems.filter((item) => selectedValues.indexOf(item.value) < 0));
      } else {
        filterItems(selectedValues[0]);
      }
    }
  }, [selectedValues]);

  // TODO controller
  function isValidNewOption(inputValue: string) {
    const exactOptionMatch = collection.filter((item) => item.toLowerCase() === inputValue.toLowerCase()).size > 0;
// console.log(`testing isValidNewOption with ${inputValue}`)
//     if (inputValue === 'dog') {
//       console.log([].concat(collection.items))
//     }
//     const exactOptionMatch = collection.items.filter((item) => {
//
//
//
//       // inputValue = dog
//       // item:
//       //  { label: "dog", value: "[[new]]" }
//       //  { label: "Dog", value: "dog" }
//
//       return item.value.toLowerCase() === inputValue.trim().toLowerCase()
//     }).length > 0;

    return !exactOptionMatch && inputValue.trim().length > 0;
  }

  function handleInputValueChange({ inputValue, reason }: ComboboxInputValueChangeDetails): void {
    console.log(`handleInputValueChange: ${inputValue} | ${reason}`)

    if (reason === 'input-change' || reason === 'item-select') {
      // console.log(`> isValidNewOption: ${isValidNewOption(inputValue)}`)

      //if (isValidNewOption(inputValue)) {
      if (allowCustomValue && isValidNewOption(inputValue)) {
        console.log('>> upsert')
        upsertItem(NEW_OPTION_VALUE, createNewOption(inputValue), 'prepend');
      } else {//if (inputValue.trim().length === 0) {
        console.log('>> remove')
        removeItem(NEW_OPTION_VALUE);
      }

      filterItems(inputValue);

      // prevent input weird reset on new option click
      if (!inputValue.trim() && reason === 'item-select') {
        console.log('>>> no input value set <<<')
        return;
      }
    }
    // console.log('set')
    setInputValue(inputValue);
  }

  function handleValueChange({ value }: ComboboxValueChangeDetails): void {
    const newValues = replaceNewOptionValue(value, inputValue);
// console.log('handleValueChange', value, newValues)
    setSelectedValues(newValues);

    if (value.includes(NEW_OPTION_VALUE)) {

      // TODO why does commenting this trigger a handleInputValueChange?
      // updateItem?.(NEW_OPTION_VALUE, getNewOptionData(inputValue));
      // updateItem(NEW_OPTION_VALUE, {
      //   label: inputValue,
      //   value: inputValue,
      //   // __new__: true, // TODO see where this is used
      // })


      // setInputValue(multiple ? '' : collection.find(value[0])?.label || '')
      // console.log(`set input value: ${collection.find(value[0])?.label || ''}`)
    }

    onValueChange?.({ value: newValues });
  }

  return (
    <VendorCombobox.Root
      allowCustomValue={ allowCustomValue }
      className={ className }
      closeOnSelect={ !multiple }
      collection={ collection }
      data-ods="combobox"
      // defaultValue={ defaultValue }
      disabled={ disabled }
      ids={{
        input: fieldContext?.id,
      }}
      inputValue={ inputValue }
      invalid={ invalid }
      multiple={ multiple }
      onInputValueChange={ handleInputValueChange }
      // onOpenChange={ ({ open }) => {
      //   if (!multiple && open) {
      //     filterItems(inputValue)
      // //     handleInputValueChange({ inputValue, reason: 'item-select' });
      //   }
      // }}
      onValueChange={ handleValueChange }
      positioning={{
        gutter: -1,
        sameWidth: true,
      }}
      readOnly={ readOnly }
      ref={ ref }
      required={ multiple ? false : required } // FIXME required on multiple mode should be manually handled
      selectionBehavior={ multiple ? 'clear' : 'replace' }
      value={ selectedValues }
      { ...props }>
      { children }

      <div style={{marginTop: '500px'}}>
        <div>
          Input Value = { inputValue }
        </div>

        <div>
          Values = { selectedValues }
        </div>

        <div>
          Items = { JSON.stringify(collection.items) }
        </div>
      </div>
    </VendorCombobox.Root>
  );
});

const Combobox: FC<ComboboxProp> = forwardRef(({
  allowCustomValue = true,
  className,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  i18n,
  invalid,
  items,
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

  return (
    <ComboboxProvider
      allowCustomValue={ allowCustomValue }
      customOptionRenderer={ customOptionRenderer }
      highlightResults={ highlightResults }
      i18n={ i18n }
      invalid={ invalid || fieldContext?.invalid }
      items={ items }
      locale={ locale }
      newElementLabel={ newElementLabel }
      noResultLabel={ noResultLabel }
      readOnly={ readOnly }>
      <ComboboxRoot
        className={ className }
        defaultValue={ defaultValue }
        disabled={ disabled }
        multiple={ multiple }
        onValueChange={ onValueChange }
        ref={ ref }
        required={ required }
        value={ value }
        {...props } />
    </ComboboxProvider>
  );
});

Combobox.displayName = 'Combobox';

export {
  Combobox,
  type ComboboxProp,
};
