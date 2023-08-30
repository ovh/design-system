import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { html } from 'lit-html';

import '@ovhcloud/ods-theme-blue-jeans';
import { addCopyCodeButton } from './copy-code-button';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
  },
  backgrounds: {
    values: [
      { name: 'light', value: '#F8F8F8' },
      { name: 'dark', value: '#333333' },
      { name: 'primary-color', value: '#000e9c' },
    ],
  },
  html: {
    root: '.ods-theme',
    removeEmptyComments: true,
    highlighter: {
      showLineNumbers: true,
      wrapLines: false,
    },
    transform: (code) => {
      return code.replace(/\sclass="hydrated"/g, "");
    }
  },
  previewTabs: {
    'storybook/docs/panel': {
      title: 'Docs',
    },
    'canvas': {
      title: 'Sandbox',
    },
    'storybookjs/notes/panel': {
      title: 'Notes',
    },
  },
  options: {
    storySort: {
      order: [
        'OVHcloud Design System',
        ['Home', 'Get Started', 'What\'s new?',
          ['What\'s new', 'Changelog', 'Migration guide',
            ['Introduction'],
          ],
        ],
        'Code',
        ['Our Principles', 'Design tokens', 'Starters',
          ['Introduction'],
          'Stencil',
          ['Introduction', 'Components'],
        ],
        'UI Components',
        ['Introduction'],
        'Meta Components',
        ['Introduction'],
        'Contributing',
        ['Get Started', 'Deployment and Versioning', 'Repository Strategy', 'Troubleshooting Notes'],
        'Libraries',
        ['Introduction']
      ],
    },
    showPanel: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
};

export const decorators = [
  (story, context) => {
    if (typeof story() === 'string') return `<div class="ods-theme">${story()}</div>`;

    return html` <div class="ods-theme">${story()}</div>${context?.parameters?.options?.showPanel ? addCopyCodeButton() : ""}`;
  },
];
