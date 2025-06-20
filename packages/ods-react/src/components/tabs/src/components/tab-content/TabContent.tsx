import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './tabContent.module.scss';

interface TabContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * The value of the tab content item.
   */
  value: string,
}

const TabContent: FC<TabContentProp> = ({
  children,
  className,
  value,
  ...props
}): JSX.Element => {
  return (
    <Tabs.Content
      className={ classNames(style['tab-content'], className) }
      value={ value }
      { ...props }>
      { children }
    </Tabs.Content>
  );
};

export {
  TabContent,
  type TabContentProp,
};
