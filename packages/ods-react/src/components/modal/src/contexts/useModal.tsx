import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type MODAL_I18N } from '../constants/modal-i18n';

interface ModalOpenChangeDetail {
  open: boolean,
}

interface ModalRootProp {
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
}

type ModalContextType = Pick<ModalRootProp, 'i18n' | 'locale'>

interface ModalProviderProp extends ModalContextType {
  children: ReactNode,
}

const ModalContext = createContext<ModalContextType>({});

function ModalProvider({ children, i18n, locale }: ModalProviderProp): JSX.Element {
  return (
    <ModalContext.Provider value={{
      i18n,
      locale,
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
