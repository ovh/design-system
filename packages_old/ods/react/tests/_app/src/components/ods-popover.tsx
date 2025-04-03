import React from 'react-dom/client';
import { OdsPopover } from 'ods-components-react';

const Popover = () => {
  return (
    <>
      <div id="trigger">
        Trigger
      </div>

      <OdsPopover position="bottom-start"
                  triggerId="trigger"
                  withArrow={ true }>
        Popover content
      </OdsPopover>
    </>
  );
};

export default Popover;
