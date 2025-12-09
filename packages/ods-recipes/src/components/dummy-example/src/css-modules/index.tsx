import { type JSX } from 'react';
import style from './index.module.scss';

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
