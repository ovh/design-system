export interface OcdkSurfaceBehaviour {
    close: () => void;
    open: () => void;
    opened: boolean;
    setAnchorElement(element: Element): void
  }