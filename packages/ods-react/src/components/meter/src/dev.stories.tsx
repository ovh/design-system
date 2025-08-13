import { useState } from 'react';
import { Meter } from '.';

export default {
  component: Meter,
  title: 'Meter dev',
};

export const Default = () => (
  <>
    <Meter value={ 0 } />
    <br />
    <Meter value={ 50 } />
    <br />
    <Meter value={ 100 } />
  </>
);

export const Thresholds = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        defaultValue={ 0 }
        max="100"
        min="0"
        onChange={ (e) => setValue(parseInt(e.target.value, 10)) }
        type="range" />

      <Meter
        high={ 66 }
        low={ 33 }
        value={ value } />
    </>
  );
};
