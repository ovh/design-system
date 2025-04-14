import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ChangeEvent, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { SPINNER_COLOR, Spinner } from '../../../../spinner/src';
import { INPUT_MASK_STATE, type InputMaskState } from '../../constants/input-mask-state';
import { INPUT_TYPE, type InputType } from '../../constants/input-type';
import { isValueDefined } from '../../controller/input';
import style from './input.module.scss';

interface InputProp extends ComponentPropsWithRef<'input'> {
  clearable?: boolean,
  loading?: boolean,
  maskOption?: {
    enable: boolean,
    initialState?: InputMaskState,
  }
  onClear?: () => void,
  type?: InputType,
}

const Input: FC<InputProp> = forwardRef(({
  className,
  clearable = false,
  loading = false,
  maskOption = { enable: false, initialState: INPUT_MASK_STATE.close },
  onClear,
  type = INPUT_TYPE.text,
  ...props
}, ref): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(isValueDefined(props.defaultValue) || isValueDefined(props.value));
  const [isMaskOpen, setIsMaskOpen] = useState(maskOption?.initialState === INPUT_MASK_STATE.open);

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

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onChange && props.onChange(e);
    setHasValue(isValueDefined(e.target.value));
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
    <div className={ classNames(style['input'], className) }>
      <Field.Input
        className={ classNames(
          style['input__field'],
          { [style['input__field--clearable']]: hasClearButton },
          { [style['input__field--loading']]: loading },
          { [style['input__field--search']]: hasSearchButton },
          { [style['input__field--toggle-mask']]: hasToggleMaskIcon },
        )}
        ref={ inputRef }
        type={ inputType }
        { ...props }
        onChange={ onChange } />

      <div className={ style['input__actions'] }>
        {
          loading &&
          <Spinner
            className={ style['input__actions__loading'] }
            color={ props.disabled ? SPINNER_COLOR.neutral : SPINNER_COLOR.primary } />
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
    </div>
  );
});

Input.displayName = 'Input';

export {
  Input,
  type InputProp,
};
