import { Tabs, useTabsContext } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
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
  const { focusedValue } = useTabsContext();
  const innerRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

  useEffect(() => {
    if (innerRef.current && focusedValue === value) {
      innerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [focusedValue, value]);

  return (
    <Tabs.Trigger
      className={ classNames(style['tab'], className) }
      data-ods="tab"
      ref={ innerRef }
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
