import classNames from 'classnames';
import { type ChangeEvent, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useFormField } from '../../../../form-field/src';
import { INPUT_MASK_STATE } from '../../constants/input-mask-state';
import { INPUT_TYPE } from '../../constants/input-type';
import { InputProvider, type InputRootProp } from '../../contexts/useInput';
import { isValueDefined } from '../../controller/input';
import { InputActions } from '../input-actions/InputActions';
import style from './input.module.scss';

interface InputProp extends ComponentPropsWithRef<'input'>, InputRootProp {}

const Input: FC<InputProp> = forwardRef(({
  className,
  clearable = false,
  clearButtonAriaLabel,
  id,
  invalid,
  loading = false,
  maskButtonAriaLabel,
  maskOption = { enable: false, initialState: INPUT_MASK_STATE.close },
  onClear,
  searchButtonAriaLabel,
  type = INPUT_TYPE.text,
  locale,
  i18n,
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

  const inputId = useMemo(() => {
    return id || fieldContext?.id;
  }, [id, fieldContext?.id]);

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
    <InputProvider i18n={i18n} locale={locale}>
      <div
        className={ classNames(
          style['input'],
          { [style['input--with-actions']]: hasActions },
          className,
        )}
        data-disabled={ props.disabled ? true : undefined }
        data-invalid={ isInvalid ? true : undefined }
        data-readonly={ props.readOnly ? true: undefined }
        role={ hasActions ? 'group' : undefined }
      >
        <input
          aria-busy={ loading }
          aria-invalid={ isInvalid }
          aria-readonly={ props.readOnly }
          aria-describedby={ props['aria-describedby'] || fieldContext?.ariaDescribedBy }
          className={ style['input__field'] }
          data-invalid={ isInvalid ? true : undefined }
          id={ inputId }
          ref={ inputRef }
          type={ inputType }
          { ...props }
          onChange={ onChange } />

        {
          hasActions &&
          <InputActions
            loading={loading}
            hasClearButton={hasClearButton}
            hasSearchButton={hasSearchButton}
            hasToggleMaskIcon={hasToggleMaskIcon}
            inputId={inputId}
            isMaskOpen={isMaskOpen}
            onClearClick={onClearClick}
            onToggleMask={onToggleMask}
            disabled={props.disabled}
            readOnly={props.readOnly}
          />
        }
      </div>
    </InputProvider>
  );
});

Input.displayName = 'Input';

export { Input, type InputProp };
