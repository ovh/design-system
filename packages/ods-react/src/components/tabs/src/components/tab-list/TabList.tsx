import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from '../../../../../utils/debounce';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useTabs } from '../../contexts/useTabs';
import style from './tabList.module.scss';

interface TabListProp extends ComponentPropsWithRef<'div'> {}

const TabList: FC<TabListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { withArrows } = useTabs();
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const updateScrollButtonState = useCallback(() => {
    setIsLeftButtonDisabled(scrollRef.current ? scrollRef.current.scrollLeft === 0 : false);
    setIsRightButtonDisabled(scrollRef.current ? scrollRef.current.scrollLeft === scrollRef.current.scrollWidth - scrollRef.current.offsetWidth : false);
  }, []);

  const debouncedUpdateScrollButtonState = useMemo(() => {
    return debounce(updateScrollButtonState, 50);
  }, [updateScrollButtonState]);

  useEffect(() => {
    updateScrollButtonState();

    if (scrollRef.current) {
      const observer = new ResizeObserver(() => {
        updateScrollButtonState();
      });

      observer.observe(scrollRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [updateScrollButtonState]);

  function scroll(left: number): void {
    scrollRef.current?.scrollBy({
      behavior: 'smooth',
      left,
    });
  }

  function onLeftScrollClick(): void {
    if (!scrollRef.current) {
      return;
    }
    scroll(-scrollRef.current.offsetWidth);
  }

  function onRightScrollClick(): void {
    if (!scrollRef.current) {
      return;
    }
    scroll(scrollRef.current.offsetWidth);
  }

  return (
    <Tabs.List
      className={ classNames(style['tab-list'], className) }
      data-ods="tab-list"
      ref={ ref }
      { ...props }>
      {
        withArrows &&
        <div className={ classNames(
          style['tab-list__left-arrow'],
          { [style['tab-list__left-arrow--active']]: !isLeftButtonDisabled },
        )}>
          <Button
            disabled={ isLeftButtonDisabled }
            onClick={ onLeftScrollClick }
            size={ BUTTON_SIZE.xs }
            tabIndex={ -1 }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronLeft } />
          </Button>
        </div>
      }

      <div
        className={ style['tab-list__container'] }
        onScroll={ debouncedUpdateScrollButtonState }
        ref={ scrollRef }
        tabIndex={ -1 }>
        <div className={ style['tab-list__container__tabs'] }>
          { children }
        </div>
      </div>

      {
        withArrows &&
        <div className={ classNames(
          style['tab-list__right-arrow'],
          { [style['tab-list__right-arrow--active']]: !isRightButtonDisabled },
        )}>
          <Button
            disabled={ isRightButtonDisabled }
            onClick={ onRightScrollClick }
            size={ BUTTON_SIZE.xs }
            tabIndex={ -1 }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronRight } />
          </Button>
        </div>
      }
    </Tabs.List>
  );
});

export {
  TabList,
  type TabListProp,
};
