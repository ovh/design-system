import { type JSX, type ReactNode, createContext } from 'react';
import { useContext } from '../../../../utils/context';
import { type Locale } from '../../../../utils/locales';
import { type INPUT_I18N } from '../constants/input-i18n';
import { type InputMaskState } from '../constants/input-mask-state';
import { type InputType } from '../constants/input-type';

interface InputRootProp {
  /**
   * Whether the clear button is displayed.
   */
  clearable?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<INPUT_I18N, string>>,
  /**
   * Whether the component is in loading state.
   */
  loading?: boolean,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
  /**
   * Whether the masked display is active and its initial state.
   */
  maskOption?: {
    enable: boolean,
    initialState?: InputMaskState,
  },
  /**
   * Callback fired when the input value is cleared.
   */
  onClear?: () => void,
  /**
   * The input type.
   */
  type?: InputType,
}

interface InputProviderProp extends Pick<InputRootProp, 'i18n' | 'locale'> {
  children: ReactNode,
}

type InputContextType = Omit<InputProviderProp, 'children'>;

const InputContext = createContext<InputContextType | undefined>(undefined);

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
