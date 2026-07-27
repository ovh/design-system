import { parseTechnicalSpec, type TechnicalSpec } from './typedoc';

/* The typedoc + css-variable JSON that ship next to every ods-react
   component. Globbed eagerly and keyed by component folder, so a component
   page can ask "do I have a technical spec?" synchronously. */
const TYPEDOC = import.meta.glob('../../../../ods-react/src/components/*/documentation/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;
const CSS_VARS = import.meta.glob('../../../../ods-react/src/components/*/documentation/cssVariable.json', { eager: true, import: 'default' }) as Record<string, Record<string, string>>;

const folderOf = (path: string): string => path.match(/components\/([^/]+)\/documentation\//)?.[1] ?? '';

/* folder → typedoc root node (the file named after the folder, not cssVariable). */
const typedocByComponent = Object.entries(TYPEDOC).reduce<Record<string, unknown>>((acc, [path, data]) => {
  if (!path.endsWith('/cssVariable.json')) {
    acc[folderOf(path)] = data;
  }
  return acc;
}, {});

const cssVarsByComponent = Object.entries(CSS_VARS).reduce<Record<string, Record<string, string>>>((acc, [path, data]) => {
  acc[folderOf(path)] = data;
  return acc;
}, {});

interface TechData {
  cssVariables: Record<string, string>;
  spec: TechnicalSpec;
}

function getTechData(component: string): TechData | null {
  const root = typedocByComponent[component];
  if (!root) {
    return null;
  }
  return {
    cssVariables: cssVarsByComponent[component] ?? {},
    spec: parseTechnicalSpec(root as Parameters<typeof parseTechnicalSpec>[0], component),
  };
}

function hasTechData(component: string): boolean {
  return !!typedocByComponent[component];
}

export { getTechData, hasTechData, type TechData };
