import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { BADGE_SIZE, BADGE_STATUS, Badge } from '../../../ods-react/src/components/badge/src';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '../../../ods-react/src/components/button/src';
import { DRAWER_POSITION, Drawer, DrawerBody, DrawerContent } from '../../../ods-react/src/components/drawer/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Divider } from '../../../ods-react/src/components/divider/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';
import { GUIDES_NAV, REFERENCE_NAV, flattenPages, isPage, toTreeItems, type NavPage, type NavSection } from '../nav/model';
import { pageOf, titleOf } from '../nav/pages';
import { useHydrated } from '../nav/useHydrated';
import { useMediaQuery } from '../nav/useMediaQuery';
import { BrandLogo } from './BrandLogo';
import { BrandSelect } from './BrandSelect';
import { ThemeMenu, VersionSelect } from './TopbarSelects';
import { PagePager } from './PagePager';
import { SearchCommand } from './SearchCommand';
import './shell.css';

interface ShellContext {
  tokens: Record<string, string>;
}

/* Single source of truth for the narrow layout; shell.css uses the same value.
   Below it the sidebar becomes a drawer opened from the topbar. Null until hydrated (useMediaQuery):
   both layouts render, and shell.css shows the one of the viewport. */
const NARROW_QUERY = '(max-width: 1000px)';

const useNarrow = () => useMediaQuery(NARROW_QUERY);

/* The sections a page sits in, outermost first; empty when the page is not in these nodes. */
const sectionsOf = (nodes: (NavSection | NavPage)[], id: string): string[] => {
  for (const node of nodes) {
    if (node.id === id) {
      return [];
    }
    if (!isPage(node)) {
      const inner = sectionsOf(node.children, id);
      if (inner.length || node.children.some((child) => child.id === id)) {
        return [node.id, ...inner];
      }
    }
  }
  return [];
};

/* One sidebar tree. Selection is bound to the active page id; a tree that
   doesn't contain it simply shows nothing selected. The sections of the active page open, whichever
   way it was reached (link, search palette), next to the ones the reader opened, and the tree
   scrolls to it. */
