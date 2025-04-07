import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsSkeleton.module.scss';

interface OdsSkeletonProp extends ComponentPropsWithRef<'div'> {}

const OdsSkeleton: FC<OdsSkeletonProp> = forwardRef(({
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div className={ classNames(
      style['ods-skeleton'],
      className,
    )}
    ref={ref}
    {...props}>
    </div>
  );
});

OdsSkeleton.displayName = 'OdsSkeleton';

export {
  OdsSkeleton,
  type OdsSkeletonProp,
};
