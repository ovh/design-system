import { Field } from '@ark-ui/react/field';
import classNames from 'classnames';
import { type ChangeEvent, type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { ODS_BUTTON_COLOR, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT, OdsButton } from '../../../../button/src';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import { ODS_SPINNER_COLOR, OdsSpinner } from '../../../../spinner/src';
import { ODS_INPUT_MASK_STATE, type OdsInputMaskState } from '../../constants/input-mask-state';
import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import { isValueDefined } from '../../controller/ods-input';
import style from './odsInput.module.scss';

interface OdsInputProp extends ComponentPropsWithRef<'input'> {
  clearable?: boolean,
  loading?: boolean,
  maskOption?: {
    enable: boolean,
    initialState?: OdsInputMaskState,
  }
  onClear?: () => void,
  type?: OdsInputType,
}

const OdsInput: FC<OdsInputProp> = forwardRef(({
  className,
  clearable = false,
  loading = false,
  maskOption = { enable: false, initialState: ODS_INPUT_MASK_STATE.close },
  onClear,
  type = ODS_INPUT_TYPE.text,
  ...props
}, ref): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(isValueDefined(props.defaultValue) || isValueDefined(props.value));
  const [isMaskOpen, setIsMaskOpen] = useState(maskOption?.initialState === ODS_INPUT_MASK_STATE.open);

  useImperativeHandle(ref, () => inputRef.current!, [inputRef]);

  useEffect(() => {
    setHasValue(isValueDefined(inputRef.current?.value));
  }, [inputRef.current?.value]);

  const hasClearButton = useMemo(() => {
    return clearable && !loading && hasValue;
  }, [clearable, hasValue, loading]);

  const hasSearchButton = useMemo(() => {
    return type === ODS_INPUT_TYPE.search && !loading;
  }, [loading, type]);

  const hasToggleMaskIcon = useMemo(() => {
    return maskOption.enable && !loading;
  }, [loading, maskOption.enable]);

  const inputType = useMemo(() => {
    return (maskOption.enable && !isMaskOpen) ? ODS_INPUT_TYPE.password : type;
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
    }
  }

  function onToggleMask(): void {
    setIsMaskOpen((isOpen) => !isOpen);
  }

  return (
    <div className={ classNames(style['ods-input'], className) }>
      <Field.Input
        className={ classNames(
          style['ods-input__field'],
          { [style['ods-input__field--clearable']]: hasClearButton },
          { [style['ods-input__field--loading']]: loading },
          { [style['ods-input__field--search']]: hasSearchButton },
          { [style['ods-input__field--toggle-mask']]: hasToggleMaskIcon },
        )}
        ref={ inputRef }
        type={ inputType }
        { ...props }
        onChange={ onChange } />

      <div className={ style['ods-input__actions'] }>
        {
          loading &&
          <OdsSpinner
            className={ style['ods-input__actions__loading'] }
            color={ props.disabled ? ODS_SPINNER_COLOR.neutral : ODS_SPINNER_COLOR.primary } />
        }

        {
          hasClearButton &&
          <OdsButton
            color={ ODS_BUTTON_COLOR.neutral }
            disabled={ props.disabled || props.readOnly }
            onClick={ onClearClick }
            size={ ODS_BUTTON_SIZE.xs }
            type="button"
            variant={ ODS_BUTTON_VARIANT.ghost }>
            <OdsIcon name={ ODS_ICON_NAME.xmark } />
          </OdsButton>
        }

        {
          hasToggleMaskIcon &&
          <OdsButton
            color={ ODS_BUTTON_COLOR.primary }
            disabled={ props.disabled }
            onClick={ onToggleMask }
            size={ ODS_BUTTON_SIZE.xs }
            type="button"
            variant={ ODS_BUTTON_VARIANT.ghost }>
            <OdsIcon name={ isMaskOpen ? ODS_ICON_NAME.eye : ODS_ICON_NAME.eyeOff } />
          </OdsButton>
        }

        {
          hasSearchButton &&
          <OdsButton
            color={ ODS_BUTTON_COLOR.primary }
            disabled={ props.disabled || props.readOnly }
            size={ ODS_BUTTON_SIZE.xs }
            type="submit"
            variant={ ODS_BUTTON_VARIANT.ghost }>
            <OdsIcon name={ ODS_ICON_NAME.magnifyingGlass } />
          </OdsButton>
        }
      </div>
    </div>
  );
});

OdsInput.displayName = 'OdsInput';

export {
  OdsInput,
  type OdsInputProp,
};
