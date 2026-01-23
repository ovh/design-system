import { type ReactElement } from 'react';
import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
import style from './app.module.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      Hello
      <FormFormik />
      {/*<FormHookForm />*/}
      {/*<FormNative />*/}
    </div>
  );
}

export { App };
