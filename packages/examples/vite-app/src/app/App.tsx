import { type ReactElement } from 'react';
import { ICON_NAME, Code, Icon } from '@ovhcloud/ods-react';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
import style from './app.module.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      <p>
        Hello Moje życie Podróże à&é... <Icon name={ ICON_NAME.email } />
      </p>

      <p style={{ fontStyle: 'italic' }}>
        Hello Moje życie Podróże à&é...
      </p>

      <Code>
        import something from somewhere
      </Code>

      <Code style={{ fontStyle: 'italic' }}>
        import something from somewhere
      </Code>
      {/*<FormFormik />*/}
      {/*<FormHookForm />*/}
      {/*<FormNative />*/}
    </div>
  );
}

export { App };
