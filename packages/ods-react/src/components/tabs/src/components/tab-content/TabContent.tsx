import { Tabs, useTabsContext } from '@ark-ui/react/tabs';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef, useState } from 'react';
import { MOUNT_STRATEGY, shouldRenderContent } from '../../../../../utils/mount-strategy';
import { type TabsMountStrategy } from '../../constants/tabs-mount-strategy';
import { useTabs } from '../../contexts/useTabs';
import style from './tabContent.module.scss';

interface TabContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * @type=TABS_MOUNT_STRATEGY
   * When the content of this panel is rendered while it is inactive. Overrides the Tabs mountStrategy for this panel only.
   * SEO: with 'lazy' or 'unmount', the content of this panel is in the server-rendered HTML only if it is the selected one.
   */
  mountStrategy?: TabsMountStrategy,
  /**
   * The value of the tab content item.
   */
  value: string,
}

const TabContent: FC<TabContentProp> = forwardRef(({
  children,
  className,
  mountStrategy,
  value,
  ...props
}, ref): JSX.Element => {
  const { mountStrategy: rootMountStrategy } = useTabs();
  const { value: selectedValue } = useTabsContext();
  const isSelected = selectedValue === value;
  // State (not a ref) updated during render: React discards it with an abandoned render, so a
  // transition to this panel that never commits (e.g. it suspends, then the user goes back) does
  // not mark it as shown, while a panel selected on first render (SSR included) shows its content
  // in the same pass.
  const [wasSelected, setWasSelected] = useState(isSelected);

  if (isSelected && !wasSelected) {
    setWasSelected(true);
  }

  const strategy = mountStrategy ?? rootMountStrategy ?? MOUNT_STRATEGY.keep;

  return (
    // Only the children are gated: Ark's lazyMount/unmountOnExit would remove the whole panel,
    // breaking its id and the aria-controls of its Tab.
    <Tabs.Content
      className={ classNames(style['tab-content'], className) }
      data-ods="tab-content"
      ref={ ref }
      value={ value }
      { ...props }>
      { shouldRenderContent(strategy, isSelected, wasSelected || isSelected) && children }
    </Tabs.Content>
  );
});

export {
  TabContent,
  type TabContentProp,
};
