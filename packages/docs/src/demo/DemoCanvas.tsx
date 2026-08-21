import { type ReactNode, useState } from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, Button } from '../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { APP_ROOT } from '../appBase';
import { CodeBlock } from '../doc/CodeBlock';
import { encodeSnippet } from '../sandbox/shareCode';
import { DemoFrame } from './DemoFrame';
import './demoCanvas.css';

/* Wraps a story's render body into a runnable sandbox snippet. Best-effort:
   the story imports when known, else a placeholder, plus an export default. */
function buildSandboxSnippet(source: string, imports?: string): string {
  const header = imports?.trim() || `import { } from '@ovhcloud/ods-react';`;
  const body = source.trim();
  const returned = body.startsWith('<') ? `(\n${body}\n)` : body;
  return `${header}\n\nexport default function Demo() {\n  return ${returned};\n}\n`;
}

/* One unified card: a demo on a tinted surface, a toolbar, and the source
   below (collapsible, shown by default). Used by both the doc <Canvas> and
   the Examples tab so every demo looks the same. */
const DemoCanvas = ({ children, dark, sandboxCode, source, title, tokens }: {
  children: ReactNode;
  dark?: boolean;
  sandboxCode?: string;
  source?: string;
  title?: string;
  tokens?: Record<string, string>;
}) => {
  const [codeOpen, setCodeOpen] = useState(true);
  const hasToolbar = title || source || sandboxCode;

  return (
    <div className="canvas">
      { hasToolbar && (
      <div className="canvas__toolbar">
        { title && <span className="canvas__title">{ title }</span> }
        <div className="canvas__actions">
          { sandboxCode && (
            <Button
              aria-label="Open this example in the sandbox (new tab)"
              onClick={ () => window.open(`${APP_ROOT.href}?p=/tools/sandbox&code=${encodeSnippet(sandboxCode)}`, '_blank', 'noreferrer') }
              size={ BUTTON_SIZE.sm }
              title="Open in sandbox"
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.chevronLeftUnderscore } /> Sandbox
            </Button>
          ) }
          { source && (
            <Button
              aria-expanded={ codeOpen }
              onClick={ () => setCodeOpen((open) => !open) }
              size={ BUTTON_SIZE.sm }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.chevronLeftSlash } /> { codeOpen ? 'Hide code' : 'Show code' }
            </Button>
          ) }
        </div>
      </div>
      ) }

      <div className="canvas__demo">
        <DemoFrame bare dark={ dark } tokens={ tokens }>
          { children }
        </DemoFrame>
      </div>

      { source && codeOpen && (
        <div className="canvas__code">
          <CodeBlock style={{ width: '100%' }}>{ source }</CodeBlock>
        </div>
      ) }
    </div>
  );
};

export { DemoCanvas, buildSandboxSnippet };
