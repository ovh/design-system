import { type ReactNode, useState } from 'react';
import { Select, SelectContent, SelectControl } from '../../../select/src';
import { DRAWER_POSITION, Drawer, type DrawerProp, DrawerBody, DrawerContent, DrawerTrigger } from '../../src';

export default {
  component: Drawer,
  title: 'Tests behavior',
};

// A tall page to check whether the background scrolls.
const TallPage = ({ children }: { children: ReactNode }) => (
  <div style={{ minHeight: '3000px' }}>
    { children }
  </div>
);

const DrawerWithFocusables = ({ children, ...props }: DrawerProp & { children?: ReactNode }) => (
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
        { children }
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const BackgroundButton = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <button data-clicks={ clicks } data-testid="background" onClick={ () => setClicks((count) => count + 1) } type="button">
      Background
    </button>
  );
};

const PageText = () => (
  <p data-testid="page-text">
    Some page text
  </p>
);

export const backdrop = () => (
  <TallPage>
    <BackgroundButton />
    <DrawerWithFocusables backdrop />
  </TallPage>
);

export const backdropNoInteractOutside = () => (
  <TallPage>
    <BackgroundButton />
    <DrawerWithFocusables backdrop closeOnInteractOutside={ false } />
  </TallPage>
);

export const backdropWithSelect = () => (
  <TallPage>
    <DrawerWithFocusables backdrop>
      { /* The documented practice is to render overlays inside a Drawer with `createPortal={ false }`
           (see the docs OverlayElements story): a portaled Select renders below a backdrop Drawer
           (same stacking level as Modal). It stays portaled here on purpose, to test that interacting
           with a nested layer is not an outside interaction, hence the positioner z-index override. */ }
      <Select
        data-testid="select"
        items={ [
          { label: 'Dog', value: 'dog' },
          { label: 'Cat', value: 'cat' },
        ] }
        positionerStyle={{ zIndex: 9999 }}>
        <SelectControl />
        <SelectContent />
      </Select>
    </DrawerWithFocusables>
  </TallPage>
);

export const noBackdrop = () => (
  <TallPage>
    <BackgroundButton />
    <DrawerWithFocusables />
  </TallPage>
);

export const noBackdropInteractOutside = () => (
  <TallPage>
    <BackgroundButton />
    <PageText />
    <DrawerWithFocusables closeOnInteractOutside />
  </TallPage>
);

// Removes itself from the DOM when clicked, while it has the focus.
const SelfRemovingButton = () => {
  const [isShown, setIsShown] = useState(true);

  return isShown ? (
    <button data-testid="self-removing" onClick={ () => setIsShown(false) } type="button">
      Remove me
    </button>
  ) : null;
};

export const noBackdropRemovedFocus = () => (
  <TallPage>
    <DrawerWithFocusables>
      <SelfRemovingButton />
    </DrawerWithFocusables>
  </TallPage>
);

export const noBackdropControlled = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TallPage>
      <button data-testid="external" onClick={ () => setIsOpen(true) } type="button">
        Open
      </button>

      { /* Opens without moving the focus (as WebKit does when clicking a button): the opener is body. */ }
      <div data-testid="external-no-focus" onClick={ () => setIsOpen(true) }>
        Open without focus
      </div>

      <Drawer onOpenChange={ ({ open }) => setIsOpen(open) } open={ isOpen }>
        <DrawerContent position={ DRAWER_POSITION.right }>
          <DrawerBody>
            <input data-testid="first" />
            <button data-testid="second" type="button">
              Second
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </TallPage>
  );
};

export const noBackdropClosedByCode = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TallPage>
      <PageText />

      { /* Not focusable: closes the drawer by code without moving the focus anywhere but body. */ }
      <div data-testid="close-by-code" onClick={ () => setIsOpen(false) }>
        Close by code
      </div>

      <DrawerWithFocusables onOpenChange={ ({ open }) => setIsOpen(open) } open={ isOpen } />
    </TallPage>
  );
};

const NamedDrawer = ({ name }: { name: string }) => (
  <Drawer>
    <DrawerTrigger data-testid={ `trigger-${name}` }>
      Trigger { name }
    </DrawerTrigger>

    <DrawerContent data-testid={ `content-${name}` } position={ DRAWER_POSITION.right }>
      <DrawerBody>
        <input data-testid={ `first-${name}` } />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export const twoDrawers = () => (
  <TallPage>
    <NamedDrawer name="a" />
    <NamedDrawer name="b" />
  </TallPage>
);

export const noEscape = () => (
  <DrawerWithFocusables closeOnEscape={ false } />
);
