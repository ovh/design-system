import React, { type ReactElement } from 'react';
// import { Gallery } from './components/gallery/Gallery';
import { FormFormik } from './components/formFormik/FormFormik';
// import { FormNative } from './components/formNative/FormNative';
import styles from './app.scss';

function App(): ReactElement {
  return (
    <div className={ styles.app }>
      {/* <Gallery /> */}
      <FormFormik />
      {/*<FormNative />*/}
    </div>
  );
}

export { App };
