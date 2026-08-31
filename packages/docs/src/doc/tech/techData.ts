import { parseTechnicalSpec, type TechnicalSpec } from './typedoc';

/* The typedoc + css-variable JSON that ship next to every ods-react
   component, keyed by component folder. The glob is lazy: its key set is
   enough for a component page to ask "do I have a technical spec?"
   synchronously, and the payloads only load inside the technical tab. */
const TECH_JSON = import.meta.glob('../../../../ods-react/src/components/*/documentation/*.json', { import: 'default' });

const folderOf = (path: string): string => path.match(/components\/([^/]+)\/documentation\//)?.[1] ?? '';

/* folder → JSON path (typedoc = the file named after the folder; the
   cssVariable.json sitting beside it is indexed separately). */
const typedocPathByComponent: Record<string, string> = {};
const cssVarsPathByComponent: Record<string, string> = {};
for (const path of Object.keys(TECH_JSON)) {
  if (path.endsWith('/cssVariable.json')) {
    cssVarsPathByComponent[folderOf(path)] = path;
  } else {
    typedocPathByComponent[folderOf(path)] = path;
  }
}

interface TechData {
  cssVariables: Record<string, string>;
  spec: TechnicalSpec;
}

async function getTechData(component: string): Promise<TechData | null> {
  const typedocPath = typedocPathByComponent[component];
  if (!typedocPath) {
    return null;
  }
  const cssVarsPath = cssVarsPathByComponent[component];
  const [root, cssVariables] = await Promise.all([
    TECH_JSON[typedocPath](),
    cssVarsPath ? TECH_JSON[cssVarsPath]() : undefined,
  ]);
  return {
    cssVariables: (cssVariables ?? {}) as Record<string, string>,
    // The folder key is kebab-case but the Prop names are not: strip the
    // dashes ('radio-group' → matches RadioGroup) so the root component is
    // pinned first — the same normalization vite-plugin-llms applies.
    spec: parseTechnicalSpec(root as Parameters<typeof parseTechnicalSpec>[0], component.replace(/-/g, '')),
  };
}

function hasTechData(component: string): boolean {
  return !!typedocPathByComponent[component];
}

export { getTechData, hasTechData, type TechData };
