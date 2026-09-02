import classNames from 'classnames';
import { type ComponentPropsWithRef, type ElementType, type ForwardedRef, type JSX, type MouseEvent, forwardRef } from 'react';
import { SPINNER_COLOR, SPINNER_SIZE, Spinner } from '../../../../spinner/src';
import { BUTTON_COLOR, type ButtonColor } from '../../constants/button-color';
import { BUTTON_SIZE, type ButtonSize } from '../../constants/button-size';
import { BUTTON_VARIANT, type ButtonVariant } from '../../constants/button-variant';
import style from './button.module.scss';

interface ButtonProp<T extends ElementType = 'button'> extends ComponentPropsWithRef<'button'> {
  /**
   * \@default-value='button'
   * Pass a component you may want to use as custom Button component.
   * Useful for example to render the button as a link, either a plain anchor or the Link
   * component of a routing library.
   * */
  as?: T,
  /**
   * @type=BUTTON_COLOR
   * The color preset to use.
   */
  color?: ButtonColor,
  /**
   * Whether the component is disabled.
   * A non-button element takes no `disabled` attribute, so it is disabled through
   * `aria-disabled` instead: no `href`, out of the tab order, clicks prevented.
   */
  disabled?: boolean,
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

/**
 * The props owned by the component, as opposed to the ones it forwards to the rendered element.
 * Only these are removed from the `as` target props, so that `href`, `ref` and the rest keep the
 * type of the element actually rendered.
 * @internal
 */
type ButtonOwnProp<T extends ElementType = 'button'> = Pick<ButtonProp<T>, 'as' | 'color' | 'disabled' | 'loading' | 'size' | 'variant'>;

// The attributes read back from the forwarded props, whichever element is rendered.
type ButtonDomProp = Omit<ComponentPropsWithRef<'button'>, 'onClick'>
  & Pick<ComponentPropsWithRef<'a'>, 'href'>
  & { onClick?: (event: MouseEvent<HTMLElement>) => void };

const ButtonRoot = forwardRef(function Button<T extends ElementType>({
  as,
  children,
  className,
  color = BUTTON_COLOR.primary,
  disabled,
  loading = false,
  size = BUTTON_SIZE.md,
  variant = BUTTON_VARIANT.default,
  ...props
}: ButtonProp<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProp<T>>, ref: ForwardedRef<HTMLButtonElement>): JSX.Element {
  const Component = as || 'button';
  const isButton = Component === 'button';
  const isDisabled = disabled || loading;
  const domProps = props as ButtonDomProp;

  // A non-button element takes neither the `disabled` nor the `type` attribute, so a disabled
  // one is made inert the way `Link` does it: no `href` to follow, out of the tab order, and
  // clicks stopped before they reach a parent handler.
  const elementProps = isButton
    ? {
      disabled: isDisabled,
      type: domProps.type || 'button',
    }
    : {
      'aria-disabled': isDisabled ? true : domProps['aria-disabled'],
      href: isDisabled ? undefined : domProps.href,
      tabIndex: isDisabled ? -1 : domProps.tabIndex,
    };

  function onClick(event: MouseEvent<HTMLElement>): void {
    if (isDisabled && !isButton) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    domProps.onClick?.(event);
  }

  return (
    <Component
      className={ classNames(
        style['button'],
        style[`button--${color}`],
        style[`button--${size}`],
        style[`button--${variant}`],
        className,
      )}
      data-ods="button"
      ref={ ref }
      { ...props }
      { ...elementProps }
      onClick={ onClick }>
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
    </Component>
  );
});

ButtonRoot.displayName = 'Button';

// `forwardRef` cannot carry a generic through, so its inferred props type accepts anything and
// requires nothing. Restating the signature keeps `as` type safe: the props and the ref of the
// rendered element are enforced at the call site.
const Button = ButtonRoot as <T extends ElementType = 'button'>(
  props: ButtonOwnProp<T> & Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProp<T>>,
) => JSX.Element;

export {
  Button,
  type ButtonProp,
};