const NavTree = ({ currentId, expanded, nodes, onNavigate, onPreload, rootIcons }: {
  currentId?: string;
  expanded: string[];
  nodes: (NavSection | NavPage)[];
  onNavigate: (id: string) => void;
  onPreload: (id: string) => void;
  rootIcons?: boolean;
}) => {
  const items = toTreeItems(nodes, rootIcons);
  // A gallery page is shown as its section: the section opens it, and is selected while it is read.
  const sectionPages = new Map(items.flatMap(function collect(item): [string, string][] {
    const page = item.customRendererData?.page;
    return [...(page ? [[item.id, page] as [string, string]] : []), ...((item.children ?? []) as typeof items).flatMap(collect)];
  }));
  const selected = [...sectionPages].find(([, page]) => page === currentId)?.[0] ?? currentId;
  const sections = new Set(items.flatMap(function collect(item): string[] {
    return item.children ? [item.id, ...(item.children as typeof items).flatMap(collect)] : [];
  }));
  const toggle = (id: string) => setOpen((previous) => (previous.includes(id) ? previous.filter((open) => open !== id) : [...previous, id]));
  const [open, setOpen] = useState(expanded);
  const ref = useRef<HTMLDivElement>(null);
  // A click on a section does one thing: its chevron opens or closes it, and its name opens its page
  // (the galleries) or, without one, opens or closes it too. The TreeView would also toggle the
  // section on every click: expandOnClick, not in the ODS props yet but passed through to Ark, turns
  // that off, and the toggling happens here.
  const onChevron = useRef(false);
  // The page an entry opens, loaded as soon as the pointer or the focus reaches it: by the click, its
  // first tab renders at once instead of its skeleton (a tool still loads its own chunk).
  const preload = (event: { target: EventTarget }) => {
    const id = (event.target as Element).closest('[data-part="item"], [data-part="branch-control"]')?.getAttribute('data-value');
    const page = id ? sectionPages.get(id) ?? (sections.has(id) ? undefined : id) : undefined;
    if (page) {
      onPreload(page);
    }
  };

  useEffect(() => {
    // A gallery's own section is the selected entry, not an ancestor: the tree opens or closes it
    // as the reader clicks it, untouched here.
    const sections = (currentId ? sectionsOf(nodes, currentId) : []).filter((id) => sectionPages.get(id) !== currentId);
    setOpen((previous) => (sections.every((id) => previous.includes(id)) ? previous : [...new Set([...previous, ...sections])]));
    // The tree marks its selected node some frames after mounting, and its rows keep moving while
    // sections open and fonts load: for two seconds, the selected page is brought to the middle
    // whenever it is out of view, until the reader scrolls the navigation.
    const holdsPage = !!currentId && flattenPages(nodes).some((page) => page.id === currentId);
    const pane = ref.current?.closest('.shell__nav');
    if (!holdsPage || !pane) {
      return;
    }
    const deadline = performance.now() + 2000;
    let frame = 0;
    const reveal = () => {
      const selected = ref.current?.querySelector('[aria-selected="true"]');
      if (selected) {
        const item = selected.getBoundingClientRect();
        const view = pane.getBoundingClientRect();
        if (item.top < view.top || item.bottom > view.bottom) {
          selected.scrollIntoView({ block: 'center' });
        }
      }
      if (performance.now() < deadline) {
        frame = requestAnimationFrame(reveal);
      }
    };
    const stop = () => cancelAnimationFrame(frame);
    const inputs = ['keydown', 'pointerdown', 'touchstart', 'wheel'];
    frame = requestAnimationFrame(reveal);
    inputs.forEach((type) => pane.addEventListener(type, stop, { passive: true }));
    return () => {
      stop();
      inputs.forEach((type) => pane.removeEventListener(type, stop));
    };
  }, [currentId, nodes]);

  return (
    <TreeView
      expandedValue={ open }
      items={ items }
      onExpandedChange={ ({ expandedValue }) => setOpen(expandedValue) }
      onFocus={ preload }
      onPointerOver={ preload }
      onClickCapture={ (event) => {
        // Before the TreeView's own handler: a chevron click toggles here, even on the selected
        // section, and the selection change it also triggers is then ignored.
        const chevron = (event.target as Element).closest('[data-part="branch-indicator"]');
        const id = chevron?.closest('[data-part="branch-control"]')?.getAttribute('data-value');
        if (id) {
          onChevron.current = true;
          toggle(id);
          window.setTimeout(() => {
            onChevron.current = false;
          });
        }
      } }
      onValueChange={ ({ value }) => {
        const id = value[0];
        if (!id || onChevron.current) {
          return;
        }
        const page = sectionPages.get(id) ?? (sections.has(id) ? undefined : id);
        if (page) {
          onNavigate(page);
        } else {
          toggle(id);
        }
      } }
      { ...{ expandOnClick: false } }
      ref={ ref }
      value={ selected ? [selected] : [] }>
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode item={ item } key={ item.id }>
            { ({ customData, isBranch, item: node }) => {
              const data = customData as { badge?: 'beta' | 'deprecated' | 'new', icon?: Parameters<typeof Icon>[0]['name'] };
              const badgeStatus = data?.badge === 'new' ? BADGE_STATUS.new : data?.badge === 'beta' ? BADGE_STATUS.beta : BADGE_STATUS.warning;
              const badgeLabel = data?.badge === 'new' ? 'New' : data?.badge === 'beta' ? 'Beta' : 'Deprecated';
              return (
                <span className={ ['shell__tree-label', isBranch && 'shell__tree-label--section'].filter(Boolean).join(' ') }>
                  { data?.icon && <Icon name={ data.icon } /> }
                  <span>{ node.name }</span>
                  { data?.badge && (
                    <Badge className="shell__tree-badge" size={ BADGE_SIZE.sm } status={ badgeStatus }>
                      { badgeLabel }
                    </Badge>
                  ) }
                </span>
              );
            } }
          </TreeViewNode>
        )) }
      </TreeViewNodes>
    </TreeView>
  );
};

/* The palette opens on ⌘K and Ctrl+K alike (SearchCommand): the hint shows the one of this platform.
   The pre-rendered page knows no platform: Ctrl K until hydrated. */
