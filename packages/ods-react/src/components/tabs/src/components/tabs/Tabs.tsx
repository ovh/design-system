import { Tabs as VendorTabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type Ref, forwardRef } from 'react';
import style from './tabs.module.scss';

interface TabsChangeEvent {
  value: string;
}

interface TabsProp extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  defaultValue?: string;
  onChange?: (event: TabsChangeEvent) => void;
  value?: string;
}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onChange,
  value,
  ...props
}, ref: Ref<HTMLDivElement>): JSX.Element => {

  return (
    <VendorTabs.Root
      className={classNames(style['tabs'], className)}
      defaultValue={defaultValue}
      onValueChange={onChange}
      ref={ref}
      value={value}
      {...props}>
      {children}
    </VendorTabs.Root>
  );
});

Tabs.displayName = 'Tabs';

export {
  Tabs,
  type TabsChangeEvent,
  type TabsProp,
};
