import { Portal } from '@ark-ui/react/portal';
import { Tooltip } from '@ark-ui/react/tooltip';
import classNames from 'classnames';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './tooltipContent.module.scss';

interface TooltipContentProp extends ComponentPropsWithRef<'div'> {
  withArrow?: boolean,
}

const TooltipContent: FC<TooltipContentProp> = forwardRef(({
  children,
  className,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal>
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
