import React, { type ReactElement } from 'react';
import { OdsPopover, OdsPopoverContent, OdsPopoverTrigger, } from '@ovhcloud/ods-react';
import style from './app.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      <OdsPopover>
        <OdsPopoverTrigger>
          Trigger
        </OdsPopoverTrigger>

        <OdsPopoverContent>
          Lorem ipsum dolor sit amet.
        </OdsPopoverContent>
      </OdsPopover>
    </div>
  );
}

export { App };
