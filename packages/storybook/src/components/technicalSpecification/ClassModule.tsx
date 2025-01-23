import { ODS_ICON_NAME, type ODS_MESSAGE_COLOR } from '@ovhcloud/ods-components';
import { OdsIcon, OdsMessage } from '@ovhcloud/ods-components/react';
import { CodeOrSourceMdx } from '@storybook/blocks';
import { Table } from '@storybook/components';
import { type ClassMember, type Module } from 'custom-elements-manifest/schema';
import React from 'react';
import { HOME_TITLE } from '../../constants/meta';
import { Heading } from '../heading/Heading';
import { StorybookLink } from '../storybookLink/StorybookLink';
import styles from './classModule.module.css';

type Props = {
  enumList?: Record<string, Record<string, string>>,
  message?: { color: ODS_MESSAGE_COLOR, content: JSX.Element }
  module: Module,
}

function isRequired(property: ClassMember): boolean {
  if ('type' in property && property.type?.text.includes('undefined')) {
    return false;
  }

  return !('default' in property && property.default);
}

const ClassModule = ({ module, message }: Props) => {
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

            <tbody className={ styles['class-module__properties__body'] }>
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

                    <td className={ styles['class-module__properties__body__is-required'] }>
                      {
                        isRequired(property)
                          ? <OdsIcon className={ styles['class-module__properties__body__is-required--required'] }
                                     name={ ODS_ICON_NAME.check } />
                          : '-'
                      }
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

      { message && <OdsMessage className={ styles['class-module__message'] } color={ message.color } isDismissible={ false }>{ message.content }</OdsMessage> }

      {
        methods.length > 0 &&
        <>
          <Heading label="Methods" level={ 3 }>
            <StorybookLink className={ styles['class-module__method-title-link'] }
                           label="(How to use?)"
                           title={ HOME_TITLE.guideMethods } />
          </Heading>

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
          <Heading label="Events" level={ 3 }>
            <StorybookLink className={ styles['class-module__event-title-link'] }
                           label="(How to use?)"
                           title={ HOME_TITLE.guideEvents } />
          </Heading>

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
