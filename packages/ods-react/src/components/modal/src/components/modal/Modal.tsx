import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { ModalProvider, type ModalRootProp } from '../../contexts/useModal';

interface ModalProp extends ModalRootProp {}

const Modal: FC<PropsWithChildren<ModalProp>> = ({
  backdropStyle,
  children,
  closeOnEscape = true,
  closeOnInteractOutside = true,
  defaultOpen,
  i18n,
  initialFocusedElement,
  locale,
  onOpenChange,
  open,
  positionerStyle,
  ...props
}): JSX.Element => {
  return (
    <ModalProvider
      backdropStyle={ backdropStyle }
      i18n={ i18n }
      locale={ locale }
      positionerStyle={ positionerStyle }>
      <Dialog.Root
        closeOnEscape={ closeOnEscape }
        closeOnInteractOutside={ closeOnInteractOutside }
        defaultOpen={ defaultOpen }
        initialFocusEl={ initialFocusedElement }
        onOpenChange={ onOpenChange }
        open={ open }
        { ...props }>
        { children }
      </Dialog.Root>
    </ModalProvider>
  );
};

Modal.displayName = 'Modal';

export {
  Modal,
  type ModalProp,
};
