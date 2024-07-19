import type { Preview } from '@storybook/web-components';
import '@ovhcloud/ods-themes/default';

const preview: Preview = {
  parameters: {
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h2, h3',
        disable: false
      },
      source: {
        excludeDecorators: true,
      },
    },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        order: [
          'OVHcloud Design System',
          ['Welcome', 'Get Started', 'What\'s new?',
            ['What\'s new', 'Changelog', 'Migration guide'],
            'Design tokens',
          ],
          'ODS Components',
          ['Actions', ['Documentation', 'Technical information', 'Migration From 17.x', 'Demo', '*'], 'Content', 'Form', 'Layout', 'Navigation', 'User feedback'],
        ],
      },
      showPanel: true,
    },
  },
};

export default preview;
