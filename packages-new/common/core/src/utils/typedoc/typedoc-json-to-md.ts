type UnknownObject = Record<string, unknown>;
type StringObject = Record<string, string>;

const tableSeparator = '|';

export function convertJsonToMarkdown(jsonItems: Record<string, unknown>[], filter: RegExp): string {
  const result: string[] = [];
  const filteredItems = jsonItems.filter(({ name }) => (name as string).match(filter));

  const displaySection = (stringArray: string[], sectionString: string) => {
    const res = stringArray;
    if (res.length) {
      result.push(sectionString);
      result.push(...res);
    }
  };

  const interfaces = getInterfaces(filteredItems),
    types = getTypes(filteredItems),
    classes = getClass(filteredItems),
    typeAlias = getTypeAlias(filteredItems),
    variables = getVariables(filteredItems);

  // Create Table
    result.push(
      ...(interfaces?.length ? [`* [**Interfaces**](#interfaces)`] : []),
      ...(types?.length ? [`* [**Types**](#types)`] : []),
      ...(classes?.length ? [`* [**Classes**](#classes)`] : []),
      ...(typeAlias?.length ? [`* [**Type alias**](#type-alias)`] : []),
      ...(variables?.length ? [`* [**Variables**](#variables)`] : []),
  );

  displaySection(interfaces, `\n## Interfaces`);
  displaySection(types, `\n## Types`);
  displaySection(classes, `\n## Classes`);
  displaySection(typeAlias, `\n## Type alias`);
  displaySection(variables, `\n## Variables`);

  return result.join('\n');
}

function getInterfaces(filteredJSON: UnknownObject[]): string[] {
  const res: string[] = [];

  filteredJSON.filter(({ kindString: filteredString, children: filteredChildren }) => filteredString === 'Interface'
    && typeof filteredChildren !== 'undefined').forEach(({ name, children }) => {
    res.push(`\n### ${name}`);

    // Find default values
    const defaultValues: Record<string, string> = {};
    (((filteredJSON.find(({ kindString: defaultString, name: defaultName }) => defaultString === 'Variable'
      && (defaultName as string).toLowerCase() === `${(name as string).toLowerCase()}defaultdoc`)
      ?.type as UnknownObject)?.declaration as UnknownObject)?.children as UnknownObject[])
      ?.forEach(({ name, defaultValue }) => {
        defaultValues[name as string] = defaultValue as string;
      });

    res.push(
      tableSeparator + ['name', 'Type', 'Required', 'Default', 'Description'].join(` ${tableSeparator} `) + tableSeparator
    );
    res.push(
      tableSeparator + ['---', '---', ':---:', '---', '---'].join(`${tableSeparator}`) + tableSeparator
    );
    (children as UnknownObject[]).forEach(({ name, type, signatures, flags, comment }) => {
      const commentString: string = (comment as StringObject || (signatures && (signatures as Record<string, UnknownObject>[])[0]?.comment))?.shortText as unknown as string || '';
      res.push(tableSeparator + [
        `**\`${name}\`**`,
        type ? printType(type as UnknownObject) : printType((signatures as UnknownObject[])[0]?.type as UnknownObject),
        !(flags as StringObject).isOptional ? '✴️' : '',
        defaultValues[name as string] ? `\`${defaultValues[name as string]}\`` : '',
        commentString.replace(/\n/g, '')
      ].join(` ${tableSeparator} `) + tableSeparator);
    });
  });

  return res;
}

function getTypes(filteredJSON: UnknownObject[]): string[] {
  const res: string[] = [];
  filteredJSON.filter((item) => item.kindString === 'Enumeration').forEach((enumeration: UnknownObject) => {
    res.push(`\n### ${enumeration.name}`);
    res.push(`|  |\n|:---:|`);
    if (enumeration.children) {
      res.push((enumeration.children as UnknownObject[]).map((property) => `| \`${property.name}\` |`).join('\n'));
    }
  });
  return res;
}

