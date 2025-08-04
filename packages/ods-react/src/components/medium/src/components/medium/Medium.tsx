import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './medium.module.scss';

interface MediumProp extends ComponentPropsWithRef<'img'> {}

const Medium: FC<MediumProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <img
      className={ classNames(style['medium'], className) }
      data-ods="medium"
      ref={ ref }
      { ...props } />
  );
});

Medium.displayName = 'Medium';

export {
  Medium,
  type MediumProp,
};
