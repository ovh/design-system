import { DocsContainer } from '@storybook/addon-docs';
import { Unstyled } from '@storybook/blocks';
import { type Preview } from '@storybook/web-components';
import React from 'react';
import '@ovhcloud/ods-themes/default';
// import { defineCustomElement as defineAccordion } from '@ovhcloud/ods-components/dist/components/ods-accordion';
// import { defineCustomElement as defineBadge } from '@ovhcloud/ods-components/dist/components/ods-badge';
// import { defineCustomElement as defineBreadcrumb } from '@ovhcloud/ods-components/dist/components/ods-breadcrumb';
// import { defineCustomElement as defineBreadcrumbItem } from '@ovhcloud/ods-components/dist/components/ods-breadcrumb-item';
// import { defineCustomElement as defineButton } from '@ovhcloud/ods-components/dist/components/ods-button';
// import { defineCustomElement as defineCard } from '@ovhcloud/ods-components/dist/components/ods-card';
// import { defineCustomElement as defineCheckbox } from '@ovhcloud/ods-components/dist/components/ods-checkbox';
// import { defineCustomElement as defineClipboard } from '@ovhcloud/ods-components/dist/components/ods-clipboard';
// import { defineCustomElement as defineCode } from '@ovhcloud/ods-components/dist/components/ods-code';
// import { defineCustomElement as defineDatepicker } from '@ovhcloud/ods-components/dist/components/ods-datepicker';
// import { defineCustomElement as defineDivider } from '@ovhcloud/ods-components/dist/components/ods-divider';
// import { defineCustomElement as defineFileUpload } from '@ovhcloud/ods-components/dist/components/ods-file-upload';
// import { defineCustomElement as defineFormField } from '@ovhcloud/ods-components/dist/components/ods-form-field';
// import { defineCustomElement as defineIcon } from '@ovhcloud/ods-components/dist/components/ods-icon';
// import { defineCustomElement as defineInput } from '@ovhcloud/ods-components/dist/components/ods-input';
// import { defineCustomElement as defineLink } from '@ovhcloud/ods-components/dist/components/ods-link';
// import { defineCustomElement as defineMedium } from '@ovhcloud/ods-components/dist/components/ods-medium';
// import { defineCustomElement as defineMessage } from '@ovhcloud/ods-components/dist/components/ods-message';
// import { defineCustomElement as defineModal } from '@ovhcloud/ods-components/dist/components/ods-modal';
// import { defineCustomElement as definePagination } from '@ovhcloud/ods-components/dist/components/ods-pagination';
// import { defineCustomElement as definePassword } from '@ovhcloud/ods-components/dist/components/ods-password';
// import { defineCustomElement as definePhoneNumber } from '@ovhcloud/ods-components/dist/components/ods-phone-number';
// import { defineCustomElement as definePopover } from '@ovhcloud/ods-components/dist/components/ods-popover';
// import { defineCustomElement as defineProgressBar } from '@ovhcloud/ods-components/dist/components/ods-progress-bar';
// import { defineCustomElement as defineQuantity } from '@ovhcloud/ods-components/dist/components/ods-quantity';
// import { defineCustomElement as defineRadio } from '@ovhcloud/ods-components/dist/components/ods-radio';
// import { defineCustomElement as defineRange } from '@ovhcloud/ods-components/dist/components/ods-range';
// import { defineCustomElement as defineSelect } from '@ovhcloud/ods-components/dist/components/ods-select';
// import { defineCustomElement as defineSkeleton } from '@ovhcloud/ods-components/dist/components/ods-skeleton';
// import { defineCustomElement as defineSpinner } from '@ovhcloud/ods-components/dist/components/ods-spinner';
// import { defineCustomElement as defineSwitch } from '@ovhcloud/ods-components/dist/components/ods-switch';
// import { defineCustomElement as defineSwitchItem } from '@ovhcloud/ods-components/dist/components/ods-switch-item';
// import { defineCustomElement as defineTable } from '@ovhcloud/ods-components/dist/components/ods-table';
// import { defineCustomElement as defineTab } from '@ovhcloud/ods-components/dist/components/ods-tab';
// import { defineCustomElement as defineTabs } from '@ovhcloud/ods-components/dist/components/ods-tabs';
// import { defineCustomElement as defineTag } from '@ovhcloud/ods-components/dist/components/ods-tag';
// import { defineCustomElement as defineText } from '@ovhcloud/ods-components/dist/components/ods-text';
// import { defineCustomElement as defineTextarea } from '@ovhcloud/ods-components/dist/components/ods-textarea';
// import { defineCustomElement as defineTimepicker } from '@ovhcloud/ods-components/dist/components/ods-timepicker';
// import { defineCustomElement as defineToggle } from '@ovhcloud/ods-components/dist/components/ods-toggle';
// import { defineCustomElement as defineTooltip } from '@ovhcloud/ods-components/dist/components/ods-tooltip';

const preview: Preview = {
  loaders: [
    // This is only needed to display mdx story that includes components as TS story will auto-load what's needed
    // But for page like Gallery or Menu Migration page, we need to define here all components to avoid a blank page on first render
    // (defineCustomElements does not work on prod bundle, this need more investigation)
    //
    // EDIT 30/09/2024: current storybook works without those call only because we import some ODS react component in the
    // problematic stories (like Menu), as React bundle for now does load the whole ODS lib. But if we succeed to fix this,
    // stories would probably break again. In such case, either put back this list, or try to add the needed defines on needed
    // page directly
    () => {
  //     defineAccordion();
  //     defineBadge();
  //     defineBreadcrumb();
  //     defineBreadcrumbItem();
  //     defineButton();
  //     defineCard();
  //     defineCheckbox();
  //     defineClipboard();
  //     defineCode();
  //     defineDatepicker();
  //     defineDivider();
  //     defineFileUpload();
  //     defineFormField();
  //     defineIcon();
  //     defineInput();
  //     defineLink();
  //     defineMedium();
  //     defineMessage();
  //     defineModal();
  //     definePagination();
  //     definePassword();
  //     definePhoneNumber();
  //     definePopover();
  //     defineProgressBar();
  //     defineQuantity();
  //     defineRadio();
  //     defineRange();
  //     defineSelect();
  //     defineSkeleton();
  //     defineSpinner();
  //     defineSwitch();
  //     defineSwitchItem();
  //     defineTable();
  //     defineTab();
  //     defineTabs();
  //     defineTag();
  //     defineText();
  //     defineTextarea();
  //     defineTimepicker();
  //     defineToggle();
  //     defineTooltip();
    },
  ],
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
