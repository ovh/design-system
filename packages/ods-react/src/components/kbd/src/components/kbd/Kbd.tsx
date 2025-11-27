import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './kbd.module.scss';

interface KbdProp extends ComponentPropsWithRef<'kbd'> {}

const Kbd: FC<KbdProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <kbd
      className={ classNames(style['kbd'], className) }
      data-ods="kbd"
      ref={ ref }
      { ...props }>
      { children }
    </kbd>
  );
});

Kbd.displayName = 'Kbd';

export {
  Kbd,
  type KbdProp,
};
