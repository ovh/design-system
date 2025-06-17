import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX, type KeyboardEvent, forwardRef, useRef } from 'react';
import { Input } from '../../../../input/src';
import { type ComboboxControlProp } from '../../contexts/useCombobox';
import style from './comboboxControl.module.scss';

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable,
  loading,
  placeholder,
  ...props
}, ref): JSX.Element => {
  const { getContentProps } = useComboboxContext();
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
    'data-state'?: 'open' | 'closed';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const isOpen = contentProps['data-state'] === 'open';
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && isOpen) {
      e.stopPropagation();
    }
  }

  return (
    <VendorCombobox.Control className={classNames(style['combobox-control'], {
      [style['combobox-control--open-top']]: isOpen && placement === 'top',
      [style['combobox-control--open-bottom']]: isOpen && placement === 'bottom',
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
