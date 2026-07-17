import { useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { Link } from '../../../ods-react/src/components/link/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';
import { flattenPages, toTreeItems } from '../nav/model';
import { BrandLogo } from './BrandLogo';
import { ThemeSelect, VersionSelect } from './TopbarSelects';
import { SearchCommand } from './SearchCommand';
import './shell.css';

interface ShellContext {
  tokens: Record<string, string>;
}

const Shell = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pages = flattenPages();

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

  return (
    <div className="shell">
      <SearchCommand />

      <aside className="shell__sidebar">
        <RouterLink aria-label="OVHcloud Design System — home" className="shell__brand" to="/">
          <BrandLogo />
        </RouterLink>

        <div className="shell__sidebar-selects">
          <ThemeSelect />
          <VersionSelect />
        </div>

        <button className="shell__search-hint" onClick={ () => document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'k', metaKey: true })) } type="button">
          <Icon name={ ICON_NAME.magnifyingGlass } /> Search… <span className="shell__search-kbds"><Kbd>cmd</Kbd>+<Kbd>k</Kbd></span>
        </button>

        <TreeView
          defaultExpandedValue={ ['tools', 'components'] }
          items={ toTreeItems() }
          onValueChange={ ({ value }) => {
            const page = pages.find((p) => p.id === value[0]);
            if (page) {
              navigate(page.path);
            }
          } }
          value={ currentPage ? [currentPage.id] : [] }>
          <TreeViewNodes>
            { toTreeItems().map((item) => (
              <TreeViewNode item={ item } key={ item.id }>
                { ({ customData, isBranch, item: node }) => (
                  <span className={ isBranch ? 'shell__tree-label shell__tree-label--section' : 'shell__tree-label' }>
                    { (customData as { icon?: Parameters<typeof Icon>[0]['name'] })?.icon && <Icon name={ (customData as { icon: Parameters<typeof Icon>[0]['name'] }).icon } /> }
                    <span>{ node.name }</span>
                  </span>
                ) }
              </TreeViewNode>
            )) }
          </TreeViewNodes>
        </TreeView>

        <div className="shell__sidebar-footer">
          <Link aria-label="GitHub repository" className="shell__github" href="https://github.com/ovh/design-system" rel="noreferrer" target="_blank">
            <Icon name={ ICON_NAME.github } /> GitHub
          </Link>
        </div>
      </aside>

      <div className="shell__main">
        <header className="shell__topbar">
          <Text preset={ TEXT_PRESET.heading4 }>{ currentPage?.title ?? 'OVHcloud Design System' }</Text>
        </header>

        <main className={ location.pathname === '/' ? 'shell__content shell__content--flush' : 'shell__content' }>
          <Outlet context={ { tokens } satisfies ShellContext } />
        </main>
      </div>
    </div>
  );
};

export { Shell, type ShellContext };
