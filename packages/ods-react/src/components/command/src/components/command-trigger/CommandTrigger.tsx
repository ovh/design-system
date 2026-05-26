import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { ModalTrigger } from '../../../../modal/src';

interface CommandTriggerProp extends ComponentPropsWithRef<'button'> {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   * Be careful to pass an actual Node, not a Fragment.
   */
  asChild?: boolean;
}

const CommandTrigger: FC<CommandTriggerProp> = forwardRef(({
  children,
  ...props
}, ref): JSX.Element => {
  return (
    <ModalTrigger
      data-ods="command-trigger"
      ref={ ref }
      { ...props }>
      { children }
    </ModalTrigger>
  );
});

CommandTrigger.displayName = 'CommandTrigger';

export {
  CommandTrigger,
  type CommandTriggerProp,
};
