// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { type ReactElement } from 'react';
import styles from './app.scss';
// import { Gallery } from './components/gallery/Gallery';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
import { TestTimepicker } from './components/testTimepicker/TestTimepicker';
// import { TestAccordion } from './components/testAccordion/TestAccordion';
// import { TestModal } from './components/testModal/TestModal';
// import { TestSelect } from './components/testSelect/TestSelect';
// import { TestToggle } from './components/testToggle/TestToggle';

// const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      {/*<Gallery />*/}
      {/*<FormFormik />*/}
      {/*<FormHookForm />*/}
      {/* <FormNative /> */}
      {/* <TestAccordion /> */}
      {/*<QueryClientProvider client={queryClient}>*/}
      {/*  <TestSelect />*/}
      {/*</QueryClientProvider>*/}
      {/*<TestToggle />*/}
      <TestTimepicker timezones='all' className='' />
    </div>
  );
}

export { App };
