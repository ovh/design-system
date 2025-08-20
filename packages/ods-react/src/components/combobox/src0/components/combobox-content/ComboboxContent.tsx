import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { useCombobox } from '../../contexts/useCombobox';
import { ComboboxGroup } from '../combobox-group/ComboboxGroup';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import { NEW_OPTION_VALUE } from '../../controller/combobox';
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
  const { collection } = useComboboxContext();
  const { noResultLabel } = useCombobox();

  // TODO remove?
  // const filteredItems = useMemo(() => {
  //   // if (!multiple) {
  //     return collection.group();
  //   // }
  //
  //   // return collection.group().reduce((res, [label, items]) => {
  //   //   const visibleItems = items.filter((item) => value.every((v) => {
  //   //     return v !== (item.value === NEW_OPTION_VALUE ? item.label : item.value);
  //   //   }));
  //   //
  //   //   if (visibleItems.length) {
  //   //     res.push([label, visibleItems]);
  //   //   }
  //   //   return res;
  //   // }, [] as [string, ComboboxItem[]][]);
  // }, [collection, multiple, value]);

  // const visibleItems = useMemo(() => {
  //   return collection.items.filter((item) => value.every((v) => {
  //     return v !== (item.value === NEW_OPTION_VALUE ? item.label : item.value);
  //   }));
  // }, [collection.items, value]);

  //
  // const derivedState = useMemo(() => {
  //   const hasNoResults = !filteredItems || !filteredItems.length;
  //
  //   if (hasNoResults) {
  //     return {
  //       hasNoResults: true,
  //       hasOnlyNewElement: false,
  //       itemsToDisplay: [],
  //       newElementItem: undefined,
  //     };
  //   }
  //
  //   const hasOnlyNewElement = filteredItems.length === 1 && !('options' in filteredItems[0]) && filteredItems[0].isNewElement;
  //   const itemsToDisplay = hasOnlyNewElement ? [] : filteredItems;
  //   const newElementItem = hasOnlyNewElement && !('options' in filteredItems[0]) ? filteredItems[0] : undefined;
  //
  //   return {
  //     hasNoResults: false,
  //     hasOnlyNewElement,
  //     itemsToDisplay,
  //     newElementItem,
  //   };
  // }, [filteredItems]);


  // const showAddNew = collection.items.every((item) => {
  //   return item.label.toLowerCase().trim() === inputValue.toLowerCase().trim();
  // })

  // const showAddNew = allowCustomValue && inputValue && !hasExactMatch && !isValueAlreadySelected;
  // const showAddNew = allowCustomValue && inputValue.trim() && !collection.has(inputValue) && !hasExactMatch(collection.items, inputValue, customOptionRenderer);

  // if (showAddNew) {
  //   collection.items.push({
  //     label: `${ newElementLabel } ${inputValue}`,
  //     value: inputValue,
  //   });
  // }

  // if (showAddNew) {
  //   console.log('show add new')
  //   collection.items = collection.items.map((item) => {
  //     if (item._isCustom) {
  //       item.disabled = false;
  //     }
  //     return item;
  //   });
  // }

  // if (inputValue.trim() && !collection.has(inputValue)) {
  //   collection.append({
  //     label: `${ newElementLabel } ${inputValue}`,
  //     value: inputValue,
  //   });
  //   console.log(collection.items)
  // }

  const hasOnlyNewElement = collection.size === 1 && collection.at(0).value === NEW_OPTION_VALUE;

  return (
    <Portal disabled={ !createPortal }>
      <VendorCombobox.Positioner>
        <VendorCombobox.Content
          className={ classNames(style['combobox-content'], className) }
          data-ods="combobox-content"
          ref={ ref }
          { ...props }>
          {/*{*/}
          {/*  !!inputValue.trim() && !collection.has(inputValue) && !hasExactMatch(collection.items, inputValue, customOptionRenderer) &&*/}
          {/*  <ComboboxOption item={{*/}
          {/*    label: `${ newElementLabel } ${inputValue}`,*/}
          {/*    value: inputValue,*/}
          {/*  }} />*/}
          {/*}*/}
          {/*{*/}
          {/*  showAddNew &&*/}
          {/*  <ComboboxOption item={{*/}
          {/*    label: `${ newElementLabel } ${inputValue}`,*/}
          {/*    value: inputValue,*/}
          {/*    // value: `custom:${inputValue}`,*/}
          {/*  }} />*/}
          {/*}*/}



          {/*{*/}
          {/*  derivedState.hasNoResults && (*/}
          {/*    <div className={ style['combobox-content__empty'] }>*/}
          {/*      { noResultLabel }*/}
          {/*    </div>*/}
          {/*  )*/}
          {/*}*/}

          {/*{*/}
          {/*  derivedState.newElementItem && (*/}
          {/*    <ComboboxOption item={ derivedState.newElementItem } />*/}
          {/*  )*/}
          {/*}*/}

          {/*{*/}
          {/*  filteredItems.map(([label, items]) => {*/}
          {/*    if (label) {*/}
          {/*      return (*/}
          {/*        <ComboboxGroup key={ label }>*/}
          {/*          <VendorCombobox.ItemGroupLabel>*/}
          {/*            { label }*/}
          {/*          </VendorCombobox.ItemGroupLabel>*/}

          {/*          {*/}
          {/*            items.map((item) => (*/}
          {/*              <ComboboxOption*/}
          {/*                item={ item }*/}
          {/*                key={ item.value } />*/}
          {/*            ))*/}
          {/*          }*/}
          {/*        </ComboboxGroup>*/}
          {/*      );*/}
          {/*    }*/}

          {/*    return items.map((item) => (*/}
          {/*      <ComboboxOption*/}
          {/*        item={ item }*/}
          {/*        key={ item.value } />*/}
          {/*    ));*/}
          {/*  })*/}
          {/*}*/}

          {
            collection.group().map(([label, items]) => {
              if (label) {
                return (
                  <ComboboxGroup key={ label }>
                    <VendorCombobox.ItemGroupLabel>
                      { label }
                    </VendorCombobox.ItemGroupLabel>

                    {
                      items.map((item) => (
                        <ComboboxOption
                          item={ item }
                          key={ item.value } />
                      ))
                    }
                  </ComboboxGroup>
                );
              }

              return items.map((item) => (
                <ComboboxOption
                  item={ item }
                  key={ item.value } />
              ));
            })
          }

          {
            (collection.size === 0 || hasOnlyNewElement) &&
            <div className={ style['combobox-content__empty'] }>
              { noResultLabel }
            </div>
          }

          {/*{*/}
          {/*  derivedState.itemsToDisplay.map((item) => {*/}
          {/*    if ('options' in item) {*/}
          {/*      return (*/}
          {/*        <ComboboxGroup key={ item.label }>*/}
          {/*          <VendorCombobox.ItemGroupLabel>*/}
          {/*            { item.label }*/}
          {/*          </VendorCombobox.ItemGroupLabel>*/}

          {/*          {*/}
          {/*            item.options.map((option: ComboboxItem) => {*/}
          {/*              if ('options' in option) {*/}
          {/*                return null;*/}
          {/*              }*/}
          {/*              return (*/}
          {/*                <ComboboxOption*/}
          {/*                  item={ option }*/}
          {/*                  key={ option.value } />*/}
          {/*              );*/}
          {/*            })*/}
          {/*          }*/}
          {/*        </ComboboxGroup>*/}
          {/*      );*/}
          {/*    }*/}

          {/*    return (*/}
          {/*      <ComboboxOption*/}
          {/*        item={ item }*/}
          {/*        key={ item.value } />*/}
          {/*    );*/}
          {/*  })*/}
          {/*}*/}

          {/*{*/}
          {/*  derivedState.hasOnlyNewElement && (*/}
          {/*    <div className={ style['combobox-content__empty'] }>*/}
          {/*      { noResultLabel }*/}
          {/*    </div>*/}
          {/*  )*/}
          {/*}*/}
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
