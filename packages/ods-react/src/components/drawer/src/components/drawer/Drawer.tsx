import { Dialog, useDialogContext } from '@ark-ui/react/dialog';
import { type RootNode, useEnvironmentContext } from '@ark-ui/react/environment';
import { type FC, type JSX, type PropsWithChildren, useLayoutEffect, useRef } from 'react';
import { DrawerProvider, type DrawerRootProp } from '../../contexts/useDrawer';

interface DrawerProp extends DrawerRootProp {}

type FocusRoot = Document | ShadowRoot;

// Same resolution as Ark's Portal: the content lives in the shadow root when there is one.
// getDocument() honours Ark's EnvironmentProvider (iframe, e.g. the docs DemoFrame), and the
// checks below use duck typing rather than instanceof as the drawer may live in another realm.
function getFocusRoot(node: RootNode, doc: Document): FocusRoot {
  const rootNode = node.getRootNode();

  return rootNode.nodeType === 11 && 'host' in rootNode ? rootNode as ShadowRoot : doc;
}

// A ShadowRoot only knows the focused element when it is inside it.
function getActiveElement(root: FocusRoot, doc: Document): Element | null {
  return root.activeElement ?? doc.activeElement;
}

function focusFirst(root: FocusRoot, doc: Document, candidates: Array<Element | null | undefined>): void {
  for (const candidate of candidates) {
    if (candidate && candidate.isConnected && typeof (candidate as HTMLElement).focus === 'function') {
      (candidate as HTMLElement).focus({ preventScroll: true });

      if (getActiveElement(root, doc) === candidate) {
        return;
      }
    }
  }
}

// zag only restores the focus when its focus trap is active (`trapFocus`, i.e. with backdrop),
// so without backdrop it is given back manually on close.
const DrawerFocusReturn: FC = (): null => {
  const { getContentProps, getTriggerProps, open } = useDialogContext();
  const { getDocument, getRootNode } = useEnvironmentContext();
  const openerRef = useRef<Element | null>(null);
  const focusInsideRef = useRef(false);
  const wasOpenRef = useRef(false);

  // Layout effect: the opener must be read before zag moves the focus inside the content
  // (in a requestAnimationFrame), and the focus must be checked before the content hides.
  // Only `open` changes must re-run it (the getters are read at run time), hence the deps.
  useLayoutEffect(() => {
    const doc = getDocument();
    const root = getFocusRoot(getRootNode(), doc);
    const getContent = (): HTMLElement | null => root.getElementById(getContentProps().id as string);

    if (open) {
      wasOpenRef.current = true;
      openerRef.current = getActiveElement(root, doc);
      focusInsideRef.current = !!getContent()?.contains(openerRef.current);

      // Tracks whether the focus is inside the content while it is open. Focus leaving it for
      // another element counts as outside. Focus leaving it for nowhere (relatedTarget null) only
      // counts as outside if, on the next tick, the element is still in the page and the document
      // still has the focus (e.g. a click on some page text): not when the focused element was
      // removed from the DOM or when the window lost the focus. The listeners are removed as soon
      // as the drawer closes, so the focus loss caused by the content hiding is not seen.
      let pendingTarget: Node | null = null;
      let pendingTimeout: ReturnType<typeof setTimeout> | undefined;

      const checkPendingFocusOut = (): void => {
        clearTimeout(pendingTimeout);

        if (pendingTarget && pendingTarget.isConnected && doc.hasFocus() &&
          !getContent()?.contains(getActiveElement(root, doc))) {
          focusInsideRef.current = false;
        }
        pendingTarget = null;
      };
      const onFocusIn = (event: Event): void => {
        if (getContent()?.contains(event.target as Node)) {
          focusInsideRef.current = true;
        }
      };
      const onFocusOut = (event: Event): void => {
        const content = getContent();
        const relatedTarget = (event as FocusEvent).relatedTarget as Node | null;

        if (!content?.contains(event.target as Node) || content.contains(relatedTarget)) {
          return;
        }

        if (relatedTarget) {
          focusInsideRef.current = false;
        } else {
          clearTimeout(pendingTimeout);
          pendingTarget = event.target as Node;
          pendingTimeout = setTimeout(checkPendingFocusOut);
        }
      };

      root.addEventListener('focusin', onFocusIn, true);
      root.addEventListener('focusout', onFocusOut, true);

      return (): void => {
        root.removeEventListener('focusin', onFocusIn, true);
        root.removeEventListener('focusout', onFocusOut, true);
        // Closing before the next tick (e.g. closeOnInteractOutside): settle it now.
        checkPendingFocusOut();
      };
    }

    if (!wasOpenRef.current) {
      return;
    }
    wasOpenRef.current = false;

    // Only give the focus back if it was inside the drawer when it closed: never steal a focus
    // the user has moved elsewhere (page element, page text, another drawer...).
    if (focusInsideRef.current || getContent()?.contains(getActiveElement(root, doc))) {
      focusFirst(root, doc, [
        root.getElementById(getTriggerProps().id as string),
        openerRef.current,
      ]);
    }

    // No candidate could take the focus (e.g. WebKit does not focus a clicked button, so a
    // controlled drawer without trigger has body as opener): do not leave it in the closed content.
    const activeElement = getActiveElement(root, doc);

    if (activeElement && getContent()?.contains(activeElement) && typeof (activeElement as HTMLElement).blur === 'function') {
      (activeElement as HTMLElement).blur();
    }
    focusInsideRef.current = false;
    openerRef.current = null;
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
  return (
    <DrawerProvider
      backdrop={ backdrop }
      backdropStyle={ backdropStyle }
      positionerStyle={ positionerStyle }>
      <Dialog.Root
        closeOnEscape={ closeOnEscape }
        closeOnInteractOutside={ closeOnInteractOutside ?? backdrop === true }
        defaultOpen={ defaultOpen }
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
