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

function buildMarkdownArrayRow(cols, isHeading = false) {
  const row = cols.reduce((str, col) => {
    str += ` ${col} |`;
    return str;
  }, '|');

  if (isHeading) {
    return row.concat('\n', buildMarkdownArrayRow(cols.map(() => '---')));
  }

  return row;
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
      const eventsMarkdown = getClassEventsMarkdown(classData);
      const methodsMarkdown = getClassMethodsMarkdown(classData);
      const propsMarkdown = getClassPropsMarkdown(classData);

      if (!eventsMarkdown.length && !methodsMarkdown.length && !propsMarkdown.length) {
        return [
          `# ${classData.name}`,
          'This component has no properties, events nor methods.',
        ].join('\n');
      }

      return [
        `# ${classData.name}`,
        propsMarkdown.length ? '## Properties' : '', propsMarkdown,
        methodsMarkdown.length ? '## Methods' : '', methodsMarkdown,
        eventsMarkdown.length ? '## Events' : '', eventsMarkdown,
      ].join('\n');
    });
}

function getClassEventsMarkdown({ children }) {
  return children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Property && decorators[0].escapedText === 'Event')
    .map((event) => {
      const returnType = `${event.type.name}<${printType(event.type.typeArguments[0])}>`;
      return `• **${event.name}**(): \`${returnType}\``;
    }).join('\n\n');
}

function getClassMethodsMarkdown({ children }) {
  return children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Method && decorators?.[0]?.escapedText === 'Method')
    .map((method) => {
      const returnType = `${method.signatures[0].type.name}<${printType(method.signatures[0].type.typeArguments[0])}>`;
      return `• **${method.name}**(): \`${returnType}\``;
    }).join('\n\n');
}

function getClassPropsMarkdown({ children }) {
  const props = children
    .filter(({ kind, decorators }) => kind === ReflectionKind.Property && decorators[0].escapedText === 'Prop')
    .filter((prop) => prop.flags.isPublic);

  if (props.length) {
    return props.reduce((str, prop) => {
      const customDocTypeTag = prop.comment?.blockTags?.find((blockTag) => blockTag.tag === '@docType');
      const type = customDocTypeTag && customDocTypeTag.content.length ? customDocTypeTag.content[0].text : printType(prop.type);

      str += '\n';
      str += buildMarkdownArrayRow([prop.name, `\`${type}\``, `\`${prop.flags.isOptional ? 'false' : 'true'}\``, `\`${prop.defaultValue || 'undefined'}\``]);

      return str;
    }, buildMarkdownArrayRow(['Property', 'Type', 'Required', 'Default value'], true));
  }

  return '';
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
    if (tObj.value === null) {
      return 'null';
    }
    return tObj.value?.toString();
  }
  return tObj.type;
}

function printType(typeObject) {
  if (typeObject && typeObject.type) {
    switch (typeObject.type) {
      case 'intrinsic':
      case 'literal':
        return getTypeValue(typeObject);
      case 'reference': {
        if (typeObject.name === 'Promise' || typeObject.name === 'EventEmitter') {
          return `${typeObject.name}<${getTypeValue(typeObject.typeArguments?.[0])}>`;
        }
        return typeObject.name;
      }
      case 'array':
        return `${printType(typeObject.elementType)}[]`;
      case 'union':
        return typeObject.types.map(printType).join(' \| ');
    }
  }
  return '_unknown_';
}

return createSpecMd();
