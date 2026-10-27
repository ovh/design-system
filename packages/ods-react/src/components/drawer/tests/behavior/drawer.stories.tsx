import { EnvironmentProvider } from '@ark-ui/react/environment';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Modal, ModalBody, ModalContent } from '../../../modal/src';
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

const DrawerWithFocusables = ({ children, contentId, triggerId, ...props }: DrawerProp & { children?: ReactNode, contentId?: string, triggerId?: string }) => (
  <Drawer { ...props }>
    <DrawerTrigger data-testid="trigger" id={ triggerId }>
      Trigger
    </DrawerTrigger>

    <DrawerContent id={ contentId } position={ DRAWER_POSITION.right }>
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

// Removes itself from the DOM when clicked, while it has the focus.
const SelfRemovingButton = () => {
  const [isShown, setIsShown] = useState(true);

  return isShown ? (
    <button data-testid="self-removing" onClick={ () => setIsShown(false) } type="button">
      Remove me
    </button>
  ) : null;
};

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
      { /* Portaled on purpose, unlike the documented `createPortal={ false }` (see the docs
           OverlayElements story), to test that interacting with a nested layer is not an outside
           interaction: the z-index lifts its list (dropdown layer) above the drawer. */ }
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

export const noBackdropCustomContentId = () => (
  <TallPage>
    <BackgroundButton />
    <DrawerWithFocusables contentId="custom-content-id" />
  </TallPage>
);

// Open by default: the opener is body, so the trigger must be found by its owner, whatever its id.
export const noBackdropCustomTriggerId = () => (
  <TallPage>
    <DrawerWithFocusables defaultOpen triggerId="custom-trigger-id" />
  </TallPage>
);

// Open on mount: zag's machine has started before DrawerContent can give it its id.
export const noBackdropOpenCustomContentId = () => (
  <TallPage>
    <BackgroundButton />
    <DrawerWithFocusables contentId="custom-content-id" defaultOpen />
  </TallPage>
);

// The content id changes while the drawer is open, e.g. derived from the item a details drawer shows.
export const noBackdropChangingContentId = () => {
  const [item, setItem] = useState(1);

  return (
    <TallPage>
      <DrawerWithFocusables contentId={ `details-${item}` }>
        <button data-testid="next-item" onClick={ () => setItem((current) => current + 1) } type="button">
          Next item
        </button>
        <SelfRemovingButton />
      </DrawerWithFocusables>
    </TallPage>
  );
};

// A trigger without value next to valued ones, as a header button above one trigger per row.
export const noBackdropValuedTriggers = () => (
  <TallPage>
    <Drawer>
      <DrawerTrigger data-testid="trigger">
        Header trigger
      </DrawerTrigger>

      { ['1', '2', '3'].map((row) => (
        <DrawerTrigger data-testid={ `trigger-${row}` } key={ row } value={ row }>
          Row { row }
        </DrawerTrigger>
      )) }

      <DrawerContent position={ DRAWER_POSITION.right }>
        <DrawerBody>
          <input data-testid="first" />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </TallPage>
);

// A form drawer whose Close button asks for a confirmation in a Modal: Discard closes both.
export const noBackdropNestedModal = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TallPage>
      <DrawerWithFocusables onOpenChange={ ({ open }) => setIsDrawerOpen(open) } open={ isDrawerOpen }>
        <button data-testid="close" onClick={ () => setIsModalOpen(true) } type="button">
          Close
        </button>
      </DrawerWithFocusables>

      <Modal onOpenChange={ ({ open }) => setIsModalOpen(open) } open={ isModalOpen }>
        <ModalContent>
          <ModalBody>
            <button
              data-testid="discard"
              onClick={ () => {
                setIsModalOpen(false);
                setIsDrawerOpen(false);
              } }
              type="button">
              Discard
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </TallPage>
  );
};

// Rendered in a shadow root, next to an input of the page; the drawer is closed by code. The root
// is exposed for the tests, as a closed one cannot be reached from the page.
const ShadowRootDrawer = ({ mode }: { mode: ShadowRootMode }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const host = hostRef.current as (HTMLDivElement & { drawerShadowRoot?: ShadowRoot }) | null;

    if (host) {
      host.drawerShadowRoot ??= host.attachShadow({ mode });
      setShadowRoot(host.drawerShadowRoot);
    }
  }, [mode]);

  return (
    <>
      <input data-testid="page-input" />
      <div data-testid="host" ref={ hostRef } />

      {
        shadowRoot && createPortal(
          <EnvironmentProvider value={ () => shadowRoot }>
            <div data-testid="close-by-code" onClick={ () => setIsOpen(false) }>
              Close by code
            </div>

            <DrawerWithFocusables onOpenChange={ ({ open }) => setIsOpen(open) } open={ isOpen }>
              <SelfRemovingButton />
            </DrawerWithFocusables>
          </EnvironmentProvider>,
          shadowRoot,
        )
      }
    </>
  );
};

