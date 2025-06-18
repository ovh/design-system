import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, forwardRef } from 'react';
import { type ComboboxItemProp as ComboboxItemRootProp, useCombobox } from '../../contexts/useCombobox';
import { ComboboxHighlight } from '../combobox-highlight/ComboboxHighlight';
import style from './comboboxItem.module.scss';

interface ComboboxItemProp extends ComboboxItemRootProp {}

const ComboboxItem: FC<ComboboxItemProp> = forwardRef(({
  item,
  ...props
}, ref): JSX.Element | null => {
  const { customOptionRenderer, newElementLabel } = useCombobox();

  if ('options' in item) {
    return null;
  }

  return (
    <VendorCombobox.Item
      className={ classNames(style[ 'combobox-item' ]) }
      ref={ ref }
      item={ item }
      { ...props }
    >
      { customOptionRenderer ? (
        <ComboboxHighlight>
          { customOptionRenderer(item) }
        </ComboboxHighlight>
      ) : (
        <>
          { item.isNewElement ? (
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
          ) }
        </>
      ) }
    </VendorCombobox.Item>
  );
});

ComboboxItem.displayName = 'ComboboxItem';

export { ComboboxItem, type ComboboxItemProp };
