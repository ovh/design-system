import { ODS_INPUT_TYPE } from '@ovhcloud/ods-components';
import { OdsButton, OdsCheckbox, OdsDatepicker, OdsInput, OdsPassword, OdsPhoneNumber, OdsQuantity, OdsRadio, OdsRange, OdsSelect, OdsSwitch, OdsSwitchItem, OdsTextarea, OdsTimepicker, OdsToggle } from '@ovhcloud/ods-components/react';
import { useFormik } from 'formik';
import React, { type ReactElement, useState } from 'react';
import * as yup from 'yup';
import styles from './formFormik.scss';

type FormData = {
  checkboxAlone: string,
  checkboxGroup: string,
  datepicker: Date,
  inputNumber: number,
  inputText: string,
  password: string,
  phoneNumber: string,
  phoneNumberWithCountries: string,
  quantity: number,
  radio: string,
  range: number,
  rangeDual: [number, number],
  select: string,
  switch: string,
  textarea: string,
  timepicker: string,
  toggle: boolean,
}

const validationSchema = yup.object<FormData>({
  checkboxAlone: yup.string().nullable(),//.required(),
  checkboxGroup: yup.string().nullable(),//.required(),
  datepicker: yup.date().nullable(),//.required(),
  inputNumber: yup.number().nullable(),//.required(),
  inputText: yup.string().nullable(),//.required(),
  password: yup.string().nullable(),//.required(),
  phoneNumber: yup.string().nullable(),//.required(),
  quantity: yup.number().nullable(),//.required(),
  radio: yup.string().nullable(),//.required(),
  radioTest: yup.string().nullable(),//.required(),
  range: yup.number().nullable(),//.required(),
  rangeDual: yup.array().of(yup.number()).length(2).nullable(),//.required(),
  select: yup.string().nullable(),//.required(),
  switch: yup.string().nullable(),//.required(),
  textarea: yup.string().nullable(),//.required(),
  timepicker: yup.string().nullable(),//.required(),
  toggle: yup.boolean().nullable(),//.required(),
});

