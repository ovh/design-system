import React from 'react';
import { OsdsDatagrid } from '@ovhcloud/ods-components/react';

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
    </div>
  );
};

export { App };
