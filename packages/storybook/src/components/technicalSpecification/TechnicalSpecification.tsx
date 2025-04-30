import { CodeOrSourceMdx } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React, { Fragment, useMemo } from 'react';
import { type ProjectReflection } from 'typedoc';
import { ClassModule } from './ClassModule';
import { Heading } from '../heading/Heading';
import { type Component, getComponentsInfo } from '../../helpers/docgen';
import { type ComponentTypedoc, getComponentTypedoc } from '../../helpers/typedoc';
import styles from './technicalSpecification.module.css';

type ProcessedData = ComponentTypedoc & {
  components: Component[],
}

type Props = {
  data: ProjectReflection,
  extraAttributeInfo?: {
    name: string,
    url: string,
  },
  of: ModuleExports,
}

const TechnicalSpecification = ({ data, extraAttributeInfo, of }: Props) => {
  const { components, enums, interfaces, unions } = useMemo<ProcessedData>(() => {
    const typedoc = getComponentTypedoc(data);

    const docgens = [of.default.component.__docgenInfo];
    Object.values(of.default.subcomponents || {}).forEach((subcomponent: any) => {
      docgens.push(subcomponent.__docgenInfo);
    });

    return {
      components: getComponentsInfo(docgens),
      enums: typedoc.enums,
      interfaces: typedoc.interfaces,
      unions: typedoc.unions,
    };
  }, [data, of]);

  return (
    <div>
      {
        (components || []).map((component, idx) => (
          <ClassModule key={ idx }
                       component={ component }
                       extraAttributeInfo={ extraAttributeInfo } />
        ))
      }

      {
        enums.length > 0 &&
        <>
          <Heading label="Enums"
                   level={ 2 } />

          {
            enums.map((enumObj, idx) => (
              <Fragment key={ idx }>
                <Heading label={ enumObj.name }
                         level={ 3 } />

                <ul className={ styles['technical-specification__enums__keys'] }>
                  {
                    enumObj.members.map((member, i) => (
                      <li key={ i }>
                        <span className={ styles['technical-specification__enums__keys__name'] }>
                          { member.name } =
                        </span>

                        <CodeOrSourceMdx>
                          { typeof member.value === 'number' ? member.value : `"${member.value}"` }
                        </CodeOrSourceMdx>
                      </li>
                    ))
                  }
                </ul>
              </Fragment>
            ))
          }
        </>
      }

      {
        interfaces.length > 0 &&
        <>
          <Heading label="Interfaces"
                   level={ 2 } />

          {
            interfaces.map((interfaceObj, idx) => (
              <Fragment key={ idx }>
                <Heading label={ interfaceObj.name }
                         level={ 3 } />

                <ul className={ styles['technical-specification__unions__keys'] }>
                  {
                    interfaceObj.props.map((prop, i) => (
                      <li key={ i }>
                        <CodeOrSourceMdx>
                          { prop.name }: { prop.type }
                        </CodeOrSourceMdx>
                      </li>
                    ))
                  }
                </ul>
              </Fragment>
            ))
          }
        </>
      }

      {
        unions.length > 0 &&
        <>
          <Heading label="Unions"
                   level={ 2 } />

          <ul className={ styles['technical-specification__unions__keys'] }>
            {
              unions.map((union, idx) => (
                <li key={ idx }>
                  <CodeOrSourceMdx>
                    { union.name } = { union.value }
                  </CodeOrSourceMdx>
                </li>
              ))
            }
          </ul>
        </>
      }
    </div>
  );
};

export {
  TechnicalSpecification,
};
