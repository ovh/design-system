import { TABLE_SIZE, Table } from '@ovhcloud/ods-react';
import React, { type FC, type ReactNode } from 'react';

interface TokenTableProps {
  category: string,
  tokens: Array<{
    name: string,
    preview: ReactNode,
    value: string,
  }>;
}

const TokensTable: FC<TokenTableProps> = ({ tokens }) => {
  return (
    <Table size={ TABLE_SIZE.sm }>
      <thead>
        <tr>
          <th>
            Token
          </th>

          <th>
            Value
          </th>

          <th>
            Preview
          </th>
        </tr>
      </thead>

      <tbody>
        {
          tokens.map((token) => (
            <tr key={ token.name }>
              <td>
                { token.name }
              </td>

              <td>
                { token.value }
              </td>

              <td>
                { token.preview }
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export {
  TokensTable,
};
