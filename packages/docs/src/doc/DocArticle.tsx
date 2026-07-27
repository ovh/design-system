import { type ReactNode, useEffect, useRef, useState } from 'react';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';

interface TocEntry {
  id: string;
  label: string;
  level: number;
}

interface TocItem {
  children?: TocItem[];
  id: string;
  name: string;
}

/* h2 headings become branches, the h3 below them their leaves. */
function toTocItems(entries: TocEntry[]): TocItem[] {
  const items: TocItem[] = [];
  for (const entry of entries) {
    const item = { id: entry.id, name: entry.label };
    const last = items[items.length - 1];
    if (entry.level === 3 && last) {
      last.children = [...(last.children ?? []), item];
    } else {
      items.push(item);
    }
  }
  return items;
}

/* "On this page" — the page's own section titles, in the same TreeView as
   the sidebar. Headings render with slugified ids (Heading contract); the
   MDX content mounts lazily, so the list is (re)collected through a
   MutationObserver instead of a one-shot scan. */
const PageToc = ({ container }: { container: HTMLElement | null }) => {
  const [entries, setEntries] = useState<TocEntry[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    if (!container) {
      return;
    }
    const collect = () => {
      const found = [...container.querySelectorAll<HTMLElement>('h2[id], h3[id]')].map((el) => ({
        id: el.id,
        label: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));
      setEntries((previous) => (JSON.stringify(previous) === JSON.stringify(found) ? previous : found));
      setExpanded(found.filter((entry) => entry.level === 2).map((entry) => entry.id));
    };
    collect();
    const observer = new MutationObserver(collect);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [container]);

  /* Scroll-spy: select the heading the reader is currently on. Reads the
     scroll container (the shell main pane) and picks the last heading that
     crossed the trigger line near the top. */
  useEffect(() => {
    if (!container || entries.length < 2) {
      return;
    }
    const scroller = container.closest<HTMLElement>('.shell__main') ?? document.documentElement;
    const TRIGGER = 120;
    let frame = 0;

    const spy = () => {
      frame = 0;
      const top = scroller.getBoundingClientRect().top + TRIGGER;
      let current = entries[0].id;
      for (const entry of entries) {
        const el = document.getElementById(entry.id);
        if (el && el.getBoundingClientRect().top <= top) {
          current = entry.id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(spy);
      }
    };

    spy();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [container, entries]);

  if (entries.length < 2) {
    return null;
  }

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
    setActive(id);
  };

  const items = toTocItems(entries);

  return (
    <nav aria-label="On this page" className="doc-layout__toc">
      <span className="doc-layout__toc-title">On this page</span>
      { /* Sections stay open: expandedValue is held at every branch and no
           onExpandedChange is wired, so the tree can't be collapsed. */ }
      <TreeView
        expandedValue={ expanded }
        items={ items }
        onValueChange={ ({ value }) => value[0] && goTo(value[0]) }
        value={ active ? [active] : [] }>
        <TreeViewNodes>
          { items.map((item) => (
            <TreeViewNode item={ item } key={ item.id }>
              { ({ item: node }) => (
                <span
                  className="doc-layout__toc-node"
                  onClick={ (event) => {
                    // The label scrolls; only the chevron collapses a branch.
                    event.stopPropagation();
                    goTo(node.id);
                  } }>
                  { node.name }
                </span>
              ) }
            </TreeViewNode>
          )) }
        </TreeViewNodes>
      </TreeView>
    </nav>
  );
};

/* Doc page layout: the article plus its ToC column. */
const DocArticle = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(ref.current);
  }, []);

  return (
    <div className="doc-layout">
      <article className="doc" ref={ ref }>
        { children }
      </article>
      <PageToc container={ container } />
    </div>
  );
};

export { DocArticle };
