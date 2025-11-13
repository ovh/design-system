import { Table as OdsTable, type TableProp } from '@ovhcloud/ods-react';
import React, { type JSX } from 'react';

// We need to separate the Table we use in the storybook from the component we display in the canvas
// to manage the dark theme token override.
// This should be useless when Table tokens will be moved to theme token too.
const Table = ({ children, ...prop }: TableProp): JSX.Element => {
  return (
    <OdsTable
      { ...prop }
      data-storybook="table">
      { children }
    </OdsTable>
  );
};

export {
  Table,
};
