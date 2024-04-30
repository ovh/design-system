#! /usr/bin/env node

/**
 * Script to generate the file spec.md for one specific ODS component
 * The file is created in <component-path>/documentation
 * The script need a json typedoc file located in <component-path>/dist/doc-api/typedoc.json
 *
 * You can pass an optional --prefix <value> to manage components that are not
 * in the default "components" package, ex:
 *   --prefix ovh # for "components-ovh"
 */
const fs = require('fs');
const path = require('path');
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
};

let pathPrefix = '';
if (pathPrefixIdx > -1) {
  pathPrefix = process.argv[pathPrefixIdx + 1];
}

function createSpecMd() {
  const typedocJson = require(path.resolve(typedocBasePath, 'typedoc.json'));
  // TODO test for prefixed project (like -ovh)
  const dir = path.resolve('documentation');

  fs.mkdirSync(dir, { recursive: true });

  const classesMarkdown = getClassesInfo(typedocJson.children);
  const enumsMarkdown = getEnums(typedocJson.children);
  const markdown = [].concat(classesMarkdown).concat(enumsMarkdown).join('\n');

  fs.writeFileSync(path.resolve(dir, `spec.md`), markdown, (err) => {
    if (err) {
      console.error('file write error.');
      throw err;
    }
  });
}

function getClassesInfo(jsonItems) {
  return jsonItems
    .filter(({ kind }) => kind === ReflectionKind.Class)
    .map((classData) => {
      const { events, methods, props } = getClassInfo(classData);

      if (!events.length && !methods.length && !props.length) {
        return [
          `# ${classData.name}`,
          'This component has no properties, events nor methods.',
        ].join('\n');
      }

      return [
        `# ${classData.name}`,
        props.length ? '## Properties' : '', ...props,
        methods.length ? '## Methods' : '', ...methods,
        events.length ? '## Events' : '', ...events,
      ].join('\n');
    });
}

function getClassInfo({ children }) {
  const props = children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Property && decorators[0].escapedText === 'Prop')
    .filter((prop) => prop.flags.isPublic)
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
    events,
    methods,
    props,
  };
}

function getEnums(jsonItems) {
  const enums = jsonItems
    .filter(({ kind }) => kind === ReflectionKind.Enum)
    .map((getEnum));

  if (!enums.length) {
    return [];
  }

  return [
    `# Enums`,
    enums.join('\n'),
  ];
}

function getEnum(enumDefinition) {
  const children = enumDefinition.children.map(({ name, type }) => `• **${name}** = \`"${type?.value}"\`\n`);
  return `## ${enumDefinition.name}\n\n${children.join('\n')}\n`
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

return createSpecMd();
