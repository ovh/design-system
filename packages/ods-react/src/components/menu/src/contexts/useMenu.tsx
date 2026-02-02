import type { MenuPosition } from '../constants/menu-position';
import type { CSSProperties, JSX, ReactNode } from 'react';
import { createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface MenuOpenChangeDetail {
  open: boolean,
}

interface MenuPositionChangeDetail {
  /**  @type=MENU_POSITION */
  position: MenuPosition,
}

interface MenuRootProp {
  /**
   * Callback fired when the menu open state changes.
   */
  onOpenChange?: (detail: MenuOpenChangeDetail) => void,
  /**
   * Callback fired when the menu position changes.
   */
  onPositionChange?: (detail: MenuPositionChangeDetail) => void,
  /**
   * The controlled open state of the menu.
   */
  open?: boolean,
  /**
   * @type=MENU_POSITION
   * The menu position around the trigger.
   */
  position?: MenuPosition,
  /**
   * Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index.
   */
  positionerStyle?: CSSProperties,
  /**
   * ID of an external trigger element to use in place of the MenuTrigger component.
   */
  triggerId?: string,
}

interface MenuProviderProp extends MenuRootProp {
  children: ReactNode,
}

type MenuContextType = Omit<MenuProviderProp, 'children'> & {
  contentId?: string,
  setContentId: (id: string) => void,
  setTriggerId: (id: string) => void,
  triggerId?: string,
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

function MenuProvider({
  children,
  onPositionChange,
  positionerStyle,
}: MenuProviderProp): JSX.Element {
  const [contentId, setContentId] = useState<string>();
  const [triggerId, setTriggerId] = useState<string>();

  return (
    <MenuContext.Provider value={ {
      contentId,
      onPositionChange,
      positionerStyle,
      setContentId,
      setTriggerId,
      triggerId,
    } }>
      { children }
    </MenuContext.Provider>
  );
}

function useMenu(): MenuContextType {
  return useContext(MenuContext);
}

export {
  MenuContext,
  type MenuOpenChangeDetail,
  type MenuPositionChangeDetail,
  MenuProvider,
  type MenuRootProp,
  useMenu,
};
