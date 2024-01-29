import React, { useRef } from 'react';
import { OsdsInput, OsdsForm, OsdsButton, OsdsSelect, OsdsSelectOption, OsdsPassword, OsdsTextarea } from '@ovhcloud/ods-components/react';
import { ODS_INPUT_TYPE, ODS_BUTTON_TYPE } from '@ovhcloud/ods-components';
import './App.css';

const initialValue = {
  country: '',
  password: '',
  textarea: '',
  user: '',
}

const App = () => {
  const formRef = useRef(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log(formData)
    }
  }

  function onReset() {
    console.log('form reset')
  }

  return (
    <div>
      <OsdsForm
        id="osdsForm"
        initialValues={ initialValue }
        onOdsOnSubmit={(event) => {
          console.log('OdsOnSubmit', event.detail);
        }}
        onOdsOnReset={() => {
          console.log('OdsOnReset');
        }}>
        <div className="form-content">
          <label htmlFor="user">
            User
          </label>
          <OsdsInput
            clearable
            id="user"
            inline
            name="user"
            type={ ODS_INPUT_TYPE.text }
            required>
          </OsdsInput>

          <label htmlFor="password">
            Password
          </label>
          <OsdsPassword
            inline
            name="password"
            required>
          </OsdsPassword>

          <label htmlFor="textarea">
            Textarea
          </label>
          <OsdsTextarea
            inline
            name="textarea"
            required>
          </OsdsTextarea>

          <label htmlFor="country">
            Country
          </label>
          <OsdsSelect
            inline
            name="country"
            required>
            <span slot="placeholder"><i>Select</i> Country</span>
            <OsdsSelectOption value="fr">FR</OsdsSelectOption>
            <OsdsSelectOption value="gb">GB</OsdsSelectOption>
            <OsdsSelectOption value="pt">PT</OsdsSelectOption>
          </OsdsSelect>
        </div>

        <OsdsButton type={ ODS_BUTTON_TYPE.reset } inline>
          Reset
        </OsdsButton>
        <OsdsButton type={ ODS_BUTTON_TYPE.submit } inline>
          Submit
        </OsdsButton>
      </OsdsForm>
    </div>
  );
};

export { App };
