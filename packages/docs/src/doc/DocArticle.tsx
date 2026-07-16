import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from '../ods';

interface TocEntry {
  id: string;
  label: string;
  level: number;
}

/* "On this page" — the clickable list of the page's own section titles.
   Headings render with slugified ids (Heading contract); the MDX content
   mounts lazily, so the list is (re)collected through a MutationObserver
   instead of a one-shot scan. */
const PageToc = ({ container }: { container: HTMLElement | null }) => {
  const [entries, setEntries] = useState<TocEntry[]>([]);

  useEffect(() => {
    if (!container) {
      return;
    }
    const collect = () => {
      setEntries([...container.querySelectorAll<HTMLElement>('h2[id], h3[id]')].map((el) => ({
        id: el.id,
        label: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      })));
    };
    collect();
    const observer = new MutationObserver(collect);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [container]);

  if (entries.length < 2) {
    return null;
  }
  return (
    <nav aria-label="On this page" className="doc-layout__toc">
      <span className="doc-layout__toc-title">On this page</span>
      { entries.map((entry) => (
        <Link
          className={ entry.level === 3 ? 'doc-layout__toc-link doc-layout__toc-link--sub' : 'doc-layout__toc-link' }
          href={ `#${entry.id}` }
          key={ entry.id }
          onClick={ (event) => {
            event.preventDefault();
            document.getElementById(entry.id)?.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, '', `#${entry.id}`);
          } }>
          { entry.label }
        </Link>
      )) }
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
