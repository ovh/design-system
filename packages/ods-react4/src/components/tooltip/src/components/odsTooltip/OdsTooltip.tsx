import { FloatingArrow, arrow, autoUpdate, flip, offset, shift, useFloating, useFocus, useInteractions, useHover } from '@floating-ui/react';
import { type ComponentPropsWithoutRef, type FC, type JSX, type ReactNode, useRef, useState } from 'react';
// import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';
// import { ODS_TOOLTIP_STRATEGY, type OdsTooltipStrategy } from '../../constants/tooltip-strategy';
import { type OdsTooltipPosition } from '../../constants/tooltip-position';
import { type OdsTooltipStrategy } from '../../constants/tooltip-strategy';
import style from './odsTooltip.module.scss';

// TODO see how to handle children the best way, ex:
//  https://github.com/radix-ui/primitives/blob/eca6babd188df465f64f23f3584738b85dba610e/packages/react/popper/src/Popper.tsx#L12
//  https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/overlays/src/useOverlayPosition.ts
//  https://github.com/ariakit/ariakit/blob/0986cc3936cbbbf919648e28d33703804e0a7f75/packages/ariakit-react-core/src/popover/popover.tsx#L12

interface OdsTooltipProp extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode,
  position?: OdsTooltipPosition,
  strategy?: OdsTooltipStrategy,
  withArrow?: boolean,
}

const OdsTooltip: FC<OdsTooltipProp> = ({
  children,
  position = 'top',
  strategy = 'absolute',
  withArrow = false,
  ...props
}): JSX.Element => {
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { context, floatingStyles, refs } = useFloating({
    middleware: [
      flip(),
      offset(8),
      shift({ padding: 5 }),
      ...(withArrow ? [arrow({
        element: arrowRef,
      })] : []),
    ],
    onOpenChange: setIsOpen,
    open: isOpen,
    placement: position,
    strategy: strategy,
    whileElementsMounted: autoUpdate,
  });
  const focus = useFocus(context);
  const hover = useHover(context, {
    delay: {
      open: 0,
      close: 50,
    },
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    focus,
    hover,
  ]);

  return (
    <>
      { children }

      {/* TODO replace with children */}
      <button
        ref={ refs.setReference }
        { ...getReferenceProps() }>
        Button
      </button>

      {
        isOpen && (
          <div
            className={ style['ods-tooltip'] }
            ref={ refs.setFloating }
            style={ floatingStyles }
            { ...getFloatingProps() }
            { ...props }>
            Tooltip
            <br/>
            With extra lines

            {
              withArrow &&
              <FloatingArrow
                className={ style['ods-tooltip__arrow'] }
                context={ context }
                ref={ arrowRef } />
            }
          </div>
        )
      }
    </>
  );
};

export {
  OdsTooltip,
  type OdsTooltipProp,
};
