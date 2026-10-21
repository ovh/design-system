import { EnvironmentProvider } from '@ark-ui/react/environment';
import { type ReactNode, useContext, useEffect, useState } from 'react';
import Frame, { FrameContext } from 'react-frame-component';
import { useNavigate } from 'react-router-dom';
import { APP_ROOT } from '../appBase';
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
  /* Leaves the body on the page surface instead of the raised one — for
     callers that paint their own raised surface inside the frame. */
  pageSurface?: boolean;
  /* Fires with the frame document once it has painted — for callers that
     measure the rendered DOM (the anatomy highlighter). */
  onReady?: (frameDocument: Document) => void;
  /* Hot token overrides (theme generator use case), e.g. { '--ods-palette-brand-500': '#ff0000' } */
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
    // :root:root — StyleSync may mirror the theme sheet AFTER this style tag,
    // and at equal specificity the later :root would win: doubling the
    // selector beats it regardless of injection order.
    styleEl.textContent = rules ? `:root:root { ${rules} }` : '';
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
    // Incremental: wiping and re-cloning every sheet on each head mutation
    // made the frame reload all its <link>s whenever a lazy chunk preloaded
    // (a hundred-odd mutations), flashing the demo unstyled — popups then
    // laid out at their raw size for a few frames. Clones are kept per source
    // node; only added, removed or edited sheets are touched.
    const clones = new Map<Element, Element>();
    frameDocument.head.querySelectorAll(`[${SYNC_MARKER}]`).forEach((node) => node.remove());
    const copyStyles = () => {
      // dev: Vite injects <style>; build: extracted stylesheets arrive as <link>
      const sources = [...document.head.querySelectorAll('style, link[rel="stylesheet"]')];
      clones.forEach((clone, source) => {
        if (!sources.includes(source)) {
          clone.remove();
          clones.delete(source);
        }
      });
      // Walks backwards so a new clone lands before the next synced one:
      // the frame keeps the parent's cascade order.
      let next: Element | null = null;
      for (let i = sources.length - 1; i >= 0; i--) {
        const source = sources[i];
        let clone = clones.get(source);
        if (!clone) {
          clone = frameDocument.importNode(source, true);
          if (clone instanceof HTMLLinkElement) {
            clone.href = (source as HTMLLinkElement).href;
          }
          clone.setAttribute(SYNC_MARKER, '');
          frameDocument.head.insertBefore(clone, next);
          clones.set(source, clone);
        } else if (source instanceof HTMLStyleElement && clone.textContent !== source.textContent) {
          // Vite HMR rewrites the <style> content in place.
          clone.textContent = source.textContent;
        }
        next = clone;
      }
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
    // Overlays size and place themselves against the frame viewport. Growing
    // the frame only once one opens made every open/close resize it: the page
    // below jumped, the scroll container clamped when the demo sat at the
    // bottom, and the popup was placed twice (flipped in the short frame,
    // then re-placed). Ark keeps a positioner mounted for every floating part
    // even when closed, so popup-capable demos are detected up front and get
    // their stage from first paint — opening or closing never resizes them.
    const OVERLAY_STAGE = 420;
    // Tooltips are a line or two of text: a full stage would be mostly void.
    const TOOLTIP_STAGE = 160;
    // Bottom edge of the tallest overlay seen so far: kept once closed so a
    // popup taller than the stage resizes the frame once, not on every toggle.
    let overlayBottom = 0;
    const measure = () => {
      raf = 0;
      // body, not documentElement: the html element stretches to the iframe
      // viewport, so measuring it ratchets the height up and never shrinks.
      // scrollHeight catches overflowing children that offsetHeight misses
      // (sub-pixel rounding and late layout were producing inner scrollbars).
      const body = frameDocument.body;
      let height = Math.max(body.offsetHeight, body.scrollHeight) + 1;
      const positioners = frameDocument.querySelectorAll('[data-part="positioner"]');
      if (positioners.length) {
        const tooltipsOnly = [...positioners].every((el) => el.getAttribute('data-scope') === 'tooltip');
        height = Math.max(height, tooltipsOnly ? TOOLTIP_STAGE : OVERLAY_STAGE);
      }
      // Only floating parts count: data-state="open" also flags in-flow
      // parts (accordion items, tree branches, triggers) already covered by
      // the body measure.
      positioners.forEach((positioner) => {
        positioner.querySelectorAll('[data-state="open"]').forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.height > 0) {
            overlayBottom = Math.max(overlayBottom, rect.bottom + 16);
          }
        });
      });
      height = Math.max(height, overlayBottom);
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

