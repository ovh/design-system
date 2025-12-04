import { type JSX } from 'react';
import style from './index.module.css';

const DummyExample = (): JSX.Element => {
  return (
    <div className={ style['dummy-example'] }>
      Dummy Example CSS Modules
    </div>
  );
};

export {
  DummyExample,
};
