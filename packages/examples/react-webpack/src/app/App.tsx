// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { type ReactElement } from 'react';
import styles from './app.scss';
// import { Gallery } from './components/gallery/Gallery';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormHookForm } from './components/formHookForm/FormHookForm';
// import { FormNative } from './components/formNative/FormNative';
// import { TestAccordion } from './components/testAccordion/TestAccordion';
// import { TestModal } from './components/testModal/TestModal';
// import { TestSelect } from './components/testSelect/TestSelect';
import { TestToggle } from './components/testToggle/TestToggle';
// import OdsPopover from '@ovhcloud/ods-components-react/ods-popover';

// const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      {/*<Gallery />*/}
      {/*<FormFormik />*/}
      {/*<FormHookForm />*/}
      {/*<FormNative />*/}
      {/*<TestAccordion />*/}
      {/*<TestModal />*/}
      {/*<QueryClientProvider client={ queryClient }>*/}
      {/*  <TestSelect />*/}
      {/*</QueryClientProvider>*/}
      <TestToggle />

      {/* KO: https://github.com/ionic-team/stencil-ds-output-targets/issues/588 */}
      {/*<button id="default">*/}
      {/*  Click me*/}
      {/*</button>*/}
      {/*<OdsPopover position="right"*/}
      {/*            // trigger-id="default-case"*/}
      {/*            triggerId="default">*/}
      {/*  Simple popover*/}
      {/*</OdsPopover>*/}
    </div>
  );
}

export { App };
