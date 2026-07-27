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

  useEffect(() => {
    if (!frameDocument) {
      return;
    }
    const iframe = frameDocument.defaultView?.frameElement;
    if (!iframe) {
      return;
    }
    const compute = () => {
      // Start on the first part that actually renders (some roots — the
      // Command modal — own no data-ods element of their own).
      if (!autoSelected.current) {
        const available = names.find((name) => frameDocument.querySelector(`[data-ods="${kebab(name)}"]`));
        if (available && available !== selected) {
          autoSelected.current = true;
          setSelected(available);
          return;
        }
        autoSelected.current = true;
      }
      const frameRect = iframe.getBoundingClientRect();
      const els = [...frameDocument.querySelectorAll<HTMLElement>(`[data-ods="${kebab(selected)}"]`)]
        .filter((el) => el.offsetParent !== null);
      setTargets(els.map((el) => {
        const rect = el.getBoundingClientRect();
        return { height: rect.height, left: frameRect.left + rect.left, top: frameRect.top + rect.top, width: rect.width };
      }));
    };
    const frame = requestAnimationFrame(compute);
    const timer = window.setTimeout(compute, 150);
    const observer = new ResizeObserver(compute);
    observer.observe(frameDocument.body);
    const scroller = iframe.closest<HTMLElement>('.shell__main') ?? window;
    scroller.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer.disconnect();
      scroller.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, [frameDocument, selected, names]);

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
        <TreeView
          defaultExpandedValue={ [root] }
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

      <div className="anatomy__stage">
        <DemoFrame onReady={ onReady }>
          <Composed />
        </DemoFrame>
      </div>

      <div aria-hidden className="anatomy__overlay">
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
