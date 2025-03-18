import { Table } from '@storybook/components';
import React from 'react';

const DatepickerFormatsTable = (): React.JSX.Element => {
  const formats = [
    { description: 'Day of the month without leading zero', example: '1, 2, ..., 31', token: 'd' },
    { description: 'Day of the month with leading zero', example: '1, 2, ..., 31', token: 'dd' },
    { description: 'Shortened day name of the week', example: 'Sun, Mon, ..., Sat', token: 'D' },
    { description: 'Full day name of the week', example: 'Sunday, Monday, ..., Saturday', token: 'DD' },
    { description: 'Numeric month without leading zero', example: '1, 2, ..., 12', token: 'm' },
    { description: 'Numeric month with leading zero', example: '01, 02, ..., 12', token: 'mm' },
    { description: 'Shortened month name', example: 'Jan, Feb, ..., Dec', token: 'M' },
    { description: 'Full month name', example: 'January, February, ..., December', token: 'MM' },
    { description: 'Year without leading zero', example: '1, 645, 1900, 2020', token: 'y' },
    { description: '4-digit year with leading zero', example: '0001, 0645, 1900, 2020', token: 'yyyy' },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>
            Token
          </th>
          <th>
            Description
          </th>
          <th>
            Example
          </th>
        </tr>
      </thead>

      <tbody>
        {
          formats.map((format) => (
            <tr key={format.token}>
              <td>
                { format.token }
              </td>
              <td>
                { format.description }
              </td>
              <td>
                { format.example }
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export {
  DatepickerFormatsTable,
};
