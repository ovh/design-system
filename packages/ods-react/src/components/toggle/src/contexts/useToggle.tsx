import { type JSX, type ReactNode, createContext, useContext } from 'react';

interface ToggleCheckedChangeDetail {
  checked: boolean,
}

interface ToggleRootProp {
  /**
   * The controlled checked state of the toggle.
   */
  checked?: boolean;
  /**
   * The initial checked state of the toggle. Use when you don't need to control the checked state of the toggle.
   */
  defaultChecked?: boolean;
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean;
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string;
  /**
   * Callback fired when the checked state changes.
   */
  onCheckedChange?: (detail: ToggleCheckedChangeDetail) => void,
  /**
   * Whether the component is required.
   */
  required?: boolean;
  /**
   * The value of form element. Useful for form submission.
   */
  value?: string;
  /**
   * Whether the component displays "ON/OFF" labels.
   */
  withLabels?: boolean;
}

type ToggleContextType = Pick<ToggleRootProp, 'withLabels'>;

interface ToggleProviderProp extends ToggleContextType {
  children: ReactNode,
}

const ToggleContext = createContext<ToggleContextType>({});

function ToggleProvider({ children, withLabels }: ToggleProviderProp): JSX.Element {
  return (
    <ToggleContext.Provider value={{ withLabels }}>
      { children }
    </ToggleContext.Provider>
  );
}

function useToggle(): ToggleContextType {
  return useContext(ToggleContext);
}

export {
  type ToggleCheckedChangeDetail,
  type ToggleContextType,
  ToggleProvider,
  type ToggleProviderProp,
  type ToggleRootProp,
  useToggle,
};
