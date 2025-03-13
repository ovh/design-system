import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC, type JSX } from 'react';
import { type OdsButtonColor } from '../../constants/button-color';
import { type OdsButtonSize } from '../../constants/button-size';
import { type OdsButtonVariant } from '../../constants/button-variant';
import style from './odsButton.module.scss';

interface OdsButtonProp extends ComponentPropsWithoutRef<'button'> {
  color: OdsButtonColor,
  isLoading?: boolean,
  size: OdsButtonSize,
  variant: OdsButtonVariant
}

const OdsButton: FC<OdsButtonProp> = ({
  color,
  isLoading,
  size,
  variant,
  ...props
}): JSX.Element => {
  return (
    <button
      disabled={props.disabled || isLoading}
      className={ classNames(style['ods-button'], style[`ods-button-${color}`], style[`ods-button--${size}`], style[`ods-button-${variant}`]) }
      { ...props }>
        {/* {isLoading && <OdsSpinner />} */}
    </button>
  );
}

export {
  OdsButton,
  type OdsButtonProp,
};
