import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './tab.module.scss';

interface TabProp extends ComponentPropsWithRef<'button'> {
  /**
   * The value of the tab item.
   */
  value: string,
}

const Tab: FC<TabProp> = forwardRef(({
  children,
  className,
  value,
  ...props
}, ref): JSX.Element => {
  return (
    <Tabs.Trigger
      className={ classNames(style['tab'], className) }
      data-ods="tab"
      ref={ ref }
      value={ value }
      { ...props }>
      { children }
    </Tabs.Trigger>
  );
});

export {
  Tab,
  type TabProp,
};
