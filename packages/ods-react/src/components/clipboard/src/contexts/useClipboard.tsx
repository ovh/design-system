import { type CSSProperties, type JSX, type ReactNode, createContext } from 'react';
import { useContext } from '../../../../utils/context';
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
   * Custom style applied to the overlay positioner. Useful if you want to override the overlay z-index.
   */
  positionerStyle?: CSSProperties,
  /**
   * The input value.
   */
  value?: string,
}

interface ClipboardProviderProp extends Pick<ClipboardRootProp, 'disabled' | 'i18n' | 'locale' | 'positionerStyle'> {
  children: ReactNode,
}

type ClipboardContextType = Omit<ClipboardProviderProp, 'children'>;

const ClipboardContext = createContext<ClipboardContextType | undefined>(undefined);

function ClipboardProvider({
  children,
  disabled,
  i18n,
  locale,
  positionerStyle,
}: ClipboardProviderProp): JSX.Element {
  return (
    <ClipboardContext.Provider value={{
      disabled,
      i18n,
      locale,
      positionerStyle,
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
