import { DRAWER_POSITION } from './constants/drawer-position';
import { Drawer } from './components/drawer/Drawer';
import { DrawerBody } from './components/drawer-body/DrawerBody';
import { DrawerContent } from './components/drawer-content/DrawerContent';
import { DrawerTrigger } from './components/drawer-trigger/DrawerTrigger';
import style from './dev.module.css';

export default {
  component: Drawer,
  title: 'Drawer dev',
};

export const Default = () => (
  <Drawer>
    <DrawerTrigger>
      Trigger drawer
    </DrawerTrigger>

    <DrawerContent>
      <DrawerBody>
        Drawer Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export const CustomStyle = () => (
  <Drawer>
    <DrawerTrigger className={ style['custom-drawer__trigger'] }>
      Trigger drawer
    </DrawerTrigger>

    <DrawerContent className={ style['custom-drawer__content'] }>
      <DrawerBody>
        Drawer Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
)

export const Position = () => (
  <div>

  <Drawer>
    <DrawerTrigger>
      Top
    </DrawerTrigger>

    <DrawerContent position={DRAWER_POSITION.top}>
      <DrawerBody>
        Top
      </DrawerBody>
    </DrawerContent>
  </Drawer>

  <Drawer>
    <DrawerTrigger>
      Left
    </DrawerTrigger>

    <DrawerContent position={DRAWER_POSITION.left}>
      <DrawerBody>
        Left
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  <Drawer>
    <DrawerTrigger>
      Bottom
    </DrawerTrigger>

    <DrawerContent position={DRAWER_POSITION.bottom}>
      <DrawerBody>
        Bottom
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  <Drawer>
    <DrawerTrigger>
      Right
    </DrawerTrigger>

    <DrawerContent position={DRAWER_POSITION.right}>
      <DrawerBody>
        Right
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  </div>
);
