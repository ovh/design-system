import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type FocusEvent, type JSX, type KeyboardEvent, forwardRef, useState } from 'react';
import { elementParentHasAttribute } from '../../../../../utils/element';
import { useFormField } from '../../../../form-field/src';
import { Input } from '../../../../input/src';
import { POPOVER_POSITION } from '../../../../popover/src';
import { Tag } from '../../../../tag/src';
import { type ComboboxOptionItem, useCombobox } from '../../contexts/useCombobox';
import { isAtInputStart } from '../../controller/combobox';
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
  id,
  loading,
  placeholder,
  ...props
}, ref): JSX.Element => {
  const {
    contentId,
    contentPosition,
    controlId,
    deselectItem,
    disabled,
    highlightedOptionValue,
    highlightNextOption,
    highlightPreviousOption,
    i18n,
    inputRef,
    inputValue,
    invalid,
    isOpen,
    locale,
    multiple,
    name,
    readOnly,
    required,
    selection,
    selectHighlightedItem,
    setInputValue,
    setIsOpen,
    setSelection,
  } = useCombobox();
  const fieldContext = useFormField();
  const [focusedTagIndex, setFocusedTagIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const isInteractive = !disabled && !readOnly;

  function focusNextTag(): void {
    if (!selection.length || focusedTagIndex < 0) {
      return;
    }

    if (focusedTagIndex >= selection.length - 1) {
      resetTagFocus();
    } else {
      setFocusedTagIndex((i) => Math.min(i + 1, selection.length - 1));
    }
  }

  function focusPreviousTag(): void {
    if (!selection.length) {
      return;
    }

    if (focusedTagIndex < 0) {
      setFocusedTagIndex(selection.length - 1);
    } else {
      setFocusedTagIndex((i) => Math.max(0, i - 1));
    }
  }

  function handleBlur(e: FocusEvent): void {
    if (e.relatedTarget?.id === contentId
      || (elementParentHasAttribute(e.relatedTarget as HTMLElement, 'data-ods', ['combobox-content', 'combobox-control']) &&
      elementParentHasAttribute(e.relatedTarget as HTMLElement, 'id', [contentId, controlId]))) {
      return;
    }

    if (!multiple) {
      if (selection.length) {
        setInputValue(selection[0].isNewElement ? selection[0].value : selection[0].label);
      } else {
        setInputValue('');
      }
    }

    resetTagFocus();
    setIsFocused(false);
    setIsOpen(false);
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        highlightNextOption();
        break;
      case 'ArrowLeft':
        if (isAtInputStart(inputRef.current)) {
          e.preventDefault();
          focusPreviousTag();
        }
        break;
      case 'ArrowRight':
        if (focusedTagIndex >= 0 && isAtInputStart(inputRef.current)) {
          e.preventDefault();
          focusNextTag();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        highlightPreviousOption();
        break;
      case 'Backspace':
        if (selection.length && isAtInputStart(inputRef.current)) {
          removeTag(selection[focusedTagIndex >= 0 ? focusedTagIndex : selection.length - 1]);
        }
        break;
      case 'Enter':
        if (selection.length && focusedTagIndex >= 0) {
          e.preventDefault();
          removeTag(selection[focusedTagIndex]);
          break;
        }

        if (highlightedOptionValue) {
          e.preventDefault();
          selectHighlightedItem();
        }
        break;
      case 'Escape':
        e.preventDefault();
        resetTagFocus();
        setIsOpen(false);
        break;
      default:
        break;
    }
  }

  function removeTag(item: ComboboxOptionItem): void {
    resetTagFocus();
    deselectItem(item);
  }

  function resetTagFocus(): void {
    setFocusedTagIndex(-1);
  }

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={ classNames(
        style['combobox-control'],
        { [style['combobox-control--disabled']]: disabled },
        { [style['combobox-control--invalid']]: invalid },
        { [style['combobox-control--focused']]: isFocused },
        { [style['combobox-control--open-bottom']]: isOpen && contentPosition === POPOVER_POSITION.bottom },
        { [style['combobox-control--open-top']]: isOpen && contentPosition === POPOVER_POSITION.top },
        { [style['combobox-control--read-only']]: readOnly },
        className,
      )}
      data-ods="combobox-control"
      id={ controlId }
      onBlur={ handleBlur }
      ref={ ref }
      { ...props }>
      {
        multiple && selection.map((item, index) => (
          <Tag
            className={ classNames(
              { [style['combobox-control__tag--focused']]: isInteractive && focusedTagIndex === index },
            )}
            disabled={ disabled || readOnly }
            key={ item.value }
            onClick={ () => removeTag(item) }
            tabIndex={ -1 }
            value={ item.value }>
            { item.label }
          </Tag>
        ))
      }

      <Input
        aria-activedescendant={ highlightedOptionValue ? `${controlId}-${highlightedOptionValue}` : '' }
        aria-autocomplete="list"
        aria-controls={ contentId }
        aria-expanded={ isOpen ? 'true' : 'false' }
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        className={ style['combobox-control__input'] }
        clearable={ clearable }
        disabled={ disabled }
        i18n={ i18n }
        id={ id || fieldContext?.id }
        invalid={ invalid }
        loading={ loading }
        locale={ locale }
        onChange={ (e) => {
          resetTagFocus();
          setInputValue(e.target.value);
          setIsOpen(true);
        }}
        onClear={ () => !multiple && setSelection([]) }
        onClick={ () => setIsOpen(true) }
        onFocus={ () => setIsFocused(true) }
        onKeyDown={ handleInputKeyDown }
        name={ name }
        placeholder={ placeholder }
        readOnly={ readOnly }
        ref={ inputRef }
        required={ multiple ? false : required }
        role="combobox"
        spellCheck="false"
        value={ inputValue } />
    </div>
  );
});

ComboboxControl.displayName = 'ComboboxControl';

export {
  ComboboxControl,
  type ComboboxControlProp,
};
