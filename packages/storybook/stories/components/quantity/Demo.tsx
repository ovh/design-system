import { Quantity, QuantityControl, QuantityInput, type QuantityInputProp, type QuantityProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = QuantityProp & QuantityInputProp & {};

export default (prop: DemoProp) => (
  <Quantity
    disabled={ prop.disabled }
    invalid={ prop.invalid }
    max={ prop.max }
    min={ prop.min }
    readOnly={ prop.readOnly }
    step={ prop.step }>
    <QuantityControl>
      <QuantityInput placeholder={ prop.placeholder } />
    </QuantityControl>
  </Quantity>
);
