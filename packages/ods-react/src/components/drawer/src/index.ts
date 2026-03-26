import { type DrawerProp, Drawer as DrawerRoot } from './components/drawer/Drawer';
import { DrawerBody, type DrawerBodyProp } from './components/drawer-body/DrawerBody';
import { DrawerContent, type DrawerContentProp } from './components/drawer-content/DrawerContent';
import { DrawerTrigger, type DrawerTriggerProp } from './components/drawer-trigger/DrawerTrigger';

const Drawer = Object.assign(DrawerRoot, {
  Body: DrawerBody,
  Content: DrawerContent,
  Trigger: DrawerTrigger,
});

export { Drawer };
export { DrawerBody, DrawerContent, DrawerTrigger };
export type { DrawerProp, DrawerBodyProp, DrawerContentProp, DrawerTriggerProp };
export { type DrawerPosition, DRAWER_POSITIONS, DRAWER_POSITION } from './constants/drawer-position';
export { type DrawerOpenChangeDetail } from './contexts/useDrawer';
