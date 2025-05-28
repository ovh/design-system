import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface DrawerBodyProp extends ComponentPropsWithRef<'div'> {
}

const DrawerBody: FC<DrawerBodyProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  return (
    <div
      ref={ ref }
      { ...props }>
      { children }
    </div>
  );
});

DrawerBody.displayName = 'DrawerBody';

export {
  DrawerBody,
  type DrawerBodyProp,
};
