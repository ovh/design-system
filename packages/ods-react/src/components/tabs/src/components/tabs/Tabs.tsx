import { Tabs as VendorTabs } from '@ark-ui/react/tabs';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';

interface TabsValueChangeEvent {
  value: string,
}

interface TabsProp extends ComponentPropsWithRef<'div'> {
  /**
   * The initial value of the selected tab. Use when you don't need to control the value of the tabs.
   */
  defaultValue?: string,
  /**
   * Callback fired when the state of selected tab changes.
   */
  onValueChange?: (event: TabsValueChangeEvent) => void,
  /**
   * The controlled value of the selected tab.
   */
  value?: string,
}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <VendorTabs.Root
      className={ className }
      data-ods="tabs"
      defaultValue={ defaultValue }
      onValueChange={ onValueChange }
      ref={ ref }
      value={ value }
      { ...props }>
      { children }
    </VendorTabs.Root>
  );
});

Tabs.displayName = 'Tabs';

export {
  Tabs,
  type TabsProp,
  type TabsValueChangeEvent,
};
