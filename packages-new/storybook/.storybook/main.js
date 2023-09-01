module.exports = {
  core: {
    builder: '@storybook/builder-webpack4',
  },
  features: {
    postcss: false,
    buildStoriesJson: true
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../**/*.stories.@(md|mdx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        // https://github.com/storybookjs/storybook/blob/next/addons/docs/README.md#preset-options
        transcludeMarkdown: false,
      },
    },
    '@whitespace/storybook-addon-html',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-notes', // to charge the documentation generated automatically by stencil
  ],
  webpack: async config => {
    return config;
  },
};
