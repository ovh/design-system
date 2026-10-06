import { composeStory } from '@storybook/react';
import { type ComponentType, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CARD_COLOR, Card, DIVIDER_ORIENTATION, Divider, ICON_NAME, Icon } from '../../ods';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../../ods-react/src/components/tree-view/src';
import { DemoFrame } from '../../demo/DemoFrame';
import { usePageStories } from '../PageStories';

/* CommandContent → command-content (matches the component's data-ods attribute). */
const kebab = (str: string): string =>
  str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (match, offset: number) => (offset ? '-' : '') + match.toLowerCase());

interface Rect {
  height: number;
  left: number;
  top: number;
  width: number;
}

/* Interactive anatomy: renders the component's dedicated AnatomyTech story in
   a DemoFrame — the same isolated iframe the examples use, so overlay parts
   (datepicker calendar, command modal) lay out exactly as in real usage — and
   highlights the selected part by measuring inside the frame and offsetting by
   the iframe's own position. */
const AnatomyBrowser = ({ names }: { names: string[] }) => {
  const { storiesModule } = usePageStories();
  const [frameDocument, setFrameDocument] = useState<Document | null>(null);
  const [selected, setSelected] = useState(names[0] ?? '');
  const [targets, setTargets] = useState<Rect[]>([]);
  const autoSelected = useRef(false);
  const overlay = useRef<HTMLDivElement>(null);

  const Composed = useMemo(() => {
    const story = storiesModule?.AnatomyTech;
    if (!story || !storiesModule) {
      return null;
    }
    return composeStory(
      story as Parameters<typeof composeStory>[0],
      (storiesModule as { default: Parameters<typeof composeStory>[1] }).default,
    ) as ComponentType;
  }, [storiesModule]);

  const onReady = useCallback((doc: Document) => {
    autoSelected.current = false;
    setFrameDocument(doc);
  }, []);

  /* Start on the first part that actually renders (some roots — the Command
     modal — own no data-ods element of their own). Once per frame. */
  useEffect(() => {
    if (!frameDocument || autoSelected.current) {
      return;
    }
    const pick = () => {
      const available = names.find((name) => frameDocument.querySelector(`[data-ods="${kebab(name)}"]`));
      if (available) {
        autoSelected.current = true;
        setSelected(available);
      }
    };
    const frame = requestAnimationFrame(pick);
    const timer = window.setTimeout(pick, 150);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [frameDocument, names]);

  useEffect(() => {
    const iframe = frameDocument?.defaultView?.frameElement;
    if (!frameDocument || !iframe || !selected) {
      return;
    }
    let raf = 0;
    const measure = () => {
      raf = 0;
      const frameRect = iframe.getBoundingClientRect();
      /* The overlay is positioned, so highlights are placed relative to it:
         same viewport measurements, minus the overlay's own origin. */
      const originRect = overlay.current?.getBoundingClientRect();
      /* Rects inside the frame start at its content box, frameRect at its
         border box — the DemoFrame's own 1px border sits between the two. */
      const frameStyle = getComputedStyle(iframe);
      const originLeft = frameRect.left + parseFloat(frameStyle.borderLeftWidth) - (originRect?.left ?? 0);
      const originTop = frameRect.top + parseFloat(frameStyle.borderTopWidth) - (originRect?.top ?? 0);
      const next = [...frameDocument.querySelectorAll<HTMLElement>(`[data-ods="${kebab(selected)}"]`)]
        .filter((el) => el.offsetParent !== null)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return { height: rect.height, left: originLeft + rect.left, top: originTop + rect.top, width: rect.width };
        });
      // Skip no-op updates so measurement never feeds a render loop.
      setTargets((prev) => (JSON.stringify(prev) === JSON.stringify(next) ? prev : next));
    };
    const schedule = () => {
      if (!raf) {
        raf = requestAnimationFrame(measure);
      }
    };
    schedule();
    const timer = window.setTimeout(schedule, 150);
    const observer = new ResizeObserver(schedule);
    observer.observe(frameDocument.body);
    window.addEventListener('resize', schedule);
    return () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, [frameDocument, selected]);

  if (!Composed) {
    return null;
  }

  /* Root component with its parts nested underneath (root-first order). */
  const [root, ...parts] = names;
  const items = [{ children: parts.map((name) => ({ id: name, name })), id: root, name: root }];

  const renderNode = ({ item: node }: { item: { id: string, name: string } }) => (
    <span className="anatomy__tree-item">
      <Icon className={ node.id === selected ? 'anatomy__tree-icon anatomy__tree-icon--active' : 'anatomy__tree-icon' } name={ ICON_NAME.target } />
      <span>{ node.name }</span>
    </span>
  );

  return (
    <div className="anatomy">
      <Card className="anatomy__tree" color={ CARD_COLOR.neutral }>
        { /* expandedValue held (no onExpandedChange) so the tree never collapses. */ }
        <TreeView
          expandedValue={ [root] }
          items={ items }
          onValueChange={ ({ value }) => value[0] && setSelected(value[0]) }
          value={ [selected] }>
          <TreeViewNodes>
            { items.map((item) => (
              <TreeViewNode item={ item } key={ item.id }>
                { renderNode }
              </TreeViewNode>
            )) }
          </TreeViewNodes>
        </TreeView>
      </Card>

      <Divider orientation={ DIVIDER_ORIENTATION.vertical } />

        <DemoFrame onReady={ onReady }>
          <Composed />
        </DemoFrame>

      <div aria-hidden className="anatomy__overlay" ref={ overlay }>
        { targets.map((target, index) => (
          <div
            className="anatomy__highlight"
            key={ index }
            style={{ height: target.height, left: target.left, top: target.top, width: target.width }} />
        )) }
      </div>
    </div>
  );
};

export { AnatomyBrowser };
