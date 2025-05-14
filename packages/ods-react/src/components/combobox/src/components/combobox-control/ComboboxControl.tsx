import { Combobox as VendorCombobox, useComboboxContext as useVendorComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { Input } from '../../../../input/src';
import { useCombobox } from '../../context/useCombobox';
import style from './comboboxControl.module.scss';

interface ComboboxControlProp extends ComponentPropsWithRef<'button'> {
  clearable?: boolean;
  loading?: boolean;
  placeholder?: string;
}

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable = false,
  loading = false,
  placeholder,
  ...props
}, ref): JSX.Element | null => {
  const vendorContext = useVendorComboboxContext();

  const context = useCombobox();
  const { setValue, setInputValue, inputValue } = context;

  const { getContentProps } = vendorContext;
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
    'data-state'?: 'open' | 'closed';
  };
  const placement = contentProps[ 'data-placement' ] as 'bottom' | 'top' | undefined;
  const isOpen = contentProps[ 'data-state' ] === 'open';

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      const hasHighlighted = !!document.querySelector('[role="option"][data-highlighted]');
      if (!hasHighlighted) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  const handleClear = (): void => {
    setValue && setValue([]);
    setInputValue && setInputValue('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue && setInputValue(event.target.value);
  };

  return (
    <VendorCombobox.Control
      className={ classNames(
        style[ 'combobox-control' ],
        isOpen && placement === 'bottom' && style[ 'combobox-control--open-bottom' ],
        isOpen && placement === 'top' && style[ 'combobox-control--open-top' ],
        className,
      ) }
    >
      <VendorCombobox.Trigger
        className={ classNames(style[ 'combobox-control__trigger' ], className) }
        ref={ ref }
        { ...props }>
        <VendorCombobox.Input asChild>
          <Input
            value={ inputValue }
            onChange={ handleInputChange }
            className={ style[ 'combobox-control__input' ] }
            clearable={ clearable }
            loading={ loading }
            onClear={ handleClear }
            onKeyDown={ handleInputKeyDown }
            placeholder={ placeholder }
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
