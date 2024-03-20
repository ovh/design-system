#! /usr/bin/env node

// TODO either:
//  fix with https://github.com/TypeStrong/typedoc/releases/tag/v0.24.0 changes (and remove typedoc-plugin-markdown dep)
//  use typedoc-plugin-markdown and adapt our doc

/**
 * Script to generate the file spec.md for one specific component
 * The file is created in <path>/documentation/specifications
 * The script need a json typedoc file in <path>/docs-api/typedoc.json
 *
 * You can pass an optional --prefix <value> to manage components that are not
 * in the default "components" package, ex:
 *   --prefix ovh # for "components-ovh"
 */
const fs = require('fs');
const path = require('path');

const isMultiple = process.argv[2]?.includes('multiple');
const typedocBasePath = path.resolve('dist', 'docs-api');
const pathPrefixIdx = process.argv.indexOf('--prefix');

const ReflectionKind = {
  Project: 1,
  Module: 2,
  Namespace: 4,
  Enum: 8,
  EnumMember: 16,
  Variable: 32,
  Function: 64,
  Class: 128,
  Interface: 256,
  Constructor: 512,
  Property: 1024,
  Method: 2048,
  CallSignature: 4096,
  IndexSignature: 8192,
  ConstructorSignature: 16384,
  Parameter: 32768,
  TypeLiteral: 65536,
  TypeParameter: 131072,
  Accessor: 262144,
  GetSignature: 524288,
  SetSignature: 1048576,
  TypeAlias: 2097152,
  Reference: 4194304,
}

let pathPrefix = '';
if (pathPrefixIdx > -1) {
  pathPrefix = process.argv[pathPrefixIdx + 1];
}

function convertJsonToMarkdown(jsonItems) {
  const classes = getClasses(jsonItems);
  const enums = getEnums(jsonItems);

  const hasProps = classes.props.length;
  const hasMethods = classes.methods.length;
  const hasEvents = classes.events.length;
  const hasEnums = enums.length;

  return [
    hasProps ? '## Properties' : '', ...classes.props,
    hasMethods ? '## Methods' : '', ...classes.methods,
    hasEvents ? '## Events' : '', ...classes.events,
    hasEnums ? '## Enums' : '', ...enums,
  ].join('\n');
}

function createSpecMd(component = '') {
  const typedocJson = require(path.resolve(typedocBasePath, component, 'typedoc.json'));
  // TODO test for prefixed project (like -ovh)
  const dir = path.resolve('documentation', 'specifications', component);

  fs.mkdirSync(dir, { recursive: true });

  if (typedocJson.children) {
    fs.writeFileSync(path.resolve(dir, 'spec.md'), convertJsonToMarkdown(typedocJson.children), (err) => {
      if (err) {
        console.error('file write error.');
        throw err;
      }
    });
  }
}

function getClasses(jsonItems) {
  const classesDefinitions = jsonItems.filter(({ kind }) => kind === ReflectionKind.Class);

  const children = classesDefinitions.flatMap(({ children }) => children);

  const props = children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Property && decorators[0].escapedText === 'Prop')
    .map((prop) => {
      return [
        `### ${prop.name}`,
        `• ${prop.flags.isOptional ? '\`Optional\`' : ''} **${prop.name}**: [${printType(prop.type)}] ${prop.defaultValue ? `= \`${prop.defaultValue}\`` : ''}`,
        `${prop.comment?.summary?.[0].text ? '**Description**: ' + prop.comment?.summary?.[0].text : ''}`,
      ].join('\n\n');
    });

  const events = children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Property && decorators[0].escapedText === 'Event')
    .map((event) => {
      const returnType = `\`${event.type.name}\`\<${printType(event.type.typeArguments[0])}\>`
      return [
        `### ${event.name}\n\n▸ **${event.name}**(): ${returnType}`,
        `${event.comment?.summary?.[0].text ? '**Description**: ' + event.comment?.summary?.[0].text : ''}`,
        `#### Returns\n${returnType}`,
      ].join('\n\n');
    });

  const methods = children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Method && decorators?.[0]?.escapedText === 'Method')
    .map((method) => {
      const returnType = `\`${method.signatures[0].type.name}\`\<${printType(method.signatures[0].type.typeArguments[0])}\>`
      return [
        `### ${method.name}\n\n▸ **${method.name}**(): ${returnType}`,
        `${method.signatures?.[0].comment?.summary?.[0].text ? '**Description**: ' + method.signatures?.[0].comment?.summary?.[0].text : ''}`,
        `#### Returns\n${returnType}`,
      ].join('\n\n');
    });

  return {
    props,
    events,
    methods,
  };
}

function getEnums(jsonItems) {
  return jsonItems
    .filter(({ kind }) => kind === ReflectionKind.Enum)
    .flatMap((enumDefinition) => {
      const children = enumDefinition.children.map(({ name, type }) => `• **${name}** = \`"${type?.value}"\`\n`);
      return `### Enumeration: ${enumDefinition.name}\n\n${children.join('\n')}\n`
    });
}

function getTypeValue(tObj) {
  if ('name' in tObj) {
    return tObj.name.toString();
  }
  if ('value' in tObj) {
    return tObj.value?.toString();
  }
  return tObj.type;
}

function printType(typeObject) {
  const someType = typeObject;

  if (someType && someType.type) {
    switch (someType.type) {
      case 'intrinsic':
      case 'literal':
        return `_${getTypeValue(someType)}_`;
      case 'reference': {
        if (someType.name === 'Promise' || someType.name === 'EventEmitter') {
          return `\`${someType.name}<${getTypeValue(someType.typeArguments?.[0])}>\``;
        }
        return `\`${someType.name}\``;
      }
      case 'array':
        return `${printType(someType.elementType).replace(/^(_|`)|(_|`)$/g, '')}[]`;
      case 'union':
        return someType.types.map((tObj) => `\`${printType(tObj).replace(/^(_|`)|(_|`)$/g, '')}\``).join(' \| ');
    }
  }
  return '_unknown_';
}

if (!isMultiple) {
  return createSpecMd();
}

// See Radio or Accordion for example multiple
const componentFolders = fs.readdirSync('./src/components', {});

componentFolders.forEach((odsComponent) => {
  const component = odsComponent.replace(`ods${pathPrefix ? `-${pathPrefix}` : ''}-`, '');
  return createSpecMd(component);
});
