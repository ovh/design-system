import { type CSSProperties, type JSX, type ReactNode, createContext } from 'react';
import { useContext } from '../../../../utils/context';

interface DrawerOpenChangeDetail {
  open: boolean,
}

interface DrawerRootProp {
  /**
   * Whether a backdrop is displayed. With a backdrop, the drawer behaves as a modal: focus is trapped, the rest of the page is inert and its scroll is locked.
   */
  backdrop?: boolean;
  /**
   * Custom style applied to the drawer backdrop. Useful if you want to override the backdrop z-index.
   */
  backdropStyle?: CSSProperties;
  /**
   * Whether to close the drawer when the escape key is pressed.
   */
  closeOnEscape?: boolean,
  /**
   * Whether to close the drawer when the user clicks or moves the focus outside of it. Defaults to true when a backdrop is displayed, false otherwise.
   */
  closeOnInteractOutside?: boolean,
  /**
   * The initial open state of the drawer. Use when you don't need to control the open state of the drawer.
   */
  defaultOpen?: boolean,
  /**
   * Callback fired when the drawer open state changes.
   */
  onOpenChange?: (detail: DrawerOpenChangeDetail) => void
  /**
   * The controlled open state of the drawer.
   */
  open?: boolean,
  /**
   * Custom style applied to the overlay positioner.
   */
  positionerStyle?: CSSProperties,
}

interface DrawerProviderProp extends Pick<DrawerRootProp, 'backdrop' | 'backdropStyle' | 'positionerStyle'> {
  children: ReactNode,
}

type DrawerContextType = Omit<DrawerProviderProp, 'children'>;

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

function DrawerProvider({
  backdrop,
  backdropStyle,
  children,
  positionerStyle,
}: DrawerProviderProp): JSX.Element {
  return (
    <DrawerContext.Provider value={{
      backdrop,
      backdropStyle,
      positionerStyle,
    }}>
      { children }
    </DrawerContext.Provider>
  );
}

function useDrawer(): DrawerContextType {
  return useContext(DrawerContext);
}

export {
  type DrawerContextType,
  type DrawerOpenChangeDetail,
  DrawerProvider,
  type DrawerRootProp,
  useDrawer,
};