const SearchShortcut = () => (useHydrated() && /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘K' : 'Ctrl K');

/* Until hydrated, the button does nothing: aria-disabled says so, where disabled would take it out
   of the keyboard order and move the focus of a reader already on it once the scripts run. */
const SearchHint = ({ onSearch }: { onSearch: () => void }) => (
  <button aria-disabled={ !useHydrated() || undefined } className="shell__search-hint" onClick={ onSearch } type="button">
    <Icon name={ ICON_NAME.magnifyingGlass } /> Search…
    <Kbd className="shell__search-kbd"><SearchShortcut /></Kbd>
  </button>
);

/* The whole sidebar content: rendered in the fixed aside on wide screens and
   inside the navigation drawer on narrow ones. */
const SidebarPanels = ({ currentId, narrow, onNavigate, onPreload, onSearch }: {
  currentId?: string;
  narrow: boolean;
  onNavigate: (id: string) => void;
  onPreload: (id: string) => void;
  onSearch: () => void;
}) => (
  <>
    <RouterLink aria-label="OVHcloud Design System — home" className="shell__brand" to="/">
      <BrandLogo />
    </RouterLink>

    <SearchHint onSearch={ onSearch } />

    <nav aria-label="Documentation" className="shell__nav">
      <Text className="shell__tree-title" preset={ TEXT_PRESET.caption }>Guides</Text>
      <NavTree currentId={ currentId } expanded={ [] } nodes={ GUIDES_NAV } onNavigate={ onNavigate } onPreload={ onPreload } rootIcons />
      <Divider className="shell__tree-divider" />
      <Text className="shell__tree-title" preset={ TEXT_PRESET.caption }>Reference</Text>
      <NavTree currentId={ currentId } expanded={ ['components', 'recipes', 'helpers'] } nodes={ REFERENCE_NAV } onNavigate={ onNavigate } onPreload={ onPreload } />
    </nav>

    { /* The site's own context sits at the foot: the version it documents and its repository. The
         brand select joins it on narrow screens, where the topbar has no room for it. */ }
    <div className="shell__sidebar-footer">
      { narrow && <BrandSelect /> }
      <div className="shell__sidebar-footer-row">
        <Link aria-label="GitHub repository" className="shell__github" href="https://github.com/ovh/design-system" rel="noreferrer" target="_blank">
          <Icon name={ ICON_NAME.github } /> GitHub
        </Link>
        <VersionSelect />
      </div>
    </div>
  </>
);

const openSearchPalette = () => {
  document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'k', metaKey: true }));
};


/* preload: loads the chunks of a route (preloadRoute, routes.tsx), handed down by the routes, which
   import the Shell. */
