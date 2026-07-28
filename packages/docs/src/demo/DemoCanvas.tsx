import { type ReactNode, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { CodeBlock } from '../doc/CodeBlock';
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
            <RouterLink
              aria-label="Open this example in the sandbox"
              className="canvas__action"
              title="Open in sandbox"
              to={ `/tools/sandbox?code=${encodeURIComponent(sandboxCode)}` }>
              <Icon name={ ICON_NAME.chevronLeftUnderscore } /> Sandbox
            </RouterLink>
          ) }
          { source && (
            <button
              aria-expanded={ codeOpen }
              className="canvas__action"
              onClick={ () => setCodeOpen((open) => !open) }
              type="button">
              <Icon name={ ICON_NAME.chevronLeftSlash } /> { codeOpen ? 'Hide code' : 'Show code' }
            </button>
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
