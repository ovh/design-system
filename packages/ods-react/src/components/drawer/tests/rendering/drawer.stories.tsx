import { DRAWER_POSITION, Drawer, DrawerBody, DrawerContent, DrawerTrigger } from '../../src';

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

// The three non-modal variants: closed, they used to intercept clicks on their area.
export const closedInert = () => (
  <>
    <Drawer>
      <DrawerTrigger data-testid="trigger-portal">
        Portal
      </DrawerTrigger>
      <DrawerContent position={ DRAWER_POSITION.left }>
        <DrawerBody>
          Portaled, no backdrop
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer backdrop={ false }>
      <DrawerTrigger data-testid="trigger-backdrop-false">
        Backdrop false
      </DrawerTrigger>
      <DrawerContent position={ DRAWER_POSITION.left }>
        <DrawerBody>
          Portaled, backdrop false
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer>
      <DrawerTrigger data-testid="trigger-inline">
        Inline
      </DrawerTrigger>
      <DrawerContent createPortal={ false } position={ DRAWER_POSITION.left }>
        <DrawerBody>
          Not portaled, no backdrop
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <button data-testid="under-drawer" type="button">
      Sits inside the closed drawers area
    </button>
  </>
);
