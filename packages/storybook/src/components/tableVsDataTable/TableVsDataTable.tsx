import { CodeOrSourceMdx } from '@storybook/blocks';
import { Heading } from '../heading/Heading';
import React, { type JSX } from 'react';

const TableVsDataTable = (): JSX.Element => {
  return (
    <>
      <Heading label="Data Table vs Table" level={ 3 } />

      <p><CodeOrSourceMdx>Table</CodeOrSourceMdx>:</p>

      <ul>
        <li>Static data display.</li>
        <li>Limited or no interaction.</li>
        <li>Often used for simple layouts or read-only content.</li>
      </ul>

      <p><CodeOrSourceMdx>Data Table</CodeOrSourceMdx>:</p>

      <ul>
        <li>Interactive and stateful component.</li>
        <li>Supports sorting, selection, and actions.</li>
        <li>Integrated with application logic through composition.</li>
      </ul>
    </>
  );
};

export {
  TableVsDataTable,
};
