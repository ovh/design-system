import { useEffect, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BADGE_SIZE, BADGE_STATUS, Badge } from '../../../ods-react/src/components/badge/src';
import { BUTTON_EMPHASIS, BUTTON_STATUS, Button } from '../../../ods-react/src/components/button/src';
import { DRAWER_POSITION, Drawer, DrawerBody, DrawerContent } from '../../../ods-react/src/components/drawer/src';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Divider } from '../../../ods-react/src/components/divider/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../ods-react/src/components/tooltip/src';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';
import { APP_ROOT } from '../appBase';
import { llmsFileFor } from '../doc/llmsFile';
import { GUIDES_NAV, REFERENCE_NAV, flattenPages, toTreeItems, type NavPage, type NavSection } from '../nav/model';
import { BrandLogo } from './BrandLogo';
import { BrandSelect } from './BrandSelect';
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
const NavTree = ({ currentId, expanded, nodes, onNavigate, sectionIcons }: {
  currentId?: string;
  expanded: string[];
  nodes: (NavSection | NavPage)[];
  onNavigate: (id: string) => void;
  sectionIcons?: boolean;
}) => {
  const items = toTreeItems(nodes, sectionIcons);
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
              const data = customData as { badge?: 'beta' | 'deprecated' | 'new', gallery?: true, icon?: Parameters<typeof Icon>[0]['name'] };
              const badgeStatus = data?.badge === 'new' ? BADGE_STATUS.new : data?.badge === 'beta' ? BADGE_STATUS.beta : BADGE_STATUS.warning;
              const badgeLabel = data?.badge === 'new' ? 'New' : data?.badge === 'beta' ? 'Beta' : 'Deprecated';
              return (
                <span className={ ['shell__tree-label', isBranch && 'shell__tree-label--section', sectionIcons && 'shell__tree-label--tight', data?.gallery && 'shell__tree-label--gallery'].filter(Boolean).join(' ') }>
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

    <div className="shell__upper-controls">
      <div className="shell__version-select">
        <VersionSelect />
      </div>

      <div className="shell__sidebar-selects">
        <BrandSelect />
        <ThemeSelect />
      </div>

      <button className="shell__search-hint" onClick={onSearch} type="button">
        <Icon name={ICON_NAME.magnifyingGlass} /> Search…{" "}
        <span className="shell__search-kbds">
          <Kbd>cmd</Kbd>
          <span className="shell__search-plus">+</span>
          <Kbd>k</Kbd>
        </span>
      </button>
    </div>
    
    <nav aria-label="Documentation" className="shell__nav">
      <NavTree currentId={ currentId } expanded={ [] } nodes={ GUIDES_NAV } onNavigate={ onNavigate } sectionIcons />
      <Divider className="shell__tree-divider" />
      <Text className="shell__tree-dividerd" preset={ TEXT_PRESET.paragraph }>Reference</Text>
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

/* Opens the current page's llms markdown — the exact file the AI toolchain
   consumes — in a new tab. Hidden on pages that emit no llms document (the
   route mapping and its exclusions: llmsFile.ts). */
const MarkdownLink = ({ pathname }: { pathname: string }) => {
  const file = llmsFileFor(pathname);

  if (!file) {
    return null;
  }

  const href = new URL(`llms/${file}`, APP_ROOT).href;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        { /* A link, not a button: the URL can be read, shared, curl'ed or handed to an assistant
             as-is. It only borrows the outline button look (shell.css). */ }
        <Link
          className="shell__llms-link"
          data-testid="view-as-markdown"
          href={ href }
          rel="noreferrer"
          target="_blank">
          { /* Same icon as the AI Agents nav section: this IS the machine-
               readable face of the page. */ }
          <Icon name={ ICON_NAME.robot } />
          View as Markdown
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        Opens the Markdown version of this page, made for LLMs, in a new tab
      </TooltipContent>
    </Tooltip>
  );
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
  // Doc pages center their content column: the topbar follows it.
  const isDocPage = currentPage?.kind === 'component' || currentPage?.kind === 'guide' || currentPage?.kind === 'helper'
    || (currentPage?.kind === 'recipe' && currentPage.id !== 'recipes/components');
  // The Welcome page leads with its own layout and h1: no topbar. Narrow screens
  // keep it, since it holds the navigation drawer button.
  const isWelcome = location.pathname === '/' && !isNarrow;
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
                emphasis={ BUTTON_EMPHASIS.low }
                status={ BUTTON_STATUS.neutral }
                onClick={ () => setNavOpen(false) }>
                <Icon name={ ICON_NAME.xmark } />
              </Button>
              <SidebarPanels currentId={ currentPage?.id } onNavigate={ onNavigate } onSearch={ onSearch } />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) }

      <div className="shell__main">
        { !isWelcome && (
          <header className={ isDocPage ? 'shell__topbar shell__topbar--doc' : 'shell__topbar' }>
            { isNarrow && (
              <Button
                aria-label="Open navigation"
                className="shell__menu-button"
                emphasis={ BUTTON_EMPHASIS.low }
                status={ BUTTON_STATUS.neutral }
                onClick={ () => setNavOpen(true) }>
                <Icon name={ ICON_NAME.hamburgerMenu } />
              </Button>
            ) }
            <Text as="h1" preset={ TEXT_PRESET.heading2 }>{ currentPage?.title ?? 'OVHcloud Design System' }</Text>
            <MarkdownLink pathname={ location.pathname } />
          </header>
        ) }

        <main className={ location.pathname === '/' ? 'shell__content shell__content--flush' : 'shell__content' } id="main-content" tabIndex={ -1 }>
          <Outlet context={ { tokens } satisfies ShellContext } />
        </main>
      </div>
    </div>
  );
};

export { Shell, type ShellContext };
