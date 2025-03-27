import React, { type ReactElement } from 'react';
import { OdsPopoverArkUI as OdsPopover, OdsPopoverContentArkUI as OdsPopoverContent, OdsPopoverTriggerArkUI as OdsPopoverTrigger } from '@ovhcloud/ods-react';
import { OdsTab, OdsTabContent, OdsTabList, OdsTabs } from '@ovhcloud/ods-react';
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

      <OdsTabs defaultValue="tab-1">
        <OdsTabList>
          <OdsTab value="tab-1">Tab 1</OdsTab>
          <OdsTab value="tab-2">Tab 2</OdsTab>
          <OdsTab value="tab-3">Tab 3</OdsTab>
        </OdsTabList>

        <OdsTabContent value="tab-1">
          Content of Tab 1
        </OdsTabContent>

        <OdsTabContent value="tab-2">
          Content of Tab 2
        </OdsTabContent>

        <OdsTabContent value="tab-3">
          Content of Tab 3
        </OdsTabContent>
      </OdsTabs>
    </div>
  );
}

export { App };
