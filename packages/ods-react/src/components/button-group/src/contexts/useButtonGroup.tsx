import { type ComponentPropsWithRef, type JSX, type ReactNode, createContext, useContext } from 'react';
import { type ButtonGroupSize } from '../constants/button-group-size';

interface ButtonGroupValueChangeDetail {
  value: string[],
}

type ButtonGroupRootProp = ComponentPropsWithRef<'div'> & {
  /**
   * The initial value of the selected items. Use when you don't need to control the value of the component.
   */
  defaultValue?: string[];
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean;
  /**
   * Whether multiple items can be selected at the same time.
   */
  multiple?: boolean;
  /**
   * Callback fired when the selection changes.
   */
  onValueChange?: (detail: ButtonGroupValueChangeDetail) => void;
  /**
   * The size preset to use.
   */
  size?: ButtonGroupSize,
  /**
   * The controlled value of the selected items.
   */
  value?: string[];
};

interface ButtonGroupProviderProp extends ButtonGroupRootProp {
  children: ReactNode;
}

type ButtonGroupContextType = Omit<ButtonGroupProviderProp, 'children'>;

const ButtonGroupContext = createContext<ButtonGroupContextType | undefined>(undefined);

const ButtonGroupProvider = ({
  children,
  size,
}: ButtonGroupProviderProp): JSX.Element => {
  return (
    <ButtonGroupContext.Provider value={{
      size,
    }}>
      { children }
    </ButtonGroupContext.Provider>
  );
};

function useButtonGroup(): ButtonGroupContextType {
  const context = useContext(ButtonGroupContext);

  if (!context) {
    throw new Error('useButtonGroup must be used within a ButtonGroupProvider');
  }

  return context;
}

export {
  ButtonGroupProvider,
  type ButtonGroupRootProp,
  type ButtonGroupValueChangeDetail,
  useButtonGroup,
};
