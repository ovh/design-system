import React, { type ReactElement } from 'react';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
import { FormNative } from './components/formNative/FormNative';

function App(): ReactElement {
  return (
    <div>
      {/*<FormFormik />*/}
      {/*<FormHookForm />*/}
      <FormNative />
    </div>
  );
}

export { App };
