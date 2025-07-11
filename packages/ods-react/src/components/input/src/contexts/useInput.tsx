import { type JSX, type ReactNode, createContext, useContext } from 'react';
import { type Locale } from '../../../../utils/locales';
import { type InputMaskState } from '../constants/input-mask-state';
import { type InputType } from '../constants/input-type';

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
   * Internal translations override.
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
   * The locale used for the translation of the internal elements.
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
  /**
   * The input type.
   */
  type?: InputType,
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

export {
  type InputContextType,
  type InputProviderProp,
  type InputRootProp,
  InputProvider,
  useInput,
};
