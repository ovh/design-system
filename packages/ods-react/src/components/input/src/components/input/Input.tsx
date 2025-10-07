import classNames from 'classnames';
import { type ChangeEvent, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { INPUT_MASK_STATE } from '../../constants/input-mask-state';
import { INPUT_TYPE } from '../../constants/input-type';
import { InputProvider, type InputRootProp } from '../../contexts/useInput';
import { isValueDefined } from '../../controller/input';
import { InputActions } from '../input-actions/InputActions';
import style from './input.module.scss';

interface InputProp extends Omit<ComponentPropsWithRef<'input'>, 'type'>, InputRootProp {}

const Input: FC<InputProp> = forwardRef(({
  className,
  clearable = false,
  defaultValue,
  i18n,
  id,
  invalid,
  loading = false,
  locale,
  maskOption = { enable: false, initialState: INPUT_MASK_STATE.close },
  onClear,
  type = INPUT_TYPE.text,
  value,
  ...props
}, ref): JSX.Element => {
  const defaultId = useId();
  const fieldContext = useFormField();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(isValueDefined(defaultValue) || isValueDefined(value));
  const [isMaskOpen, setIsMaskOpen] = useState(maskOption?.initialState === INPUT_MASK_STATE.open);
  const isInvalid = invalid || fieldContext?.invalid;
  const inputId = id || fieldContext?.id || defaultId;

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  useEffect(() => {
    if (value !== undefined) {
      setHasValue(isValueDefined(value));
    }
  }, [value]);

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

    if (value === undefined) {
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
    <InputProvider
      i18n={ i18n }
      locale={ locale }>
      <div
        className={ classNames(
          style['input'],
          { [style['input--with-actions']]: hasActions },
          className,
        )}
        data-disabled={ props.disabled ? true : undefined }
        data-invalid={ isInvalid ? true : undefined }
        data-readonly={ props.readOnly ? true: undefined }
        role={ hasActions ? 'group' : undefined }>
        <input
          aria-busy={ loading }
          aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
          aria-invalid={ isInvalid }
          className={ style['input__field'] }
          data-ods="input"
          data-invalid={ isInvalid ? true : undefined }
          defaultValue={ defaultValue }
          id={ inputId }
          ref={ inputRef }
          type={ inputType }
          value={ value }
          { ...props }
          onChange={ onChange } />

        {
          hasActions &&
          <InputActions
            disabled={ props.disabled }
            hasClearButton={ hasClearButton }
            hasSearchButton={ hasSearchButton }
            hasToggleMaskIcon={ hasToggleMaskIcon }
            inputId={ inputId }
            isMaskOpen={ isMaskOpen }
            loading={ loading }
            onClearClick={ onClearClick }
            onToggleMask={ onToggleMask }
            readOnly={ props.readOnly } />
        }
      </div>
    </InputProvider>
  );
});

Input.displayName = 'Input';

export {
  Input,
  type InputProp,
};
