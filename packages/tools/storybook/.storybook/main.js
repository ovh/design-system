module.exports = {
  features: {
    postcss: false,
    buildStoriesJson: true
  },
  stories: ['../**/*.stories.@(md|mdx)', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // contains actions, backgrounds, controls, docs, viewport and toolbars addons
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
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-notes', // to charge the documentation generated automatically by stencil
    //'storybook-addon-xd-designs/register', // Adobe XD tab
    '@storybook/addon-interactions', // Interactions tab
    "storybook-addon-preview/register"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack4"
  },
  webpack: async config => {
    return config;
  },
};
