import { DocsContainer } from '@storybook/addon-docs';
import { Unstyled } from '@storybook/blocks';
import { type Preview } from '@storybook/react';
import React from 'react';
import '@ovhcloud/ods-themes/default';

const preview: Preview = {
  parameters: {
    docs: {
      container: ({ children, context }: any) => {
        return (
          <DocsContainer context={ context }>
            <Unstyled>
              { children }
            </Unstyled>
          </DocsContainer>
        );
      },
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
      disableSaveFromUI: true,
      expanded: true,
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        includeNames: true,
        order: [
          'OVHcloud Design System', [
            'Welcome',
            'Get Started',
            'What\'s new?', [
              'What\'s new',
              'Changelog',
              'Migration guide',
            ],
            'Design and Style', [
              'Apply ODS Style',
              'Style Customization',
              '*',
            ],
            'Guides', [
              'Handling Form',
              '*',
            ],
          ],
          'React Components', [
            'Gallery',
            '*', [
              'Documentation',
              'Technical information',
              'Demo',
              '*',
            ],
          ],
        ],
      },
      showPanel: true,
    },
  },
  tags: ['!test'],
};

export default preview;
