import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { html } from 'lit-html';

import '@ovhcloud/ods-theme-blue-jeans/index.css';

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
        ['Introduction', 'What\'s new', 'Roadmap', 'Branding'],
        'Contributing',
        ['Getting Started', 'Deployment and Versioning', 'Repository Strategy', 'Troubleshooting Notes'],
        'Code',
        ['Getting Started', 'Changelog', 'Migration guide',
          ['Introduction', '1.x to 2.x', '2.x to 3.x', '3.x to 4.x', '4.x to 5.x', '5.x to 6.x', '6.x to 8.x', '8.x to 9.x', '9.x to 10.x'],
          'Code principles'],
        'UI Components',
        'Libraries',
        'Stencil',
        'CDK',
        ['Getting Started',
          'Overlay',
          ['Introduction', 'Usage', 'System', 'examples', 'Strategies'],
        ],
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
  story => {
    if (typeof story() === 'string') return `<div class="ods-theme">${story()}</div>`;

    return html` <div class="ods-theme">${story()}</div> `;
  },
];
