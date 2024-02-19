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
const tableSeparator = '|';

let pathPrefix = '';
if (pathPrefixIdx > -1) {
  pathPrefix = process.argv[pathPrefixIdx + 1];
}

function convertJsonToMarkdown(jsonItems) {
  const result = [];
  const interfaces = []; // getInterfaces(jsonItems);
  const types = getTypes(jsonItems);

  const addSection = (stringArray, sectionString) => {
    const res = stringArray;

    if (res.length) {
      result.push(sectionString);
      result.push(...res);
    }
  };

  // Create Table
  result.push(
    ...(interfaces?.length ? ['* [**Interfaces**](#interfaces)'] : []),
    ...(types?.length ? ['* [**Types**](#types)'] : []),
  );

  addSection(interfaces, '\n## Interfaces');
  addSection(types, '\n## Types');

  return result.join('\n');
}

function createSpecMd(component = '') {
  //const typedocJson = require(path.resolve('docs-api', component, 'typedoc.json'));
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

function getInterfaces(jsonItems) {
  const res = [];

  jsonItems
    .filter(({ kindString, children, indexSignature }) => kindString === 'Interface' && (!children || !indexSignature))
    .forEach(({ name, children, indexSignature }) => {
      res.push(`\n### ${name}`);

      // Find default values
      const defaultValues = {};

      (jsonItems.find(({ kindString: defaultString, name: defaultName }) => {
        return defaultString === 'Variable' && defaultName.toLowerCase() === `${name.toLowerCase()}defaultdoc`;
      }))
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
        const commentString = (comment || (signatures && signatures[0]?.comment))?.shortText || '';

        res.push(tableSeparator + [
          `**\`${name}\`**`,
          type ? printType(type) : printType(signatures?.[0]?.type),
          !flags.isOptional ? '✴️' : '',
          defaultValues[name] ? `\`${defaultValues[name]}\`` : '',
          commentString.replace(/\n/g, ''),
        ].join(` ${tableSeparator} `) + tableSeparator);
      });
    });

  return res;
}

function getTypes(jsonItems) {
  const res = [];

  jsonItems
    .filter((item) => item.kindString === 'Enumeration')
    .forEach((enumeration) => {
      res.push(`\n### ${enumeration.name}`);
      res.push('|  |\n|:---:|');

      if (enumeration.children) {
        res.push(enumeration.children.map((property) => `| \`${property.name}\` |`).join('\n'));
      }
    });

  return res;
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
        return someType.types.map((tObj) => `\`${printType(tObj).replace(/^(_|`)|(_|`)$/g, '')}\``).join(' \\| ');
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
