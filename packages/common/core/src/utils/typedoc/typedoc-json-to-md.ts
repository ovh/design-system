import type {
  DeclarationReflection,
  IntrinsicType,
  LiteralType,
  ReferenceType,
  ReflectionType,
  SomeType,
  Type,
} from 'typedoc';

const tableSeparator = '|';

export function convertJsonToMarkdown(jsonItems: DeclarationReflection[]): string {
  const result: string[] = [];

  const displaySection = (stringArray: string[], sectionString: string) => {
    const res = stringArray;
    if (res.length) {
      result.push(sectionString);
      result.push(...res);
    }
  };

  const interfaces = getInterfaces(jsonItems),
    types = getTypes(jsonItems),
    classes = getClass(jsonItems);

  // Create Table
  result.push(
    ...(interfaces?.length ? ['* [**Interfaces**](#interfaces)'] : []),
    ...(types?.length ? ['* [**Types**](#types)'] : []),
    ...(classes?.length ? ['* [**Classes**](#classes)'] : []),
  );

  displaySection(interfaces, '\n## Interfaces');
  displaySection(types, '\n## Types');
  displaySection(classes, '\n## Classes');

  return result.join('\n');
}

function getInterfaces(filteredJSON: DeclarationReflection[]): string[] {
  const res: string[] = [];

  filteredJSON
    .filter(({kindString, children, indexSignature}) => kindString === 'Interface' && (!children || !indexSignature))
    .forEach(({name, children, indexSignature}) => {
      res.push(`\n### ${name}`);

      // Find default values
      const defaultValues: Record<string, string> = {};
      (filteredJSON.find(({kindString: defaultString, name: defaultName}) => {
        return defaultString === 'Variable' && defaultName.toLowerCase() === `${name.toLowerCase()}defaultdoc`;
      }) as unknown as ReflectionType)
        ?.declaration.children?.forEach(({name, defaultValue}) => {
          defaultValues[name] = defaultValue?.toString() || '';
        });

      if (indexSignature) {
        res.push(tableSeparator + ['Key', 'Type', 'Description'].join(` ${tableSeparator} `) + tableSeparator);
        res.push(tableSeparator + ['---', ':---:', '---'].join(`${tableSeparator}`) + tableSeparator);
        res.push(tableSeparator + [
          printType(indexSignature.parameters?.[0]?.type),
          printType(indexSignature.type),
          indexSignature.comment?.shortText,
        ].join(` ${tableSeparator} `) + tableSeparator);
        return;
      }
      res.push(
        tableSeparator + ['Name', 'Type', 'Required', 'Default', 'Description'].join(` ${tableSeparator} `) + tableSeparator,
      );
      res.push(
        tableSeparator + ['---', '---', ':---:', '---', '---'].join(`${tableSeparator}`) + tableSeparator,
      );
      children?.forEach(({name, type, signatures, flags, comment}) => {
        const commentString: string = (comment || (signatures && signatures[0]?.comment))?.shortText as unknown as string || '';
        res.push(tableSeparator + [
          `**\`${name}\`**`,
          type ? printType(type) : printType(signatures?.[0]?.type),
          !flags.isOptional ? '✴️' : '',
          defaultValues[name] ? `\`${defaultValues[name]}\`` : '',
          commentString.replace(/\n/g, ''),
        ].join(` ${tableSeparator} `) + tableSeparator);
      });
      return;
    });

  return res;
}

function getTypes(filteredJSON: DeclarationReflection[]): string[] {
  const res: string[] = [];
  filteredJSON.filter((item) => item.kindString === 'Enumeration').forEach((enumeration: DeclarationReflection) => {
    res.push(`\n### ${enumeration.name}`);
    res.push('|  |\n|:---:|');
    if (enumeration.children) {
      res.push(enumeration.children.map((property) => `| \`${property.name}\` |`).join('\n'));
    }
  });
  return res;
}

function getClass(filteredJSON: DeclarationReflection[]): string[] {
  const res: string[] = [];
  filteredJSON.filter((item) => item.kindString === 'Class').forEach((typeDocClass) => {
    res.push(`\n### ${typeDocClass.name}`);
    const comments = typeDocClass.comment?.shortText;
    if(comments) {
      res.push(`_${comments.replace(/\n/gmi, '_\n_')}_\n`);
    }

    // Methods
    const methods = typeDocClass.children?.filter((method) => method?.kindString === 'Method')
      .filter((method) => method.decorators?.[0].name === 'Method' && (method.decorators?.[0].type as ReferenceType)?.package === '@stencil/core');
    if (!methods?.length) {
      return;
    }
    res.push('#### Methods');
    methods.forEach(({signatures: methodSignatures, name: methodName}) => {
      if (!methodSignatures?.[0]) {
        return;
      }
      const {parameters, type, comment} = methodSignatures[0];
      const params: string[] = [];
      const parameterSection: string[] = [];
      if (parameters && parameters.length) {
        parameterSection.push('Name | Type | Description \n---|---|---');
        parameters?.map(({name: paramName, type: paramType, comment: paramComment}) => {
          params.push(`\`${paramName}\`: ${printType(paramType)}`);
          parameterSection.push(`**${paramName}** | ${printType(paramType)} | ${paramComment?.shortText || ' '} |`);
        });
      }
      res.push(`> **${methodName}**(${(params || ['']).join(',')}) => ${printType(type)}\n`);
      const comments = comment?.shortText;
      if(comments) {
        res.push(`_${comments.replace(/\n/gmi, '_\n_')}_\n`);
      }
      res.push(`${(parameterSection || ['']).join('\n')}`);
    });
  });

  return res;
}

function printType(typeObject?: SomeType | unknown): string {
  const getTypeValue = (tObj: SomeType | LiteralType | IntrinsicType | Type) => {
    if ('name' in tObj) {
      return tObj.name.toString();
    }
    if ('value' in tObj) {
      return tObj.value?.toString();
    }
    return tObj.type;
  };
  const someType = typeObject as SomeType;
  if (someType && someType.type) {
    switch (someType.type) {
    case 'intrinsic':
    case 'literal':
      return `_${getTypeValue(someType)}_`;
    case 'reference': {
      if (someType.name === 'Promise' || someType.name === 'EventEmitter') {
        return `\`${someType.name}<${getTypeValue(someType.typeArguments?.[0] as IntrinsicType)}>\``;
      }
      return `\`${someType.name}\``;
    }
    case 'array':
      return `${printType(someType.elementType).replace(/^(_|`)|(_|`)$/g, '')}[]`;
    case 'union':
      return someType.types.map((tObj) => `\`${printType(tObj).replace(/^(_|`)|(_|`)$/g, '')}\``).join(' \\| ')
      ;
    }
  }
  return '_unknown_';
}
