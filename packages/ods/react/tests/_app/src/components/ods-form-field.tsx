import React from 'react-dom/client';
import { OdsFormField, OdsInput, OdsText } from 'ods-components-react';

const FormField = () => {
  return (
    <OdsFormField error="Wrong format.">
      <OdsText slot="label" preset='label'>Description</OdsText>
      <OdsText slot="visual-hint" preset='caption'>02/11/1999</OdsText>
      <OdsInput name='input' />
      <OdsText slot="helper" preset='span'>A little helper text</OdsText>
    </OdsFormField>
  );
};

export default FormField;
