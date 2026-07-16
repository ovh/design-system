import { EnvironmentProvider } from '@ark-ui/react/environment';
import { type ReactNode, useContext, useEffect } from 'react';
import Frame, { FrameContext } from 'react-frame-component';
// Vite inlines the css text; url() references are rebased at import time.
import normalizeCss from '@ovhcloud/ods-react/normalize-css?inline';
import themeCss from '@ovhcloud/ods-themes/default/css?inline';
import fontsCss from '@ovhcloud/ods-themes/default/fonts?inline';

interface DemoFrameProp {
  children: ReactNode;
  dark?: boolean;
  /* Hot token overrides (theme generator use case), e.g. { '--ods-color-primary-500': '#ff0000' } */
  tokens?: Record<string, string>;
}

/* Applies theme + token overrides on the iframe's own document. Lives inside
   the frame so FrameContext resolves to the frame document, not the parent. */
const FrameEnv = ({ dark, tokens }: Omit<DemoFrameProp, 'children'>) => {
  const { document: frameDocument } = useContext(FrameContext);

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    if (dark) {
      frameDocument.body.setAttribute('data-theme', 'dark');
    } else {
      frameDocument.body.removeAttribute('data-theme');
    }
  }, [dark, frameDocument]);

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    let styleEl = frameDocument.getElementById('ods-token-overrides');
    if (!styleEl) {
      styleEl = frameDocument.createElement('style');
      styleEl.id = 'ods-token-overrides';
      frameDocument.head.appendChild(styleEl);
    }
    const rules = Object.entries(tokens || {}).map(([name, value]) => `${name}: ${value};`).join(' ');
    styleEl.textContent = rules ? `:root { ${rules} }` : '';
  }, [tokens, frameDocument]);

  return null;
};

/* Vite injects the component styles (ods-react css modules pulled by the
   stories) as <style> tags in the PARENT document head — an iframe being a
   separate document, they must be mirrored into it. The observer keeps HMR
   working. In build mode the equivalent will be a <link> to the extracted
   stylesheet (to wire when the build target exists). */
const SYNC_MARKER = 'data-ods-docs-sync';

const StyleSync = () => {
  const { document: frameDocument } = useContext(FrameContext);

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    const copyStyles = () => {
      frameDocument.head.querySelectorAll(`[${SYNC_MARKER}]`).forEach((node) => node.remove());
      document.head.querySelectorAll('style').forEach((styleEl) => {
        const clone = frameDocument.importNode(styleEl, true);
        clone.setAttribute(SYNC_MARKER, '');
        frameDocument.head.appendChild(clone);
      });
    };
    copyStyles();
    const observer = new MutationObserver(copyStyles);
    observer.observe(document.head, { characterData: true, childList: true, subtree: true });
    return () => observer.disconnect();
  }, [frameDocument]);

  return null;
};

/* The <base> makes relative url() references (fonts of the inlined theme css)
   resolve against the app origin instead of the frame's null base. */
/* react-frame-component shares the parent JS realm: without this, Ark's
   portals (modals, popovers, tooltips) target the PARENT document.body and
   escape the frame — losing its theme and token overrides. Ark ships
   EnvironmentProvider precisely to re-root portals and DOM queries onto the
   frame document. */
const FrameRealm = ({ children }: { children: ReactNode }) => {
  const { document: frameDocument } = useContext(FrameContext);

  if (!frameDocument) {
    return null;
  }
  return <EnvironmentProvider value={ frameDocument }>{ children }</EnvironmentProvider>;
};

const INITIAL_CONTENT = `<!DOCTYPE html><html><head><base href="${window.location.origin}/"></head><body><div id="mount"></div></body></html>`;

const DemoFrame = ({ children, dark, tokens }: DemoFrameProp) => {
  return (
    <Frame
      head={
        <style>{ `${normalizeCss}\n${fontsCss}\n${themeCss}\nbody { margin: 0; padding: 16px; background: var(--ods-theme-background-color); color: var(--ods-theme-text-color); font-family: var(--ods-theme-font-family); }` }</style>
      }
      initialContent={ INITIAL_CONTENT }
      mountTarget="#mount"
      style={{ border: '1px solid #C4D9E6', borderRadius: '4px', width: '100%', minHeight: '140px', colorScheme: 'auto' }}>
      <StyleSync />
      <FrameEnv dark={ dark } tokens={ tokens } />
      <FrameRealm>{ children }</FrameRealm>
    </Frame>
  );
};

export { DemoFrame };
