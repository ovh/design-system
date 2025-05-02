import { type DeclarationReflection, type IntrinsicType, type LiteralType, type ProjectReflection, type ReferenceType, type SomeType, type UnknownType, type UnionType } from 'typedoc';
import { ReflectionKind } from 'typedoc/models';

type ComponentTypedoc = {
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

function filterByKinds(children: DeclarationReflection[] | undefined, kinds: ReflectionKind[]): DeclarationReflection[] {
  return (children || []).filter((child) => kinds.indexOf(child.kind) > -1);
}

function getComponentTypedoc(data: ProjectReflection): ComponentTypedoc {
  const enumDeclarations = filterByKinds(data.children, [ReflectionKind.Enum]);
  const interfaceDeclarations = filterByKinds(data.children, [ReflectionKind.Interface, ReflectionKind.TypeAlias])
    .filter((declaration) => !declaration.name.endsWith('Prop'))
    .filter((declaration) => declaration.type?.type !== 'templateLiteral' && declaration.type?.type !== 'union');
  const unionTypeDeclarations = filterByKinds(data.children, [ReflectionKind.TypeAlias])
    .filter((declaration) => declaration.type && declaration.type.type === 'union');

  return {
    enums: sortByName(enumDeclarations.map((enumDeclaration) => ({
      name: enumDeclaration.name,
      members: filterByKinds(enumDeclaration.children, [ReflectionKind.EnumMember])
        .map((member) => ({
          name: member.name,
          value: (member.type as LiteralType)?.value?.toString() || '',
        })),
    }))),
    interfaces: sortByName(interfaceDeclarations.map((interfaceDeclaration) => ({
      name: interfaceDeclaration.name,
      props: (interfaceDeclaration.children || []).map((child) => ({
        name: `${child.name}${(child.flags.isOptional ? '?' : '')}`,
        type: getTypeValue(child.type),
      })),
    }))),
    unions: sortByName(unionTypeDeclarations.map((typeDeclaration) => ({
      name: typeDeclaration.name,
      value: (typeDeclaration.type as UnionType).types
        .map((item: any) => item.name || `"${item.value}"`)
        .join(' | '),
    }))),
  };
}

function getTypeValue(type?: SomeType): string {
  if (!type) {
    return '';
  }

  if (type.type === 'array') {
    return `${(type.elementType as ReferenceType).name}[]`;
  }

  if (type.type === 'reference' && (type as ReferenceType).typeArguments?.length) {
    const arg = ((type as ReferenceType).typeArguments || [])
      .map((t) => {
        if (t.type === 'intrinsic') {
          return (t as IntrinsicType).name;
        }
        return '';
      })
      .filter((t) => !!t)
      .join(', ');

    return `${(type as ReferenceType).name}<${arg}>`;
  }

  if (type.type === 'union' && type.types && type.types.length) {
    return (type.types as UnionType[])
      .sort((a, b) => {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0;
      })
      .map(getTypeValue)
      .join(' | ');
  }

  const value = (type as LiteralType).value;

  if ((type as LiteralType).value === null) {
    return 'null';
  }

  if ((type as UnknownType).name) {
    return (type as UnknownType).name;
  }

  return value?.toString() || '';
}

function sortByName<T extends { name: string }>(array: T[]): T[] {
  return [...array].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export {
  type ComponentTypedoc,
  getComponentTypedoc,
};
