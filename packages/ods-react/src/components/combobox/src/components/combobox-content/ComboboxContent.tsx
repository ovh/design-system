import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useMemo } from 'react';
import { type ComboboxItem, useCombobox } from '../../contexts/useCombobox';
import { ComboboxGroup } from '../combobox-group/ComboboxGroup';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import style from './comboboxContent.module.scss';

interface ComboboxContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean;
}

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
          className={ classNames(style['combobox-content'], className) }
          ref={ ref }
          { ...props }>
          {
            derivedState.hasNoResults && (
              <div className={ style['combobox-content__empty'] }>
                { noResultLabel }
              </div>
            )
          }

          {
            derivedState.newElementItem && (
              <ComboboxOption item={ derivedState.newElementItem } />
            )
          }

          {
            derivedState.itemsToDisplay.map((item) => {
              if ('options' in item) {
                return (
                  <ComboboxGroup key={ item.label }>
                    <VendorCombobox.ItemGroupLabel>
                      { item.label }
                    </VendorCombobox.ItemGroupLabel>

                    {
                      item.options.map((option: ComboboxItem) => {
                        if ('options' in option) {
                          return null;
                        }
                        return (
                          <ComboboxOption
                            item={ option }
                            key={ option.value } />
                        );
                      })
                    }
                  </ComboboxGroup>
                );
              }

              return (
                <ComboboxOption
                  item={ item }
                  key={ item.value } />
              );
            })
          }

          {
            derivedState.hasOnlyNewElement && (
              <div className={ style['combobox-content__empty'] }>
                { noResultLabel }
              </div>
            )
          }
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
