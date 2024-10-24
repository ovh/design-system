import React, { type ReactElement } from 'react';
// import { Gallery } from './components/gallery/Gallery';
// import { FormFormik } from './components/formFormik/FormFormik';
// import { FormNative } from './components/formNative/FormNative';
import { TestModal } from './components/testModal/TestModal';
import styles from './app.scss';

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      {/* <Gallery /> */}
      {/*<FormFormik />*/}
      {/*<FormNative />*/}
      <TestModal />
    </div>
  );
}

export { App };
