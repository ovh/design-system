import { Combobox as VendorCombobox } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './comboboxLabel.module.scss';

interface ComboboxLabelProp extends ComponentPropsWithRef<'label'> {
}

const ComboboxLabel: FC<ComboboxLabelProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorCombobox.Label
      className={ classNames(style[ 'combobox-label' ], className) }
      ref={ ref }
      { ...props }>
      { children }
    </VendorCombobox.Label>
  );
});

ComboboxLabel.displayName = 'ComboboxLabel';

export {
  ComboboxLabel,
  type ComboboxLabelProp,
};
