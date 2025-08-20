import { Combobox } from '@ovhcloud/ods-react';
import React, { type ReactElement } from 'react';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';

const items = [
  { label: 'Dog', value: 'dog' },
  { label: 'Cat', value: 'cat' },
  { label: 'Hamster', value: 'hamster' },
  { label: 'Parrot', value: 'parrot' },
  { label: 'Spider', value: 'spider' },
  { label: 'Goldfish', value: 'goldfish' },
];

function App(): ReactElement {
  return (
    <div>
      {/*<FormFormik />*/}
      {/*<FormHookForm />*/}
      {/*<FormNative />*/}

      <Combobox items={ items } />
    </div>
  );
}

export { App };
