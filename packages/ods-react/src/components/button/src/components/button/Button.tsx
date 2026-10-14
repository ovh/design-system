import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { BUTTON_EMPHASES, BUTTON_EMPHASIS, type ButtonEmphasis } from '../../constants/button-emphasis';
import { BUTTON_SIZE, type ButtonSize } from '../../constants/button-size';
import { BUTTON_STATUS, type ButtonStatus } from '../../constants/button-status';
import style from './button.module.scss';

interface ButtonProp extends ComponentPropsWithRef<'button'> {
  /**
   * Removed in v20, use status. Typed never so that the v19 prop also fails through a spread object.
   * @internal
   */
  color?: never,
  /**
   * @type=BUTTON_EMPHASIS
   * The emphasis preset to use, setting the visual weight of the button.
   */
  emphasis?: ButtonEmphasis,
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
}

const Button: FC<ButtonProp> = forwardRef(({
  children,
  className,
  emphasis,
  loading = false,
  size = BUTTON_SIZE.md,
  status = BUTTON_STATUS.brand,
  ...props
}, ref): JSX.Element => {
  // An unknown value from untyped code falls back to the default instead of leaving the button unstyled.
  const isKnownEmphasis = (BUTTON_EMPHASES as readonly string[]).includes(emphasis as string);
  const buttonEmphasis = isKnownEmphasis ? emphasis as ButtonEmphasis : BUTTON_EMPHASIS.medium;

  return (
    <button
      className={ classNames(
        style['button'],
        style[`button--${status}`],
        style[`button--${size}`],
        style[`button--${buttonEmphasis}`],
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
