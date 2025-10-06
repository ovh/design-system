import { type BADGE_COLOR, Badge } from '@ovhcloud/ods-react';
import { addons } from '@storybook/manager-api';
import classNames from 'classnames';
import React from 'react';
import { ADDON_NAME as BRAND_ADDON_NAME, brandAddon } from './addons/brand/brand';
import { ADDON_NAME as GITHUB_LINK_ADDON_NAME, githubLinkAddon } from './addons/githubLink/githubLink';
import { ADDON_NAME as ODS_VERSIONS_ADDON_NAME, odsVersionsAddon } from './addons/odsVersions/odsVersions';
import { ADDON_NAME as THEME_SELECTOR_ADDON_NAME, themeSelectorAddon } from './addons/themeSelector/themeSelector';
import { light } from './ods.theme';
import styles from './manager.module.css';

function renderLabel(name: string, tags: string[], isDoc: boolean) {
  let badge = '';

  if (tags.indexOf('beta') > -1) {
    badge = 'beta';
  } else if (tags.indexOf('new') > -1) {
    badge = 'new';
  }

  if (!badge) {
    return name;
  }

  return (
    <div className={ classNames(
      styles.label,
      { [styles['label--doc']]: isDoc },
    )}>
      <span>
        { name }
      </span>

      <Badge
        className={ styles['label__badge'] }
        color={ badge as BADGE_COLOR }
        size="sm">
        { badge.toUpperCase() }
      </Badge>
    </div>
  );
}

addons.register(BRAND_ADDON_NAME, brandAddon);
addons.register(THEME_SELECTOR_ADDON_NAME, themeSelectorAddon);
addons.register(ODS_VERSIONS_ADDON_NAME, odsVersionsAddon);
addons.register(GITHUB_LINK_ADDON_NAME, githubLinkAddon);

addons.setConfig({
  enableShortcuts: false,
  sidebar: {
    renderLabel: (item, api) => {
      // Collapsed children are not available, so we have to manually check each child tags
      if (item.type === 'group' || item.type === 'component') {
        const children = item.children || [];

        const allTags = children.map((childId) => {
          const childData = api.getData(childId);
          return childData ? childData.tags || [] : [];
        }).flat();

        return renderLabel(item.name, allTags, false);
      }

      return renderLabel(item.name, item.tags, true);
    },
  },
  showToolbar: true,
  theme: light,
});
