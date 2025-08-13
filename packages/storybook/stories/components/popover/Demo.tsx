import { Popover, PopoverContent, type PopoverContentProp, type PopoverProp, PopoverTrigger } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = PopoverProp & PopoverContentProp & {
  content?: string,
};

export default (prop: DemoProp) => (
  <Popover position={ prop.position }>
    <PopoverTrigger>
      Show popover
    </PopoverTrigger>

    <PopoverContent withArrow={ prop.withArrow }>
      { prop.content }
    </PopoverContent>
  </Popover>
);
