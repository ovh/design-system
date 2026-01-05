import classNames from 'classnames';
import { type CSSProperties, Children, type HTMLAttributes, type ReactElement, type ReactNode, cloneElement, forwardRef, isValidElement } from 'react';

type StyleProp = {
  className?: string,
  style?: CSSProperties,
}

type AsChildProp<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps & StyleProp)
  | ({ asChild: true, children: ReactNode, ref?: any } & StyleProp) // eslint-disable-line @typescript-eslint/no-explicit-any

const AsChildSlot = forwardRef(({
  children,
  ...props
}: HTMLAttributes<HTMLElement> & { children?: ReactNode }, ref): ReactElement | null => {
  if (isValidElement(children)) {
    return cloneElement(children, {
      ref,
      ...props,
      ...children.props,
      className: classNames(
        props.className,
        children.props.className,
      ),
      style: {
        ...props.style,
        ...children.props.style,
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
