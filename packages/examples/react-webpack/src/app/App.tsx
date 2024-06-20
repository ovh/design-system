import { OdsSwitch, OdsSwitchItem, OdsTextarea } from '@ovhcloud/ods-components/react';
import { useFormik } from 'formik';
import React, { type ReactElement, useRef } from 'react';
import './app.scss';

function App(): ReactElement {
  const formRef = useRef(null);
  const textareaRef = useRef(null);
  const switchItem = useRef(['1', '2']);

  const formik = useFormik({
    initialValues: {
      switch: '2',
      textarea: 'qsdqsd',
    },
    onSubmit: (values) => {
      console.log('formik values', values);
    },
  });

  return (
    <form ref={formRef}
      onSubmit={formik.handleSubmit}>

      <OdsTextarea ref={textareaRef}
        name="textarea"
        onOdsChange={ formik.handleChange }
        value={ formik.values.textarea }
      />

      <OdsSwitch name="switch" onOdsChange={ formik.handleChange }>
        { switchItem.current.map((item) => <OdsSwitchItem key={ item } isChecked={ formik.values.switch === item } value={ item }>Value { item }</OdsSwitchItem>) }
      </OdsSwitch>

      <input name="hidden-input"
        type="hidden"
        value="should be present in form data" />

      <button type="reset">
        Reset
      </button>

      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export { App };
