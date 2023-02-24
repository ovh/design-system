import React from 'react'
import reactLogo from './assets/react.svg'
import odsLogo from './assets/ods.svg'

// for each react component you use from `ODS`, use this import:
import { OsdsText } from '@ovhcloud/ods-stencil/components/react';

// for each component's type you use from ODS, you will need to import the core or theming:
import { Ods, OdsTextSize } from '@ovhcloud/ods-core';
import { OdsThemeColorHue, OdsThemeColorIntent } from '@ovhcloud/ods-theming';

// you can directly import the generated ods theme here, or through the application css (app.css)
import '@ovhcloud/ods-theme-blue-jeans/index.css';
import './App.css';

import Demo from './demo/Demo';

Ods.instance().logging(true);

const App: React.FC = () => {
  return (
    <div className="ods-theme">
      <div>
        <a href="http://go/odsdoc" target="_blank" rel="noopener noreferrer">
          <img src={odsLogo} className="logo ODS" alt="ODS logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={'ods-heading-800'}>ODS + React</h1>
      <div className={'ods-caption-200'}>
        <p>
          <OsdsText color={OdsThemeColorIntent.info} size={OdsTextSize._100}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </OsdsText>
        </p>
      </div>
      <p>
        <OsdsText color={OdsThemeColorIntent.default} size={OdsTextSize._200} hue={OdsThemeColorHue._600}>
          Click on the ODS, Vite or React logos to learn more
        </OsdsText>
      </p>
      <Demo />
    </div>
  )
}

export default App
