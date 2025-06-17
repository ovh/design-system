import { Portal } from '@ark-ui/react';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef, useMemo } from 'react';
import { type ComboboxContentProp, type ComboboxItemOrGroup, useCombobox } from '../../contexts/useCombobox';
import { getFilteredItems } from '../../controller/combobox';
import { ComboboxItem } from '../combobox-item/ComboboxItem';
import { ComboboxItemGroup } from '../combobox-item-group/ComboboxItemGroup';
import style from './comboboxContent.module.scss';

const ComboboxContent: FC<ComboboxContentProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { allowCustomValue, customOptionRenderer, items, newElementLabel, noResultLabel, value } = useCombobox();
  const { inputValue } = useComboboxContext();

  const filteredItems = getFilteredItems({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    newElementLabel,
    value,
  });

  const content = useMemo(() => {
    const hasOnlyNewElement = filteredItems.length === 1 && !('options' in filteredItems[0]) && filteredItems[0].isNewElement;
    const hasNoResults = !filteredItems.length;

    if (hasNoResults) {
      return <div className={style['combobox-content__empty']}>{noResultLabel}</div>;
    }

    const itemsToDisplay = hasOnlyNewElement ? [] : filteredItems;

    return (
      <>
        {hasOnlyNewElement && !('options' in filteredItems[0]) && (
          <ComboboxItem
            key={filteredItems[0].value}
            item={filteredItems[0]}
          />
        )}
        {itemsToDisplay.map((item) => {
          if ('options' in item) {
            return (
              <ComboboxItemGroup key={item.label}>
                <VendorCombobox.ItemGroupLabel>{item.label}</VendorCombobox.ItemGroupLabel>
                {item.options.map((option: ComboboxItemOrGroup) => {
                  if ('options' in option) {
                    return null;
                  }
                  return (
                    <ComboboxItem
                      key={option.value}
                      item={option}
                    />
                  );
                })}
              </ComboboxItemGroup>
            );
          }
          return (
            <ComboboxItem
              key={item.value}
              item={item}
            />
          );
        })}
        {hasOnlyNewElement && (
          <div className={style['combobox-content__empty']}>{noResultLabel}</div>
        )}
      </>
    );
  }, [filteredItems, inputValue, noResultLabel]);

  return (
    <Portal>
      <VendorCombobox.Positioner>
        <VendorCombobox.Content
          className={classNames(style['combobox-content'], className)}
          ref={ref}
          {...props}
        >
          {content}
        </VendorCombobox.Content>
      </VendorCombobox.Positioner>
    </Portal>
  );
});

ComboboxContent.displayName = 'ComboboxContent';

export { ComboboxContent };
