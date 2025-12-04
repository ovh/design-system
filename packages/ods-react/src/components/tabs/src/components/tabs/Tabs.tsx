import { Tabs as VendorTabs } from '@ark-ui/react/tabs';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect } from 'react';
import { TABS_SIZE } from '../../constants/tabs-size';
import { TABS_VARIANT } from '../../constants/tabs-variant';
import { TabsProvider, type TabsRootProp } from '../../contexts/useTabs';

interface TabsProp extends Omit<ComponentPropsWithRef<'div'>, 'defaultValue'>, TabsRootProp {}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onValueChange,
  size = TABS_SIZE.md,
  value,
  variant = TABS_VARIANT.default,
  withArrows,
  ...props
}, ref): JSX.Element => {
  useEffect(() => {
    if (!value && !defaultValue) {
      console.warn('No value or defaultValue provided. Please provide `defaultValue` or a controlled `value`');
    }
  }, [value, defaultValue]);

  return (
    <TabsProvider
      size={ size }
      variant={ variant }
      withArrows={ withArrows }>
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
