import { OsdsTabBar, OsdsTabBarItem, OsdsTabPanel, OsdsTabs } from '@ovhcloud/ods-component-tabs/react';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

const DefaultPanel: React.FC = () => <div>Default panel</div>;
const ActivePanel: React.FC = () => <div>Active panel</div>;
const HoverPanel: React.FC = () => <div>Hover panel</div>;

const TabsUsage: React.FC = () => {
  const [panel, setActivePanel] = useState('');
  const [panel2, setActivePanel2] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActivePanel('hover');
    setActivePanel2(location.pathname.substring(1));
  }, []);

  useEffect(() => {
    setActivePanel2(location.pathname.substring(1));
  }, [location.pathname]);

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
        Static panels:
        <OsdsTabs panel={panel}>
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
        Dynamic panels:
        <OsdsTabs panel={panel2}>
          <OsdsTabBar slot="top">
            <OsdsTabBarItem panel="default">
              <Link to="/default">Default</Link>
            </OsdsTabBarItem>
            <OsdsTabBarItem panel="hover">
              <Link to="/hover">Hover</Link>
            </OsdsTabBarItem>
            <OsdsTabBarItem panel="active">
              <Link to="/active">Active</Link>
            </OsdsTabBarItem>
          </OsdsTabBar>
          <Routes>
            <Route path="/default" element={<DefaultPanel/>} />
            <Route path="/active" element={<ActivePanel/>} />
            <Route path="/hover" element={<HoverPanel/>} />
          </Routes>
        </OsdsTabs>
      </div>
    </div>
  );
};

export default TabsUsage;
