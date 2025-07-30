import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { SPINNER_COLOR, SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { BUTTON_COLOR, type ButtonColor } from '../../constants/button-color';
import { BUTTON_SIZE, type ButtonSize } from '../../constants/button-size';
import { BUTTON_VARIANT, type ButtonVariant } from '../../constants/button-variant';
import style from './button.module.scss';

interface ButtonProp extends ComponentPropsWithRef<'button'> {
  /**
   * @type=BUTTON_COLOR
   * The color preset to use.
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
   * The variant preset to use.
   */
  variant?: ButtonVariant,
}

const Button: FC<ButtonProp> = forwardRef(({
  children,
  className,
  color = BUTTON_COLOR.primary,
  loading = false,
  size = BUTTON_SIZE.md,
  variant = BUTTON_VARIANT.default,
  ...props
}, ref): JSX.Element => {
  return (
    <button
      className={ classNames(
        style['button'],
        style[`button--${color}`],
        style[`button--${size}`],
        style[`button--${variant}`],
        className,
      )}
      disabled={ props.disabled || loading }
      ref={ ref }
      { ...props }
      type={ props.type || 'button' }>
      {
        loading &&
        <span className={ style['button__spinner'] }>
          <Spinner
            color={ SPINNER_COLOR.neutral }
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
