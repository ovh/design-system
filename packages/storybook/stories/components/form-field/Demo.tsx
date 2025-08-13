import { FormField, FormFieldError, FormFieldHelper, FormFieldLabel, type FormFieldProp, Textarea } from '@ovhcloud/ods-react';
import React from 'react';

type DemoProp = FormFieldProp & {
  errorText?: string,
  helperText?: string,
  label?: string,
};

export default (prop: DemoProp) => (
  <FormField invalid={ prop.invalid }>
    <FormFieldLabel>
      { prop.label }
    </FormFieldLabel>

    <Textarea />

    <FormFieldHelper>
      { prop.helperText }
    </FormFieldHelper>

    <FormFieldError>
      { prop.errorText }
    </FormFieldError>
  </FormField>
);
