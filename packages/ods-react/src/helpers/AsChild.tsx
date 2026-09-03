import classNames from 'classnames';
import { type CSSProperties, Children, type HTMLAttributes, type ReactElement, type ReactNode, type RefAttributes, cloneElement, forwardRef, isValidElement } from 'react';

type StyleProp = {
  className?: string,
  style?: CSSProperties,
}

type AsChildProp<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps & StyleProp)
  | ({ asChild: true, children: ReactNode, ref?: any } & StyleProp) // eslint-disable-line @typescript-eslint/no-explicit-any

const AsChildSlot = forwardRef<HTMLElement, HTMLAttributes<HTMLElement> & { children?: ReactNode }>(({
  children,
  ...props
}, ref): ReactElement | null => {
  if (isValidElement(children)) {
    const child = children as ReactElement<HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>>;
    return cloneElement(child, {
      ref,
      ...props,
      ...child.props,
      className: classNames(
        props.className,
        child.props.className,
      ),
      style: {
        ...props.style,
        ...child.props.style,
      },
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
});

export {
  type AsChildProp,
  AsChildSlot,
};
