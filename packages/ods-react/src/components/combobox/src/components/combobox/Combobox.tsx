import {
  Combobox as VendorCombobox,
  createListCollection,
} from '@ark-ui/react/combobox';
import { type FC, type JSX, forwardRef, useEffect, useState } from 'react';
import { type ComboboxInputValueChangeDetails, type ComboboxProp, ComboboxProvider, type ComboboxValueChangeDetails } from '../../context/useCombobox';
import { findLabelForValue, flattenItems, getFilteredItems } from '../../controller/combobox';

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
  const [userIsTyping, setUserIsTyping] = useState(false);
  const currentValue = value && value.length > 0 ? value : defaultValue;

  /**
   * userIsTyping prevents input reset during search while allowing
   * synchronization with selected values when not typing
   */
  useEffect(() => {
    if (currentValue && currentValue.length > 0 && !userIsTyping) {
      const label = findLabelForValue(items, currentValue[0]);
      setInputValue(label);
    }
  }, [currentValue, items, userIsTyping]);

  const filteredItems = getFilteredItems({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    newElementLabel,
    value: currentValue,
  });

  const flatItems = flattenItems(filteredItems);
  const collection = createListCollection({ items: flatItems });

  const handleInputValueChange = (details: ComboboxInputValueChangeDetails): void => {
    setUserIsTyping(true);
    setInputValue(details.inputValue);
  };

  const handleValueChange = (details: ComboboxValueChangeDetails): void => {
    if (details.value.length > 0) {
      setUserIsTyping(false);
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

export { Combobox };
