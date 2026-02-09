import { type ReactElement } from 'react';
import style from './app.module.scss';

function App(): ReactElement {
  return (
    <div className={ style.app }>
      Demo ODS
    </div>
  );
}

export { App };
