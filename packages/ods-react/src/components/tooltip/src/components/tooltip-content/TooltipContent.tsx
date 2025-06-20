import { Portal } from '@ark-ui/react/portal';
import { Tooltip } from '@ark-ui/react/tooltip';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './tooltipContent.module.scss';

interface TooltipContentProp extends ComponentPropsWithRef<'div'> {
  /**
   * Whether the component should be rendered in the DOM close to the body tag.
   */
  createPortal?: boolean,
  /**
   * Whether the component displays an arrow pointing to the trigger.
   */
  withArrow?: boolean,
}

const TooltipContent: FC<TooltipContentProp> = forwardRef(({
  children,
  className,
  createPortal = true,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal disabled={ !createPortal }>
      <Tooltip.Positioner>
        <Tooltip.Content
          className={ classNames(style['tooltip-content'], className) }
          ref={ ref }
          { ...props }>
          {
            withArrow &&
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
          }

          { children }
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  );
});

TooltipContent.displayName = 'TooltipContent';

export {
  TooltipContent,
  type TooltipContentProp,
};
