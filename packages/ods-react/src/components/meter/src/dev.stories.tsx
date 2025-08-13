import { useState } from 'react';
import { Meter } from '.';
import style from './dev.module.css';

export default {
  component: Meter,
  title: 'Meter dev',
};

export const CustomStyle = () => (
  <>
    <Meter
      className={ style['custom-meter'] }
      value={ 0 } />
    <br />
    <Meter
      className={ style['custom-meter'] }
      low={ 30 }
      value={ 20 } />
    <br />
    <Meter
      className={ style['custom-meter'] }
      value={ 50 } />
    <br />
    <Meter
      className={ style['custom-meter'] }
      high={ 70 }
      low={ 30 }
      optimum={ 20 }
      value={ 80 } />
  </>
);

export const Default = () => (
  <>
    <Meter value={ 0 } />
    <br />
    <Meter value={ 50 } />
    <br />
    <Meter value={ 100 } />
  </>
);

export const Optimum = () => {
  const [high, setHigh] = useState(66);
  const [low, setLow] = useState(33);
  const [optimum, setOptimum] = useState(50);
  const [value, setValue] = useState(0);

  return (
    <>
      <div>
        <span>Low: </span>

        <input
          type="number"
          onChange={ (e) => setLow(parseInt(e.target.value, 10)) }
          value={ low } />
      </div>

      <div>
        <span>High: </span>

        <input
          type="number"
          onChange={ (e) => setHigh(parseInt(e.target.value, 10)) }
          value={ high } />
      </div>

      <div>
        <span>Optimum: </span>

        <input
          type="number"
          onChange={ (e) => setOptimum(parseInt(e.target.value, 10)) }
          value={ optimum } />
      </div>

      <div>
        <span>Value: { value }</span>
        <br />
        <input
          defaultValue={ 0 }
          max="100"
          min="0"
          onChange={ (e) => setValue(parseInt(e.target.value, 10)) }
          type="range" />
      </div>

      <Meter
        high={ high }
        low={ low }
        optimum={ optimum }
        value={ value } />
    </>
  );
};


export const Thresholds = () => {
  const [high, setHigh] = useState(66);
  const [low, setLow] = useState(33);
  const [value, setValue] = useState(0);

  return (
    <>
      <div>
        <span>Low: </span>

        <input
          type="number"
          onChange={ (e) => setLow(parseInt(e.target.value, 10)) }
          value={ low } />
      </div>

      <div>
        <span>High: </span>

        <input
          type="number"
          onChange={ (e) => setHigh(parseInt(e.target.value, 10)) }
          value={ high } />
      </div>

      <div>
        <span>Value: { value }</span>
        <br />
        <input
          defaultValue={ 0 }
          max="100"
          min="0"
          onChange={ (e) => setValue(parseInt(e.target.value, 10)) }
          type="range" />
      </div>

      <Meter
        high={ high }
        low={ low }
        value={ value } />
    </>
  );
};