const Shell = ({ preload }: { preload: (path: string) => Promise<unknown> }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = flattenPages();
  const isNarrow = useNarrow();
  // Until hydrated, the buttons of the shell do nothing: see SearchHint.
  const hydrated = useHydrated();
  const [navOpen, setNavOpen] = useState(false);

  /* 1.5 s after the shell mounts, the chunks of the first tab of every page are fetched (~0.8 MB
     gzipped: MDX and stories), a dozen pages at a time so that a click is not queued behind them
     all, then the sandbox chunk (Monaco, ~1 MB gzipped). A page opened from the navigation then
     renders at once; its other tabs (technical) and the tools still load their own chunk.
     A chunk that fails to load stays failed for the session (the browser keeps the failed module):
     the first failure stops the loop, so that a network drop spoils one batch, not every page.
     Not where the browser says to save data (Chromium only: navigator.connection): hovering or
     focusing an entry still loads its page. */
  useEffect(() => {
    if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) {
      return;
    }
    let cancelled = false;
    const idle = window.setTimeout(async () => {
      const paths = pages.map((page) => page.path);
      try {
        while (paths.length && !cancelled) {
          await Promise.all(paths.splice(0, 12).map((path) => preload(path)));
        }
      } catch {
        return;
      }
      if (!cancelled) {
        import('../sandbox/Sandbox');
      }
    }, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(idle);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentPage = pageOf(location.pathname);
  // Doc pages center their content column: the topbar follows it.
  const isDocPage = currentPage?.kind === 'component' || currentPage?.kind === 'guide' || currentPage?.kind === 'helper'
    || (currentPage?.kind === 'recipe' && !currentPage.gallery);
  // The Welcome page leads with its own layout and h1: its topbar keeps the actions only. Narrow
  // screens keep the whole topbar, which holds the navigation drawer button; until hydrated it
  // renders the title too, and shell.css hides it on wide screens.
  const isWelcome = location.pathname === '/' && isNarrow !== true;
  // Kept as the outlet contract: the future theme generator will feed live
  // token overrides through here — the frame plumbing is already proven.
  const tokens = {};

  // Keep the browser tab title in sync with the active page.
  useEffect(() => {
    document.title = titleOf(location.pathname);
  }, [location.pathname]);

  // Any navigation (tree, palette, in-content link) closes the nav drawer.
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  // The content pane scrolls, not the window, so the browser neither resets nor restores it. A new
  // page opens at its top, unless a #hash lands on its own section; back and forward (POP) bring the
  // pane back to where its history entry was left.
  const navigationType = useNavigationType();
  const contentRef = useRef<HTMLElement>(null);
  const positions = useRef(new Map<string, number>());
  const entryKey = useRef(location.key);

  // Set during the commit, before the browser fires the scroll events of the page swap: they are
  // recorded on the new entry, and the one left keeps the last position its reader scrolled to.
  useLayoutEffect(() => {
    entryKey.current = location.key;
  }, [location.key]);

  useEffect(() => {
    const pane = contentRef.current;
    const onScroll = () => {
      positions.current.set(entryKey.current, pane?.scrollTop ?? 0);
    };
    pane?.addEventListener('scroll', onScroll, { passive: true });
    return () => pane?.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const pane = contentRef.current;
    if (!pane) {
      return;
    }
    if (navigationType !== 'POP') {
      if (!location.hash) {
        pane.scrollTo({ top: 0 });
      }
      return;
    }
    const top = positions.current.get(location.key);
    if (!top) {
      return;
    }
    // The page is still settling (lazy route, demo frames sizing above the position): hold the
    // position each frame for two seconds, and let go as soon as the reader scrolls.
    const deadline = performance.now() + 2000;
    let frame = 0;
    const restore = () => {
      pane.scrollTop = top;
      if (performance.now() < deadline) {
        frame = requestAnimationFrame(restore);
      }
    };
    const stop = () => cancelAnimationFrame(frame);
    const inputs = ['keydown', 'pointerdown', 'touchstart', 'wheel'];
    restore();
    inputs.forEach((type) => pane.addEventListener(type, stop, { passive: true }));
    return () => {
      stop();
      inputs.forEach((type) => pane.removeEventListener(type, stop));
    };
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const onNavigate = (id: string) => {
    const page = pages.find((p) => p.id === id);
    if (page) {
      navigate(page.path);
    }
  };

  const onPreload = (id: string) => {
    const page = pages.find((p) => p.id === id);
    if (page && page.id !== currentPage?.id) {
      // A chunk that fails to load is the page's error to show once opened.
      preload(page.path).catch(() => {});
    }
  };

  const onSearch = () => {
    setNavOpen(false);
    openSearchPalette();
  };

  return (
    <div className="shell">
      <a className="shell__skip" href="#main-content">Skip to content</a>
      <SearchCommand />

      { isNarrow !== true && (
        <aside aria-label="Site navigation" className="shell__sidebar">
          <SidebarPanels currentId={ currentPage?.id } narrow={ false } onNavigate={ onNavigate } onPreload={ onPreload } onSearch={ openSearchPalette } />
        </aside>
      ) }

      { isNarrow === true && (
        <Drawer
          backdrop
          closeOnInteractOutside
          onOpenChange={ ({ open }) => setNavOpen(open) }
          open={ navOpen }>
          <DrawerContent aria-label="Documentation navigation" className="shell__drawer" position={ DRAWER_POSITION.left }>
            <DrawerBody className="shell__drawer-body">
              <Button
                aria-label="Close navigation"
                className="shell__drawer-close"
                emphasis={ BUTTON_EMPHASIS.low }
                status={ BUTTON_STATUS.neutral }
                onClick={ () => setNavOpen(false) }>
                <Icon name={ ICON_NAME.xmark } />
              </Button>
              <SidebarPanels currentId={ currentPage?.id } narrow onNavigate={ onNavigate } onPreload={ onPreload } onSearch={ onSearch } />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) }

      <div className="shell__main">
        { /* The Welcome page keeps only the topbar actions, over its own heading. */ }
        <header className={ isWelcome ? 'shell__topbar shell__topbar--welcome' : isDocPage ? 'shell__topbar shell__topbar--doc' : 'shell__topbar' }>
          { isNarrow !== false && (
            <Button
              aria-disabled={ !hydrated || undefined }
              aria-label="Open navigation"
              className="shell__menu-button"
              emphasis={ BUTTON_EMPHASIS.low }
              status={ BUTTON_STATUS.neutral }
              onClick={ () => setNavOpen(true) }>
              <Icon name={ ICON_NAME.hamburgerMenu } />
            </Button>
          ) }
          { !(isWelcome && isNarrow === false) && <Text as="h1" preset={ TEXT_PRESET.heading2 }>{ currentPage?.title ?? (location.pathname === '/' ? 'OVHcloud Design System' : 'Page not found') }</Text> }
          <div className="shell__topbar-actions">
            { isNarrow !== true && <BrandSelect className="shell__topbar-select shell__topbar-brand" /> }
            <ThemeMenu />
          </div>
        </header>

        <main className={ location.pathname === '/' ? 'shell__content shell__content--flush' : 'shell__content' } id="main-content" ref={ contentRef } tabIndex={ -1 }>
          <Outlet context={ { tokens } satisfies ShellContext } />
          <PagePager currentId={ currentPage?.id } />
        </main>
      </div>
    </div>
  );
};

export { Shell, openSearchPalette, useNarrow, type ShellContext };
