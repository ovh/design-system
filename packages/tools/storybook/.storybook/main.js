module.exports = {
  core: {
    builder: '@storybook/builder-webpack4',
  },
  features: {
    postcss: false,
    buildStoriesJson: true
  },
  framework: '@storybook/react',
  stories: ['../**/*.stories.@(md|mdx|ts|tsx)'],
  addons: [
    // contains actions, backgrounds, controls, docs, viewport and toolbars addons
    {
      name: '@storybook/addon-essentials'
    },
    '@whitespace/storybook-addon-html',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-themes'
  ],
  webpack: async config => {
    return config;
  },
};
