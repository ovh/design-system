import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX } from 'react';
import style from './tab.module.scss';

export interface TabProp extends ComponentPropsWithRef<'button'> {
  value: string,
}

const Tab: FC<TabProp> = ({
  children,
  className,
  disabled,
  value,
  ...props
}): JSX.Element => {
  return (
    <Tabs.Trigger
      className={ classNames(style['tab'], className) }
      disabled={ disabled }
      value={ value }
      { ...props }>
      { children }
    </Tabs.Trigger>
  );
};

export {
  Tab,
};