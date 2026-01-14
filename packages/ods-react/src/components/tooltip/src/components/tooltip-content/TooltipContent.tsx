import { Portal } from '@ark-ui/react/portal';
import { Tooltip, useTooltipContext } from '@ark-ui/react/tooltip';
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
  const { open } = useTooltipContext();

  return (
    <Portal disabled={ !createPortal }>
      <Tooltip.Positioner style={{ zIndex: 'var(--ods-theme-overlay-z-index)' }}>
        <Tooltip.Content
          className={ classNames(style['tooltip-content'], className) }
          data-ods="tooltip-content"
          ref={ ref }
          { ...props }
          style={{
            ...props.style,
            ...(!open ? { display: 'none' } : {}),
          }}>
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
