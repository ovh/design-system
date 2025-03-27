import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type FC, type JSX, type ReactNode } from 'react';
import style from './odsTabContent.module.scss';

// TODO
interface OdsTabContentProp {// extends ComponentPropsWithRef<'div'> {
  children: ReactNode,
  className?: string,
  value: string,
}

const OdsTabContent: FC<OdsTabContentProp> = ({
  children,
  className,
  value,
}): JSX.Element => {
  return (
    <Tabs.Content
      className={ classNames(style['ods-tab-content'], className) }
      value={ value }>
      { children }
    </Tabs.Content>
  );
};

export {
  OdsTabContent,
  type OdsTabContentProp,
};
