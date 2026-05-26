import { type FC, type JSX, type PropsWithChildren, useState } from 'react';
import { Modal, type ModalOpenChangeDetail, type ModalProp } from '../../../../modal/src';
import { CommandProvider } from '../../contexts/useCommand';

interface CommandProp extends ModalProp {}

const Command: FC<PropsWithChildren<CommandProp>> = ({
  children,
  defaultOpen,
  onOpenChange,
  open: openProp,
  ...modalProps
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(openProp ?? defaultOpen ?? false);

  function handleOpenChange(detail: ModalOpenChangeDetail): void {
    setIsOpen(detail.open);
    onOpenChange?.(detail);
  }

  return (
    <CommandProvider open={ openProp ?? isOpen }>
      <Modal { ...modalProps } defaultOpen={ defaultOpen } onOpenChange={ handleOpenChange } open={ openProp }>
        { children }
      </Modal>
    </CommandProvider>
  );
};

Command.displayName = 'Command';

export {
  Command,
  type CommandProp,
};
