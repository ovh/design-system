import type {
  DeclarationReflection,
  IntrinsicType,
  LiteralType,
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
    types = getTypes(jsonItems);

  // Create Table
  result.push(
    ...(interfaces?.length ? ['* [**Interfaces**](#interfaces)'] : []),
    ...(types?.length ? ['* [**Types**](#types)'] : []),
   );

  displaySection(interfaces, '\n## Interfaces');
  displaySection(types, '\n## Types');

  return result.join('\n');
}

function getInterfaces(filteredJSON: DeclarationReflection[]): string[] {
  const res: string[] = [];

  filteredJSON
    .filter(({ kindString, children, indexSignature }) => kindString === 'Interface' && (!children || !indexSignature))
    .forEach(({ name, children, indexSignature }) => {
      res.push(`\n### ${name}`);

      // Find default values
      const defaultValues: Record<string, string> = {};
      (filteredJSON.find(({ kindString: defaultString, name: defaultName }) => {
        return defaultString === 'Variable' && defaultName.toLowerCase() === `${name.toLowerCase()}defaultdoc`;
      }) as unknown as ReflectionType)
        ?.declaration.children?.forEach(({ name, defaultValue }) => {
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
      children?.forEach(({ name, type, signatures, flags, comment }) => {
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
      if (['Promise', 'EventEmitter', 'Record'].includes(someType.name)) {
        const typeArguments = someType.typeArguments?.map((typeArgument) => removeMarkdown(printType(typeArgument)))
        return `\`${someType.name}<${typeArguments?.join(', ')}>\``;
      }
      return `\`${someType.name}\``;
    }
    case 'array':
      return `${removeMarkdown(printType(someType.elementType))}[]`;
    case 'union':
      return someType.types.map((tObj) => `\`${removeMarkdown(printType(tObj))}\``).join(' \\| ')
      ;
    }
  }
  return '_unknown_';
}

function removeMarkdown(value: string): string {
  return value.replace(/^(_|`)|(_|`)$/g, '')
}
