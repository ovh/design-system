import * as JsxRuntime from 'react/jsx-runtime';
import * as React from 'react';
import * as OdsComponents from '../../../ods-react/src/components/index';
import * as ShikiTypescript from '@shikijs/langs/typescript';
import * as ShikiNord from '@shikijs/themes/nord';
import { formatPrice, formatRelativeTime } from '../../../ods-react/src/utils/format';
import { type ComponentType, useEffect, useRef, useState } from 'react';
import { APP_ROOT } from '../appBase';
import { Splitter } from '@ark-ui/react/splitter';
import { BADGE_COLOR, Badge } from '../../../ods-react/src/components/badge/src';
import { BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../ods-react/src/components/button/src';
import { Clipboard, ClipboardControl, ClipboardTrigger } from '../../../ods-react/src/components/clipboard/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { MESSAGE_COLOR, Message, MessageBody, MessageIcon } from '../../../ods-react/src/components/message/src';
import { MODAL_COLOR, Modal, ModalBody, ModalContent, ModalHeader } from '../../../ods-react/src/components/modal/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../ods-react/src/components/tooltip/src';
import { useDocTheme } from '../doc/useDocTheme';
import { DemoFrame } from '../demo/DemoFrame';
import { encodeSnippet } from './shareCode';
import { monaco, setupMonaco } from './setupMonaco';
import './sandbox.css';

// The components barrel has no helpers: snippets import them from the same
// '@ovhcloud/ods-react' specifier, so the sandbox module carries both.
const ODS = { ...OdsComponents, formatPrice, formatRelativeTime };

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
/* Beyond react and the ODS barrel, the stories only pull these — exposed so
   their open-in-sandbox snippets run as-is. */
const EXTRA_MODULES: Record<string, unknown> = {
  '@shikijs/langs/typescript': ShikiTypescript,
  '@shikijs/themes/nord': ShikiNord,
};

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
    if (name in EXTRA_MODULES) {
      return EXTRA_MODULES[name];
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
  const [Demo, setDemo] = useState<{ Component: ComponentType, compileId: number } | null>(null);
  const [runtimeError, setRuntimeError] = useState<string>('');
  const [tsErrors, setTsErrors] = useState<number>(-1);
  const [resizing, setResizing] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [shareUrl, setShareUrl] = useState('');
  const [shareOpen, setShareOpen] = useState(false);
  const docTheme = useDocTheme();
  const wrapRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<ReturnType<typeof monaco.editor.createModel> | null>(null);
  const initialRef = useRef<string>('');

  useEffect(() => {
    const m = setupMonaco();
    // Editor themes matched to the code snippets' surfaces (CodeBlock): light
    // = github-light clone (#f2f2f2), dark = one-dark-pro (#282c34).
    m.editor.defineTheme('ods-light', { base: 'vs', inherit: true, rules: [], colors: { 'editor.background': '#f2f2f2' } });
    m.editor.defineTheme('ods-dark', { base: 'vs-dark', inherit: true, rules: [], colors: { 'editor.background': '#282c34' } });
    // Seeded from ?code when opened from a demo's "Sandbox" action.
    const source = initialCode || DEFAULT_SNIPPET;
    initialRef.current = source;
    const model = m.editor.createModel(source, 'typescript', m.Uri.parse('file:///sandbox.tsx'));
    modelRef.current = model;
    const editor = m.editor.create(hostRef.current!, {
      automaticLayout: true,
      fontSize: 13,
      minimap: { enabled: false },
      model,
      scrollBeyondLastLine: false,
      theme: document.body.getAttribute('data-theme') === 'dark' ? 'ods-dark' : 'ods-light',
    });
    (window as Record<string, unknown> & Window).__sandbox = { editor, model, monaco: m };

    let timer: ReturnType<typeof setTimeout>;
    let attempts = 0;
    let compileId = 0;
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
        const all = [...semantic, ...syntactic];
        // TS flags unused (reportsUnnecessary) and deprecated usages as
        // semantic diagnostics: real feedback, but not compile errors.
        const diagnostics = all.filter((d) => !(d as { reportsUnnecessary?: unknown }).reportsUnnecessary && !(d as { reportsDeprecated?: unknown }).reportsDeprecated);
        setTsErrors(diagnostics.length);
        // Inline squiggles at the exact line/column, with Monaco's native hover.
        m.editor.setModelMarkers(model, 'ts', diagnostics.map((d) => {
          const from = (d as { start?: number }).start ?? 0;
          const length = (d as { length?: number }).length ?? 0;
          const start = model.getPositionAt(from);
          const end = model.getPositionAt(from + length);
          const mt = (d as { messageText: string | { messageText: string } }).messageText;
          return {
            endColumn: end.column,
            endLineNumber: end.lineNumber,
            message: typeof mt === 'string' ? mt : mt.messageText,
            severity: m.MarkerSeverity.Error,
            startColumn: start.column,
            startLineNumber: start.lineNumber,
          };
        }));
        const js = emit.outputFiles[0]?.text ?? '';
        setRuntimeError('');
        // The boundary latches its failed state: remount it (via compileId as
        // key) on each successful compile so a past crash doesn't keep the
        // preview blank after the code is fixed.
        compileId += 1;
        setDemo({ Component: evaluate(js), compileId });
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

  useEffect(() => {
    const onChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  // Keep the editor theme in sync with the docs theme, like the snippets.
  useEffect(() => {
    monaco.editor.setTheme(docTheme === 'dark' ? 'ods-dark' : 'ods-light');
  }, [docTheme]);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapRef.current?.requestFullscreen();
    }
  };

  const reset = () => modelRef.current?.setValue(initialRef.current);

  const share = () => {
    const code = modelRef.current?.getValue() ?? '';
    setShareUrl(`${APP_ROOT.href}?p=/tools/sandbox&code=${encodeSnippet(code)}`);
    setShareOpen(true);
  };

  const Component = Demo?.Component;

  return (
    <div className="sandbox-wrap" ref={ wrapRef }>
      <div className="sandbox-toolbar">
        { tsErrors === 0 ? (
          <Badge color={ BADGE_COLOR.success } size="sm"><Icon name={ ICON_NAME.circleCheck } /> No errors</Badge>
        ) : tsErrors > 0 ? (
          <Badge color={ BADGE_COLOR.critical } size="sm" data-testid="ts-errors-badge">{ tsErrors } error{ tsErrors > 1 ? 's' : '' }</Badge>
        ) : (
          <Badge color={ BADGE_COLOR.neutral } size="sm">Compiling…</Badge>
        ) }
        <span data-testid="ts-errors" hidden>{ tsErrors }</span>

        <div className="sandbox-toolbar__actions">
          <Button
            onClick={ () => setOrientation((o) => (o === 'horizontal' ? 'vertical' : 'horizontal')) }
            size={ BUTTON_SIZE.sm }
            title={ orientation === 'horizontal' ? 'Split vertically' : 'Split horizontally' }
            variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ orientation === 'horizontal' ? ICON_NAME.splitVertical : ICON_NAME.splitHorizontal } /> Layout
          </Button>
          <Button onClick={ reset } size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.refresh } /> Reset
          </Button>
          <Button onClick={ share } size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ ICON_NAME.shareNodes } /> Share
          </Button>
          <Button onClick={ toggleFullscreen } size={ BUTTON_SIZE.sm } variant={ BUTTON_VARIANT.ghost }>
            <Icon name={ fullscreen ? ICON_NAME.shrink : ICON_NAME.resize } /> { fullscreen ? 'Exit' : 'Fullscreen' }
          </Button>
        </div>
      </div>

      <Modal onOpenChange={ ({ open }) => setShareOpen(open) } open={ shareOpen }>
        <ModalContent color={ MODAL_COLOR.information }>
          <ModalHeader>Share your sandbox</ModalHeader>
          <ModalBody>
            <p className="sandbox__share-hint">You can use the following link to share your current sandbox sample:</p>
            <div className="sandbox__share">
              <Clipboard value={ shareUrl }>
                <ClipboardControl />
                <ClipboardTrigger />
              </Clipboard>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon aria-label="See limitations" className="sandbox__share-warning" name={ ICON_NAME.triangleExclamation } role="img" />
                </TooltipTrigger>
                <TooltipContent>
                  The maximum length of a URL varies significantly depending on the browser being used.
                  <br />
                  While the HTTP specification does not define a maximum URL length, each browser imposes its own limits.
                  <br />
                  Depending on the length of the code sample you try to share, it may not work properly on some browsers.
                </TooltipContent>
              </Tooltip>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Splitter.Root
        className={ resizing ? 'sandbox sandbox--resizing' : 'sandbox' }
        defaultSize={ [50, 50] }
        onResizeEnd={ () => setResizing(false) }
        onResizeStart={ () => setResizing(true) }
        orientation={ orientation }
        panels={ [{ id: 'editor', minSize: 15 }, { id: 'preview', minSize: 15 }] }
        style={{ height: '100%' }}>
        <Splitter.Panel className="sandbox__pane" id="editor">
          <header className="sandbox__pane-header">
            <Text preset={ TEXT_PRESET.heading6 }>Editor</Text>
          </header>
          <div className="sandbox__editor" ref={ hostRef } />
        </Splitter.Panel>

        <Splitter.ResizeTrigger aria-label="Resize panels" asChild id="editor:preview">
          <Button className={ `sandbox__resizer sandbox__resizer--${orientation}` } color={ BUTTON_COLOR.neutral } />
        </Splitter.ResizeTrigger>

        <Splitter.Panel className="sandbox__pane" id="preview">
          <header className="sandbox__pane-header">
            <Text preset={ TEXT_PRESET.heading6 }>Preview</Text>
          </header>
          <div className="sandbox__preview">
            { runtimeError && (
              <Message className="sandbox__error" color={ MESSAGE_COLOR.critical } data-testid="runtime-error" dismissible={ false }>
                <MessageIcon name={ ICON_NAME.hexagonExclamation } />
                <MessageBody>{ runtimeError }</MessageBody>
              </Message>
            ) }
            <DemoFrame dark={ dark } tokens={ tokens }>
              { Component
                ? <DemoBoundary key={ Demo?.compileId } onError={ (e) => setRuntimeError(e.message) }><Component /></DemoBoundary>
                : null }
            </DemoFrame>
          </div>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
};

export { Sandbox };
