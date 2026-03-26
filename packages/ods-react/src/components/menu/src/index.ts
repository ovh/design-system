import { type MenuProp, Menu as MenuRoot } from './components/menu/Menu';
import { MenuContent, type MenuContentProp } from './components/menu-content/MenuContent';
import { MenuGroup, type MenuGroupProp } from './components/menu-group/MenuGroup';
import { MenuGroupLabel, type MenuGroupLabelProp } from './components/menu-group-label/MenuGroupLabel';
import { MenuItem, type MenuItemProp } from './components/menu-item/MenuItem';
import { MenuSubmenu, type MenuSubmenuProp } from './components/menu-submenu/MenuSubmenu';
import { MenuTrigger, type MenuTriggerProp } from './components/menu-trigger/MenuTrigger';

const Menu = Object.assign(MenuRoot, {
  Content: MenuContent,
  Group: MenuGroup,
  GroupLabel: MenuGroupLabel,
  Item: MenuItem,
  Submenu: MenuSubmenu,
  Trigger: MenuTrigger,
});

export { Menu };
export { MenuContent, MenuItem, MenuGroup, MenuGroupLabel, MenuSubmenu, MenuTrigger };
export type { MenuProp, MenuContentProp, MenuItemProp, MenuGroupProp, MenuGroupLabelProp, MenuSubmenuProp, MenuTriggerProp };
export { type MenuOpenChangeDetail, type MenuPositionChangeDetail } from './contexts/useMenu';
