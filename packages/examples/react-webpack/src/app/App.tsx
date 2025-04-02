import React, { type ReactElement } from 'react';
import styles from './app.scss';
import { FormFormik } from './components/formFormik/FormFormik';
import { FormHookForm } from './components/formHookForm/FormHookForm';
import { FormNative } from './components/formNative/FormNative';

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      <FormFormik />
      <FormHookForm />
      <FormNative />
    </div>
  );
}

export { App };
