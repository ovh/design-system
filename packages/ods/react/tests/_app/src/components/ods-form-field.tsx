import React from 'react-dom/client';
import OdsFormField from '@ovhcloud/ods-components-react/ods-form-field';

const FormField = () => {
  return (
    <OdsFormField error="Wrong format.">
      <label slot="label">Description</label>
      <span slot="visual-hint">02/11/1999</span>
      <input name="input" />
      <span slot="helper">A little helper text</span>
    </OdsFormField>
  );
};

export default FormField;
