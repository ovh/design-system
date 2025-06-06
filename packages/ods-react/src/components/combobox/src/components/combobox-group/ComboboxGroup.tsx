import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type ReactNode } from 'react';
import style from './comboboxGroup.module.scss';

interface ComboboxGroupProp {
  children: ReactNode;
  className?: string;
  groupLabel?: string;
}

const ComboboxGroup: FC<ComboboxGroupProp> = ({
  children,
  className,
  groupLabel,
}) => (
  <VendorCombobox.ItemGroup className={ classNames(style['combobox-group'], className) }>
    { groupLabel && (
      <VendorCombobox.ItemGroupLabel className={ style['combobox-group__label'] }>
        { groupLabel }
      </VendorCombobox.ItemGroupLabel>
    ) }
    { children }
  </VendorCombobox.ItemGroup>
);

ComboboxGroup.displayName = 'ComboboxGroup';

export {
  ComboboxGroup,
  type ComboboxGroupProp,
};
