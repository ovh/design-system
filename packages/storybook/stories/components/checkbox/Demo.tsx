import { Checkbox, CheckboxControl, CheckboxLabel, type CheckboxProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = CheckboxProp & {
  label?: string,
};

export default (prop: DemoProp) => (
  <Checkbox
    disabled={ prop.disabled }
    invalid={ prop.invalid }>
    <CheckboxControl />

    <CheckboxLabel>
      { prop.label }
    </CheckboxLabel>
  </Checkbox>
);
