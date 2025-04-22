import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './tabList.module.scss';

export interface TabListProp extends ComponentPropsWithRef<'div'> {
  className?: string,
}

const TabList: FC<TabListProp> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <Tabs.List
      className={ classNames(style['tab-list'], className) }
      { ...props }>
      { children }
    </Tabs.List>
  );
};

export {
  TabList,
};