export const noBackdropInShadowRoot = () => (
  <ShadowRootDrawer mode="open" />
);

export const noBackdropInClosedShadowRoot = () => (
  <ShadowRootDrawer mode="closed" />
);

// An iframe of the page, outside the drawer: a focus inside it fires no event in the page.
export const noBackdropOutsideIframe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TallPage>
      <iframe data-testid="outside-frame" srcDoc="<input data-testid='frame-input' />" title="Outside frame" />

      <div data-testid="close-by-code" onClick={ () => setIsOpen(false) }>
        Close by code
      </div>

      <DrawerWithFocusables onOpenChange={ ({ open }) => setIsOpen(open) } open={ isOpen } />
    </TallPage>
  );
};

// A drawer without trigger, opened without moving the focus (the opener is body), whose Close
// button asks for a confirmation in a Modal: Discard closes both, and nothing can take the focus.
export const noBackdropNestedModalWithoutTrigger = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <TallPage>
      <div data-testid="external-no-focus" onClick={ () => setIsDrawerOpen(true) }>
        Open without focus
      </div>

      <Drawer onOpenChange={ ({ open }) => setIsDrawerOpen(open) } open={ isDrawerOpen }>
        <DrawerContent position={ DRAWER_POSITION.right }>
          <DrawerBody>
            <button data-testid="close" onClick={ () => setIsModalOpen(true) } type="button">
              Close
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal onOpenChange={ ({ open }) => setIsModalOpen(open) } open={ isModalOpen }>
        <ModalContent>
          <ModalBody>
            <button
              data-testid="discard"
              onClick={ () => {
                setIsModalOpen(false);
                setIsDrawerOpen(false);
              } }
              type="button">
              Discard
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </TallPage>
  );
};

// A drawer opened from a trigger inside another drawer. A button of the inner drawer closes the
// outer one only, then Escape closes the inner one.
export const noBackdropNestedDrawers = () => {
  const [isOuterOpen, setIsOuterOpen] = useState(false);

  return (
    <TallPage>
      <Drawer onOpenChange={ ({ open }) => setIsOuterOpen(open) } open={ isOuterOpen }>
        <DrawerTrigger data-testid="outer-trigger">
          Outer trigger
        </DrawerTrigger>

        <DrawerContent data-testid="outer-content" position={ DRAWER_POSITION.right }>
          <DrawerBody>
            <Drawer>
              <DrawerTrigger data-testid="inner-trigger">
                Inner trigger
              </DrawerTrigger>

              <DrawerContent data-testid="inner-content" position={ DRAWER_POSITION.left }>
                <DrawerBody>
                  <button data-testid="close-outer" onClick={ () => setIsOuterOpen(false) } type="button">
                    Close the outer drawer
                  </button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </TallPage>
  );
};

export const noBackdropInteractOutside = () => (
  <TallPage>
    <BackgroundButton />
    <PageText />
    <DrawerWithFocusables closeOnInteractOutside />
  </TallPage>
);

export const noBackdropRemovedFocus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TallPage>
      <input data-testid="page-input" />
      <PageText />

      { /* Clicked by script in the tests, to close the drawer by code without moving the focus. */ }
      <div data-testid="close-by-code" onClick={ () => setIsOpen(false) }>
        Close by code
      </div>

      <DrawerWithFocusables onOpenChange={ ({ open }) => setIsOpen(open) } open={ isOpen }>
        <SelfRemovingButton />
      </DrawerWithFocusables>
    </TallPage>
  );
};

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

// Loads the closed-by-code story in a same-origin iframe, next to an input of the parent page.
export const noBackdropInIframe = () => (
  <>
    <input data-testid="parent-input" />
    <iframe
      data-testid="frame"
      src="iframe.html?args=&id=tests-behavior--no-backdrop-closed-by-code&viewMode=story"
      style={{ height: '600px', width: '800px' }}
      title="Drawer in an iframe" />
  </>
);

// Loads the iframe story in an iframe: the drawer is two frames below the page.
export const noBackdropInNestedIframe = () => (
  <>
    <input data-testid="top-input" />
    <iframe
      data-testid="outer-frame"
      src="iframe.html?args=&id=tests-behavior--no-backdrop-in-iframe&viewMode=story"
      style={{ height: '700px', width: '900px' }}
      title="Iframe holding the drawer iframe" />
  </>
);

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
