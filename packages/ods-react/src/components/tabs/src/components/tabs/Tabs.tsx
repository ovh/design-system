import { Tabs as VendorTabs } from '@ark-ui/react/tabs';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import { TabsProvider, type TabsRootProp } from '../../contexts/useTabs';

/**
 * @inheritDoc TabsRootProp
 */
interface TabsProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, TabsRootProp {}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
  withArrows,
  ...props
}, ref): JSX.Element => {
  return (
    <TabsProvider withArrows={ withArrows }>
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
    </TabsProvider>
  );
});

Tabs.displayName = 'Tabs';

export {
  Tabs,
  type TabsProp,
};
