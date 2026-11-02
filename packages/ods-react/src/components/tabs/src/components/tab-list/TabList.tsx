import { Tabs } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useI18n } from '../../../../../hooks/useI18n';
import { debounce } from '../../../../../utils/debounce';
import { type Locale } from '../../../../../utils/locales';
import { BUTTON_EMPHASIS, Button } from '../../../../button/src';
import { ICON_NAME, Icon } from '../../../../icon/src';
import { TABS_I18N, TRANSLATION } from '../../constants/tabs-i18n';
import { useTabs } from '../../contexts/useTabs';
import style from './tabList.module.scss';

interface TabListProp extends ComponentPropsWithRef<'div'> {
  /**
   * Internal translations override.
   */
  i18n?: Partial<Record<TABS_I18N, string>>,
  /**
   * The locale used for the translation of the internal elements.
   */
  locale?: Locale,
}

const TabList: FC<TabListProp> = forwardRef(({
  children,
  className,
  i18n,
  locale,
  ...props
}, ref): JSX.Element => {
  const { setScrollContainerRef, size, variant, withArrows } = useTabs();
  const { translate } = useI18n(TRANSLATION, locale, i18n);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScrollContainerRef(scrollRef);
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

      return (): void => {
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
            aria-label={ translate(TABS_I18N.scrollLeftButton) }
            disabled={ isLeftButtonDisabled }
            emphasis={ BUTTON_EMPHASIS.low }
            onClick={ onLeftScrollClick }
            size={ size }
            tabIndex={ -1 }>
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
            aria-label={ translate(TABS_I18N.scrollRightButton) }
            disabled={ isRightButtonDisabled }
            emphasis={ BUTTON_EMPHASIS.low }
            onClick={ onRightScrollClick }
            size={ size }
            tabIndex={ -1 }>
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
