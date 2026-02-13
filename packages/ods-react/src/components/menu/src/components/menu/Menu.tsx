import { Menu as VendorMenu } from '@ark-ui/react/menu';
import { type FC, type JSX, type PropsWithChildren } from 'react';
import { MenuProvider, type MenuRootProp } from '../../contexts/useMenu';

interface MenuProp extends MenuRootProp {}

const Menu: FC<PropsWithChildren<MenuProp>> = ({
  children,
  onOpenChange,
  onPositionChange,
  open,
  position,
  positionerStyle,
  triggerId,
  ...props
}): JSX.Element => {
  return (
    <MenuProvider
      onPositionChange={ onPositionChange }
      positionerStyle={ positionerStyle }>
      <VendorMenu.Root
        onOpenChange={ onOpenChange }
        open={ open }
        positioning={{
          placement: position,
        }}
        { ...props }>
        { children }
      </VendorMenu.Root>
    </MenuProvider>
  );
};

Menu.displayName = 'Menu';

export {
  Menu,
  type MenuProp,
};
