import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../../../input/src';

interface ClipboardRootProp {
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Internal translations override (see Input i18n keys).
   */
  i18n?: Partial<Record<INPUT_I18N.maskButtonHide | INPUT_I18N.maskButtonShow, string>>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Callback fired when the input value is copied.
   */
  onCopy?: () => void,
  /**
   * The input value.
   */
  value?: string,
}

type ClipboardContextType = Pick<ClipboardRootProp, 'disabled' | 'i18n' | 'locale'>;

interface ClipboardProviderProp extends ClipboardContextType {
  children: ReactNode,
}

const ClipboardContext = createContext<ClipboardContextType>({});

function ClipboardProvider({ children, disabled, i18n, locale }: ClipboardProviderProp): JSX.Element {
  return (
    <ClipboardContext.Provider value={{
      disabled,
      i18n,
      locale,
    }}>
      { children }
    </ClipboardContext.Provider>
  );
}

function useClipboard(): ClipboardContextType {
  return useContext(ClipboardContext);
}

export {
  ClipboardProvider,
  type ClipboardRootProp,
  useClipboard,
};
