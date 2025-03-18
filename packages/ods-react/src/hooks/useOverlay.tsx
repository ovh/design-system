import { autoUpdate, flip, offset, shift, useClick, useFloating, useInteractions } from '@floating-ui/react';
import { type JSX, type ReactNode, createContext, useContext, useMemo, useState } from 'react';

// TODO
type OverlayContext = {
  floatingStyles?: any,
  getFloatingProps?: any,
  getReferenceProps?: any,
  isOpen?: boolean,
  refs?: any,
}

const OverlayContext = createContext<OverlayContext>({});

function OverlayProvider({ children }: { children: ReactNode }): JSX.Element {
  // const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      flip(),
      offset(8),
      shift({ padding: 5 }),
      // ...(withArrow ? [arrow({
      //   element: arrowRef,
      // })] : []),
    ],
    onOpenChange: setIsOpen,
    open: isOpen,
    placement: 'top',//position,
    strategy: 'absolute',//strategy,
    whileElementsMounted: autoUpdate,
  });
  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  const memoizedValue = useMemo(() => ({
    floatingStyles,
    getFloatingProps,
    getReferenceProps,
    isOpen,
    refs,
  }), [floatingStyles, getFloatingProps, getReferenceProps, isOpen, refs]);

  return (
    <OverlayContext.Provider value={ memoizedValue }>
      { children }
    </OverlayContext.Provider>
  );
}

function useOverlay() {
  return useContext(OverlayContext);
}

export {
  OverlayProvider,
  useOverlay,
};



// 'use client';
// import * as React from 'react';
// import type { FloatingRootContext } from '@floating-ui/react';
// import type { TransitionStatus } from '../../utils/useTransitionStatus';
// import type { GenericHTMLProps } from '../../utils/types';
// import type { InteractionType } from '../../utils/useEnhancedClickHandler';
// import type { OpenChangeReason } from '../../utils/translateOpenChangeReason';
//
// export interface PopoverRootContext {
//   open: boolean;
//   openOnHover: boolean;
//   setOpen: (open: boolean, event?: Event, reason?: OpenChangeReason) => void;
//   setTriggerElement: (el: Element | null) => void;
//   positionerElement: HTMLElement | null;
//   setPositionerElement: (el: HTMLElement | null) => void;
//   popupRef: React.RefObject<HTMLElement | null>;
//   delay: number;
//   closeDelay: number;
//   instantType: 'dismiss' | 'click' | undefined;
//   mounted: boolean;
//   setMounted: React.Dispatch<React.SetStateAction<boolean>>;
//   transitionStatus: TransitionStatus;
//   titleId: string | undefined;
//   setTitleId: React.Dispatch<React.SetStateAction<string | undefined>>;
//   descriptionId: string | undefined;
//   setDescriptionId: React.Dispatch<React.SetStateAction<string | undefined>>;
//   floatingRootContext: FloatingRootContext;
//   getRootTriggerProps: (externalProps?: GenericHTMLProps) => GenericHTMLProps;
//   getRootPopupProps: (externalProps?: GenericHTMLProps) => GenericHTMLProps;
//   openMethod: InteractionType | null;
//   openReason: OpenChangeReason | null;
//   onOpenChangeComplete: ((open: boolean) => void) | undefined;
//   modal: boolean;
// }
//
// export const PopoverRootContext = React.createContext<PopoverRootContext | undefined>(undefined);
//
// if (process.env.NODE_ENV !== 'production') {
//   PopoverRootContext.displayName = 'PopoverRootContext';
// }
//
// export function usePopoverRootContext() {
//   const context = React.useContext(PopoverRootContext);
//   if (context === undefined) {
//     throw new Error(
//       'Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>.',
//     );
//   }
//
//   return context;
// }
