import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './tabContent.module.scss';

interface TabContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * The value of the tab content item.
   */
  value: string,
}

const TabContent: FC<TabContentProp> = forwardRef(({
  children,
  className,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <Tabs.Content
      className={ classNames(style['tab-content'], className) }
      data-ods="tab-content"
      ref={ ref }
      value={ value }
      { ...props }>
      { children }
    </Tabs.Content>
  );
});

export {
  TabContent,
  type TabContentProp,
};
