import React, { type ReactElement } from 'react';
// import { FormFormik } from './components/formFormik/FormFormik';
import { FormNative } from './components/formNative/FormNative';
import './app.scss';

function App(): ReactElement {
  return (
    <>
      {/*<FormFormik />*/}
      <FormNative />
    </>
  );
}

export { App };
