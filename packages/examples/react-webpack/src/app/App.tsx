import React from 'react';
import {
  OsdsButton,
  OsdsDatepicker,
  OsdsForm,
  OsdsInput,
  OsdsPassword,
  OsdsSelect,
  OsdsSelectOption,
  OsdsTextarea,
} from '@ovhcloud/ods-components/react';
import { ODS_INPUT_TYPE, ODS_BUTTON_TYPE } from '@ovhcloud/ods-components';
import './App.css';

const initialValue = {
  country: '',
  date: new Date(),
  password: '',
  textarea: '',
  user: '',
}

const App = () => {
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

          <label htmlFor="date">
            Date
          </label>
          <OsdsDatepicker inline
                          name="date"
                          required>
          </OsdsDatepicker>
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
