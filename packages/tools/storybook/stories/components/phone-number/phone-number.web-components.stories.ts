import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-component-phone-number/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
// @ts-ignore
import changelog from '@ovhcloud/ods-component-phone-number/CHANGELOG.md';
// @ts-ignore
import page from './phone-number.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  value: {
    category: 'Misc',
    control: { type: 'text' },
  },
  clearable: {
    category: 'Misc',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
};

export default {
  title: 'UI Components/Phone Number [molecule]/Web Component',
  id: 'phone-number',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsPhoneNumberDefault = (args: Record<string, unknown>) => html`
  <osds-phone-number ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
  </osds-phone-number>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsPhoneNumberDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
