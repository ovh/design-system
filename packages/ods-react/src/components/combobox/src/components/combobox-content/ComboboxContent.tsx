import type { FC } from 'react';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import classNames from 'classnames';
import { type JSX, forwardRef, useRef } from 'react';
import { useCombobox } from '../../context/useCombobox';
import { ComboboxGroup } from '../combobox-group/ComboboxGroup';
import { ComboboxOption } from '../combobox-option/ComboboxOption';
import style from './comboboxContent.module.scss';

interface ComboboxContentProp {
  addNewElementLabel?: string;
  className?: string;

  [ key: string ]: unknown;
}

const ComboboxContent: FC<ComboboxContentProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  const { collection } = useComboboxContext();
  const localRef = useRef<HTMLDivElement>(null);
  const contentRef = (ref as React.RefObject<HTMLDivElement>) || localRef;
  const { addNewElementLabel, customOptionRenderer, noResultLabel } = useCombobox();

  const hasEnabledOption = collection.items.some(
    (item: Record<string, unknown>) => typeof item === 'object' && item !== null && !('disabled' in item && item.disabled) && !('isNew' in item && item.isNew),
  );

  return (
    <Portal>
      <VendorCombobox.Positioner>
        <VendorCombobox.Content
          className={ classNames(style[ 'combobox-content' ], className) }
          ref={ contentRef }
          { ...props }
        >
          <VendorCombobox.List>
            { collection.size > 0 && ([...collection][ 0 ]?.isNew) ? (
              <VendorCombobox.ItemGroup>
                <ComboboxOption
                  addNewElementLabel={ addNewElementLabel }
                  customOptionRenderer={ customOptionRenderer }
                  item={ [...collection][ 0 ] }
                  key={ [...collection][ 0 ].value }
                />
              </VendorCombobox.ItemGroup>
            ) : null }
            { collection.group().map(([groupLabel, groupItems]) => (
              <ComboboxGroup key={ String(groupLabel) } groupLabel={ groupLabel }>
                { groupItems
                  .filter((item) => !item.isNew)
                  .map((item) => (
                    <ComboboxOption
                      addNewElementLabel={ addNewElementLabel }
                      customOptionRenderer={ customOptionRenderer }
                      isInGroup={ !!groupLabel }
                      item={ item }
                      key={ item.value }
                    />
                  )) }
              </ComboboxGroup>
            )) }
          </VendorCombobox.List>

          { !hasEnabledOption ? (
            <div className={ style[ 'combobox-content__empty' ] }>{ noResultLabel }</div>
          ) : null }

        </VendorCombobox.Content>
      </VendorCombobox.Positioner>
    </Portal>
  );
},
);

ComboboxContent.displayName = 'ComboboxContent';

export {
  ComboboxContent,
  type ComboboxContentProp,
};
