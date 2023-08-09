import { html } from 'lit-html';

import '@ovhcloud/ods-theme-blue-jeans/index.css';
import { addCopyCodeButton } from './copy-code-button';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

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
      hidden: true,
    },
    'canvas': {
      title: ' ',
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
          ['Introduction'],
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
  themes: {
    default: 'default',
    list: [
      { name: 'default', class: 'theme-default', color: '#fff' },
      { name: 'contrasted', class: 'theme-contrasted', color: '#000E9C' }
    ],
  },
};

export const decorators = [
  (story, context) => {
    const template = [`<div class="ods-theme">`,`</div>`];

    return typeof story() === 'string' ?
      `${template[0]}${story()}${template[1]}` :
      html`${unsafeHTML(template[0])}${story()}${unsafeHTML(template[1])}${context?.parameters?.options?.showPanel ? addCopyCodeButton() : ""}`;
  },
];
