import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
// Type graph injected into the TS worker: every built d.ts of ods-react,
// plus the react/csstype/prop-types chain they depend on.
// Imported by file path (not bare specifier): the @types packages' export
// maps do not expose their d.ts to bundlers.
import cssTypes from '../../node_modules/csstype/index.d.ts?raw';
import propTypesTypes from '../../node_modules/@types/prop-types/index.d.ts?raw';
import reactJsxRuntimeTypes from '../../node_modules/@types/react/jsx-runtime.d.ts?raw';
import reactTypes from '../../node_modules/@types/react/index.d.ts?raw';

const odsTypeFiles = import.meta.glob('../../../ods-react/dist/src/**/*.d.ts', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

function setupMonaco(): typeof monaco {
  const ts = monaco.languages.typescript.typescriptDefaults;

  ts.setCompilerOptions({
    allowNonTsExtensions: true,
    esModuleInterop: true,
    jsx: monaco.languages.typescript.JsxEmit.ReactJSX,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    strict: true,
    target: monaco.languages.typescript.ScriptTarget.ES2020,
  });

  // 2307 (cannot find module) only fires for the peripheral type-only deps we
  // deliberately do not ship in the spike (@ark-ui, @tanstack) — production
  // will inject them too (or use ATA).
  ts.setDiagnosticsOptions({ diagnosticCodesToIgnore: [2307] });

  ts.addExtraLib(reactTypes, 'file:///node_modules/@types/react/index.d.ts');
  ts.addExtraLib(reactJsxRuntimeTypes, 'file:///node_modules/@types/react/jsx-runtime.d.ts');
  ts.addExtraLib(cssTypes, 'file:///node_modules/csstype/index.d.ts');
  ts.addExtraLib(propTypesTypes, 'file:///node_modules/@types/prop-types/index.d.ts');

  // dist/src/index.d.ts lands at node_modules/@ovhcloud/ods-react/index.d.ts,
  // which is exactly where NodeJs resolution looks the bare specifier up.
  for (const [path, content] of Object.entries(odsTypeFiles)) {
    const rel = path.replace('../../../ods-react/dist/src/', '');
    ts.addExtraLib(content, `file:///node_modules/@ovhcloud/ods-react/${rel}`);
  }

  return monaco;
}

export { setupMonaco, monaco };
