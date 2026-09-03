import { useEffect, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BADGE_COLOR, BADGE_SIZE, Badge } from '../../../ods-react/src/components/badge/src';
import { BUTTON_COLOR, BUTTON_VARIANT, Button } from '../../../ods-react/src/components/button/src';
import { DRAWER_POSITION, Drawer, DrawerBody, DrawerContent } from '../../../ods-react/src/components/drawer/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';
import { GUIDES_NAV, REFERENCE_NAV, flattenPages, toTreeItems, type NavPage, type NavSection } from '../nav/model';
import { BrandLogo } from './BrandLogo';
import { ThemeSelect, VersionSelect } from './TopbarSelects';
import { SearchCommand } from './SearchCommand';
import './shell.css';

interface ShellContext {
  tokens: Record<string, string>;
}

/* Single source of truth for the narrow layout; shell.css uses the same value.
   Below it the sidebar becomes a drawer opened from the topbar. */
const NARROW_QUERY = '(max-width: 1000px)';

const useNarrow = () => {
  const [narrow, setNarrow] = useState(() => window.matchMedia(NARROW_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(NARROW_QUERY);
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return narrow;
};

/* One sidebar tree. Selection is bound to the active page id; a tree that
   doesn't contain it simply shows nothing selected. */
const NavTree = ({ currentId, expanded, nodes, onNavigate }: {
  currentId?: string;
  expanded: string[];
  nodes: (NavSection | NavPage)[];
  onNavigate: (id: string) => void;
}) => {
  const items = toTreeItems(nodes);
  return (
    <TreeView
      defaultExpandedValue={ expanded }
      items={ items }
      onValueChange={ ({ value }) => value[0] && onNavigate(value[0]) }
      value={ currentId ? [currentId] : [] }>
      <TreeViewNodes>
        { items.map((item) => (
          <TreeViewNode item={ item } key={ item.id }>
            { ({ customData, isBranch, item: node }) => {
              const data = customData as { badge?: 'beta' | 'deprecated' | 'new', icon?: Parameters<typeof Icon>[0]['name'] };
              const badgeColor = data?.badge === 'new' ? BADGE_COLOR.new : data?.badge === 'beta' ? BADGE_COLOR.beta : BADGE_COLOR.warning;
              const badgeLabel = data?.badge === 'new' ? 'New' : data?.badge === 'beta' ? 'Beta' : 'Deprecated';
              return (
                <span className={ isBranch ? 'shell__tree-label shell__tree-label--section' : 'shell__tree-label' }>
                  { data?.icon && <Icon name={ data.icon } /> }
                  <span>{ node.name }</span>
                  { data?.badge && (
                    <Badge className="shell__tree-badge" color={ badgeColor } size={ BADGE_SIZE.sm }>
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

/* The whole sidebar content: rendered in the fixed aside on wide screens and
   inside the navigation drawer on narrow ones. */
const SidebarPanels = ({ currentId, onNavigate, onSearch }: {
  currentId?: string;
  onNavigate: (id: string) => void;
  onSearch: () => void;
}) => (
  <>
    <RouterLink aria-label="OVHcloud Design System — home" className="shell__brand" to="/">
      <BrandLogo />
    </RouterLink>

    <div className="shell__sidebar-selects">
      <ThemeSelect />
      <VersionSelect />
    </div>

    <button className="shell__search-hint" onClick={ onSearch } type="button">
      <Icon name={ ICON_NAME.magnifyingGlass } /> Search… <span className="shell__search-kbds"><Kbd>cmd</Kbd><span className="shell__search-plus">+</span><Kbd>k</Kbd></span>
    </button>

    <nav aria-label="Documentation" className="shell__nav">
      <NavTree currentId={ currentId } expanded={ ['tools'] } nodes={ GUIDES_NAV } onNavigate={ onNavigate } />
      <div className="shell__tree-divider">
        <Text preset={ TEXT_PRESET.caption }>Reference</Text>
      </div>
      <NavTree currentId={ currentId } expanded={ ['components', 'recipes', 'helpers'] } nodes={ REFERENCE_NAV } onNavigate={ onNavigate } />
    </nav>

    <div className="shell__sidebar-footer">
      <Link aria-label="GitHub repository" className="shell__github" href="https://github.com/ovh/design-system" rel="noreferrer" target="_blank">
        <Icon name={ ICON_NAME.github } /> GitHub
      </Link>
    </div>
  </>
);

const openSearchPalette = () => {
  document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'k', metaKey: true }));
};

const Shell = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = flattenPages();
  const isNarrow = useNarrow();
  const [navOpen, setNavOpen] = useState(false);

  /* The sandbox chunk (Monaco + the ODS type graph, ~9 MB) is fetched during
     browser idle time so opening the tab is instant instead of a cold load. */
  useEffect(() => {
    const idle = window.setTimeout(() => {
      import('../sandbox/Sandbox');
    }, 1500);
    return () => window.clearTimeout(idle);
  }, []);

  // Exact match first; then prefix match so sub-views (/components/x/examples)
  // still highlight their page in the tree.
  const currentPage = pages.find((page) => page.path === location.pathname)
    ?? pages.find((page) => page.path !== '/' && location.pathname.startsWith(`${page.path}/`));
  // Kept as the outlet contract: the future theme generator will feed live
  // token overrides through here — the frame plumbing is already proven.
  const tokens = {};

  // Keep the browser tab title in sync with the active page.
  useEffect(() => {
    document.title = currentPage ? `${currentPage.title} — OVHcloud Design System` : 'OVHcloud Design System';
  }, [currentPage]);

  // Any navigation (tree, palette, in-content link) closes the nav drawer.
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const onNavigate = (id: string) => {
    const page = pages.find((p) => p.id === id);
    if (page) {
      navigate(page.path);
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

      { !isNarrow && (
        <aside className="shell__sidebar">
          <SidebarPanels currentId={ currentPage?.id } onNavigate={ onNavigate } onSearch={ openSearchPalette } />
        </aside>
      ) }

      { isNarrow && (
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
                color={ BUTTON_COLOR.neutral }
                onClick={ () => setNavOpen(false) }
                variant={ BUTTON_VARIANT.ghost }>
                <Icon name={ ICON_NAME.xmark } />
              </Button>
              <SidebarPanels currentId={ currentPage?.id } onNavigate={ onNavigate } onSearch={ onSearch } />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) }

      <div className="shell__main">
        <header className="shell__topbar">
          { isNarrow && (
            <Button
              aria-label="Open navigation"
              className="shell__menu-button"
              color={ BUTTON_COLOR.neutral }
              onClick={ () => setNavOpen(true) }
              variant={ BUTTON_VARIANT.ghost }>
              <Icon name={ ICON_NAME.hamburgerMenu } />
            </Button>
          ) }
          <Text as="h1" preset={ TEXT_PRESET.heading4 }>{ currentPage?.title ?? 'OVHcloud Design System' }</Text>
        </header>

        <main className={ location.pathname === '/' ? 'shell__content shell__content--flush' : 'shell__content' } id="main-content" tabIndex={ -1 }>
          <Outlet context={ { tokens } satisfies ShellContext } />
        </main>
      </div>
    </div>
  );
};

export { Shell, type ShellContext };
