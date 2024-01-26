import React from 'react';
import { OsdsDatagrid, OsdsInput, OsdsForm, OsdsButton, OsdsSelect, OsdsSelectOption, OsdsPassword } from '@ovhcloud/ods-components/react';
import { ODS_INPUT_TYPE, ODS_BUTTON_TYPE } from '@ovhcloud/ods-components';
import './App.css';

const App = () => {
  return (
    <div>
      <OsdsDatagrid
        id="datagridFormatter"
        isSelectable={ true }
        columns='[{"title":"First name", "field":"firstname", "isSortable": true}, {"title":"Last name", "field":"lastname", "isSortable": true}, {"title":"Gender", "field":"gender"}]'
        rows='[{"firstname":"Homer", "lastname":"Simpson", "gender": "Male"}, {"firstname":"Marge", "lastname":"Simpson", "gender": "Female"}]'
        height={ 300 }>
      </OsdsDatagrid>
      <OsdsForm
        id="osdsForm"
        initial-values='{ "user": "test", "password": "", "country": "fr" }'
        onOdsOnSubmit={(event) => {
          console.log('OdsOnSubmit', event.detail);
        }}
        onOdsOnReset={() => {
          console.log('OdsOnReset');
        }}>
        <div className="form-content">
          <label htmlFor="user">User</label>
          <OsdsInput id="user" name="user" inline type={ODS_INPUT_TYPE.text} clearable required>
          </OsdsInput>

          <label htmlFor="password">Password</label>
          <OsdsPassword name="password" inline></OsdsPassword>

          <label htmlFor="country">Country</label>
          <OsdsSelect id="country" name="country" inline>
            <span slot="placeholder"><i>Select</i> Country</span>
            <OsdsSelectOption value="fr">FR</OsdsSelectOption>
            <OsdsSelectOption value="gb">GB</OsdsSelectOption>
            <OsdsSelectOption value="pt">PT</OsdsSelectOption>
          </OsdsSelect>
        </div>
        <OsdsButton type={ODS_BUTTON_TYPE.reset} inline>Reset</OsdsButton>
        <OsdsButton type={ODS_BUTTON_TYPE.submit} inline>Submit</OsdsButton>
      </OsdsForm>
    </div>
  );
};

export { App };
