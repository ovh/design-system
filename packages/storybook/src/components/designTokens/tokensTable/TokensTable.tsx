import { TABLE_SIZE } from '@ovhcloud/ods-react';
import React, { type FC, type JSX } from 'react';
import { Table } from '../../table/Table';
import { type Token } from '../../../constants/designTokens';
import { TokenPreview } from '../tokenPreview/TokenPreview';

interface TokenTableProp {
  tokens: Token[],
}

const TokensTable: FC<TokenTableProp> = ({ tokens }): JSX.Element => {
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
                <TokenPreview token={ token } />
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
