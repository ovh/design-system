import { type FC, type JSX, forwardRef } from 'react';
import { ModalTrigger, type ModalTriggerProp } from '../../../../modal/src';

interface CommandTriggerProp extends ModalTriggerProp {}

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
