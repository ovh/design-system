import * as JsxRuntime from 'react/jsx-runtime';
import * as React from 'react';
import * as ODS from '../../../ods-react/src/components/index';
import { type ComponentType, useEffect, useRef, useState } from 'react';
import { DemoFrame } from '../demo/DemoFrame';
import { monaco, setupMonaco } from './setupMonaco';

const DEFAULT_SNIPPET = `import { Button, BUTTON_VARIANT } from '@ovhcloud/ods-react';

export default function Demo() {
  return (
    <Button variant={ BUTTON_VARIANT.outline }>
      Hello from the sandbox
    </Button>
  );
}
`;

/* Executes the CommonJS emit of the TS worker with a require shim scoped to
   the libs the docs expose — the strategy react-live/addon-code-editor use,
   without their dependency. */
function evaluate(js: string): ComponentType {
  const moduleObject: { exports: Record<string, unknown> } = { exports: {} };
  const requireShim = (name: string): unknown => {
    if (name === 'react') {
      return React;
    }
    if (name === 'react/jsx-runtime') {
      return JsxRuntime;
    }
    if (name === '@ovhcloud/ods-react') {
      return ODS;
    }
    throw new Error(`Module non exposé dans la sandbox : ${name}`);
  };
  new Function('require', 'module', 'exports', 'React', js)(requireShim, moduleObject, moduleObject.exports, React);
  const exported = (moduleObject.exports.default ?? moduleObject.exports) as ComponentType;
  if (typeof exported !== 'function') {
    throw new Error('Le snippet doit exporter un composant par défaut (export default).');
  }
  return exported;
}

class DemoBoundary extends React.Component<{ children: React.ReactNode, onError: (e: Error) => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const Sandbox = ({ dark, initialCode, tokens }: { dark: boolean, initialCode?: string, tokens: Record<string, string> }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [Demo, setDemo] = useState<{ Component: ComponentType } | null>(null);
  const [runtimeError, setRuntimeError] = useState<string>('');
  const [tsErrors, setTsErrors] = useState<number>(-1);

  useEffect(() => {
    const m = setupMonaco();
    // Seeded from ?code when opened from a demo's "Sandbox" action.
    const model = m.editor.createModel(initialCode || DEFAULT_SNIPPET, 'typescript', m.Uri.parse('file:///sandbox.tsx'));
    const editor = m.editor.create(hostRef.current!, {
      automaticLayout: true,
      fontSize: 13,
      minimap: { enabled: false },
      model,
      scrollBeyondLastLine: false,
    });
    (window as Record<string, unknown> & Window).__sandbox = { editor, model, monaco: m };

    let timer: ReturnType<typeof setTimeout>;
    let attempts = 0;
    const withTimeout = <T,>(promise: Promise<T>, ms: number): Promise<T> =>
      Promise.race([promise, new Promise<never>((_, reject) => setTimeout(() => reject(new Error('worker timeout')), ms))]);
    const trace = (step: string) => { (window as Record<string, unknown> & Window).__compileState = step; };
    const compile = async () => {
      try {
        trace('worker');
        // The worker boot occasionally races the teardown of the previous
        // page's frames and never resolves: time-box it and retry.
        const worker = await withTimeout(m.languages.typescript.getTypeScriptWorker(), 5000);
        trace('client');
        const client = await withTimeout(worker(model.uri), 5000);
        trace('diagnostics');
        attempts = 0;
        const uri = model.uri.toString();
        const [semantic, syntactic, emit] = await withTimeout(Promise.all([
          client.getSemanticDiagnostics(uri),
          client.getSyntacticDiagnostics(uri),
          client.getEmitOutput(uri),
        ]), 15000);
        trace('done');
        setTsErrors(semantic.length + syntactic.length);
        const js = emit.outputFiles[0]?.text ?? '';
        setRuntimeError('');
        setDemo({ Component: evaluate(js) });
      } catch (e) {
        trace('failed:' + String(e).slice(0, 40) + ' attempt=' + attempts);
        // 'TypeScript not registered!': the build code-splits Monaco's
        // language contributions into async chunks — the TS one may land
        // after our first compile call. Retry covers it and the rare
        // worker-boot timeout alike.
        const retryable = String(e).includes('worker timeout') || String(e).includes('not registered');
        if (retryable && attempts < 8) {
          attempts += 1;
          timer = setTimeout(compile, 500);
          return;
        }
        setRuntimeError(String(e));
      }
    };
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(compile, 500);
    };
    model.onDidChangeContent(schedule);
    compile();

    return () => {
      clearTimeout(timer);
      editor.dispose();
      model.dispose();
    };
  }, []);

  const Component = Demo?.Component;

  return (
    <section>
      <h2>Sandbox — spike Monaco (R7)</h2>
      <p>
        <span data-testid="ts-errors">{ tsErrors }</span> erreur(s) TypeScript
        { runtimeError && <span data-testid="runtime-error" style={{ color: '#B45309' }}> · { runtimeError }</span> }
      </p>
      <div ref={ hostRef } style={{ border: '1px solid #C4D9E6', height: '280px', marginBottom: '16px' }} />
      <DemoFrame dark={ dark } tokens={ tokens }>
        { Component
          ? <DemoBoundary onError={ (e) => setRuntimeError(e.message) }><Component /></DemoBoundary>
          : null }
      </DemoFrame>
    </section>
  );
};

export { Sandbox };
