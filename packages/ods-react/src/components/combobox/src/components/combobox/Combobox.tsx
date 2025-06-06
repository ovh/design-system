import {
  type ComboboxValueChangeDetails,
  Combobox as VendorCombobox,
  createListCollection,
} from '@ark-ui/react/combobox';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useMemo, useState } from 'react';
import {
  type ComboboxCustomOptionRendererArg,
  type ComboboxItem,
  type ComboboxOptionItem,
  ComboboxProvider,
} from '../../context/useCombobox';
import { createValueToLabelMap, getFlatItemsWithDisabled } from '../../controller/combobox';

type ComboboxProp = Omit<ComponentPropsWithRef<'div'>, 'onSelect'> & {
  addNewElementLabel?: string;
  allowNewElement?: boolean;
  customOptionRenderer?: (arg: ComboboxCustomOptionRendererArg) => JSX.Element;
  defaultValue?: string[];
  disabled?: boolean;
  highlightResults?: boolean;
  invalid?: boolean;
  items: ComboboxItem[];
  name?: string;
  noResultLabel?: string;
  onInputValueChange?: (details: { inputValue: string }) => void;
  onValueChange?: (details: ComboboxValueChangeDetails<ComboboxOptionItem>) => void;
  readOnly?: boolean;
  required?: boolean;
  value?: string[];
};

const Combobox: FC<ComboboxProp> = forwardRef(({
  addNewElementLabel = 'Add ',
  allowNewElement = true,
  children,
  className,
  customOptionRenderer,
  defaultValue,
  disabled = false,
  highlightResults = false,
  invalid,
  items = [],
  name,
  noResultLabel = 'No results found',
  onInputValueChange,
  onValueChange,
  readOnly = false,
  required,
  value,
  ...props
}, ref): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [uncontrolledValues, setUncontrolledValues] = useState<string[]>(defaultValue ?? []);

  const isControlled = value !== undefined;
  const selectedValues = isControlled ? value : uncontrolledValues;

  const flatItems = useMemo(() => {
    return getFlatItemsWithDisabled(items, inputValue, {
      allowNewElement,
      customRenderer: customOptionRenderer,
      selectedValues,
    });
  }, [allowNewElement, customOptionRenderer, inputValue, items, selectedValues]);

  const collection = useMemo(() => {
    return createListCollection({
      groupBy: (item) => item.group || '',
      items: flatItems,
    });
  }, [flatItems]);

  const valueToLabelMap = useMemo(() => createValueToLabelMap(items), [items]);

  useEffect(() => {
    if (selectedValues && selectedValues.length > 0) {
      const val = selectedValues[ 0 ];
      const label = valueToLabelMap.get(val) || val;
      setInputValue(label);
    } else {
      setInputValue('');
    }
  }, [selectedValues, valueToLabelMap]);

  const handleInputValueChange = (details: { inputValue: string }): void => {
    setInputValue(details.inputValue);
    onInputValueChange?.(details);
  };

  const handleValueChange = (details: ComboboxValueChangeDetails<ComboboxOptionItem>): void => {
    if (!isControlled) {
      setUncontrolledValues(details.value);
    }
    onValueChange?.(details);
  };

  const setValue = (newValues: string[]): void => {
    if (!isControlled) {
      setUncontrolledValues(newValues);
    }

    onValueChange?.({
      items: flatItems.filter((item) => newValues.includes(item.value)),
      value: newValues,
    });
  };

  return (
    <ComboboxProvider
      addNewElementLabel={ addNewElementLabel }
      customOptionRenderer={ customOptionRenderer }
      highlightResults={ highlightResults }
      inputValue={ inputValue }
      noResultLabel={ noResultLabel }
      setInputValue={ setInputValue }
      setValue={ setValue }>
      <VendorCombobox.Root
        className={ className }
        collection={ collection }
        disabled={ disabled }
        invalid={ invalid }
        loopFocus={ true }
        name={ name }
        onInputValueChange={ handleInputValueChange }
        onValueChange={ handleValueChange }
        selectionBehavior="preserve"
        positioning={ {
          gutter: -1,
          sameWidth: true,
        } }
        readOnly={ readOnly }
        ref={ ref }
        required={ required }
        value={ selectedValues }
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
