import { Select, SelectContent, SelectControl, type SelectControlProp, type SelectProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = SelectProp & SelectControlProp & {};

export default (prop: DemoProp) => (
  <Select
    disabled={ prop.disabled }
    fitControlWidth={ prop.fitControlWidth }
    invalid={ prop.invalid }
    items={[
      { label: 'Dog', value:'dog' },
      { label: 'Cat', value:'cat' },
      { label: 'Hamster', value:'hamster' },
      { label: 'Parrot', value:'parrot' },
      { label: 'Spider', value:'spider' },
      { label: 'Goldfish', value:'goldfish' },
    ]}
    multiple={ prop.multiple }
    readOnly={ prop.readOnly }>
    <SelectControl
      multipleSelectionLabel={ prop.multipleSelectionLabel }
      placeholder={ prop.placeholder } />

    <SelectContent />
  </Select>
);
