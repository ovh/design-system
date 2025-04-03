import React from 'react-dom/client';
import { OdsTable } from 'ods-components-react';

const Table = () => {
  return (
    <OdsTable>
      <table>
        <caption>
          Front-end web developer course 2021
        </caption>
        <thead>
        <tr>
          <th scope="col">Person</th>
          <th scope="col">Most interest in</th>
          <th scope="col">Age</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Chris</th>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <th scope="row">Dennis</th>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        </tbody>
      </table>
    </OdsTable>
  );
};

export default Table;
