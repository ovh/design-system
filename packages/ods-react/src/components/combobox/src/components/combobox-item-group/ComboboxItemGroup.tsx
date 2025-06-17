import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, forwardRef } from 'react';
import { type ComboboxItemGroupProp } from '../../contexts/useCombobox';
import style from './comboboxItemGroup.module.scss';

const ComboboxItemGroup: FC<ComboboxItemGroupProp> = forwardRef(({
  className,
  children,
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

export { ComboboxItemGroup };