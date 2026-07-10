import { Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '../../src';

export default {
  component: Drawer,
  title: 'Tests rendering',
};

export const render = () => (
  <Drawer>
    <DrawerTrigger data-testid="render">
      Trigger
    </DrawerTrigger>
    <DrawerContent>
      <DrawerBody>
        Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export const withBackdrop = () => (
  <Drawer backdrop defaultOpen>
    <DrawerTrigger data-testid="render-backdrop">
      Trigger
    </DrawerTrigger>
    <DrawerContent>
      <DrawerBody>
        Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export const withoutBackdrop = () => (
  <Drawer defaultOpen>
    <DrawerTrigger data-testid="render-no-backdrop">
      Trigger
    </DrawerTrigger>
    <DrawerContent>
      <DrawerBody>
        Content
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
