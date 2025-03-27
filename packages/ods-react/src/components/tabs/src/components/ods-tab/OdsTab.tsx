import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type FC, type JSX, type ReactNode } from 'react';
import style from './odsTab.module.scss';

// TODO
interface OdsTabProp {// extends ComponentPropsWithRef<'div'> {
  children: ReactNode,
  className?: string,
  disabled?: boolean,
  value: string,
}

const OdsTab: FC<OdsTabProp> = ({
  children,
  className,
  disabled,
  value,
}): JSX.Element => {
  return (
    <Tabs.Trigger
      className={ classNames(style['ods-tab'], className) }
      disabled={ disabled }
      value={ value }>
      { children }
    </Tabs.Trigger>
  );
};

export {
  OdsTab,
  type OdsTabProp,
};
