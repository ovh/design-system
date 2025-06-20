import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type FC, type FocusEvent, type JSX, type KeyboardEvent, type MouseEvent, forwardRef, useEffect, useRef, useState } from 'react';
import { Input } from '../../../../input/src';
import { type ComboboxControlProp as ComboboxControlRootProp, useCombobox } from '../../contexts/useCombobox';
import { ComboboxTags, handleTagsKeyDown } from '../combobox-tags/ComboboxTags';
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
  const { getContentProps, open, value = [] } = comboboxContext;
  const { items, multiple } = useCombobox();
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const controlRef = useRef<HTMLDivElement>(null);
  const [focusedTagIndex, setFocusedTagIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleClickOutside(event: Event): void {
      if (controlRef.current && !controlRef.current.contains(event.target as Node)) {
        setFocusedTagIndex(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setFocusedTagIndex(null);
  }, [open]);

  function handleControlBlur(e: FocusEvent<HTMLDivElement>): void {
    if (!controlRef.current?.contains(e.relatedTarget as Node)) {
      setFocusedTagIndex(null);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && open) {
      e.stopPropagation();
    }

    if (multiple) {
      handleTagsKeyDown(e, {
        focusedTagIndex,
        inputRef,
        onFocusedTagChange: setFocusedTagIndex,
        onTagRemove: handleTagRemove,
        value,
      });
    }
  }

  function handleInputFocus(): void {
    setFocusedTagIndex(null);
  }

  function handleControlClick(e: MouseEvent<HTMLDivElement>): void {
    if (e.target === e.currentTarget || (e.target as HTMLElement)?.closest('input')) {
      setFocusedTagIndex(null);
    }
  }

  function handleTagRemove(tagValue: string): void {
    if (value) {
      const newValue = value.filter((val) => val !== tagValue);
      comboboxContext.setValue(newValue);
    }
  }

  return (
    <VendorCombobox.Control
      ref={controlRef}
      className={classNames(style['combobox-control'], {
        [style['combobox-control--open-top']]: open && placement === 'top',
        [style['combobox-control--open-bottom']]: open && placement === 'bottom',
        [style['combobox-control--multiple']]: multiple,
        className,
      })}
      onClick={handleControlClick}
      onBlur={handleControlBlur}
    >
      {multiple && (
        <ComboboxTags
          items={items}
          value={value}
          onTagRemove={handleTagRemove}
          onFocusedTagChange={setFocusedTagIndex}
          focusedTagIndex={focusedTagIndex}
          inputRef={inputRef}
          open={open}
        />
      )}
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
            clearable={clearable}
            loading={loading}
            onFocus={handleInputFocus}
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
