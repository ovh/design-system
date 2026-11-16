import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './visuallyHidden.module.scss';

interface VisuallyHiddenProp extends ComponentPropsWithRef<'span'> {}

const VisuallyHidden: FC<VisuallyHiddenProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <span
      className={ classNames(style['visually-hidden'], className) }
      data-ods="visually-hidden"
      ref={ ref }
      { ...props }>
      { children }
    </span>
  );
});

VisuallyHidden.displayName = 'VisuallyHidden';

export {
  VisuallyHidden,
  type VisuallyHiddenProp,
};
