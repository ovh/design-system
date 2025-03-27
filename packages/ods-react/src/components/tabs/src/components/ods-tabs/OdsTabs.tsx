import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type FC, type JSX, type ReactNode } from 'react';
import style from './odsTabs.module.scss';

// TODO
interface OdsTabsProp {// extends ComponentPropsWithRef<'div'> {
  children: ReactNode,
  className?: string,
  defaultValue?: string,
}

const OdsTabs: FC<OdsTabsProp> = ({
  children,
  className,
  defaultValue,
}): JSX.Element => {
  return (
    <Tabs.Root
      className={ classNames(style['ods-tabs'], className) }
      defaultValue={ defaultValue }>
      { children }
    </Tabs.Root>
  );
};

export {
  OdsTabs,
  type OdsTabsProp,
};
