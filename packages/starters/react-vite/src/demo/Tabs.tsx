import React, { useState, useEffect } from 'react';
import { OsdsTabs, OsdsTabBar, OsdsTabBarItem, OsdsTabPanel, OsdsLink } from '@ovhcloud/ods-stencil/components/react';
import { useLocation, } from 'react-router-dom';

const DefaultPanel: React.FC = () => <div>Default panel</div>;
const ActivePanel: React.FC = () => <div>Active panel</div>;
const HoverPanel: React.FC = () => <div>Hover panel</div>;

const TabsUsage: React.FC = () => {
  const [panel, setActivePanel] = useState('');
  const [panel2, setActivePanel2] = useState('');
  let location = useLocation();

  useEffect(() => {
    setActivePanel('hover');
    setActivePanel2(location.pathname.substring(1));
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => setActivePanel(panel === 'active' ? 'hover' : 'active')}
        >
          Update panel
        </button>
      </div>
      <div>
        <OsdsTabs panelActive={panel} tabsId="tabs-1">
          <OsdsTabBar slot="top">
            <OsdsTabBarItem panel="default">Default</OsdsTabBarItem>
            <OsdsTabBarItem panel="hover">Hover</OsdsTabBarItem>
            <OsdsTabBarItem panel="active">Active</OsdsTabBarItem>
          </OsdsTabBar>
          <OsdsTabPanel name="default">Default</OsdsTabPanel>
          <OsdsTabPanel name="hover">Hover</OsdsTabPanel>
          <OsdsTabPanel name="active">Active</OsdsTabPanel>
        </OsdsTabs>
      </div>
      <div>
        <OsdsTabs panelActive={panel2} tabsId="tabs-2">
          <OsdsTabBar slot="top">
            <OsdsTabBarItem panel="default">
              <OsdsLink color="primary" href="/default">
                Default
              </OsdsLink>
            </OsdsTabBarItem>
            <OsdsTabBarItem panel="hover">
              <OsdsLink color="primary" href="/hover">
                Hover
              </OsdsLink>
            </OsdsTabBarItem>
            <OsdsTabBarItem panel="active">
              <OsdsLink color="primary" href="/active">
                Active
              </OsdsLink>
            </OsdsTabBarItem>
          </OsdsTabBar>
          <OsdsTabPanel name="default">
            <DefaultPanel/>
          </OsdsTabPanel>
          <OsdsTabPanel name="hover">
            <ActivePanel/>
          </OsdsTabPanel>
          <OsdsTabPanel name="active">
            <HoverPanel/>
          </OsdsTabPanel>
        </OsdsTabs>
      </div>
    </div>
  );
};

export default TabsUsage;
