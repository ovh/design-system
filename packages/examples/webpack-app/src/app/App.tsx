import React, { type ReactElement } from 'react';
import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
import style from './app.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      <FormFormik />
      {/*<FormHookForm />*/}
      {/*<FormNative />*/}
    </div>
  );
}

export { App };
