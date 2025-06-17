import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX, forwardRef, useRef } from 'react';
import { Input } from '../../../../input/src';
import { type ComboboxControlProp } from '../../context/useCombobox';
import style from './comboboxControl.module.scss';

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable = false,
  loading = false,
  placeholder = '',
  ...props
}, ref): JSX.Element => {
  const { getContentProps, setInputValue } = useComboboxContext();
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
    'data-state'?: 'open' | 'closed';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const isOpen = contentProps['data-state'] === 'open';
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    if (e.currentTarget.value) {
      e.currentTarget.select();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && isOpen) {
      e.stopPropagation();
    }
  }

  return (
    <VendorCombobox.Control className={classNames(style['combobox-control'], className, {
      [style['combobox-control--open-top']]: isOpen && placement === 'top',
      [style['combobox-control--open-bottom']]: isOpen && placement === 'bottom',
    })}>
      <VendorCombobox.Trigger
        className={classNames(style['combobox-control__trigger'], className)}
        ref={ref}
        {...props}
      >
        <VendorCombobox.Input asChild>
          <Input
            className={classNames(
              style['combobox-control__input'],
            )}
            clearable={clearable}
            loading={loading}
            onChange={handleChange}
            onFocus={handleFocus}
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
