import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef, useMemo } from 'react';
import { type ComboboxContentProp as ComboboxContentRootProp, type ComboboxItemOrGroup, useCombobox } from '../../contexts/useCombobox';
import { ComboboxItem } from '../combobox-item/ComboboxItem';
import { ComboboxItemGroup } from '../combobox-item-group/ComboboxItemGroup';
import style from './comboboxContent.module.scss';

interface ComboboxContentProp extends ComboboxContentRootProp {}

const ComboboxContent: FC<ComboboxContentProp> = forwardRef(({
  className,
  createPortal = true,
  ...props
}, ref): JSX.Element => {
  const { filteredItems, noResultLabel } = useCombobox();

  const derivedState = useMemo(() => {
    const hasNoResults = !filteredItems || !filteredItems.length;

    if (hasNoResults) {
      return {
        hasNoResults: true,
        hasOnlyNewElement: false,
        itemsToDisplay: [],
        newElementItem: undefined,
      };
    }

    const hasOnlyNewElement = filteredItems.length === 1 && !('options' in filteredItems[0]) && filteredItems[0].isNewElement;
    const itemsToDisplay = hasOnlyNewElement ? [] : filteredItems;
    const newElementItem = hasOnlyNewElement && !('options' in filteredItems[0]) ? filteredItems[0] : undefined;

    return {
      hasNoResults: false,
      hasOnlyNewElement,
      itemsToDisplay,
      newElementItem,
    };
  }, [filteredItems]);

  return (
    <Portal disabled={ !createPortal }>
      <VendorCombobox.Positioner>
        <VendorCombobox.Content
          className={classNames(style['combobox-content'], className)}
          ref={ref}
          {...props}
        >
          {derivedState.hasNoResults && (
            <div className={style['combobox-content__empty']}>{noResultLabel}</div>
          )}
          {derivedState.newElementItem && (
            <ComboboxItem
              item={derivedState.newElementItem}
            />
          )}
          {derivedState.itemsToDisplay.map((item) => {
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
          {derivedState.hasOnlyNewElement && (
            <div className={style['combobox-content__empty']}>{noResultLabel}</div>
          )}
        </VendorCombobox.Content>
      </VendorCombobox.Positioner>
    </Portal>
  );
});

ComboboxContent.displayName = 'ComboboxContent';

export { ComboboxContent, type ComboboxContentProp };
