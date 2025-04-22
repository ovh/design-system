import { Tabs as ArkTabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, type Ref, forwardRef } from 'react';
import style from './tabs.module.scss';

export interface TabsChangeEvent {
  value: string;
}

export interface TabsProp extends Omit<ComponentPropsWithRef<'div'>, 'onChange'> {
  defaultValue?: string;
  onChange?: (event: TabsChangeEvent) => void;
}

const Tabs: FC<TabsProp> = forwardRef(({
  children,
  className,
  defaultValue,
  onChange,
  ...props
}, ref: Ref<HTMLDivElement>): JSX.Element => {

  return (
    <ArkTabs.Root
      defaultValue={defaultValue}
      onValueChange={onChange}
      className={classNames(style['tabs'], className)}
      ref={ref}
      {...props}>
      {children}
    </ArkTabs.Root>
  );
});

Tabs.displayName = 'Tabs';

export {
  Tabs,
};
