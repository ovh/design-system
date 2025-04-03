import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ODS_SPINNER_COLOR, ODS_SPINNER_SIZE, OdsSpinner } from '../../../../spinner/src';
import { ODS_BUTTON_COLOR, type OdsButtonColor } from '../../constants/button-color';
import { ODS_BUTTON_SIZE, type OdsButtonSize } from '../../constants/button-size';
import { ODS_BUTTON_VARIANT, type OdsButtonVariant } from '../../constants/button-variant';
import style from './odsButton.module.scss';

interface OdsButtonProp extends ComponentPropsWithRef<'button'> {
  color?: OdsButtonColor,
  isLoading?: boolean,
  size?: OdsButtonSize,
  variant?: OdsButtonVariant,
}

const OdsButton: FC<OdsButtonProp> = forwardRef(({
  children,
  className,
  color = ODS_BUTTON_COLOR.primary,
  isLoading = false,
  size = ODS_BUTTON_SIZE.md,
  variant = ODS_BUTTON_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  return (
    <button
      className={ classNames(
        style['ods-button'],
        style[`ods-button--${color}`],
        style[`ods-button--${size}`],
        style[`ods-button--${variant}`],
        className,
      )}
      disabled={ props.disabled || isLoading }
      ref={ ref }
      { ...props }>
      {
        isLoading &&
        <div className={ style['ods-button__spinner'] }>
          <OdsSpinner
            color={ ODS_SPINNER_COLOR.neutral }
            size={ size === ODS_BUTTON_SIZE.xs ? ODS_SPINNER_SIZE.xs : ODS_SPINNER_SIZE.sm } />
        </div>
      }

      { children }
    </button>
  );
});

OdsButton.displayName = 'OdsButton';

export {
  OdsButton,
  type OdsButtonProp,
};
