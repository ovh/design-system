import { Tooltip } from '@ark-ui/react/tooltip';
import { type FC, type JSX, type ReactNode } from 'react';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../constants/tooltip-position';

interface OdsTooltipProp {
  children: ReactNode,
  closeDelay?: number,
  open?: boolean,
  openDelay?: number,
  position?: OdsTooltipPosition,
}

const OdsTooltip: FC<OdsTooltipProp> = ({
  children,
  closeDelay = 50,
  open,
  openDelay = 0,
  position = ODS_TOOLTIP_POSITION.top,
}): JSX.Element => {
  return (
    <Tooltip.Root
      closeDelay={ closeDelay }
      interactive={ true }
      open={ open }
      openDelay={ openDelay }
      positioning={{
        placement: position,
      }}>
      { children }
    </Tooltip.Root>
  );
};

OdsTooltip.displayName = 'OdsTooltip';

export {
  OdsTooltip,
  type OdsTooltipProp,
};
