import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { OsdsText } from './components/stencil-generated';
import '@ovhcloud/ods-theme-blue-jeans';

ReactDOM.render(
  <StrictMode>
    <OsdsText>
      Osds Text React
    </OsdsText>
  </StrictMode>,
  document.getElementById('root')
);
