import classNames from 'classnames';
import { type ChangeEvent, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { useFormField } from '../../../../form-field/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { SPINNER_COLOR, SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { INPUT_MASK_STATE, type InputMaskState } from '../../constants/input-mask-state';
import { INPUT_TYPE, type InputType } from '../../constants/input-type';
import { isValueDefined } from '../../controller/input';
import style from './input.module.scss';

interface InputProp extends ComponentPropsWithRef<'input'> {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * Whether the masked display is active and its initial state.
   */
  maskOption?: {
    enable: boolean,
    initialState?: InputMaskState,
  },
  /**
   * Callback fired when the input value is cleared.
   */
  onClear?: () => void,
  /**
   * The input type.
   */
  type?: InputType,
}

const Input: FC<InputProp> = forwardRef(({
  className,
  clearable = false,
  id,
  invalid,
  loading = false,
  maskOption = { enable: false, initialState: INPUT_MASK_STATE.close },
  onClear,
  type = INPUT_TYPE.text,
  ...props
}, ref): JSX.Element => {
  const fieldContext = useFormField();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(isValueDefined(props.defaultValue) || isValueDefined(props.value));
  const [isMaskOpen, setIsMaskOpen] = useState(maskOption?.initialState === INPUT_MASK_STATE.open);
  const isControlled = props.value !== undefined;
  const isInvalid = invalid || fieldContext?.invalid;

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  useEffect(() => {
    setHasValue(isValueDefined(inputRef.current?.value));
  }, [inputRef.current?.value]);

  const hasClearButton = useMemo(() => {
    return clearable && !loading && hasValue;
  }, [clearable, hasValue, loading]);

  const hasSearchButton = useMemo(() => {
    return type === INPUT_TYPE.search && !loading;
  }, [loading, type]);

  const hasToggleMaskIcon = useMemo(() => {
    return maskOption.enable && !loading;
  }, [loading, maskOption.enable]);

  const inputType = useMemo(() => {
    return (maskOption.enable && !isMaskOpen) ? INPUT_TYPE.password : type;
  }, [isMaskOpen, maskOption.enable, type]);

  const hasActions = useMemo(() => {
    return hasClearButton || hasSearchButton || hasToggleMaskIcon || loading;
  }, [hasClearButton, hasSearchButton, hasToggleMaskIcon, loading]);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onChange && props.onChange(e);

    if (!isControlled) {
      setHasValue(isValueDefined(e.target.value));
    }
  }

  function onClearClick(): void {
    onClear && onClear();

    if (inputRef.current) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set;
      nativeInputValueSetter!.call(inputRef.current, '');

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      inputRef.current.focus();
    }
  }

  function onToggleMask(): void {
    setIsMaskOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={ classNames(
        style['input'],
        { [style['input--with-actions']]: hasActions },
        className,
      )}
      data-disabled={ props.disabled ? true : undefined }
      data-invalid={ isInvalid ? true : undefined }
      data-readonly={ props.readOnly ? true: undefined }>
      <input
        aria-invalid={ isInvalid }
        aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
        className={ style['input__field'] }
        data-invalid={ isInvalid ? true : undefined }
        id={ id || fieldContext?.id }
        ref={ inputRef }
        type={ inputType }
        { ...props }
        onChange={ onChange } />

      {
        hasActions &&
        <div className={ style['input__actions'] }>
          {
            loading &&
            <Spinner
              className={ style['input__actions__loading'] }
              color={ props.disabled ? SPINNER_COLOR.neutral : SPINNER_COLOR.primary }
              size={ SPINNER_SIZE.xs } />
          }

          {
            hasClearButton &&
            <Button
              color={ BUTTON_COLOR.neutral }
              disabled={ props.disabled || props.readOnly }
              onClick={ onClearClick }
              size={ BUTTON_SIZE.xs }
              type="button"
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.xmark } />
            </Button>
          }

          {
            hasToggleMaskIcon &&
            <Button
              color={ BUTTON_COLOR.primary }
              disabled={ props.disabled }
              onClick={ onToggleMask }
              size={ BUTTON_SIZE.xs }
              type="button"
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ isMaskOpen ? ICON_NAME.eye : ICON_NAME.eyeOff } />
            </Button>
          }

          {
            hasSearchButton &&
            <Button
              color={ BUTTON_COLOR.primary }
              disabled={ props.disabled || props.readOnly }
              size={ BUTTON_SIZE.xs }
              type="submit"
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.magnifyingGlass } />
            </Button>
          }
        </div>
      }
    </div>
  );
});

Input.displayName = 'Input';

export {
  Input,
  type InputProp,
};
