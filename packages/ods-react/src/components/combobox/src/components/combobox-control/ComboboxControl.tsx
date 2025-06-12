import type { ComponentPropsWithRef, FC } from 'react';
import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { Input } from '../../../../input/src';
import style from './comboboxControl.module.scss';

interface ComboboxControlProp extends ComponentPropsWithRef<'button'> {
  className?: string;
  clearable?: boolean;
  loading?: boolean;
  placeholder?: string;
}

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable = false,
  loading = false,
  placeholder = '',
  ...props
}, ref): JSX.Element => {
  const { valueAsString, getContentProps } = useComboboxContext();
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
    'data-state'?: 'open' | 'closed';
  };
  const placement = contentProps[ 'data-placement' ] as 'top' | 'bottom' | undefined;
  const isOpen = contentProps[ 'data-state' ] === 'open';

  return (
    <VendorCombobox.Control className={ classNames(style[ 'combobox-control' ], className, {
      [ style[ 'combobox-control--open-top' ] ]: isOpen && placement === 'top',
      [ style[ 'combobox-control--open-bottom' ] ]: isOpen && placement === 'bottom',
    }) }>
      <VendorCombobox.Trigger
        className={ classNames(style[ 'combobox-control__trigger' ], className) }
        ref={ ref }
        { ...props }
      >
        <VendorCombobox.Input defaultValue={ valueAsString } asChild>
          <Input
            className={ classNames(
              style[ 'combobox-control__input' ],
            ) }
            clearable={ clearable }
            loading={ loading }
            placeholder={ placeholder }
          />
        </VendorCombobox.Input>
      </VendorCombobox.Trigger>
    </VendorCombobox.Control>
  );
});

export { ComboboxControl, type ComboboxControlProp };
