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
