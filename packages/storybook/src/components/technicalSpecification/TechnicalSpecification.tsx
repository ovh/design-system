import { CodeOrSourceMdx } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React, { Fragment, useMemo } from 'react';
import { type DeclarationReflection, type ProjectReflection } from 'typedoc';
import { ReflectionKind } from 'typedoc/models';
import { ClassModule } from './ClassModule';
import { Heading } from '../heading/Heading';
import { type Component, getComponentsInfo } from '../../helpers/docgen';
import styles from './technicalSpecification.module.css';

type ProcessedData = {
  components: Component[],
  enums: {
    members: {
      name: string,
      value: number | string,
    }[],
    name: string,
  }[],
  interfaces: {
    name: string,
    props: {
      name: string,
      type: string,
    }[],
  }[],
  unions: {
    name: string,
    value: string,
  }[],
}

type Props = {
  data: ProjectReflection,
  extraAttributeInfo?: {
    name: string,
    url: string,
  },
  of: ModuleExports,
}

function filterByKind(children: DeclarationReflection[] | undefined, kind: ReflectionKind): DeclarationReflection[] {
  return (children || []).filter((child) => child.kind === kind);
}

// TODO
//  This is temporary, should be improved with a better way to generate types
function getTypeValue(type: any): string {
  if (type.name) {
    return type.name;
  }

  if (type.type === 'union' && type.types && type.types.length) {
    return type.types
      .sort((a: any, b: any) => b.type < a.type)
      .map((t: any) => {
        if (t.name) {
          return t.name;
        }
        if (t.value === null) {
          return 'null';
        }
        return t.value;
      })
      .join(' | ');
  }
  return '';
}

const TechnicalSpecification = ({ data, extraAttributeInfo, of }: Props) => {
  const { components, enums, interfaces, unions } = useMemo<ProcessedData>(() => {
    const enumDeclarations = filterByKind(data.children, ReflectionKind.Enum);
    const interfaceDeclarations = filterByKind(data.children, ReflectionKind.Interface)
      .filter((declaration) => !declaration.name.endsWith('Prop'));
    const unionTypeDeclarations = filterByKind(data.children, ReflectionKind.TypeAlias)
      .filter((declaration) => declaration.type && declaration.type.type === 'union');

    const docgens = [of.default.component.__docgenInfo];
    Object.values(of.default.subcomponents || {}).forEach((subcomponent: any) => {
      docgens.push(subcomponent.__docgenInfo);
    });

    return {
      components: getComponentsInfo(docgens),
      enums: enumDeclarations.map((enumDeclaration) => ({
        name: enumDeclaration.name,
        members: filterByKind(enumDeclaration.children, ReflectionKind.EnumMember)
          .map((member) => ({
            name: member.name,
            // @ts-ignore value does exist on type
            value: member.type.value,
          })),
      })),
      interfaces: interfaceDeclarations.map((interfaceDeclaration) => ({
        name: interfaceDeclaration.name,
        props: (interfaceDeclaration.children || []).map((child) => ({
          name: `${child.name}${(child.flags.isOptional ? '?' : '')}`,
          type: getTypeValue(child.type),
        })),
      })),
      unions: unionTypeDeclarations.map((typeDeclaration) => ({
        name: typeDeclaration.name,
        // @ts-ignore types does exist
        value: typeDeclaration.type!.types
          .map((item: any) => item.name || `"${item.value}"`)
          .join(' | '),
      })),
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
