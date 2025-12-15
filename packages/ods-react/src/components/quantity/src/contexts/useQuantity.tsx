import { type JSX, type ReactNode, createContext, useState } from 'react';
import { useContext } from '../../../../utils/context';

interface QuantityValueChangeDetail {
  value: string;
  valueAsNumber: number;
}

interface QuantityRootProp {
  /**
   * The initial quantity value. Use when you don't need to control the value of the quantity.
   */
  defaultValue?: string,
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The maximum quantity that can be selected.
   */
  max?: number,
  /**
   * The minimum quantity that can be selected.
   */
  min?: number,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the value changes.
   */
  onValueChange?: (detail: QuantityValueChangeDetail) => void,
  /**
   * Whether the component is readonly.
   */
  readOnly?: boolean,
  /**
   * Whether the component is required.
   */
  required?: boolean,
  /**
   * The amount to increment or decrement the value by.
   */
  step?: number,
  /**
   * The controlled quantity value.
   */
  value?: string,
}

interface QuantityProviderProp {
  children: ReactNode,
}

type QuantityContextType = Omit<QuantityProviderProp, 'children'> & {
  inputId?: string,
  setInputId: (value?: string) => void,
};

const QuantityContext = createContext<QuantityContextType | undefined>(undefined);

function QuantityProvider({
  children,
}: QuantityProviderProp): JSX.Element {
  const [inputId, setInputId] = useState<string>();

  return (
    <QuantityContext.Provider value={{
      inputId,
      setInputId,
    }}>
      { children }
    </QuantityContext.Provider>
  );
}

function useQuantity(): QuantityContextType {
  return useContext(QuantityContext);
}

export {
  QuantityProvider,
  type QuantityRootProp,
  type QuantityValueChangeDetail,
  useQuantity,
};
