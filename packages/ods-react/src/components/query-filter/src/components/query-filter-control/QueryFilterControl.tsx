import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type FocusEvent, type FormEvent, type JSX, type KeyboardEvent, forwardRef, useState } from 'react';
import { elementParentHasAttribute } from '../../../../../utils/element';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { Input } from '../../../../input/src';
import { POPOVER_POSITION } from '../../../../popover/src';
import { useQueryFilter } from '../../contexts/useQueryFilter';
import { getMergedLabel } from '../../controller/query-filter';
import style from './queryFilterControl.module.scss';

interface QueryFilterControlProp extends ComponentPropsWithRef<'div'> {
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

const QueryFilterControl: FC<QueryFilterControlProp> = forwardRef(({
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
    disabled,
    filteredGroup,
    highlightedOptionValue,
    highlightNextOption,
    highlightPreviousOption,
    i18n,
    inputRef,
    inputValue,
    invalid,
    isOpen,
    locale,
    moveToNextStep,
    moveToPreviousStep,
    name,
    readOnly,
    required,
    resetControl,
    selection,
    selectHighlightedItem,
    setInputValue,
    setIsOpen,
  } = useQueryFilter();
  const fieldContext = useFormField();
  const [isFocused, setIsFocused] = useState(false);

  function handleBlur(e: FocusEvent): void {
    if (e.relatedTarget?.id === contentId
      || (elementParentHasAttribute(e.relatedTarget as HTMLElement, 'data-ods', ['query-filter-content', 'query-filter-control']) &&
      elementParentHasAttribute(e.relatedTarget as HTMLElement, 'id', [contentId, controlId]))) {
      return;
    }

    setIsFocused(false);
    resetControl();
  }

  function handleInputChange(e: FormEvent<HTMLInputElement>): void {
    const value = (e.target as HTMLInputElement).value;

    if (value.length < getMergedLabel(selection).length) {
      moveToPreviousStep();
    } else if (filteredGroup && filteredGroup.options.some((option) => option.label.toLowerCase() === value.toLowerCase())) {
      moveToNextStep();
    }

    setInputValue(value);
    setIsOpen(true);
  }

  function handleInputKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        highlightNextOption();
        break;
      case 'ArrowUp':
        e.preventDefault();
        highlightPreviousOption();
        break;
      case 'Enter':
        if (highlightedOptionValue) {
          e.preventDefault();
          selectHighlightedItem();
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      className={ classNames(
        style['query-filter-control'],
        { [style['query-filter-control--disabled']]: disabled },
        { [style['query-filter-control--invalid']]: invalid },
        { [style['query-filter-control--focused']]: isFocused },
        { [style['query-filter-control--open-bottom']]: isOpen && contentPosition === POPOVER_POSITION.bottom },
        { [style['query-filter-control--open-top']]: isOpen && contentPosition === POPOVER_POSITION.top },
        { [style['query-filter-control--read-only']]: readOnly },
        className,
      )}
      data-ods="query-filter-control"
      id={ controlId }
      onBlur={ handleBlur }
      ref={ ref }
      { ...props }>
      <Input
        aria-activedescendant={ highlightedOptionValue ? `${controlId}-${highlightedOptionValue}` : '' }
        aria-autocomplete="list"
        aria-controls={ contentId }
        aria-expanded={ isOpen ? 'true' : 'false' }
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        className={ style['query-filter-control__input'] }
        clearable={ clearable }
        disabled={ disabled }
        i18n={ i18n }
        id={ id || fieldContext?.id }
        invalid={ invalid }
        loading={ loading }
        locale={ locale }
        onChange={ handleInputChange }
        onClick={ () => setIsOpen(true) }
        onFocus={ () => setIsFocused(true) }
        onKeyDown={ handleInputKeyDown }
        name={ name }
        placeholder={ placeholder }
        readOnly={ readOnly }
        ref={ inputRef }
        required={ required }
        role="combobox"
        spellCheck="false"
        value={ inputValue } />

      <button
        aria-hidden="true"
        className={ classNames(
          style['query-filter-control__caret'],
          { [style['query-filter-control__caret--disabled']]: disabled },
        )}
        onClick={ () => {
          inputRef.current?.click();
          inputRef.current?.focus();
        }}
        // We use an unfocusable button here to get a populated relatedTarget on container blur event
        tabIndex={ -1 }>
        <Icon
          className={ style['query-filter-control__caret__icon'] }
          name={ ICON_NAME.magnifyingGlass } />
      </button>
    </div>
  );
});

QueryFilterControl.displayName = 'QueryFilterControl';

export {
  QueryFilterControl,
  type QueryFilterControlProp,
};