/* An anchor with a query-only href (the Pagination link mode demos build them) resolves against the
   <base> below, so following it would load the whole docs app inside the frame. A demo reads the
   URL of the router it runs under, so the navigation is handed to that router instead, the way a routing
   library's link does it. A click a link already handled (a router link) is left alone. */
const FrameLinks = () => {
  const { document: frameDocument } = useContext(FrameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href^="?"]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
        || (anchor.getAttribute('target') ?? '_self') !== '_self') {
        return;
      }
      event.preventDefault();
      navigate({ search: anchor.getAttribute('href')! });
    };
    frameDocument.addEventListener('click', onClick);
    return () => frameDocument.removeEventListener('click', onClick);
  }, [frameDocument, navigate]);

  return null;
};

const INITIAL_CONTENT = `<!DOCTYPE html><html><head><base href="${APP_ROOT.href}"></head><body><div id="mount"></div></body></html>`;

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

const DemoFrame = ({ bare, children, dark, onReady, pageSurface, tokens }: DemoFrameProp) => {
  const [ready, setReady] = useState(false);

  return (
    <>
      { !ready && <Skeleton style={{ borderRadius: '4px', height: '74px', width: '100%' }} /> }
      <Frame
        // The dialog rule patches an ods-react Drawer regression (backdrop
        // feature, 2026-07-10): backdrop defaults to undefined so the Dialog
        // is non-modal, and zag then puts pointer-events:auto INLINE on the
        // content — beating the component's own closed-state pe:none CSS fix.
        // Closed drawers become invisible click-swallowing panels; only
        // visibility:hidden (immune to inline styles, removes hit-testing)
        // neutralizes them here. Real fix belongs upstream.
        // The body keeps 4px of padding for the ODS focus ring (2px + 2px offset), which the html
        // overflow would clip on a story flush with the frame edge; .canvas__demo gives it back.
        head={
          <style>{ `${normalizeCss}\n${fontsCss}\n${themeCss}\nhtml { overflow: hidden; } html body { margin: 0; padding: 4px; background: ${ pageSurface ? 'var(--ods-semantic-color-surface-page)' : 'var(--ods-semantic-color-surface-raised)' }; color: var(--ods-semantic-color-content-text); font-family: var(--ods-semantic-font-family-body); } [data-scope="dialog"][data-part="content"][data-state="closed"] { pointer-events: none; visibility: hidden; }` }</style>
        }
        initialContent={ INITIAL_CONTENT }
        mountTarget="#mount"
        style={ ready
          // no height here: FrameAutoSize owns it imperatively — a height in
          // the React style prop would clobber it on every parent re-render.
          ? { ...(bare ? { border: 'none' } : { border: 'var(--ods-semantic-border-thickness) solid var(--ods-semantic-color-border-neutral-subtle)', borderRadius: '4px' }), width: '100%', colorScheme: 'auto', display: 'block' }
          : { display: 'block', height: 0, visibility: 'hidden', width: '100%' } }>
        <StyleSync />
        <FrameAutoSize active={ ready } />
        <FrameEnv dark={ dark } tokens={ tokens } />
        <FrameLinks />
        <FrameReady onReady={ (frameDocument) => { setReady(true); onReady?.(frameDocument); } } />
        <FrameRealm>{ children }</FrameRealm>
      </Frame>
    </>
  );
};

export { DemoFrame };
