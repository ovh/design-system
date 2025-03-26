import { ODS_ICON_NAME, OdsIcon } from '@ovhcloud/ods-react';
import { CodeOrSourceMdx } from '@storybook/blocks';
import { Table } from '@storybook/components';
import React from 'react';
import { Heading } from '../heading/Heading';
import styles from './classModule.module.css';

type Component = {
  name: string,
  props: {
    defaultValue: number | string,
    isOptional: boolean,
    name: string,
    type: string,
  }[],
}

type Props = {
  component: Component,
}

const ClassModule = ({ component }: Props) => {
  return (
    <>
      <Heading label={ component.name } level={ 2 } />

      {
        component.props.length <= 0 ?
          <p>
            This component has no properties.
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
                        <OdsIcon aria-label="Required"
                                 className={ styles['class-module__properties__body__is-required--required'] }
                                 name={ ODS_ICON_NAME.check } />
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
  type Component,
};
