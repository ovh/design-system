import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { warnDeprecated } from '../../../../../utils/deprecation';
import { SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { BUTTON_COLOR, type ButtonColor } from '../../constants/button-color';
import { BUTTON_SIZE, type ButtonSize } from '../../constants/button-size';
import { BUTTON_STATUS, type ButtonStatus } from '../../constants/button-status';
import { BUTTON_VARIANT, type ButtonVariant } from '../../constants/button-variant';
import style from './button.module.scss';

interface ButtonProp extends ComponentPropsWithRef<'button'> {
  /**
   * @deprecated
   * @type=BUTTON_COLOR
   * The color preset to use.
   * DEPRECATED: Use the `status` prop instead (information, success and warning have no status equivalent), color will be removed in v21.
   */
  color?: ButtonColor,
  /**
   * Whether the component is in loading state, disabling it.
   */
  loading?: boolean,
  /**
   * The size preset to use.
   */
  size?: ButtonSize,
  /**
   * @type=BUTTON_STATUS
   * The status preset to use.
   */
  status?: ButtonStatus,
  /**
   * The variant preset to use.
   */
  variant?: ButtonVariant,
}

const Button: FC<ButtonProp> = forwardRef(({
  children,
  className,
  color,
  loading = false,
  size = BUTTON_SIZE.md,
  status,
  variant = BUTTON_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  if (color) {
    warnDeprecated('Button.color', '[DEPRECATED]: The color prop of Button is deprecated and will be removed in v21, use the status prop instead (information, success and warning have no status equivalent).');
  }

  // information, success and warning have no status equivalent: they keep their v19 rendering through color only
  const buttonStatus = status ?? (color === BUTTON_COLOR.primary ? BUTTON_STATUS.brand : color) ?? BUTTON_STATUS.brand;

  return (
    <button
      className={ classNames(
        style['button'],
        style[`button--${buttonStatus}`],
        style[`button--${size}`],
        style[`button--${variant}`],
        className,
      )}
      data-ods="button"
      disabled={ props.disabled || loading }
      ref={ ref }
      { ...props }
      type={ props.type || 'button' }>
      {
        loading &&
        <span className={ style['button__spinner'] }>
          <Spinner
            className={ style['button__spinner-icon'] }
            role="none"
            size={ size === BUTTON_SIZE.xs ? SPINNER_SIZE.xs : SPINNER_SIZE.sm } />
        </span>
      }

      { children }
    </button>
  );
});

Button.displayName = 'Button';

export {
  Button,
  type ButtonProp,
};
