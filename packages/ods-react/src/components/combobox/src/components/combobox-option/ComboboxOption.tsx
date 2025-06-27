import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import { ComboboxHighlight } from '../combobox-highlight/ComboboxHighlight';
import style from './comboboxOption.module.scss';

interface ComboboxOptionProp extends ComponentPropsWithRef<'div'> {
  item: ComboboxItem;
}

const ComboboxOption: FC<ComboboxOptionProp> = ({
  item,
  ...props
}): JSX.Element => {
  const { customOptionRenderer, newElementLabel } = useCombobox();

  if ('options' in item) {
    return <></>;
  }

  return (
    <VendorCombobox.Item
      className={ classNames(style[ 'combobox-option' ]) }
      item={ item }
      { ...props }>
      {
        customOptionRenderer ? (
          <ComboboxHighlight>
            { customOptionRenderer(item) }
          </ComboboxHighlight>
        ) : (
          <>
            {
              item.isNewElement ? (
                <>
                  { newElementLabel }
                  <ComboboxHighlight>
                    { item.label }
                  </ComboboxHighlight>
                </>
              ) : (
                <ComboboxHighlight>
                  { item.label }
                </ComboboxHighlight>
              )
            }
          </>
        )
      }
    </VendorCombobox.Item>
  );
};

ComboboxOption.displayName = 'ComboboxOption';

export {
  ComboboxOption,
  type ComboboxOptionProp,
};
