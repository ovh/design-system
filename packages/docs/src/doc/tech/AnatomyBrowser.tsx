import { composeStory } from '@storybook/react';
import { type ComponentType, useEffect, useMemo, useRef, useState } from 'react';
import { CARD_COLOR, Card, DIVIDER_ORIENTATION, Divider, ICON_NAME, Icon } from '../../ods';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../../ods-react/src/components/tree-view/src';
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
   the parent document (its story is authored inline — open, non-portaled — so
   every part is in flow), then highlights the DOM of the selected part.
   Same-document rendering is what lets us measure and overlay it. */
const AnatomyBrowser = ({ names }: { names: string[] }) => {
  const { storiesModule } = usePageStories();
  const containerRef = useRef<HTMLDivElement>(null);
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

  /* Some roots (e.g. the Command modal) have no data-ods element of their own;
     start on the first part that actually renders so the default view shows a
     highlight rather than an empty box. Runs once per story. */
  useEffect(() => {
    autoSelected.current = false;
  }, [Composed]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || autoSelected.current) {
      return;
    }
    const pick = () => {
      const available = names.find((name) => container.querySelector(`[data-ods="${kebab(name)}"]`));
      if (available) {
        autoSelected.current = true;
        setSelected(available);
      }
    };
    const frame = requestAnimationFrame(pick);
    const timer = window.setTimeout(pick, 200);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [Composed, names]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !selected) {
      return;
    }
    const compute = () => {
      const base = container.getBoundingClientRect();
      const els = [...container.querySelectorAll<HTMLElement>(`[data-ods="${kebab(selected)}"]`)]
        .filter((el) => el.offsetParent !== null);
      setTargets(els.map((el) => {
        const rect = el.getBoundingClientRect();
        return { height: rect.height, left: rect.left - base.left, top: rect.top - base.top, width: rect.width };
      }));
    };
    const frame = requestAnimationFrame(compute);
    // Ark parts (command/datepicker) settle a tick after mount.
    const timer = window.setTimeout(compute, 200);
    const observer = new ResizeObserver(compute);
    observer.observe(container);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [selected, Composed]);

  if (!Composed) {
    return null;
  }

  const items = names.map((name) => ({ id: name, name }));

  return (
    <div className="anatomy">
      <Card className="anatomy__tree" color={ CARD_COLOR.neutral }>
        <TreeView items={ items } onValueChange={ ({ value }) => value[0] && setSelected(value[0]) } value={ [selected] }>
          <TreeViewNodes>
            { items.map((item) => (
              <TreeViewNode item={ item } key={ item.id }>
                { ({ item: node }) => (
                  <span className="anatomy__tree-item">
                    <Icon name={ ICON_NAME.target } /> <span>{ node.name }</span>
                  </span>
                ) }
              </TreeViewNode>
            )) }
          </TreeViewNodes>
        </TreeView>
      </Card>

      <Divider orientation={ DIVIDER_ORIENTATION.vertical } />

      <div className="anatomy__stage" ref={ containerRef }>
        <Composed />
        { targets.map((target, index) => (
          <div
            aria-hidden
            className="anatomy__highlight"
            key={ index }
            style={{ height: target.height, left: target.left, top: target.top, width: target.width }} />
        )) }
      </div>
    </div>
  );
};

export { AnatomyBrowser };
