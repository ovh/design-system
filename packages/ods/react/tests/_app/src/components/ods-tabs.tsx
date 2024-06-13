import React, { useState } from 'react';
import { OdsTab, OdsTabs } from 'ods-components-react';

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<string>()

  function onOdsTabsSelected(event: CustomEvent<KeyboardEvent | MouseEvent>) {
    setCurrentTab((event.detail.target as HTMLElement)?.id);
  }

  return (
    <>
      <OdsTabs onOdsTabsSelected={ onOdsTabsSelected }>
        <OdsTab id="tab-0" isSelected={ currentTab === 'tab-0' }>Tab 1</OdsTab>
        <OdsTab id="tab-1" isSelected={ currentTab === 'tab-1' }>Tab 2</OdsTab>
        <OdsTab id="tab-2" isSelected={ currentTab === 'tab-2' }>Tab 3</OdsTab>
      </OdsTabs>

      {
        currentTab === 'tab-0' &&
        <div>
          Panel tab 1
        </div>
      }

      {
        currentTab === 'tab-1' &&
        <div>
          Panel tab 2
        </div>
      }

      {
        currentTab === 'tab-2' &&
        <div>
          Panel tab 3
        </div>
      }
    </>
  );
};

export default Tabs;
