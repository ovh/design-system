import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type FocusEvent, type JSX, useRef, useState } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
// import { ODS_INPUT_TYPE, type OdsInputType } from '../../constants/input-type';
import style from './odsInput.module.scss';

interface OdsInputProp extends ComponentPropsWithoutRef<'input'> {
  hasError?: boolean,
  isClearable?: boolean,
  isLoading?: boolean,
  // isMasked?: boolean,
  name: string, // keep to enforce value is set?
  // type: OdsInputType, // keep?
}

const OdsInput: FC<OdsInputProp> = ({
  hasError = false,
  isClearable = false,
  isLoading = false,
  name,
  ...props
}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

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


  // TODO
  const hasClearableState = isClearable && !isLoading;// && (this.showClearable || (this.value !== null && this.value !== ''));
  const hasSearchState = !isLoading && props.type === 'search';
  const hasToggleMaskState = !isLoading && props.type === 'password'; //this.isPassword && !this.isLoading;

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
        )}
        name={ name }
        onBlur={ onBlur }
        onInvalid={ onInvalid }
        // onKeyUp={(event: KeyboardEvent): void => submitFormOnEnter(event, this.internals.form)}
        ref={ inputRef }
        { ...props } />

      {
        hasClearableState &&
        <button
          disabled={ props.disabled || props.readOnly }
          onClick={ clear }
          // onKeyDown={ (event: KeyboardEvent) => this.handleKeyDown(event) }
          // onKeyUp={ (event: KeyboardEvent): Promise<void> => handleKeySpaceEnter(event, this.isDisabled, this.clear.bind(this)) }
        >
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
