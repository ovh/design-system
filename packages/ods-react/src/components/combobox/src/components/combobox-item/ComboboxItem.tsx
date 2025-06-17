import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, forwardRef } from 'react';
import { type ComboboxItemProp, useCombobox } from '../../contexts/useCombobox';
import { ComboboxHighlight } from '../combobox-highlight/ComboboxHighlight';
import style from './comboboxItem.module.scss';

const ComboboxItem: FC<ComboboxItemProp> = forwardRef(({
  item,
  ...props
}, ref): JSX.Element | null => {
  const { customOptionRenderer, newElementLabel } = useCombobox();

  if ('options' in item) {
    return null;
  }

  const displayLabel = item.label;

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
                { displayLabel }
              </ComboboxHighlight>
            </>
          ) : (
            <ComboboxHighlight>
              { displayLabel }
            </ComboboxHighlight>
          ) }
        </>
      ) }
    </VendorCombobox.Item>
  );
});

export { ComboboxItem };
