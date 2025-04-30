import { ICON_NAME, Icon, Link } from '@ovhcloud/ods-react';
import { CodeOrSourceMdx } from '@storybook/blocks';
import { Table } from '@storybook/components';
import React from 'react';
import { Heading } from '../heading/Heading';
import { type Component } from '../../helpers/docgen';
import styles from './classModule.module.css';

type Props = {
  component: Component,
  extraAttributeInfo?: {
    name: string,
    url: string,
  },
}

const ClassModule = ({ component, extraAttributeInfo }: Props) => {
  return (
    <>
      <Heading label={ component.name } level={ 2 } />

      {
        extraAttributeInfo &&
        <p>
          This component extends all the native <Link href={ extraAttributeInfo.url } target="_blank">{ extraAttributeInfo.name } attributes</Link>.
        </p>
      }

      {
        component.props.length <= 0 ?
          <p>
            This component has no specific properties.
          </p> :
          <Table>
            <thead className={ styles['class-module__properties__header'] }>
            <tr>
              <td>Property</td>
              <td>Type</td>
              <td>Required</td>
              <td>Default value</td>
            </tr>
            </thead>

            <tbody className={ styles['class-module__properties__body'] }>
            {
              component.props.map((prop, idx) => (
                <tr key={ idx }>
                  <td>
                    { prop.name }
                  </td>

                  <td>
                    <CodeOrSourceMdx>
                      { prop.type }
                    </CodeOrSourceMdx>
                  </td>

                  <td className={ styles['class-module__properties__body__is-required'] }>
                    {
                      prop.isOptional ? '-' :
                        <Icon aria-label="Required"
                              className={ styles['class-module__properties__body__is-required--required'] }
                              name={ ICON_NAME.check } />
                    }
                  </td>

                  <td>
                    <CodeOrSourceMdx>
                      {
                        prop.defaultValue === undefined ?
                          <div className={ styles['class-module__properties__body__default-value'] }>undefined</div> :
                          prop.defaultValue
                      }
                    </CodeOrSourceMdx>
                  </td>
                </tr>
              ))
            }
            </tbody>
          </Table>
      }
    </>
  );
};

export {
  ClassModule,
};
