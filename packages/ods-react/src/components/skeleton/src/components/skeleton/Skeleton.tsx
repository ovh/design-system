import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './skeleton.module.scss';

interface SkeletonProp extends ComponentPropsWithRef<'div'> {}

const Skeleton: FC<SkeletonProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      aria-hidden="true"
      className={ classNames(
        style['skeleton'],
        className,
      )}
      data-ods="skeleton"
      ref={ ref }
      { ...props }>
    </div>
  );
});

Skeleton.displayName = 'Skeleton';

export {
  Skeleton,
  type SkeletonProp,
};
