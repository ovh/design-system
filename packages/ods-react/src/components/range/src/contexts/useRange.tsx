import { type Dispatch, type JSX, type ReactNode, type SetStateAction, createContext, useContext, useState } from 'react';

type RangeTickCustomItem = { label: string, value: number };
type RangeTickItem = number | RangeTickCustomItem;

type RangePadding = {
  bottom: number,
  left: number,
  right: number,
}

interface RangeValueChangeDetail {
  value: number[],
}

interface RangeRootProp {
  /**
   * The aria-label of each slider thumb. Useful for providing an accessible name to the slider.
   */
  'aria-label'?: string[],
  /**
   * The id of the elements that labels each slider thumb. Useful for providing an accessible name to the slider.
   */
  'aria-labelledby'?: string[],
  /**
   * The initial selected value(s). Use when you don't need to control the value(s) of the range.
   */
  defaultValue?: number[],
  /**
   * Whether the component is disabled.
   */
  disabled?: boolean,
  /**
   * Whether the range bounds are displayed under the track.
   */
  displayBounds?: boolean,
  /**
   * Whether a tooltip with the current thumb value is displayed on drag.
   */
  displayTooltip?: boolean,
  /**
   * Whether the component is in error state.
   */
  invalid?: boolean,
  /**
   * The maximum value that can be selected.
   */
  max?: number,
  /**
   * The minimum value that can be selected.
   */
  min?: number,
  /**
   * The name of the form element. Useful for form submission.
   */
  name?: string,
  /**
   * Callback fired when the thumb moves.
   */
  onDragging?: (detail: RangeValueChangeDetail) => void,
  /**
   * Callback fired when the thumb is released.
   */
  onValueChange?: (detail: RangeValueChangeDetail) => void,
  /**
   * The amount to increment or decrement the value by.
   */
  step?: number,
  /**
   * List of tick indicators to display alongside the range.
   */
  ticks?: RangeTickItem[],
  /**
   * The controlled selected value(s).
   */
  value?: number[],
}

interface RangeProviderProp extends Pick<RangeRootProp, 'disabled'> {
  children: ReactNode;
}

type RangeContextType = Omit<RangeProviderProp, 'children'> & {
  rootPadding: RangePadding,
  setRootPadding: Dispatch<SetStateAction<RangePadding>>,
}

const RangeContext = createContext<RangeContextType | undefined>(undefined);

function RangeProvider({ children, disabled }: RangeProviderProp): JSX.Element {
  const [rootPadding, setRootPadding] = useState<RangePadding>({
    bottom: 0,
    left: 0,
    right: 0,
  });

  return (
    <RangeContext.Provider value={{
      disabled,
      rootPadding,
      setRootPadding,
    }}>
      { children }
    </RangeContext.Provider>
  );
}

function useRange(): RangeContextType {
  const context = useContext(RangeContext);

  if (!context) {
    throw new Error('useRange must be used within a RangeProvider');
  }

  return context;
}

export {
  RangeProvider,
  type RangeRootProp,
  type RangeTickCustomItem,
  type RangeTickItem,
  type RangeValueChangeDetail,
  useRange,
};
