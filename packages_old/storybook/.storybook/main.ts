import type { StorybookConfig } from '@storybook/web-components-vite';

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
  ],
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: false,
  },
  framework: '@storybook/web-components-vite',
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
  staticDirs: ['../assets'],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
};

export default config;
