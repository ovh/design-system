import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, forwardRef } from 'react';
import { type ComboboxItemGroupProp as ComboboxItemGroupRootProp } from '../../contexts/useCombobox';
import style from './comboboxItemGroup.module.scss';

interface ComboboxItemGroupProp extends ComboboxItemGroupRootProp {}

const ComboboxItemGroup: FC<ComboboxItemGroupProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorCombobox.ItemGroup
      className={ classNames(style['combobox-item-group'], className) }
      ref={ ref }
      { ...props }
    >
      { children }
    </VendorCombobox.ItemGroup>
  );
});

ComboboxItemGroup.displayName = 'ComboboxItemGroup';

export { ComboboxItemGroup, type ComboboxItemGroupProp };