function getClass(filteredJSON: UnknownObject[]): string[] {
  const res: string[] = [];
  filteredJSON.filter((item) => item.kindString === 'Class').forEach(({
                                                                    name: className,
                                                                    comment: classComment,
                                                                    children: classChildren,
                                                                  }) => {
    res.push(`\n### ${className}`);
    const comments = (classComment as UnknownObject)?.shortText as string;
    if(comments) {
      res.push(`_${comments.replace(/\n/gmi, '_\n_')}_\n`);
    }

    // Methods
    const methods = (classChildren as UnknownObject[])?.filter((item) => item.kindString === 'Method');
    if (typeof methods !== 'undefined' && methods.length) {
      res.push(`#### Methods`);
      methods.forEach(({ signatures: methodSignatures, name: methodName }) => {
        const { signatureParameters, signatureType, signatureComment } = (methodSignatures as UnknownObject[])[0];
        const params: string[] = [];
        const parameterSection: string[] = [];
        if (signatureParameters && (signatureParameters as UnknownObject[]).length) {
          parameterSection.push(`Name | Type | Description \n---|---|---`);
          (signatureParameters as UnknownObject[])?.map(({
                                                           name: paramName,
                                                           type: paramType,
                                                           comment: paramComment,
                                                         }) => {
            params.push(`\`${paramName}\`: ${printType(paramType as UnknownObject)}`);
            parameterSection.push(`**${paramName}** | ${printType(paramType as UnknownObject)} | ${(paramComment as StringObject)?.shortText}`);
          });
        }
        res.push(`> **${methodName}**(${(params || ['']).join(',')}) => ${printType(signatureType as UnknownObject)}\n`);
        const comments = ((signatureComment as UnknownObject)?.shortText as string);
        if(comments) {
          res.push(`_${comments.replace(/\n/gmi, '_\n_')}_\n`);
        }
        res.push(`${(parameterSection || ['']).join('\n')}`);
      });
    }
  });

  return res;
}

function getTypeAlias(filteredJSON: UnknownObject[]): string[] {
  const res: string[] = [];
  filteredJSON.filter(({ kindString: itemString, type: itemType }) => itemString === 'Type alias'
    && (itemType as UnknownObject).type !== 'template-literal').forEach(({
                                                                       name: typeAliasName,
                                                                       comment: typeAliasComment,
                                                                       type: typeAliasType,
                                                                       typeParameter: typeAliasTypeParameter,
                                                                     }) => {
    res.push(`\n### ${typeAliasName}`);
    if (typeAliasComment) {
      res.push(`\n${(typeAliasComment as UnknownObject)?.shortText}`);
    }

    switch ((typeAliasType as UnknownObject).type) {
      case 'reference':
        ((typeAliasTypeParameter || (typeAliasType as UnknownObject).typeArguments) as UnknownObject[])?.map((typeParameter) => {
          res.push(`\n> - ${printType(typeParameter as UnknownObject) !== '_unknown_' ?
            printType(typeParameter as UnknownObject) :
            printType(typeParameter.type as UnknownObject)}`
          );
        });
        break;
      case 'union':
        ((typeAliasType as UnknownObject).types as UnknownObject[]).forEach((typeVariant) => {
          res.push(`\n> - ${printType(typeVariant)}`);
        });
        break;
    }
  });
  filteredJSON.filter((item) => item.kindString === 'Interface'
    && typeof item.extendedTypes !== 'undefined'
    && (item.extendedTypes as UnknownObject[])[0]?.type === 'reference').forEach(({
                                                                                name: typeAliasName,
                                                                                extendedTypes: typeAliasExtendedTypes,
                                                                              }) => {

    res.push(`\n### ${typeAliasName}`);
    res.push(`\n> _Based on ${printType((typeAliasExtendedTypes as UnknownObject[])[0])}_`);
  });
  return res;
}

function getVariables(filteredJSON: UnknownObject[]): string[] {
  const res: string[] = [];
  filteredJSON
    .filter(({
               kindString: itemString,
               type: itemType,
             }) => itemString === 'Variable' && (itemType as UnknownObject).type !== 'array' && (itemType as UnknownObject).type !== 'reflection')
    .forEach(({ name: variableName, type: variableType }) => {
      res.push(`\n### ${variableName}`);
      res.push(`${printType(variableType as UnknownObject)}`);
    });
  return res;
}

function printType(typeObject: UnknownObject) {
  const getTypeValue = (tObj: UnknownObject) => typeof tObj.name !== 'undefined' ? `${tObj.name}` : `${tObj.value}`;
  if (typeObject && typeObject.type) {
    switch (typeObject.type) {
      case 'intrinsic':
      case 'literal':
        return `_${getTypeValue(typeObject)}_`;
      case 'reference':
        return `\`${typeObject.name}\``;
      case 'union':
        return (typeObject.types as UnknownObject[]).map((tObj) => `\`${getTypeValue(tObj)}\``).join(' \\| ');
    }
  }
  return '_unknown_';
}
