import { type StorybookConfig } from '@storybook/react-vite';
import { getCodeEditorStaticDirs } from 'storybook-addon-code-editor/getStaticDirs';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        measure: false,
        outline: false,
      },
    },
    'storybook-addon-code-editor',
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  framework: '@storybook/react-vite',
  managerHead: (head) => `
    ${head}
    <link rel="shortcut icon" href="./favicon.ico">
    <link rel="icon" type="image/png" href="./favicon.png" sizes="192x192">
    <link rel="stylesheet" type="text/css" href="css/storybook.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="A collection of assets, guidelines and UI components for building consistent user experiences across OVHcloud products."/>
  `,
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" type="text/css" href="css/preview.css" />
  `,
  staticDirs: ['../assets', ...getCodeEditorStaticDirs(__filename)],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
};

export default config;