function FormFormik(): ReactElement {
  const formik = useFormik<Omit<FormData, 'datepicker'> & { datepicker: string }>({
    initialValues: {
      checkboxAlone: 'checkbox alone',
      // checkboxGroup: 'checkbox group1,checkbox group2',
      checkboxGroup: 'checkbox group1',
      datepicker: '01-02-2000',
      inputNumber: 33,
      inputText: 'default input text',
      password: 'default password',
      phoneNumber: '0123456789',
      phoneNumberWithCountries: '+33123456789',
      quantity: 0,
      radio: 'radio1',
      range: 0,
      rangeDual: [0, 1],
      select: 'cat',
      switch: 'switch1',
      textarea: 'default textarea',
      timepicker: '01:23',
      toggle: true,
    },
    onSubmit: (values) => {
      console.log('Formik values', values);
    },
    validateOnMount: true,
    validationSchema,
  });
  const [areAllRequired, setAreAllRequired] = useState(true);

  function onAllRequiredToggle(): void {
    setAreAllRequired(() => !areAllRequired);
  }

  return (
    <form
      className={ styles['form-formik'] }
      onSubmit={ formik.handleSubmit }>
      <div>
        <button
          onClick={ onAllRequiredToggle }
          type="button">
          Toggle All Required (broken)
        </button>
      </div>

      <p>
        Current configuration:
        <br />
        - All fields required: { areAllRequired.toString() }
      </p>

      <div>
        <OdsCheckbox
          inputId="checkboxAlone"
          isChecked={ formik.initialValues.checkboxAlone === 'checkbox alone' }
          isRequired={ areAllRequired }
          name="checkboxAlone"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ (e) => {
            formik.setFieldValue('checkboxAlone', e.detail.checked ? 'checkbox alone' : null);
          }}
          value="checkbox alone"
        />
        <label htmlFor="checkboxAlone">Checkbox Alone</label>
      </div>

      <div>
        <OdsCheckbox
          inputId="checkboxGroup1"
          isChecked={ formik.initialValues.checkboxGroup.split(',').indexOf('checkbox group1') >= 0 }
          isRequired={ areAllRequired }
          name="checkboxGroup"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ (e) => {
            formik.setFieldValue('checkboxGroup', e.detail.checked ? e.detail.value : null);
          }}
          value="checkbox group1"
        />
        <label htmlFor="checkboxGroup1">Checkbox Group 1</label>

        <OdsCheckbox
          inputId="checkboxGroup2"
          isChecked={ formik.initialValues.checkboxGroup.split(',').indexOf('checkbox group2') >= 0 }
          isRequired={ areAllRequired }
          name="checkboxGroup"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ (e) => {
            formik.setFieldValue('checkboxGroup', e.detail.checked ? e.detail.value : null);
          }}
          value="checkbox group2"
        />
        <label htmlFor="checkboxGroup2">Checkbox Group 2</label>
      </div>

      <OdsDatepicker
        defaultValue={ formik.initialValues.datepicker }
        hasError={ formik.touched.datepicker && !!formik.errors.datepicker }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="datepicker"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsInput
        defaultValue={ formik.initialValues.inputNumber }
        hasError={ formik.touched.inputNumber && !!formik.errors.inputNumber }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputNumber"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        type={ ODS_INPUT_TYPE.number }
      />

      <OdsInput
        defaultValue={ formik.initialValues.inputText }
        hasError={ formik.touched.inputText && !!formik.errors.inputText }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="inputText"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
        type={ ODS_INPUT_TYPE.text }
      />

      <OdsPassword
        defaultValue={ formik.initialValues.password }
        hasError={ formik.touched.password && !!formik.errors.password }
        isClearable={ true }
        isRequired={ areAllRequired }
        name="password"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsPhoneNumber
        defaultValue={ formik.initialValues.phoneNumber }
        hasError={ formik.touched.phoneNumber && !!formik.errors.phoneNumber }
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumber"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsPhoneNumber
        countries="all"
        defaultValue={ formik.initialValues.phoneNumberWithCountries }
        hasError={ formik.touched.phoneNumberWithCountries && !!formik.errors.phoneNumberWithCountries }
        isClearable={ true }
        isRequired={ areAllRequired }
        isoCode="fr"
        name="phoneNumberWithCountries"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsQuantity
        defaultValue={ formik.initialValues.quantity }
        hasError={ formik.touched.quantity && !!formik.errors.quantity }
        isRequired={ areAllRequired }
        name="quantity"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <div>
        <OdsRadio
          isChecked={ formik.initialValues.radio === 'radio1' }
          isRequired={ areAllRequired }
          inputId="radio1"
          name="radio"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ (e) => {
            formik.setFieldValue('radio', e.detail.checked ? e.detail.value : null);
          }}
          value="radio1"
        />
        <label htmlFor="radio1">Radio 1</label>

        <OdsRadio
          isChecked={ formik.initialValues.radio === 'radio2' }
          isRequired={ areAllRequired }
          inputId="radio2"
          name="radio"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ (e) => {
            formik.setFieldValue('radio', e.detail.checked ? e.detail.value : null);
          }}
          value="radio2"
        />
        <label htmlFor="radio2">Radio 2</label>
      </div>

      <div style={{ display: 'inline-flex' }}>
        <OdsRange
          defaultValue={ formik.initialValues.range }
          hasError={ formik.touched.range && !!formik.errors.range }
          isRequired={ areAllRequired }
          name="range"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ formik.handleChange}
        ></OdsRange>

        <OdsRange
          defaultValue={ formik.initialValues.rangeDual as [number, number] & string }
          hasError={ formik.touched.rangeDual && !!formik.errors.rangeDual }
          isRequired={ areAllRequired }
          name="rangeDual"
          onOdsBlur={ formik.handleBlur }
          onOdsChange={ formik.handleChange}
        ></OdsRange>
      </div>

      <OdsSelect
        defaultValue={ formik.initialValues.select }
        hasError={ formik.touched.select && !!formik.errors.select }
        isRequired={ areAllRequired }
        name="select"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      >
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </OdsSelect>

      <OdsSwitch
        isRequired={ areAllRequired }
        name="switch"
        onOdsChange={ (e) => {
          formik.setFieldValue('switch', e.detail.value || '');
        }}
      >
        <OdsSwitchItem
          isChecked={ formik.initialValues.switch === 'switch1' }
          value="switch1">
          Switch 1
        </OdsSwitchItem>

        <OdsSwitchItem
          isChecked={ formik.initialValues.switch === 'option2' }
          value="switch2">
          Switch 2
        </OdsSwitchItem>
      </OdsSwitch>

      <OdsTextarea
        defaultValue={ formik.initialValues.textarea }
        hasError={ formik.touched.textarea && !!formik.errors.textarea }
        isRequired={ areAllRequired }
        name="textarea"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsTimepicker
        defaultValue={ formik.initialValues.timepicker }
        hasError={ formik.touched.timepicker && !!formik.errors.timepicker }
        isRequired={ areAllRequired }
        name="timepicker"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <OdsToggle
        // @ts-ignore IDE is confused with React attribute
        defaultValue={ formik.initialValues.toggle }
        hasError={ formik.touched.toggle && !!formik.errors.toggle }
        isRequired={ areAllRequired }
        name="toggle"
        onOdsBlur={ formik.handleBlur }
        onOdsChange={ formik.handleChange }
      />

      <p>
        Errors:
        <br />
        { JSON.stringify(formik.errors) }
      </p>

      <div>
        <OdsButton
          label="Reset button"
          type="reset"
          variant="outline" />

        <OdsButton
          label="Submit button"
          type="submit" />
      </div>
    </form>
  );
}

export { FormFormik };
