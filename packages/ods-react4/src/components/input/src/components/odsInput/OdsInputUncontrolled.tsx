import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type FocusEvent, type JSX, useRef, useState } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import style from './odsInput.module.scss';

interface OdsInputProp extends ComponentPropsWithoutRef<'input'> {
  hasError?: boolean,
  isClearable?: boolean,
  isLoading?: boolean,
  name: string,
}

const OdsInput: FC<OdsInputProp> = ({
  className,
  hasError = false,
  isClearable = false,
  isLoading = false,
  name,
  ...props
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  // TODO
  const hasClearableState = isClearable && !isLoading;// && (this.showClearable || (this.value !== null && this.value !== ''));
  const hasSearchState = !isLoading && props.type === 'search';
  const hasToggleMaskState = !isLoading && props.type === 'password'; //this.isPassword && !this.isLoading;

  function clear(): void {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  function onBlur(event: FocusEvent<HTMLInputElement>): void {
    setIsInvalid(!event.target.validity.valid);
  }

  function onInvalid(): void {
    setIsInvalid(true);
  }

  return (
    <>
      <input
        className={ classNames(
          style['ods-input'],
          { [style['ods-input--clearable']]: hasClearableState },
          { [style['ods-input--error']]: hasError || isInvalid },
          { [style['ods-input--loading']]: isLoading },
          { [style['ods-input--search']]: hasSearchState },
          { [style['ods-input--toggleable']]: hasToggleMaskState },
          className,
        )}
        name={ name }
        onBlur={ onBlur }
        onInvalid={ onInvalid }
        ref={ inputRef }
        { ...props } />

      {
        hasClearableState &&
        <button
          disabled={ props.disabled || props.readOnly }
          onClick={ clear }>
          <OdsIcon name={ ODS_ICON_NAME.xmark } />
        </button>
      }
    </>
  );
};

export {
  OdsInput,
  type OdsInputProp,
};
