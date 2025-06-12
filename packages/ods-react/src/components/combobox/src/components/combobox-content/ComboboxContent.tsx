import type { ComponentPropsWithRef, FC } from 'react';
import { Portal } from '@ark-ui/react';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { forwardRef, useMemo } from 'react';
import { useCombobox } from '../../context/useCombobox';
import { combobox } from '../../controller/combobox';
import { ComboboxItem, type ComboboxItemOrGroup } from '../combobox-item/ComboboxItem';
import style from './comboboxContent.module.scss';

interface ComboboxContentProp extends ComponentPropsWithRef<'div'> {
  className?: string;
}

const ComboboxContent: FC<ComboboxContentProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { items, noResultLabel, customOptionRenderer, allowCustomValue, newElementLabel, value } = useCombobox();
  const { inputValue, value: contextValue = [] } = useComboboxContext();

  const {
    filteredItems,
  } = combobox({
    allowCustomValue,
    customOptionRenderer,
    inputValue,
    items,
    newElementLabel,
    value: (value ?? []).length > 0 ? value : contextValue,
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
              <div key={item.label} className={style['combobox-content__group']}>
                <div className={style['combobox-content__group__label']}>{item.label}</div>
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
              </div>
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

export {
  ComboboxContent,
  type ComboboxContentProp,
};
