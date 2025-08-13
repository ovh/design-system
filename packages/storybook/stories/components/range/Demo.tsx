import { Range, type RangeProp } from '@ovhcloud/ods-react';
import React, { useEffect, useState } from 'react';

type DemoProp = RangeProp & {
  dualRange?: boolean,
};

export default (prop: DemoProp) => {
  const MAX_VALUE = 100;
  const [values, setValues] = useState([0]);

  useEffect(() => {
    if (prop.dualRange) {
      const step = prop.step || 1;
      const newValue = values[0] === MAX_VALUE ? values[0] - step : values[0];
      setValues([newValue, newValue + step]);
    } else {
      setValues([values[0]]);
    }
  }, [prop.dualRange, prop.step]);

  return (
    <Range
      { ...prop }
      max={ MAX_VALUE }
      onDragging={ ({ value }) => setValues(value) }
      value={ values } />
  );
};
