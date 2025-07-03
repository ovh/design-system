import classNames from 'classnames';
import { type ComponentPropsWithRef, type ElementType, type ForwardedRef, type JSX, type MouseEvent, forwardRef, useMemo } from 'react';
import { getElementText } from '../../../../../utils/element';
import style from './link.module.scss';

  interface LinkProp<T extends ElementType = 'a'> {
    /**
     * @default-value='a'
     * Pass a component you may want to use as custom Link component.
     * Useful for example when using routing library like react-router.
     * */
    as?: T,
    /**
     * Whether the component is disabled.
     */
    disabled?: boolean,
  }

const Link = forwardRef(function Link<T extends ElementType>({
  as,
  className,
  disabled = false,
  ...props
}: LinkProp<T> & Omit<ComponentPropsWithRef<T>, keyof LinkProp<T>>, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element {
  const Component = as || 'a';
  const { children, ...linkProps } = props;

  const hasNoText = useMemo(() => {
    return getElementText(children) === '';
  }, [children]);

  function onClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      props.onClick && props.onClick(event);
    }
  }

  return (
    <Component
      aria-disabled={ disabled ? true : (linkProps as ComponentPropsWithRef<'a'>)['aria-disabled'] }
      className={ classNames(
        style['link'],
        { [style['link--disabled']]: disabled },
        { [style['link--no-text']]: hasNoText },
        className,
      )}
      ref={ ref }
      { ...linkProps }
      onClick={ onClick }
      tabIndex={ disabled ? -1 : linkProps.tabIndex }
    >
      {/* If there is no text content, we add a zero-width space to simulate the correct baseline */}
      { hasNoText && <span>&#8203;</span> }
      { props.children }
    </Component>
  );
});

Link.displayName = 'Link';

export {
  Link,
  type LinkProp,
};
