import classNames from 'classnames';
import { type ComponentPropsWithRef, type ElementType, type ForwardedRef, type JSX, type MouseEvent, forwardRef } from 'react';
import { LINK_COLOR, type LinkColor } from '../../constant/link-color';
import style from './link.module.scss';

interface LinkProp<T extends ElementType = 'a'> {
  as?: T,
  color?: LinkColor,
  disabled?: boolean,
}

const Link = forwardRef(function Link<T extends ElementType>({
  as,
  className,
  color = LINK_COLOR.primary,
  disabled = false,
  ...props
}: LinkProp<T> & Omit<ComponentPropsWithRef<T>, keyof LinkProp<T>>, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element {
  const Component = as || 'a';

  function onClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <Component
      className={ classNames(
        style['link'],
        style[`link--${color}`],
        { [style['link--disabled']]: disabled },
        className,
      )}
      ref={ ref }
      { ...props }
      onClick={ onClick }
      tabIndex={ disabled ? -1 : props.tabIndex } />
  );
});

Link.displayName = 'Link';

export {
  Link,
  type LinkProp,
};
