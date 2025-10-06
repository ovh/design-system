import { addons, types, useStorybookState } from '@storybook/manager-api';
import React from 'react';
import { Icon, ICON_NAME } from '../../components/icon/Icon';
import style from './githubLink.module.css';

const ADDON_NAME = 'githubLink';

const githubLinkAddon = () => {
  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => {
      const { theme } = useStorybookState();

      return (
        <a
          className={ style['github-link'] }
          href="https://github.com/ovh/design-system"
          target="_blank">
          <Icon
            className={ style['github-link__icon'] }
            name={ ICON_NAME.github }
            style={{ color: theme.textColor }} />
        </a>
      );
    },
  });
};

export {
  ADDON_NAME,
  githubLinkAddon,
};
