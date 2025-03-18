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
          'ODS Components', [
            'Gallery',
            'Form elements',  [
              '*', [
                'Documentation',
                'Technical information',
                'Migration From 17.x',
                'Demo',
                '*',
              ]
            ],
            '*', [
              'Documentation',
              'Technical information',
              'Migration From 17.x',
              'Demo',
              '*',
            ],
          ],
        ],
      },
      showPanel: true,
    },
  },
};

export default preview;
