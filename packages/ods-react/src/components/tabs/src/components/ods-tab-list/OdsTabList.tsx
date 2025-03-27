import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type FC, type JSX, type ReactNode } from 'react';
import style from './odsTabList.module.scss';

// TODO
interface OdsTabListProp {// extends ComponentPropsWithRef<'div'> {
  children: ReactNode,
  className?: string,
}

const OdsTabList: FC<OdsTabListProp> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <Tabs.List className={ classNames(style['ods-tab-list'], className) }>
      { children }
    </Tabs.List>
  );
};

export {
  OdsTabList,
  type OdsTabListProp,
};
