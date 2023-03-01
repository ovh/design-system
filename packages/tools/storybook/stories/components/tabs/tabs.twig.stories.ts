import Button from '@ovhcloud/ods-twig/components/button/otds-button.twig';

// import { config } from 'storybook-addon-xd-designs';
// import { XDConfig } from 'storybook-addon-xd-designs/lib/config';

import '@ovhcloud/ods-twig/components/button/dist/otds-button.css';

import { OdsButtonSize, OdsButtonSizeList, OdsHTMLAnchorElementTarget, OdsHTMLAnchorElementTargetList, OdsButtonVariant, OdsButtonVariantList } from '@ovhcloud/ods-core';
import { OdsThemeColorIntent, OdsThemeColorIntentList } from '@ovhcloud/ods-theming';

import { extractArgTypes, extractStoryParams } from '../../../core/componentHTMLUtils';

import changelog from '@ovhcloud/ods-twig-button/CHANGELOG.md';
import page from './button.twig.stories.page.mdx';

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: OdsThemeColorIntent.default,
    options: OdsThemeColorIntentList,
    control: { type: 'select' },
  },
  size: {
    category: 'General',
    defaultValue: OdsButtonSize.md,
    options: OdsButtonSizeList,
    control: { type: 'select' },
  },
  variant: {
    category: 'General',
    defaultValue: OdsButtonVariant.flat,
    options: OdsButtonVariantList,
    control: { type: 'select' },
  },
  start: {
    category: 'Slot',
    defaultValue: '',
  },
  buttonContent: {
    category: 'Slot',
    defaultValue: 'Button',
  },
  end: {
    category: 'Slot',
    defaultValue: '',
  },
  contrasted: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  flex: {
    category: 'Misc',
    defaultValue: false,
  },
  href: {
    category: 'Misc',
    defaultValue: '',
  },
  target: {
    category: 'Misc',
    defaultValue: OdsHTMLAnchorElementTarget._self,
    options: OdsHTMLAnchorElementTargetList,
    control: { type: 'select' },
  },
};

export default {
  title: 'UI Components/Button️ [atom]/Twig',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page },
    /* design: config({
      artboardUrl: 'https://xd.adobe.com/view/040c7684-d702-451e-98d9-23320eacd292-515f/screen/0c4d4f2c-9a40-44b2-b3f9-3fa01eed0911/Desktop',
    {  as XDConfig), */
  },
};

const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return Button({ ...args });
};

export const Default = Template.bind({});
Default.args = {
  ...extractStoryParams(storyParams),
};
Default.argTypes = extractArgTypes(storyParams);
