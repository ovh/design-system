import type { ComboboxCustomOptionRendererArg } from '../../context/useCombobox';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX } from 'react';
import { type ComboboxOptionItem, useCombobox } from '../../context/useCombobox';
import { highlightInElement } from '../../controller/combobox';
import style from './comboboxOption.module.scss';

interface ComboboxOptionProp {
  addNewElementLabel?: string;
  className?: string;
  customOptionRenderer?: (arg: ComboboxCustomOptionRendererArg) => JSX.Element;
  isInGroup?: boolean;
  item: ComboboxOptionItem;
}

const ComboboxOption: FC<ComboboxOptionProp> = ({
  addNewElementLabel,
  className,
  customOptionRenderer,
  isInGroup = false,
  item,
}): JSX.Element => {
  const { highlightResults } = useCombobox();
  const { inputValue } = useComboboxContext();

  let content: React.ReactNode;
  if (item.isNew) {
    content = addNewElementLabel + item.value;
  } else if (customOptionRenderer) {
    const rendered = customOptionRenderer({
      customData: item.customRendererData,
      label: item.label,
    });
    content = (highlightResults && inputValue)
      ? highlightInElement(rendered, inputValue)
      : rendered;
  } else {
    content = (highlightResults && inputValue)
      ? highlightInElement(item.label, inputValue)
      : item.label;
  }

  return (
    <VendorCombobox.Item
      className={ classNames(
        style[ 'combobox-option' ],
        { [ style[ 'combobox-option--add' ] ]: item.isNew },
        { [ style[ 'combobox-option--in-group' ] ]: isInGroup },
        className,
      ) }
      item={ item }>
      <VendorCombobox.ItemText>
        { content }
      </VendorCombobox.ItemText>
    </VendorCombobox.Item>
  );
};

ComboboxOption.displayName = 'ComboboxOption';

export {
  ComboboxOption,
  type ComboboxOptionProp,
};
