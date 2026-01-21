import { type DrawerOpenChangeDetail, type DrawerProp, Drawer as DrawerRoot } from './components/drawer/Drawer';
import { DrawerBody, type DrawerBodyProp } from './components/drawer-body/DrawerBody';
import { DrawerContent, type DrawerContentProp } from './components/drawer-content/DrawerContent';
import { DrawerTrigger, type DrawerTriggerProp } from './components/drawer-trigger/DrawerTrigger';

const Drawer = {
  Body: DrawerBody,
  Content: DrawerContent,
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
};

export { Drawer };
export type { DrawerProp, DrawerOpenChangeDetail, DrawerBodyProp, DrawerContentProp, DrawerTriggerProp };
export { type DrawerPosition, DRAWER_POSITIONS, DRAWER_POSITION } from './constants/drawer-position';
