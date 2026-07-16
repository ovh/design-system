import { useEffect, useState } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ICON_NAME, Icon } from '../../../ods-react/src/components/icon/src';
import { Kbd } from '../../../ods-react/src/components/kbd/src';
import { TEXT_PRESET, Text } from '../../../ods-react/src/components/text/src';
import { Toggle, ToggleControl } from '../../../ods-react/src/components/toggle/src';
import { TreeView, TreeViewNode, TreeViewNodes } from '../../../ods-react/src/components/tree-view/src';
import { flattenPages, toTreeItems } from '../nav/model';
import { SearchCommand } from './SearchCommand';
import './shell.css';

interface ShellContext {
  tokens: Record<string, string>;
}

const Shell = () => {
  const [dark, setDark] = useState(false);
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

  useEffect(() => {
    if (dark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [dark]);

  const currentPage = pages.find((page) => page.path === location.pathname);
  // Kept as the outlet contract: the future theme generator will feed live
  // token overrides through here — the frame plumbing is already proven.
  const tokens = {};

  return (
    <div className="shell">
      <SearchCommand />

      <aside className="shell__sidebar">
        <RouterLink className="shell__brand" to="/">
          <Text preset={ TEXT_PRESET.heading5 }>ODS Docs</Text>
        </RouterLink>

        <button className="shell__search-hint" onClick={ () => document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'k', metaKey: true })) } type="button">
          <Icon name={ ICON_NAME.magnifyingGlass } /> Search… <span className="shell__search-kbds"><Kbd>⌘</Kbd><Kbd>K</Kbd></span>
        </button>

        <TreeView
          defaultExpandedValue={ ['ods', 'tools', 'components'] }
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
                { ({ customData, item: node }) => (
                  <span className="shell__tree-label">
                    { (customData as { icon?: Parameters<typeof Icon>[0]['name'] })?.icon && <Icon name={ (customData as { icon: Parameters<typeof Icon>[0]['name'] }).icon } /> }
                    <span>{ node.name }</span>
                  </span>
                ) }
              </TreeViewNode>
            )) }
          </TreeViewNodes>
        </TreeView>

        <div className="shell__sidebar-footer">
          <label className="shell__dark">
            <Toggle checked={ dark } data-testid="dark-toggle" onCheckedChange={ ({ checked }) => setDark(checked) }><ToggleControl /></Toggle>
            <Icon name={ dark ? ICON_NAME.moon : ICON_NAME.sun } />
            <Text preset={ TEXT_PRESET.caption }>Dark mode</Text>
          </label>
          <a aria-label="GitHub repository" className="shell__github" href="https://github.com/ovh/design-system" rel="noreferrer" target="_blank">
            <Icon name={ ICON_NAME.github } /> GitHub
          </a>
        </div>
      </aside>

      <div className="shell__main">
        <header className="shell__topbar">
          <Text preset={ TEXT_PRESET.heading4 }>{ currentPage?.title ?? 'ODS Docs' }</Text>

        </header>

        <main className="shell__content">
          <Outlet context={ { tokens } satisfies ShellContext } />
        </main>
      </div>
    </div>
  );
};

export { Shell, type ShellContext };
