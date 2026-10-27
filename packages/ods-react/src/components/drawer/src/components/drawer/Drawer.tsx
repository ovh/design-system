import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { type RootNode, useEnvironmentContext } from '@ark-ui/react/environment';
import { type FC, type JSX, type PropsWithChildren, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { DrawerProvider, type DrawerRootProp } from '../../contexts/useDrawer';

interface DrawerProp extends DrawerRootProp {}

type FocusRoot = Document | ShadowRoot;

// Same resolution as Ark's Portal: the content lives in the shadow root when there is one. Duck
// typing rather than instanceof, as the drawer may live in another realm (an iframe).
function getFocusRoot(node: RootNode, doc: Document): FocusRoot {
  const rootNode = node.getRootNode();

  return rootNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in rootNode ? rootNode as ShadowRoot : doc;
}

// A ShadowRoot only knows the focused element when it is inside it.
function getActiveElement(root: FocusRoot, doc: Document): Element | null {
  return root.activeElement ?? doc.activeElement;
}

// No `preventScroll`, unlike zag: without backdrop the page may have scrolled while the drawer was
// open, and the trigger has to come back into view. Each candidate is tried once: a candidate whose
// focus was passed on (e.g. by a parent drawer closing too) must not be focused again.
function focusFirst(root: FocusRoot, doc: Document, candidates: Array<Element | null | undefined>): void {
  for (const candidate of new Set(candidates)) {
    if (candidate && candidate.isConnected && typeof (candidate as HTMLElement).focus === 'function') {
      (candidate as HTMLElement).focus();

      if (getActiveElement(root, doc) === candidate) {
        return;
      }
    }
  }
}

// Not zag's lookup, which finds a valued trigger by its id and so misses a custom one: the triggers
// are matched by the owner id zag gives each of them (as its `[data-ownedby~=id]`), then by value.
// The opener comes first when its value is the current one, as a trigger without value does not
// reset it.
function getTrigger(root: FocusRoot, ownerId: string, triggerValue: string | null, opener: Element | null): Element | null {
  const triggers = Array.from(root.querySelectorAll('[data-scope="dialog"][data-part="trigger"]'))
    .filter((element) => element.getAttribute('data-ownedby')?.split(' ').includes(ownerId));
  const openerValue = opener?.getAttribute('data-value') ?? null;

  if (opener && triggers.includes(opener) && (openerValue === null || openerValue === triggerValue)) {
    return opener;
  }

  return triggers.find((element) => triggerValue !== null && element.getAttribute('data-value') === triggerValue)
    ?? triggers[0]
    ?? null;
}

// zag only restores the focus when its focus trap is active (`trapFocus`, i.e. with backdrop),
// so without backdrop it is given back manually on close.
const DrawerFocusReturn: FC = (): null => {
  const { getContentProps, getTriggerProps, open, triggerValue } = useDialogContext();
  const { getDocument, getRootNode } = useEnvironmentContext();
  const isLastInteractionOutsideRef = useRef(false);
  const openerRef = useRef<Element | null>(null);
  const wasOpenRef = useRef(false);

  // The listeners below belong to the render where `open` last changed, while the content id may
  // change while open (e.g. derived from the item a details drawer shows): they read it from here.
  // Declared first, so it runs before the effect below in the same commit.
  const contentIdRef = useRef('');

  useLayoutEffect(() => {
    contentIdRef.current = getContentProps().id as string;
  });

  // Layout effect: the opener must be read before zag moves the focus inside the content
  // (in a requestAnimationFrame), and the focus must be checked before the content hides.
  useLayoutEffect(() => {
    const doc = getDocument();
    const root = getFocusRoot(getRootNode(), doc);
    const getContent = (): HTMLElement | null => root.getElementById(contentIdRef.current);
    // Listened on the document, which sees the page events a shadow root misses, through the
    // composed path as the target is retargeted to the shadow host. And on the shadow root, which
    // gets the event after the document and sees the real target even when the root is closed.
    const listenedRoots = new Set<FocusRoot>([doc, root]);
    const isInContent = (event: Event): boolean => {
      const content = getContent();

      return !!content && (event.composedPath().includes(content) || content.contains(event.target as Node));
    };
    // Never left in the closed content: when no candidate took it (e.g. WebKit does not focus a
    // clicked button, so the opener is body), or when it is not given back.
    const blurInContent = (): void => {
      const activeElement = getActiveElement(root, doc);

      if (activeElement && getContent()?.contains(activeElement) && typeof (activeElement as HTMLElement).blur === 'function') {
        (activeElement as HTMLElement).blur();
      }
    };
    const giveFocusBack = (): void => {
      // zag does not expose its scope id: it is read from the trigger props.
      const ownerId = (getTriggerProps() as Record<string, unknown>)['data-ownedby'] as string;

      focusFirst(root, doc, [getTrigger(root, ownerId, triggerValue, openerRef.current), openerRef.current]);
      blurInContent();
    };

    if (open) {
      wasOpenRef.current = true;
      isLastInteractionOutsideRef.current = false;
      openerRef.current = getActiveElement(root, doc);

      // Own listeners rather than zag's onInteractOutside, which comes a frame later, after a drawer
      // that the same click closed (e.g. a page button whose handler closes it).
      const onInteraction = (event: Event): void => {
        isLastInteractionOutsideRef.current = !isInContent(event);
      };

      listenedRoots.forEach((listenedRoot) => {
        listenedRoot.addEventListener('focusin', onInteraction, true);
        listenedRoot.addEventListener('pointerdown', onInteraction, true);
      });

      return (): void => {
        listenedRoots.forEach((listenedRoot) => {
          listenedRoot.removeEventListener('focusin', onInteraction, true);
          listenedRoot.removeEventListener('pointerdown', onInteraction, true);
        });
      };
    }

    if (!wasOpenRef.current) {
      return;
    }
    wasOpenRef.current = false;

    const content = getContent();
    const focusedElement = getActiveElement(root, doc);
    const win = doc.defaultView;
    // A frame without the focus may have lost it to an ancestor page (the user moved there, it is
    // left there), or with the whole window (e.g. another tab came to front, the trigger gets it
    // back as in a top-level page): each ancestor still has the frame on the way as active element
    // in the latter case only, whether the window is active or not. A cross-origin ancestor cannot
    // be read: assumed focused.
    const hasParentFocus = !!win && win !== win.top && !doc.hasFocus() && ((): boolean => {
      try {
        for (let frameWindow: Window = win; frameWindow !== frameWindow.top; frameWindow = frameWindow.parent) {
          if (frameWindow.parent.document.activeElement !== frameWindow.frameElement) {
            return true;
          }
        }
        return false;
      } catch {
        return true;
      }
    })();

    // Given back if the focus is in the drawer, or was lost (on body) while the last interaction
    // was inside, e.g. its focused element was removed. Any other focused element is left as is.
    const isFocusLost = !focusedElement || focusedElement === doc.body;

    if (!hasParentFocus && (content?.contains(focusedElement) || (isFocusLost && !isLastInteractionOutsideRef.current))) {
      giveFocusBack();
    } else {
      blurInContent();
    }

    const activeElement = getActiveElement(root, doc);

    // The focus is in another element, e.g. a layer opened from the drawer (a confirmation Modal,
    // a Menu...). Such a layer gives the focus back to its opener when it closes, inside the closed
    // drawer: the first focus that follows is handed to the trigger if it lands there.
    if (!activeElement || activeElement === doc.body || content?.contains(activeElement)) {
      openerRef.current = null;
      return;
    }

    const removeFocusAfterClose = (): void => {
      listenedRoots.forEach((listenedRoot) => listenedRoot.removeEventListener('focusin', onFocusAfterClose, true));
    };
    const onFocusAfterClose = (event: Event): void => {
      // The document only sees the host of a shadow root: the shadow root listener, called next,
      // tells whether the focus landed in the content.
      if (event.currentTarget !== root && 'host' in root && event.target === root.host) {
        return;
      }
      removeFocusAfterClose();

      if (isInContent(event)) {
        giveFocusBack();
      }
      openerRef.current = null;
    };

    listenedRoots.forEach((listenedRoot) => listenedRoot.addEventListener('focusin', onFocusAfterClose, true));

    return removeFocusAfterClose;
    // Only on open and close: re-running while open would reset the opener and the last interaction.
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

const Drawer: FC<PropsWithChildren<DrawerProp>> = ({
  backdrop,
  backdropStyle,
  children,
  closeOnEscape = true,
  closeOnInteractOutside,
  defaultOpen,
  onOpenChange,
  open,
  positionerStyle,
}): JSX.Element => {
  const contentIdRef = useRef<string | undefined>(undefined);
  const [, setRenderedContentId] = useState<string>();

  // zag looks the content up by id (focus on open, Escape, outside click, focus return) with the
  // ids its machine started with, before DrawerContent can give it its own: a getter gives it the
  // current one, even for a drawer open on mount. The state re-renders the trigger aria-controls.
  const [ids] = useState(() => ({
    get content(): string | undefined {
      return contentIdRef.current;
    },
  }));
  const setContentId = useCallback((id?: string): void => {
    contentIdRef.current = id;
    setRenderedContentId(id);
  }, []);

  return (
    <DrawerProvider
      backdrop={ backdrop }
      backdropStyle={ backdropStyle }
      positionerStyle={ positionerStyle }
      setContentId={ setContentId }>
      <Dialog.Root
        closeOnEscape={ closeOnEscape }
        closeOnInteractOutside={ closeOnInteractOutside ?? backdrop === true }
        defaultOpen={ defaultOpen }
        ids={ ids }
        modal={ backdrop === true }
        onOpenChange={ onOpenChange }
        open={ open }
        preventScroll={ backdrop === true }
        trapFocus={ backdrop === true }>
        { backdrop !== true && <DrawerFocusReturn /> }
        { children }
      </Dialog.Root>
    </DrawerProvider>
  );
};

Drawer.displayName = 'Drawer';

export {
  Drawer,
  type DrawerProp,
};
