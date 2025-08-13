import { ICON_NAME, Icon, Tooltip, TooltipContent, type TooltipContentProp, type TooltipProp, TooltipTrigger } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = TooltipProp & TooltipContentProp & {
  content?: string,
};

export default (prop: DemoProp) => (
  <Tooltip
    closeDelay={ prop.closeDelay }
    openDelay={ prop.openDelay }
    position={ prop.position }>
    <TooltipTrigger asChild>
      <Icon
        name={ ICON_NAME.circleQuestion }
        style={{ fontSize: '24px' }} />
    </TooltipTrigger>

    <TooltipContent withArrow={ prop.withArrow }>
      { prop.content }
    </TooltipContent>
  </Tooltip>
);
