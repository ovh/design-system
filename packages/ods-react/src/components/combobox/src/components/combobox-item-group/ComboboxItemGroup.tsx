import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, forwardRef } from 'react';
import { type ComboboxItemGroupProp } from '../../context/useCombobox';
import style from './comboboxItemGroup.module.scss';

const ComboboxItemGroup: FC<ComboboxItemGroupProp> = forwardRef(({
  className,
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorCombobox.ItemGroup
      className={ classNames(style['combobox-item__group'], className) }
      ref={ ref }
      { ...props }
    >
      { children }
    </VendorCombobox.ItemGroup>
  );
});

ComboboxItemGroup.displayName = 'ComboboxItemGroup';

export { ComboboxItemGroup };