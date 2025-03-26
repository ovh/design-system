import { type StorybookConfig } from '@storybook/react-vite';
import { type PropItem } from 'react-docgen-typescript/lib/parser';

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
  staticDirs: ['../assets'],
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      propFilter: (prop: PropItem) => {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
            return !declaration.fileName.includes('node_modules');
          });

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
      shouldExtractLiteralValuesFromEnum: false,
      shouldExtractValuesFromUnion: false,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
};

export default config;
