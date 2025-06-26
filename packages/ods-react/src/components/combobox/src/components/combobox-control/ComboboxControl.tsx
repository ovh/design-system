import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type JSX, type KeyboardEvent, forwardRef, useEffect, useRef } from 'react';
import { Input } from '../../../../input/src';
import { type ComboboxControlProp as ComboboxControlRootProp, useCombobox } from '../../contexts/useCombobox';
import { ComboboxTags } from '../combobox-tags/ComboboxTags';
import style from './comboboxControl.module.scss';

interface ComboboxControlProp extends ComboboxControlRootProp {}

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable,
  loading,
  placeholder,
  ...props
}, ref): JSX.Element => {
  const comboboxContext = useComboboxContext();
  const { getContentProps, open } = comboboxContext;
  const {
    multiple,
    tagFocus,
    handleTagsKeyDown,
    disabled,
    readOnly,
  } = useCombobox();

  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (controlRef.current && !controlRef.current.contains(event.target as Node)) {
        tagFocus.resetTagFocus();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagFocus]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && open) {
      e.stopPropagation();
    }

    if (multiple) {
      handleTagsKeyDown(e, inputRef);
    }
  }

  return (
    <VendorCombobox.Control
      ref={controlRef}
      className={classNames(style['combobox-control'], {
        [style['combobox-control--open-top']]: open && placement === 'top',
        [style['combobox-control--open-bottom']]: open && placement === 'bottom',
        [style['combobox-control--multiple']]: multiple,
        [style['combobox-control--read-only']]: readOnly,
        className,
      })}
    >
      {multiple && <ComboboxTags />}
      <VendorCombobox.Trigger
        className={classNames(style['combobox-control__trigger'], className)}
        ref={ref}
        {...props}
      >
        <VendorCombobox.Input asChild>
          <Input
            className={classNames(
              style['combobox-control__trigger__input'],
              { [style['combobox-control__trigger__input--multiple']]: multiple },
            )}
            disabled={disabled}
            readOnly={readOnly}
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
