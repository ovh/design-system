import classNames from 'classnames';
import { Children, type ComponentPropsWithRef, type ElementType, type ForwardedRef, Fragment, type JSX, type MouseEvent, type ReactNode, forwardRef, isValidElement, useMemo } from 'react';
import { getElementText } from '../../../../../utils/element';
import { Icon } from '../../../../icon/src';
import style from './link.module.scss';

// The children with their fragments unfolded, so that <><Icon /></> still reads as an icon.
function getNodes(children: ReactNode): ReactNode[] {
  return Children.toArray(children).flatMap((node) => (
    isValidElement<{ children?: ReactNode }>(node) && node.type === Fragment ? getNodes(node.props.children) : [node]
  ));
}

interface LinkProp<T extends ElementType = 'a'> {
  /**
   * \@default-value='a'
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

  // Only ODS icons: a label rendered by a component, such as a translation, has no text in the
  // children, yet is text on the page and keeps the rest underline.
  const isIconOnly = useMemo(() => {
    const nodes = getNodes(children);

    return nodes.length > 0 && nodes.every((node) => isValidElement(node) && node.type === Icon);
  }, [children]);

  function onClick(event: MouseEvent): void {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      props?.onClick?.(event);
    }
  }

  return (
    <Component
      aria-disabled={ disabled ? true : (linkProps as ComponentPropsWithRef<'a'>)['aria-disabled'] }
      className={ classNames(
        style['link'],
        { [style['link--disabled']]: disabled },
        { [style['link--no-text']]: hasNoText },
        { [style['link--icon-only']]: isIconOnly },
        className,
      )}
      data-ods="link"
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
