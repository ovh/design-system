import { Dialog } from '@ark-ui/react/dialog';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface DrawerTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean,
}

const DrawerTrigger: FC<DrawerTriggerProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Dialog.Trigger
      data-ods="drawer-trigger"
      ref={ ref }
      { ...props }>
      { children }
    </Dialog.Trigger>
  );
});

DrawerTrigger.displayName = 'DrawerTrigger';

export {
  DrawerTrigger,
  type DrawerTriggerProp,
};
