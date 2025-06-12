import type { ComboboxProp } from '../../context/useCombobox';
import {
  type ComboboxInputValueChangeDetails,
  type ComboboxValueChangeDetails,
  Combobox as VendorCombobox,
  createListCollection,
} from '@ark-ui/react/combobox';
import { type FC, type JSX, forwardRef, useState } from 'react';
import { ComboboxProvider } from '../../context/useCombobox';
import { combobox } from '../../controller/combobox';

const Combobox: FC<ComboboxProp> = forwardRef(({
  allowCustomValue = true,
  children,
  className,
  customOptionRenderer,
  defaultValue,
  disabled = false,
  highlightResults = false,
  items,
  newElementLabel = 'Add ',
  noResultLabel = 'No results found',
  onValueChange,
  readOnly = false,
  value = [],
  ...props
}, ref): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);

  const {
    filteredItems,
  } = combobox({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    newElementLabel,
    value: (value ?? []).length > 0 ? value : internalValue,
  });

  const collection = createListCollection({ items: filteredItems });

  const handleInputValueChange = (details: ComboboxInputValueChangeDetails): void => {
    setInputValue(details.inputValue);
  };

  const handleValueChange = (details: ComboboxValueChangeDetails): void => {
    setInternalValue(details.value);
    onValueChange && onValueChange(details);
  };

  const currentValue = value.length > 0 ? value : internalValue;

  return (
    <ComboboxProvider
      allowCustomValue={ allowCustomValue }
      customOptionRenderer={ customOptionRenderer }
      defaultValue={ defaultValue }
      disabled={ disabled }
      highlightResults={ highlightResults }
      items={ items }
      noResultLabel={ noResultLabel }
      newElementLabel={ newElementLabel }
      onValueChange={ handleValueChange }
      readOnly={ readOnly }
      value={ currentValue }
    >
      <VendorCombobox.Root
        collection={ collection }
        className={ className }
        disabled={ disabled }
        ref={ ref }
        value={ currentValue }
        onValueChange={ handleValueChange }
        selectionBehavior="replace"
        onInputValueChange={ handleInputValueChange }
        positioning={ {
          gutter: -1,
          sameWidth: true,
        } }
        readOnly={ readOnly }
        { ...props }
      >
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
