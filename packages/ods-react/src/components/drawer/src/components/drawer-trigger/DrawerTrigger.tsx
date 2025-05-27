import { Dialog } from '@ark-ui/react/dialog';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface DrawerTriggerProp extends ComponentPropsWithRef<'button'> {
  asChild?: boolean,
}

const DrawerTrigger: FC<DrawerTriggerProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <Dialog.Trigger
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
