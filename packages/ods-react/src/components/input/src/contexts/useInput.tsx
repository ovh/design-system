import type { Locale } from '../../../../utils/locales';
import type { InputMaskState } from '../constants/input-mask-state';
import { type JSX, type ReactNode, createContext, useContext } from 'react';

interface InputRootProp {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Custom aria-label for the clear button.
   */
  clearButtonAriaLabel?: string,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * Custom i18n labels.
   */
  i18n?: Record<string, string>,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * Whether the masked display is active and its initial state.
   */
  maskOption?: {
    enable: boolean,
    initialState?: InputMaskState,
  },
  /**
   * Custom aria-label for the mask toggle button.
   */
  maskButtonAriaLabel?: string,
  /**
   * Locale for i18n labels.
   */
  locale?: Locale,
  /**
   * Callback fired when the input value is cleared.
   */
  onClear?: () => void,
  /**
   * Custom aria-label for the search button.
   */
  searchButtonAriaLabel?: string,
  // 'type' retiré pour éviter le conflit avec les props HTML
}

type InputContextType = Pick<InputRootProp, 'i18n' | 'locale'>;

interface InputProviderProp extends InputContextType {
  children: ReactNode,
}

const InputContext = createContext<InputContextType>({});

function InputProvider({ children, i18n, locale }: InputProviderProp): JSX.Element {
  return (
    <InputContext.Provider value={{
      i18n,
      locale,
    }}>
      { children }
    </InputContext.Provider>
  );
}

function useInput(): InputContextType {
  return useContext(InputContext);
}

interface InputActionsProps {
  /**
   * Whether the loading spinner is shown.
   */
  loading: boolean;
  /**
   * Whether the clear button is visible.
   */
  hasClearButton: boolean;
  /**
   * Whether the search button is visible.
   */
  hasSearchButton: boolean;
  /**
   * Whether the mask toggle icon is visible.
   */
  hasToggleMaskIcon: boolean;
  /**
   * The id of the input field controlled by the actions.
   */
  inputId?: string;
  /**
   * Whether the mask is currently open (for password fields).
   */
  isMaskOpen: boolean;
  /**
   * Callback fired when the clear button is clicked.
   */
  onClearClick: () => void;
  /**
   * Callback fired when the mask toggle is clicked.
   */
  onToggleMask: () => void;
  /**
   * Whether the input is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the input is read-only.
   */
  readOnly?: boolean;
}

export {
  type InputContextType,
  type InputProviderProp,
  type InputRootProp,
  type InputActionsProps,
  InputProvider,
  useInput,
};
