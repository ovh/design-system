import { type ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DemoManager } from './demos/manager/DemoManager';
import { DemoOrder } from './demos/order/DemoOrder';
import { Home } from './Home';
import style from './app.module.scss';


function App(): ReactElement {
  return (
    <div className={ style.app }>
      <Routes>
        <Route path="/manager" element={ <DemoManager /> } />
        <Route path="/order" element={ <DemoOrder /> } />
        <Route path="/*" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export { App };
