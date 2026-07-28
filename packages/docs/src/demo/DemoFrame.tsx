import { EnvironmentProvider } from '@ark-ui/react/environment';
import { type ReactNode, useContext, useEffect, useState } from 'react';
import Frame, { FrameContext } from 'react-frame-component';
import { Skeleton } from '../../../ods-react/src/components/skeleton/src';
// Vite inlines the css text; url() references are rebased at import time.
import normalizeCss from '@ovhcloud/ods-react/normalize-css?inline';
import themeCss from '@ovhcloud/ods-themes/default/css?inline';
import fontsCss from '@ovhcloud/ods-themes/default/fonts?inline';

interface DemoFrameProp {
  /* No own border/radius — the parent (DemoCanvas) frames it. */
  bare?: boolean;
  children: ReactNode;
  dark?: boolean;
  /* Fires with the frame document once it has painted — for callers that
     measure the rendered DOM (the anatomy highlighter). */
  onReady?: (frameDocument: Document) => void;
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
      // dev: Vite injects <style>; build: extracted stylesheets arrive as <link>
      document.head.querySelectorAll('style, link[rel="stylesheet"]').forEach((el) => {
        const clone = frameDocument.importNode(el, true);
        if (clone instanceof HTMLLinkElement) {
          clone.href = (el as HTMLLinkElement).href;
        }
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
/* Sizes the iframe to its content. Two measures are combined: the document
   scrollHeight (normal flow) and the bottom edge of Ark positioners/backdrops
   — overlays are position:fixed and would otherwise be clipped since they do
   not contribute to scrollHeight. rAF coalesces observer bursts. */
const FrameAutoSize = ({ active }: { active: boolean }) => {
  const { document: frameDocument, window: frameWindow } = useContext(FrameContext);

  useEffect(() => {
    if (!frameDocument || !frameWindow) {
      return;
    }
    const iframe = frameWindow.frameElement as HTMLIFrameElement | null;
    if (!iframe) {
      return;
    }
    let raf = 0;
    // Overlays size themselves to the frame viewport: measuring them in a
    // 100px-tall frame yields a squashed modal (chicken-and-egg). When an
    // open overlay is detected, jump to a comfortable stage height first —
    // the overlay then lays itself out inside it.
    const OVERLAY_STAGE = 420;
    const measure = () => {
      raf = 0;
      // body, not documentElement: the html element stretches to the iframe
      // viewport, so measuring it ratchets the height up and never shrinks.
      // scrollHeight catches overflowing children that offsetHeight misses
      // (sub-pixel rounding and late layout were producing inner scrollbars).
      const body = frameDocument.body;
      let height = Math.max(body.offsetHeight, body.scrollHeight) + 1;
      let hasOpenOverlay = false;
      // Ark flags every open floating part with data-state="open"; the
      // positioner itself is always mounted (fixed, viewport-sized), so
      // presence alone is a false positive.
      frameDocument.querySelectorAll('[data-part][data-state="open"]').forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.height > 0) {
          hasOpenOverlay = true;
          height = Math.max(height, rect.bottom + 16);
        }
      });
      if (hasOpenOverlay) {
        height = Math.max(height, OVERLAY_STAGE);
      }
      iframe.style.height = `${Math.max(Math.ceil(height), 60)}px`;
    };
    const schedule = () => {
      if (!raf) {
        raf = frameWindow.requestAnimationFrame(measure);
      }
    };
    measure();
    const resizeObserver = new frameWindow.ResizeObserver(schedule);
    resizeObserver.observe(frameDocument.body);
    const mutationObserver = new MutationObserver(schedule);
    mutationObserver.observe(frameDocument.body, { attributes: true, childList: true, subtree: true });
    return () => {
      frameWindow.cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [active, frameDocument, frameWindow]);

  return null;
};

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

/* Flips ready once the frame content has painted with its fonts, so the
   parent can swap the skeleton for the real frame without layout jumps.
   Hands the frame document back so callers can measure inside it. */
const FrameReady = ({ onReady }: { onReady: (frameDocument: Document) => void }) => {
  const { document: frameDocument } = useContext(FrameContext);

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    let cancelled = false;
    frameDocument.fonts.ready.then(() => {
      if (!cancelled) {
        requestAnimationFrame(() => onReady(frameDocument));
      }
    });
    return () => { cancelled = true; };
  }, [frameDocument, onReady]);

  return null;
};

const DemoFrame = ({ bare, children, dark, onReady, tokens }: DemoFrameProp) => {
  const [ready, setReady] = useState(false);

  return (
    <>
      { !ready && <Skeleton style={{ borderRadius: '4px', height: '74px', width: '100%' }} /> }
      <Frame
        head={
          <style>{ `${normalizeCss}\n${fontsCss}\n${themeCss}\nhtml { overflow: hidden; } body { margin: 0; padding: 16px; background: var(--ods-theme-background-color); color: var(--ods-theme-text-color); font-family: var(--ods-theme-font-family); }` }</style>
        }
        initialContent={ INITIAL_CONTENT }
        mountTarget="#mount"
        style={ ready
          // no height here: FrameAutoSize owns it imperatively — a height in
          // the React style prop would clobber it on every parent re-render.
          ? { ...(bare ? { border: 'none' } : { border: '1px solid #C4D9E6', borderRadius: '4px' }), width: '100%', colorScheme: 'auto', display: 'block' }
          : { display: 'block', height: 0, visibility: 'hidden', width: '100%' } }>
        <StyleSync />
        <FrameAutoSize active={ ready } />
        <FrameEnv dark={ dark } tokens={ tokens } />
        <FrameReady onReady={ (frameDocument) => { setReady(true); onReady?.(frameDocument); } } />
        <FrameRealm>{ children }</FrameRealm>
      </Frame>
    </>
  );
};

export { DemoFrame };
