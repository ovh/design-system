import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsCheckbox, OdsDatepicker, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea } from '@ovhcloud/ods-components/react';
import { useFormik } from 'formik';
import React, { type ReactElement } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

const validationSchema = yup.object({
  checkbox: yup.string().nullable(),//.required(),
  date: yup.date().nullable(),//.required(),
  inputNumber: yup.number().nullable(),//.required(),
  inputText: yup.string().nullable().required(),
  password: yup.string().nullable().required(),
  phoneNumber: yup.string().nullable().required(),
  quantity: yup.number().nullable(),//.required(),
  radio: yup.string().nullable().required(),
  select: yup.string().nullable().required(),
  switch: yup.string().nullable().required(),
  textarea: yup.string().nullable().required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik({
    initialValues: {
      checkbox: null,
      date: new Date(),
      inputNumber: null,
      inputText: 'input text',
      password: 'password',
      phoneNumber: '0123456789',
      quantity: null,
      radio: 'radio-1',
      select: 'cat',
      switch: 'option1',
      textarea: 'textarea',
    },
    onSubmit: (values) => {
      console.log('Formik values', values);
    },
    validateOnMount: true,
    validationSchema,
  });

  function onCheckboxChange(e: any) {
    formik.setFieldValue('checkbox', e.detail.checked ? e.detail.value : null);
  }

  return (
    <form
      className={ styles['form-formik'] }
      onSubmit={ formik.handleSubmit }>
      {/* OK but need custom onChange handler */}
      {/* KO reset */}
      <div>
        <OdsCheckbox
          isChecked={ !!formik.values.checkbox }
          // isRequired={ true }
          inputId="checkbox"
          name="checkbox"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ onCheckboxChange }
          value="checked"
        />
        <label htmlFor="checkbox">Checked</label>
      </div>

      {/* OK */}
      <OdsDatepicker
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ formik.initialValues.date }
        hasError={ formik.touched.date && !!formik.errors.date }
        isClearable={ true }
        isRequired={ true }
        name="date"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.date }
      />

      {/* KO? reset to "" instead of null */}
      <OdsInput
        hasError={ formik.touched.inputNumber && !!formik.errors.inputNumber }
        isClearable={ true }
        isRequired={ true }
        name="inputNumber"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        type={ ODS_INPUT_TYPE.number }
        value={ formik.values.inputNumber }
      />

      {/* OK */}
      <OdsInput
        hasError={ formik.touched.inputText && !!formik.errors.inputText }
        isClearable={ true }
        isRequired={ true }
        name="inputText"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        type={ ODS_INPUT_TYPE.text }
        value={ formik.values.inputText }
      />


      {/* KO? clear trigger input Watch twice */}
      {/* KO style different */}
      <OdsPassword
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ formik.initialValues.password }
        hasError={ formik.touched.password && !!formik.errors.password }
        isClearable={ true }
        isRequired={ true }
        name="password"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.password }
      />

      {/* OK */}
      {/* KO style different */}
      <OdsPhoneNumber
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ formik.initialValues.phoneNumber }
        hasError={ formik.touched.phoneNumber && !!formik.errors.phoneNumber }
        isClearable={ true }
        isRequired={ true }
        isoCode="fr"
        name="phoneNumber"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.phoneNumber }
      />

      {/* KO reset to null set 0 instead */}
      {/* KO value 0 is not displayed in the input */}
      <OdsQuantity
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ formik.initialValues.quantity }
        hasError={ formik.touched.quantity && !!formik.errors.quantity }
        isRequired={ true }
        name="quantity"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.quantity }
      />

      {/* OK */}
      <div>
        <OdsRadio
          isChecked={ formik.values.radio === 'radio-1' }
          isRequired={ true }
          inputId="radio1"
          name="radio"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ formik.handleChange }
          value="radio-1"
        />
        <label htmlFor="radio1">Radio 1</label>

        <OdsRadio
          isChecked={ formik.values.radio === 'radio-2' }
          isRequired={ true }
          inputId="radio2"
          name="radio"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ formik.handleChange }
          value="radio-2"
        />
        <label htmlFor="radio2">Radio 2</label>
      </div>

      {/* OK */}
      <OdsSelect
        // @ts-ignore IDE try to match another react specific attribute
        defaultValue={ formik.initialValues.select }
        hasError={ formik.touched.select && !!formik.errors.select }
        isRequired={ true }
        name="select"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.select }
      >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>

      {/* KO Reset */}
      <OdsSwitch
        isRequired={ true }
        name="switch"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      >
        <OdsSwitchItem
          name="switch"
          isChecked={ formik.values.switch === 'option1' }
          value="option1"
        >
          Option 1
        </OdsSwitchItem>
        <OdsSwitchItem
          name="switch"
          isChecked={ formik.values.switch === 'option2' }
          value="option2"
        >
          Option 2
        </OdsSwitchItem>
      </OdsSwitch>

      {/* OK */}
      <OdsTextarea
        defaultValue={ formik.initialValues.textarea }
        hasError={ formik.touched.textarea && !!formik.errors.textarea }
        isRequired={ true }
        name="textarea"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        value={ formik.values.textarea }
      />

      {/*<input*/}
      {/*  name="hidden-input"*/}
      {/*  type="hidden"*/}
      {/*  value="should be present in form data" />*/}

      <p>
        Errors?
      </p>

      <p>{ JSON.stringify(formik.errors) }</p>

      <div>
        <button type="reset">
          Reset
        </button>

        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export { FormFormik };
