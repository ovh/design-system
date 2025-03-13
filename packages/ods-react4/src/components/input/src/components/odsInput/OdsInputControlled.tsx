import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type FocusEvent, type JSX, useState } from 'react';
import { ODS_ICON_NAME, OdsIcon } from '../../../../icon/src';
import style from './odsInput.module.scss';

interface OdsInputProp extends ComponentPropsWithoutRef<'input'> {
  hasError?: boolean,
  isClearable?: boolean,
  isLoading?: boolean,
  onClear?: () => void,
  // type: OdsInputType,
}

const OdsInput: FC<OdsInputProp> = ({
  className,
  hasError = false,
  isClearable = false,
  isLoading = false,
  onClear = () => {},
  ...props
}): JSX.Element => {
  const [isInvalid, setIsInvalid] = useState(false);

  // TODO
  const hasClearableState = isClearable && !isLoading;// && (this.showClearable || (this.value !== null && this.value !== ''));
  const hasSearchState = !isLoading && props.type === 'search';
  const hasToggleMaskState = !isLoading && props.type === 'password'; //this.isPassword && !this.isLoading;

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
        onBlur={ onBlur }
        onInvalid={ onInvalid }
        { ...props } />

      {
        hasClearableState &&
        <button
          disabled={ props.disabled || props.readOnly }
          onClick={ onClear }>
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
