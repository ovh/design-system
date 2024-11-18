import { useFormik } from 'formik';
import { OdsTextarea } from 'ods-components-react';
import { ChangeEvent, type ReactElement } from 'react';
import React from 'react-dom/client';

// eslint-disable-next-line func-style
const Textarea = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      textarea: '',
    },
    onSubmit: (values) => {
      console.log('Formik values', values);
    },
    validateOnMount: true,
  });

  function onOdsChange(e: ChangeEvent): void {
    console.log('React textarea odsChange');
  }

  return (
    <>
      <OdsTextarea name="ods-textarea"
        onOdsChange={ onOdsChange } />

      <OdsTextarea isDisabled
        name="ods-textarea-disabled"
        onOdsChange={ onOdsChange } />

      <OdsTextarea name="ods-textarea-formik"
        onOdsChange={ (e) => {
          onOdsChange(e);
          return formik.handleChange(e);
        } }
        value={ formik.values.textarea } />
    </>
  );
};

export default Textarea;
