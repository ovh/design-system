import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX, type KeyboardEvent, forwardRef, useRef } from 'react';
import { Input } from '../../../../input/src';
import { type ComboboxControlProp as ComboboxControlRootProp } from '../../contexts/useCombobox';
import style from './comboboxControl.module.scss';

interface ComboboxControlProp extends ComboboxControlRootProp {}

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable,
  loading,
  placeholder,
  ...props
}, ref): JSX.Element => {
  const { getContentProps, open } = useComboboxContext();
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && open) {
      e.stopPropagation();
    }
  }

  return (
    <VendorCombobox.Control className={classNames(style['combobox-control'], {
      [style['combobox-control--open-top']]: open && placement === 'top',
      [style['combobox-control--open-bottom']]: open && placement === 'bottom',
      className,
    })}>
      <VendorCombobox.Trigger
        className={classNames(style['combobox-control__trigger'], className)}
        ref={ref}
        {...props}
      >
        <VendorCombobox.Input asChild>
          <Input
            className={classNames(
              style['combobox-control__trigger__input'],
            )}
            clearable={clearable}
            loading={loading}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            ref={inputRef}
          />
        </VendorCombobox.Input>
      </VendorCombobox.Trigger>
    </VendorCombobox.Control>
  );
});

ComboboxControl.displayName = 'ComboboxControl';

export {
  ComboboxControl,
  type ComboboxControlProp,
};
