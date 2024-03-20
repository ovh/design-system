import React from 'react-dom/client';
import { OdsTooltip } from 'ods-components-react';

const Tooltip = () => {
  return (
    <>
      <div id="trigger">
        Trigger
      </div>

      <OdsTooltip position="bottom-start"
                  triggerId="trigger"
                  withArrow={ true }>
        Tooltip content
      </OdsTooltip>
    </>
  );
};

export default Tooltip;
