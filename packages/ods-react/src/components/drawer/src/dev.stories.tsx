import { DRAWER_POSITION, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '.';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover/src';
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

    <DrawerContent
      className={ style['custom-drawer__content'] }
      style={{ border: 'solid' }}>
      <DrawerBody>
        Drawer Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export const OverlayBehind = () => (
  <>
    <Popover open>
      <PopoverTrigger>
        Trigger Popover
      </PopoverTrigger>

      <PopoverContent>
        Popover content
      </PopoverContent>
    </Popover>

    <Drawer>
      <DrawerTrigger>
        Trigger Drawer
      </DrawerTrigger>

      <DrawerContent style={{ zIndex: 999 }}>
        <DrawerBody>
          Drawer content

          <Popover>
            <PopoverTrigger>
              Inside Popover trigger
            </PopoverTrigger>

            <PopoverContent createPortal={ false }>
              Inside Popover content
            </PopoverContent>
          </Popover>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
);

export const Position = () => (
  <div>

  <Drawer>
    <DrawerTrigger>
      Top
    </DrawerTrigger>

    <DrawerContent position={ DRAWER_POSITION.top }>
      <DrawerBody>
        Top
      </DrawerBody>
    </DrawerContent>
  </Drawer>

  <Drawer>
    <DrawerTrigger>
      Left
    </DrawerTrigger>

    <DrawerContent position={ DRAWER_POSITION.left }>
      <DrawerBody>
        Left
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  <Drawer>
    <DrawerTrigger>
      Bottom
    </DrawerTrigger>

    <DrawerContent position={ DRAWER_POSITION.bottom }>
      <DrawerBody>
        Bottom
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  <Drawer>
    <DrawerTrigger>
      Right
    </DrawerTrigger>

    <DrawerContent position={ DRAWER_POSITION.right }>
      <DrawerBody>
        Right
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  </div>
);
