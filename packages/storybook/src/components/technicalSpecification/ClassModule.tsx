import { CodeOrSourceMdx } from '@storybook/blocks';
import { Table } from '@storybook/components';
import { type Module } from 'custom-elements-manifest/schema';
import React from 'react';
import { Heading } from '../heading/Heading';
import styles from './classModule.module.css';

type Props = {
  enumList?: Record<string, Record<string, string>>,
  module: Module,
}

const ClassModule = ({ module }: Props) => {
  const name = (module.exports || []).find((exp) => exp.kind === 'js')?.name || '';
  const classDeclaration = (module.declarations || []).find((declaration) => declaration.kind === 'class');

  if (!classDeclaration) {
    return <></>;
  }

  const events = 'events' in classDeclaration ? (classDeclaration.events || []) : [];
  const methods = 'members' in classDeclaration ?
    (classDeclaration.members || []).filter((member) => member.kind === 'method' && member.privacy === 'public') : [];
  const properties = 'members' in classDeclaration ?
    (classDeclaration.members || []).filter((member) => member.kind === 'field' && member.privacy === 'public') : [];

  if (!events.length && !methods.length && !properties.length) {
    return (
      <>
        <Heading label={ name } level={ 2 } />

        <p>
          This component has no properties, events nor methods.
        </p>
      </>
    )
  }

  return (
    <>
      <Heading label={ name } level={ 2 } />

      {
        properties.length > 0 &&
        <>
          <Heading label="Properties" level={ 3 } />

          <Table>
            <thead className={ styles['class-module__properties__header'] }>
              <tr>
                <td>Property</td>
                <td>Type</td>
                <td>Required</td>
                <td>Default value</td>
              </tr>
            </thead>

            <tbody>
              {
                properties.map((property, idx) => (
                  <tr key={ idx }>
                    <td>
                      { property.name }
                    </td>

                    <td>
                      <CodeOrSourceMdx>
                        { 'type' in property && property.type?.text.replace(/\| undefined/, '') }
                      </CodeOrSourceMdx>
                    </td>

                    <td>
                      <CodeOrSourceMdx>
                        { 'type' in property && property.type?.text.includes('undefined') ? 'false' : 'true' }
                      </CodeOrSourceMdx>
                    </td>

                    <td>
                      <CodeOrSourceMdx>
                        { 'default' in property && property.default || 'undefined' }
                      </CodeOrSourceMdx>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </>
      }

      {
        methods.length > 0 &&
        <>
          <Heading label="Methods" level={ 3 } />

          <ul className={ styles['class-module__methods'] }>
            {
              methods.map((method, idx) => (
                <li key={ idx }>
                  <span className={ styles['class-module__methods__item__name'] }>
                    { method.name }():
                  </span>

                  <CodeOrSourceMdx>
                    { 'return' in method && method.return?.type?.text }
                  </CodeOrSourceMdx>
                </li>
              ))
            }
          </ul>
        </>
      }

      {
        events.length > 0 &&
        <>
          <Heading label="Events" level={ 3 } />

          <ul className={ styles['class-module__events'] }>
            {
              events.map((event, idx) => (
                <li key={ idx }>
                  <span className={ styles['class-module__events__item__name'] }>
                    { event.name }:
                  </span>

                  <CodeOrSourceMdx>
                    { event.type.text }
                  </CodeOrSourceMdx>
                </li>
              ))
            }
          </ul>
        </>
      }
    </>
  );
};

export {
  ClassModule,
};
