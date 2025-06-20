import { Dialog } from '@ark-ui/react/dialog';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface ModalTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean,
}

const ModalTrigger: FC<ModalTriggerProp> = forwardRef(({
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

ModalTrigger.displayName = 'ModalTrigger';

export {
  ModalTrigger,
  type ModalTriggerProp,
};
