import {
  Combobox as VendorCombobox,
  createListCollection,
} from '@ark-ui/react/combobox';
import { type FC, type JSX, forwardRef, useEffect, useMemo, useState } from 'react';
import { type ComboboxInputValueChangeDetails, ComboboxProvider, type ComboboxProp as ComboboxRootProp, type ComboboxValueChangeDetails } from '../../contexts/useCombobox';
import { findLabelForValue, flattenItems, getFilteredItems } from '../../controller/combobox';

interface ComboboxProp extends ComboboxRootProp {}

const Combobox: FC<ComboboxProp> = forwardRef(({
  allowCustomValue = true,
  children,
  className,
  customOptionRenderer,
  defaultValue,
  disabled,
  highlightResults = false,
  items,
  newElementLabel = 'Add ',
  noResultLabel = 'No results found',
  onValueChange,
  readOnly,
  value,
  ...props
}, ref): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const currentValue = value && value.length > 0 ? value : defaultValue;

  useEffect(() => {
    if (currentValue && currentValue.length > 0) {
      const label = findLabelForValue(items, currentValue[0]);
      setInputValue(label);
    }
  }, [currentValue, items]);

  const filteredItems = useMemo(() => getFilteredItems({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    newElementLabel,
    value: currentValue,
  }), [allowCustomValue, customOptionRenderer, inputValue, items, newElementLabel, currentValue]);

  const flatItems = useMemo(() => flattenItems(filteredItems), [filteredItems]);
  const collection = useMemo(() => createListCollection({ items: flatItems }), [flatItems]);

  const handleInputValueChange = (details: ComboboxInputValueChangeDetails): void => {
    setInputValue(details.inputValue);
  };

  const handleValueChange = (details: ComboboxValueChangeDetails): void => {
    if (details.value.length > 0) {
      const label = findLabelForValue(items, details.value[0]);
      setInputValue(label);
    }

    onValueChange && onValueChange(details);
  };

  return (
    <ComboboxProvider
      allowCustomValue={allowCustomValue}
      customOptionRenderer={customOptionRenderer}
      defaultValue={defaultValue}
      disabled={disabled}
      filteredItems={filteredItems}
      highlightResults={highlightResults}
      items={items}
      newElementLabel={newElementLabel}
      noResultLabel={noResultLabel}
      onValueChange={onValueChange}
      readOnly={readOnly}
      value={value}
    >
      <VendorCombobox.Root
        className={className}
        collection={collection}
        defaultValue={defaultValue}
        disabled={disabled}
        inputValue={inputValue}
        onInputValueChange={handleInputValueChange}
        onValueChange={handleValueChange}
        positioning={{
          gutter: -1,
          sameWidth: true,
        }}
        readOnly={readOnly}
        ref={ref}
        selectionBehavior="replace"
        value={value}
        {...props}
      >
        {children}
      </VendorCombobox.Root>
    </ComboboxProvider>
  );
});

Combobox.displayName = 'Combobox';

export { Combobox, type ComboboxProp };
