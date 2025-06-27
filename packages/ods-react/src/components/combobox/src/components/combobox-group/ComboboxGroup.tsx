import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './comboboxGroup.module.scss';

interface ComboboxGroupProp extends ComponentPropsWithRef<'div'> {}

const ComboboxGroup: FC<ComboboxGroupProp> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <VendorCombobox.ItemGroup className={ classNames(style['combobox-group'], className) }
      { ...props }>
      { children }
    </VendorCombobox.ItemGroup>
  );
};

ComboboxGroup.displayName = 'ComboboxGroup';

export {
  ComboboxGroup,
  type ComboboxGroupProp,
};
