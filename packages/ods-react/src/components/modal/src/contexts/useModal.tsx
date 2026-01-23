import { type CSSProperties, type JSX, type ReactNode, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type MODAL_I18N } from '../constants/modal-i18n';

interface ModalOpenChangeDetail {
  open: boolean,
}

interface ModalRootProp {
  /**
   * Custom style applied to the modal backdrop. Useful if you want to override the backdrop z-index.
   */
  backdropStyle?: CSSProperties;
  /**
   * Whether to close the modal when the escape key is pressed.
   */
  closeOnEscape?: boolean,
  /**
   * Whether to close the modal when the outside is clicked.
   */
  closeOnInteractOutside?: boolean,
  /**
   * The initial open state of the modal. Use when you don't need to control the open state of the modal.
   */
  defaultOpen?: boolean,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<MODAL_I18N, string>>,
  /**
   * Element that receive the focus when the dialog is opened.
   */
  initialFocusedElement?: () => HTMLElement | null;
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the modal open state changes.
   */
  onOpenChange?: (detail: ModalOpenChangeDetail) => void
  /**
   * The controlled open state of the modal.
   */
  open?: boolean,
  /**
   * Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index.
   */
  positionerStyle?: CSSProperties,
}

interface ModalProviderProp extends Pick<ModalRootProp, 'backdropStyle' | 'i18n' | 'locale' | 'positionerStyle'> {
  children: ReactNode,
}

type ModalContextType = Omit<ModalProviderProp, 'children'> & {
  dismissible?: boolean,
  hasHeader: boolean,
  setDismissible?: (value: boolean | undefined) => void,
  setHasHeader?: (value: boolean) => void,
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function ModalProvider({
  backdropStyle,
  children,
  i18n,
  locale,
  positionerStyle,
}: ModalProviderProp): JSX.Element {
  const [dismissible, setDismissible] = useState<boolean | undefined>(undefined);
  const [hasHeader, setHasHeader] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{
      backdropStyle,
      dismissible,
      hasHeader,
      i18n,
      locale,
      positionerStyle,
      setDismissible,
      setHasHeader,
    }}>
      { children }
    </ModalContext.Provider>
  );
}

function useModal(): ModalContextType {
  return useContext(ModalContext);
}

export {
  type ModalContextType,
  type ModalOpenChangeDetail,
  ModalProvider,
  type ModalRootProp,
  useModal,
};
