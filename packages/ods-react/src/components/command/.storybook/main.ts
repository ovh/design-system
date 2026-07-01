import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  docs: {
    autodocs: false,
  },
  framework: '@storybook/react-vite',
  previewHead: (head) => `
    ${head}
    <style>
      html, body {
        font-family: "Source Sans Pro", "Trebuchet MS", "Arial", "Segoe UI", sans-serif;
      }
    </style>
  `,
  stories: [
    '../src/dev.stories.tsx',
    '../tests/**/*.stories.tsx',
  ],
};

export default config;
