import { addons, types } from '@storybook/manager-api';
import React from 'react';

const ADDON_NAME = 'githubLink';

const githubLinkAddon = () => {
  addons.add(`${ADDON_NAME}/sidebar`, {
    type: types.experimental_SIDEBAR_TOP,
    render: () => (
      <a href="https://github.com/ovh/design-system"
         target="_blank">
        <img alt="github"
             height="24"
             src="github_logo.png"
             width="24" />
      </a>
    ),
  });
};

export {
  ADDON_NAME,
  githubLinkAddon,
};
