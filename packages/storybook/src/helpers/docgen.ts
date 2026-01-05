import { type Documentation, type FunctionSignatureType, type LiteralType, type ObjectSignatureType, type PropDescriptor, type TypeDescriptor } from 'react-docgen';

enum TAG {
  defaultValue = '@default-value',
  deprecated = '@deprecated',
  internal = '@internal',
  param = '@param',
  type = '@type',
}

type ComponentProp = {
  deprecated: boolean,
  description: string,
  defaultValue: string,
  isOptional: boolean,
  name: string,
  type: string,
}

type Component = {
  name: string,
  props: ComponentProp[],
}

const tagRegExp = /(@[\w-]+)=?([\w']+)?/gi;

function extractTags(str: string): Map<string, string | undefined> {
  const tagMatches = [...str.matchAll(tagRegExp)];

  return tagMatches.reduce((tagMap, match) => {
    tagMap.set(match[1], match[2]);
    return tagMap;
  }, new Map<string, string | undefined>());
}

function getComponentInfo(docgen: Documentation): Component {
  const props = Object.entries(docgen.props || {})
    .map(([name, prop]) => getComponentProp(name, prop))
    .filter((prop): prop is ComponentProp => !!prop);

  return {
    name: docgen.displayName || '',
    props: props.concat(getCustomProps(docgen.description)),
  };
}

function getComponentProp(name: string, prop: PropDescriptor): ComponentProp | undefined {
  const tagsMap = extractTags(prop.description || '');

  if (tagsMap.has(TAG.internal)) {
    return;
  }

  return {
    deprecated: tagsMap.has(TAG.deprecated),
    description: prop.description || '',
    defaultValue: prop.defaultValue?.value?.toString() || tagsMap.get(TAG.defaultValue) || 'undefined',
    isOptional: !prop.required,
    name: name,
    type: tagsMap.get(TAG.type) || (prop.tsType ? typeToString(prop.tsType) : ''),
  }
}

function getComponentsInfo(docgens: Documentation[]): Component[] {
  return docgens.map(getComponentInfo);
}

// As docgen may not be able to infer complex type prop inheritance, we parse the description searching for @param value
// ex: "@param {boolean|optional} disabled - Whether the component is disabled"
function getCustomProps(description = ''): ComponentProp[] {
  return description.split('\n')
    .filter((row) => row.startsWith(TAG.param))
    .map((row) => {
      const matches = row.match(/^@param\s({[a-z|]+})\s(\w+)\s-(.*)/);

      if (!matches || matches.length < 4) {
        return undefined;
      }

      const [type, optional] = matches[1].split('|');

      return {
        deprecated: false,
        description: matches[3].trim(),
        defaultValue: 'undefined',
        isOptional: optional && optional.replace(/[{}]/g, '').trim() === 'optional',
        name: matches[2].trim(),
        type: type.replace(/[{}]/g, '').trim(),
      };
    })
    .filter((prop): prop is ComponentProp => !!prop);
}

function removeTags(str: string): string {
  return str.replace(tagRegExp, '').trim();
}

function typeToString(type: TypeDescriptor): string {
  if ((type as FunctionSignatureType).type === 'function') {
    return (type as FunctionSignatureType).raw;
  }

  if ((type as ObjectSignatureType).type === 'object') {
    const objectType = type as ObjectSignatureType;

    if (objectType.name === 'signature' && objectType.signature.properties.length) {
      const signatureProp = objectType.signature.properties.map((property) => {
        return `${property.key}: ${typeToString(property.value)}`;
      }).join(', ');

      return `{ ${signatureProp} }`;
    }

    return objectType.raw;
  }

  if (type.name === 'literal') {
    // Small tweak to display enum type instead of the actual string literal
    // ex: BUTTON_TYPE instead of `${BUTTON_TYPE}`
    return (type as LiteralType).value.replace(/^`\${(.*)}`/, '$1');
  }

  if (type.name.length === 1) {
    // Render generics with extra <> around
    return `<${type.name}>`;
  }

  if (type.name === 'union' || type.name === 'Array') {
    return type.raw || '';
  }

  return type.name || '';
}

export {
  TAG,
  type Component,
  extractTags,
  getComponentsInfo,
  removeTags,
};
