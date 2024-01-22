import React from 'react';
import { OsdsDatagrid, OsdsInput, OsdsForm, OsdsButton } from '@ovhcloud/ods-components/react';
import { ODS_INPUT_TYPE, ODS_BUTTON_TYPE } from '@ovhcloud/ods-components';

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
        initial-values='{ "user": "test", "password": "" }'
        onOdsOnSubmit={(event) => {
          console.log('OdsOnSubmit', event.detail);
        }}
        onOdsOnReset={() => {
          console.log('OdsOnReset');
        }}>
        <div>
          <OsdsInput name="user" inline type={ODS_INPUT_TYPE.text} clearable>
          </OsdsInput>

          <OsdsInput type={ODS_INPUT_TYPE.password} name="password" inline></OsdsInput>
        </div>
        <OsdsButton type={ODS_BUTTON_TYPE.reset} inline>Reset</OsdsButton>
        <OsdsButton type={ODS_BUTTON_TYPE.submit} inline>Submit</OsdsButton>
      </OsdsForm>
    </div>
  );
};

export { App };
