import { TABLE_VARIANT } from '@ovhcloud/ods-react';
import { CodeOrSourceMdx } from '@storybook/blocks';
import React, { type JSX, useMemo } from 'react';
import { type ProjectReflection } from 'typedoc';
import { ExternalLink } from '../externalLink/ExternalLink';
import { Table } from '../table/Table';
import { removeTags } from '../../helpers/docgen';
import { getHelperFunctionTypedoc } from '../../helpers/typedoc';
import styles from './helperSpecification.module.css';

type Props = {
  data: ProjectReflection,
  name: string,
}

const COLUMNS = ['Argument', 'Type', 'Default value', 'Description'];

const HelperSpecification = ({ data, name }: Props): JSX.Element => {
  const typedoc = useMemo(() => getHelperFunctionTypedoc(data, name), [data, name]);

  if (!typedoc) {
    return <></>;
  }

  return (
    <div>
      <p>
        { typedoc.description }
      </p>

      {
        typedoc.links.length > 0 &&
        <p>
          See also:

          <ul>
            {
              typedoc.links.map(({ href, label }, idx) => (
                <li key={ idx }>
                  <ExternalLink href={ href }>
                    { label }
                  </ExternalLink>
                </li>
              ))
            }
          </ul>
        </p>
      }

      <Table
        className={ styles['helper-specification__table'] }
        variant={ TABLE_VARIANT.striped }>
        <thead>
          <tr>
            {
              COLUMNS.map((column) => (
                <th key={ column }>
                  { column }
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            typedoc.arguments.map((argument, idx) => (
              <tr key={ idx }>
                <td>
                  { argument.name }
                </td>

                <td>
                  <CodeOrSourceMdx>
                    { argument.type }
                  </CodeOrSourceMdx>
                </td>

                <td>
                  <CodeOrSourceMdx>
                    {
                      argument.defaultValue === undefined ?
                        <div className={ styles['helper-specification__table__default-value'] }>undefined</div> :
                        argument.defaultValue
                    }
                  </CodeOrSourceMdx>
                </td>

                <td>
                  { removeTags(argument.description) || '-' }
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
  HelperSpecification,
};
