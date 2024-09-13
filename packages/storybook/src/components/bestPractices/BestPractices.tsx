import { Table } from '@storybook/components';
import React, { type ReactNode } from 'react';
import styles from './bestPractices.module.css';

type Props = {
  donts: ReactNode[],
  dos: ReactNode[],
}

const BestPractices = ({ donts, dos }: Props) => {
  return (
    <div>
      <Table className={ styles['best-practices__do-table'] }>
        <thead>
          <tr>
            <th className={ styles['best-practices__do-table__cell'] }>
              ✅ Do
            </th>
          </tr>
        </thead>

        <tbody>
          {
            dos.map((item, idx) => (
              <tr key={ idx }>
                <td className={ styles['best-practices__do-table__cell'] }>
                  { item }
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      <Table className={ styles['best-practices__dont-table'] }>
        <thead>
          <tr>
            <th className={ styles['best-practices__dont-table__cell'] }>
              ❌ Don't
            </th>
          </tr>
        </thead>

        <tbody>
          {
            donts.map((item, idx) => (
              <tr key={ idx }>
                <td className={ styles['best-practices__dont-table__cell'] }>
                  { item }
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export {
  BestPractices,
};
