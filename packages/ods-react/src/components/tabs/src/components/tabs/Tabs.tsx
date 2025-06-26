import { Tabs as VendorTabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type Ref, forwardRef } from 'react';
import style from './tabs.module.scss';

interface TabsValueChangeEvent {
  value: string;
}

interface TabsProp extends ComponentPropsWithRef<'div'> {
  /**
   * The initial value of the selected tab. Use when you don't need to control the value of the tabs.
   */
  defaultValue?: string;
  /**
   * Callback fired when the state of selected tab changes.
   */
  onValueChange?: (event: TabsValueChangeEvent) => void;
  /**
   * The controlled value of the selected tab.
   */
  value?: string;
}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
  ...props
}, ref: Ref<HTMLDivElement>): JSX.Element => {

  return (
    <VendorTabs.Root
      className={ classNames(style['tabs'], className) }
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
