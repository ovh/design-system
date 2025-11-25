import { Tabs, useTabsContext } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useTabs } from '../../contexts/useTabs';
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
  const { scrollContainerRef } = useTabs();
  const innerRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

  useEffect(() => {
    if (innerRef.current && focusedValue === value && scrollContainerRef?.current) {
      const element = innerRef.current;
      const parent = scrollContainerRef.current;

      const elementLeft = element.offsetLeft;
      const elementRight = elementLeft + element.offsetWidth;
      const parentScrollLeft = parent.scrollLeft;
      const parentWidth = parent.clientWidth;

      if (elementLeft < parentScrollLeft) {
        parent.scrollTo({ behavior: 'smooth', left: elementLeft });
      } else if (elementRight > parentScrollLeft + parentWidth) {
        parent.scrollTo({ behavior: 'smooth', left: elementRight - parentWidth });
      }
    }
  }, [focusedValue, value, scrollContainerRef]);

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
