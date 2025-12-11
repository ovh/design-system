import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from '../../../../../utils/debounce';
import { BUTTON_VARIANT, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { useTabs } from '../../contexts/useTabs';
import style from './tabList.module.scss';

interface TabListProp extends ComponentPropsWithRef<'div'> {}

const TabList: FC<TabListProp> = forwardRef(({
  children,
  className,
  ...props
}, ref): JSX.Element => {
  const { setScrollContainerRef, size, variant, withArrows } = useTabs();
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (setScrollContainerRef) {
      setScrollContainerRef(scrollRef);
    }
  }, [setScrollContainerRef]);

  const updateScrollButtonState = useCallback(() => {
    setIsLeftButtonDisabled(scrollRef.current ? scrollRef.current.scrollLeft === 0 : false);
    setIsRightButtonDisabled(scrollRef.current ? Math.ceil(scrollRef.current.scrollLeft) >= scrollRef.current.scrollWidth - scrollRef.current.offsetWidth : false);
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
    <div
      className={ classNames(
        style['tab-list'],
        className,
      )}
      data-ods="tab-list"
      ref={ ref }
      { ...props }>
      {
        withArrows &&
        <div className={ classNames(
          style['tab-list__left-arrow'],
          style[`tab-list__left-arrow--${size}`],
          { [style['tab-list__left-arrow--active']]: !isLeftButtonDisabled },
        )}>
          <Button
            disabled={ isLeftButtonDisabled }
            onClick={ onLeftScrollClick }
            size={ size }
            tabIndex={ -1 }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronLeft } />
          </Button>
        </div>
      }

      <div
        className={ classNames(
          style['tab-list__container'],
          style[`tab-list__container--${size}`],
          style[`tab-list__container--${variant}`],
        )}
        onScroll={ debouncedUpdateScrollButtonState }
        ref={ scrollRef }
        tabIndex={ -1 }>
        <Tabs.List className={ style['tab-list__container__tabs'] }>
          { children }
        </Tabs.List>
      </div>

      {
        withArrows &&
        <div className={ classNames(
          style['tab-list__right-arrow'],
          style[`tab-list__right-arrow--${size}`],
          { [style['tab-list__right-arrow--active']]: !isRightButtonDisabled },
        )}>
          <Button
            disabled={ isRightButtonDisabled }
            onClick={ onRightScrollClick }
            size={ size }
            tabIndex={ -1 }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.chevronRight } />
          </Button>
        </div>
      }
    </div>
  );
});

export {
  TabList,
  type TabListProp,
};
