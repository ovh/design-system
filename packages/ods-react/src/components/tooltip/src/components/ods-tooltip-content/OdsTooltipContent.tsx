import { Portal } from '@ark-ui/react/portal';
import { Tooltip } from '@ark-ui/react/tooltip';
import { type ComponentPropsWithRef, type FC, type JSX, forwardRef } from 'react';
import style from './odsTooltipContent.module.scss';

interface OdsTooltipContentProp extends ComponentPropsWithRef<'div'> {
  withArrow?: boolean,
}

const OdsTooltipContent: FC<OdsTooltipContentProp> = forwardRef(({
  children,
  withArrow = false,
  ...props
}, ref): JSX.Element => {
  return (
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content
          className={ style['ods-tooltip-content'] }
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

OdsTooltipContent.displayName = 'OdsTooltipContent';

export {
  OdsTooltipContent,
  type OdsTooltipContentProp,
};
