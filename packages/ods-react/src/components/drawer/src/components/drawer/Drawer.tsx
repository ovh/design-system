import { Dialog } from '@ark-ui/react/dialog';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { DrawerProvider, type DrawerRootProp } from '../../contexts/useDrawer';

interface DrawerProp extends DrawerRootProp {}

const Drawer: FC<PropsWithChildren<DrawerProp>> = ({
  children,
  closeOnEscape = true,
  closeOnInteractOutside = false,
  defaultOpen,
  onOpenChange,
  open,
  positionerStyle,
}): JSX.Element => {
  return (
    <DrawerProvider positionerStyle={ positionerStyle }>
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
    </DrawerProvider>
  );
};

Drawer.displayName = 'Drawer';

export {
  Drawer,
  type DrawerProp,
};
