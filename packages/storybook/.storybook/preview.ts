// import { DocsPage, DocsContainer } from '@storybook/addon-docs'; // TODO check what is it for?
import '@ovhcloud/ods-themes/default';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  // docs: {
  //   container: DocsContainer,
  //   page: DocsPage,
  // },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
    },
  },
};

export default preview;
