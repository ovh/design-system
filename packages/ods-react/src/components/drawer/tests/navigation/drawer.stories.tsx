import { DRAWER_POSITION, Drawer, type DrawerProp, DrawerBody, DrawerContent, DrawerTrigger } from '../../src';

export default {
  component: Drawer,
  title: 'Tests navigation',
};

// A focusable element on each side of the drawer: its content is portaled at the end of the body,
// so a Tab from the last one of the page would reach it.
const DrawerBetweenButtons = (props: DrawerProp) => (
  <>
    <button data-testid="before" type="button">
      Before
    </button>

    <Drawer { ...props }>
      <DrawerTrigger data-testid="trigger">
        Trigger
      </DrawerTrigger>

      <DrawerContent position={ DRAWER_POSITION.right }>
        <DrawerBody>
          <input data-testid="first" />
          <button data-testid="second" type="button">
            Second
          </button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <button data-testid="after" type="button">
      After
    </button>
  </>
);

export const withBackdrop = () => (
  <DrawerBetweenButtons backdrop />
);

export const withoutBackdrop = () => (
  <DrawerBetweenButtons />
);
