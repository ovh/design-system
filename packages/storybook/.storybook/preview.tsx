import { DocsContainer } from '@storybook/addon-docs';
import { type DocsContextProps, Unstyled } from '@storybook/blocks';
import { type Preview } from '@storybook/react';
import React, { type ReactNode } from 'react';
import { ThemeApplier } from './components/themeApplier/ThemeApplier';
import { THEME } from './constants/theme';
import '@ovhcloud/ods-react/normalize-css';
import '@ovhcloud/ods-themes/default/css';
import '@ovhcloud/ods-themes/default/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      disableSaveFromUI: true,
      expanded: true,
      hideNoControlsWarning: true,
    },
    docs: {
      container: ({ children, context }: { children: ReactNode, context: DocsContextProps }) => (
        <ThemeApplier
          onDarkTheme={ () => document.body.setAttribute('data-theme', THEME.dark) }
          onLightTheme={ () => document.body.removeAttribute('data-theme') }>
          <DocsContainer context={ context }>
            <Unstyled>
              { children }
            </Unstyled>
          </DocsContainer>
        </ThemeApplier>
      ),
      source: {
        excludeDecorators: true,
      },
      toc: {
        contentsSelector: '.sbdocs-content',
        disable: false,
        headingSelector: 'h2, h3'
      },
    },
    options: {
      showPanel: true,
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
              'Accessibility',
              'Handling Form',
              '*',
            ],
            'Tools', [
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
    },
  },
  tags: ['!test'],
};

export default preview;
