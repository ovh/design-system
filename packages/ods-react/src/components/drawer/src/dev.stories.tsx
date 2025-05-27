import { DRAWER_POSITION } from './constant/drawer-position';
import { Drawer } from './components/drawer/Drawer';
import { DrawerBody } from './components/drawer-body/DrawerBody.tsx';
import { DrawerContent } from './components/drawer-content/DrawerContent.tsx';
import { DrawerTrigger } from './components/drawer-trigger/DrawerTrigger.tsx';

export default {
  component: Drawer,
  title: 'Drawer dev',
};

export const Default = () => (
  <Drawer />
);

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
