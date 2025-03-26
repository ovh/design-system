import { CodeOrSourceMdx } from '@storybook/blocks';
import { type ModuleExports } from '@storybook/types';
import React, { Fragment, useMemo } from 'react';
import { type DeclarationReflection, type ProjectReflection } from 'typedoc';
import { ReflectionKind } from 'typedoc/models';
import { ClassModule, type Component } from './ClassModule';
import { Heading } from '../heading/Heading';
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
}

type Props = {
  data: ProjectReflection,
  of: ModuleExports,
}

function filterByKind(children: DeclarationReflection[] | undefined, kind: ReflectionKind): DeclarationReflection[] {
  return (children || []).filter((child) => child.kind === kind);
}

const TechnicalSpecification = ({ data, of }: Props) => {
  const { components, enums } = useMemo<ProcessedData>(() => {
    const enumDeclarations = filterByKind(data.children, ReflectionKind.Enum);

    const docgens = [of.default.component.__docgenInfo];
    Object.values(of.default.subcomponents || {}).forEach((subcomponent: any) => {
      docgens.push(subcomponent.__docgenInfo);
    });

    return {
      components: docgens.map((docgen) => ({
        name: docgen.displayName,
        props: Object.values(docgen.props).map((prop: any) => ({
          defaultValue: prop.defaultValue?.value,
          isOptional: !prop.required,
          name: prop.name,
          type: prop.type?.name,
        })),
      })),
      enums: enumDeclarations.map((enumDeclaration) => ({
        name: enumDeclaration.name,
        members: filterByKind(enumDeclaration.children, ReflectionKind.EnumMember)
          .map((member) => ({
            name: member.name,
            // @ts-ignore value does exist on type
            value: member.type.value,
          })),
      })),
    };
  }, [data, of]);

  return (
    <div>
      {
        (components || []).map((component, idx) => (
          <ClassModule key={ idx }
                       component={ component } />
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
    </div>
  );
};

export {
  TechnicalSpecification,
};
