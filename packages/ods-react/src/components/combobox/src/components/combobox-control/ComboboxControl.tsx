import { Combobox as VendorCombobox, useComboboxContext } from '@ark-ui/react/combobox';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type KeyboardEvent, forwardRef, useRef, useState } from 'react';
import { Input } from '../../../../input/src';
import { Tag } from '../../../../tag/src';
import { useCombobox } from '../../contexts/useCombobox';
import {
  calculateNewFocusIndex,
  findLabelForValue,
  isKeyboardEventAtInputStart,
  removeValueFromArray,
  shouldResetTagFocus,
} from '../../controller/combobox';
import style from './comboboxControl.module.scss';

interface ComboboxControlProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean;
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean;
  /**
   * The placeholder text to display in the input.
   */
  placeholder?: string;
}

const ComboboxControl: FC<ComboboxControlProp> = forwardRef(({
  className,
  clearable,
  loading,
  placeholder,
  ...props
}, ref): JSX.Element => {
  const { disabled, getContentProps, multiple, open, setOpen, setValue, value } = useComboboxContext();
  const { i18n, invalid, items, locale, readOnly } = useCombobox();
  const [focusedTagIndex, setFocusedTagIndex] = useState<number | null>(null);
  const contentProps = getContentProps() as {
    'data-placement'?: 'bottom' | 'top';
  };
  const placement = contentProps['data-placement'] as 'top' | 'bottom' | undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const isInteractive = !disabled && !readOnly;

  function handleInputClick(): void {
    if (isInteractive) {
      setOpen(true);
    }
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === ' ' && open) {
      e.stopPropagation();
    }

    if (!multiple || !value.length) {
      return;
    }

    const isBackspaceAtStart = isKeyboardEventAtInputStart(e, inputRef, 'Backspace');
    const isArrowLeftAtStart = isKeyboardEventAtInputStart(e, inputRef, 'ArrowLeft');

    if (isBackspaceAtStart && value.length > 0) {
      if (focusedTagIndex === null) {
        setFocusedTagIndex(value.length - 1);
        e.preventDefault();
      } else {
        const indexToRemove = focusedTagIndex;
        const tagToRemove = value[indexToRemove];

        const newFocusIndex = calculateNewFocusIndex(indexToRemove, value.length);
        setFocusedTagIndex(newFocusIndex);
        removeTag(tagToRemove);
        e.preventDefault();
      }
    } else if (isArrowLeftAtStart && value.length > 0 && focusedTagIndex === null) {
      setFocusedTagIndex(value.length - 1);
      e.preventDefault();
    } else if (shouldResetTagFocus(e.key)) {
      setFocusedTagIndex(null);
    }

    if (focusedTagIndex !== null && value.length > 0) {
      if (e.key === 'ArrowLeft' && focusedTagIndex > 0) {
        setFocusedTagIndex(focusedTagIndex - 1);
        e.preventDefault();
      } else if (e.key === 'ArrowRight' && focusedTagIndex < value.length - 1) {
        setFocusedTagIndex(focusedTagIndex + 1);
        e.preventDefault();
      } else if (e.key === 'Escape') {
        setFocusedTagIndex(null);
        e.preventDefault();
      } else if (e.key === 'Enter') {
        removeTag(value[focusedTagIndex]);
        e.preventDefault();
      }
    }
  }

  function handleTagClick(tagValue: string): void {
    if (isInteractive) {
      resetTagFocus();
      removeTag(tagValue);
    }
  }

  function removeTag(tagValue: string): void {
    if (!multiple) {
      return;
    }

    const newValue = removeValueFromArray(value, tagValue);
    setValue(newValue);
  }

  function resetTagFocus(): void {
    setFocusedTagIndex(null);
  }

  return (
    <VendorCombobox.Control
      className={ classNames(style['combobox-control'], {
        [style['combobox-control--open-top']]: open && placement === 'top',
        [style['combobox-control--open-bottom']]: open && placement === 'bottom',
        [style['combobox-control--multiple']]: multiple,
        [style['combobox-control--read-only']]: readOnly,
        [style['combobox-control--invalid']]: invalid,
        className,
      })}
      onBlur={ () => resetTagFocus() }
      ref={ ref }
      { ...props }>
      {
        multiple && value && value.length > 0 && value.map((val, index) => (
          <Tag
            className={ classNames(
              { [style['combobox-control__tag--focused']]: isInteractive && focusedTagIndex === index },
            )}
            disabled={ disabled || readOnly }
            key={ val }
            onClick={ () => handleTagClick(val) }
            tabIndex={ -1 }
            value={ val }>
            { findLabelForValue(items, val) }
          </Tag>
        ))
      }

      <VendorCombobox.Input asChild>
        <Input
          className={ style['combobox-control__input'] }
          clearable={ clearable }
          disabled={ disabled }
          i18n={ i18n }
          loading={ loading }
          locale={ locale }
          onClear={ () => setValue([]) }
          onClick={ handleInputClick }
          onKeyDown={ handleInputKeyDown }
          placeholder={ placeholder }
          readOnly={ readOnly }
          ref={ inputRef } />
      </VendorCombobox.Input>
    </VendorCombobox.Control>
  );
});

ComboboxControl.displayName = 'ComboboxControl';

export {
  ComboboxControl,
  type ComboboxControlProp,
};
