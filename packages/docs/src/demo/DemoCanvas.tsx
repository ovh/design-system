import { type ReactNode, useState } from 'react';
import { BUTTON_EMPHASIS, BUTTON_SIZE, Button } from '../../../ods-react/src/components/button/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { APP_ROOT } from '../appBase';
import { CodeBlock } from '../doc/CodeBlock';
import { encodeSnippet } from '../sandbox/shareCode';
import { DemoFrame } from './DemoFrame';
import { buildSandboxSnippet } from './sandboxSnippet';
import './demoCanvas.css';

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
              emphasis={ BUTTON_EMPHASIS.low }
              onClick={ () => window.open(`${APP_ROOT.href}?p=/tools/sandbox&code=${encodeSnippet(sandboxCode)}`, '_blank', 'noreferrer') }
              size={ BUTTON_SIZE.sm }
              title="Open in sandbox">
              <Icon name={ ICON_NAME.chevronLeftUnderscore } /> Sandbox
            </Button>
          ) }
          { source && (
            <Button
              aria-expanded={ codeOpen }
              emphasis={ BUTTON_EMPHASIS.low }
              onClick={ () => setCodeOpen((open) => !open) }
              size={ BUTTON_SIZE.sm }>
              <Icon name={ ICON_NAME.chevronLeftSlash } /> { codeOpen ? 'Hide code' : 'Show code' }
            </Button>
          ) }
        </div>
      </div>
      ) }

      <div className="canvas__demo">
        <DemoFrame bare dark={ dark } inset tokens={ tokens }>
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
