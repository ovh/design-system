import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';

interface DrawerOpenChangeDetail {
  open: boolean,
}

interface DrawerProp {
  closeOnEscape?: boolean,
  closeOnInteractOutside?: boolean,
  defaultOpen?: boolean,
  onOpenChange?: (detail: DrawerOpenChangeDetail) => void
  open?: boolean,
}

const Drawer: FC<PropsWithChildren<DrawerProp>> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = false,
  defaultOpen,
  onOpenChange,
  open,
}): JSX.Element => {
  return (
    <Dialog.Root
      closeOnEscape={ closeOnEscape }
      closeOnInteractOutside={ closeOnInteractOutside }
      defaultOpen={ defaultOpen }
      modal={ false }
      onOpenChange={ onOpenChange }
      open={ open }
      preventScroll={ false }
      trapFocus={ false }>
      { children }
    </Dialog.Root>
  );
};

Drawer.displayName = 'Drawer';

export {
  Drawer,
  type DrawerOpenChangeDetail,
  type DrawerProp,
};
