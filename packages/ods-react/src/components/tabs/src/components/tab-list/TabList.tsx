import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './tabList.module.scss';

interface TabListProp extends ComponentPropsWithRef<'div'> {}

const TabList: FC<TabListProp> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <Tabs.List
      className={ classNames(style['tab-list'], className) }
      data-ods="tab-list"
      { ...props }>
      { children }
    </Tabs.List>
  );
};

export {
  TabList,
  type TabListProp,
};
