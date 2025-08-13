import { Combobox, ComboboxContent, ComboboxControl, type ComboboxControlProp, type ComboboxProp } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = ComboboxProp & ComboboxControlProp & {};

export default (prop: DemoProp) => (
  <Combobox
    allowCustomValue={ prop.allowCustomValue }
    defaultValue={ prop.defaultValue }
    disabled={ prop.disabled }
    highlightResults={ prop.highlightResults }
    invalid={ prop.invalid }
    items={[
      { label: 'Dog', value: 'dog' },
      { label: 'Cat', value: 'cat' },
      { label: 'Hamster', value: 'hamster' },
      { label: 'Parrot', value: 'parrot' },
      { label: 'Spider', value: 'spider' },
      { label: 'Goldfish', value: 'goldfish' },
    ]}
    multiple={ prop.multiple }
    newElementLabel={ prop.newElementLabel }
    noResultLabel={ prop.noResultLabel }
    readOnly={ prop.readOnly }>
    <ComboboxControl
      clearable={ prop.clearable }
      loading={ prop.loading }
      placeholder={ prop.placeholder } />

    <ComboboxContent />
  </Combobox>
);
