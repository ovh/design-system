import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-password';
import { html } from 'lit-html';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  placeholder: {
    category: 'General',
    defaultValue: 'Placeholder',
  },
  value: {
    category: 'General',
    control: { type: 'text' },
  },
  masked: {
    category: 'General',
    defaultValue: true,
  },
  clearable: {
    category: 'General',
    defaultValue: false,
  },
  loading: {
    category: 'General',
    defaultValue: false,
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  name: {
    category: 'Development',
    defaultValue: 'my-password',
  },
  required: {
    category: 'Development',
    defaultValue: false,
  },
  forbiddenValues: {
    category: 'Development',
    defaultValue: [],
    control: { type: 'array' },
  },
};

export default {
  title: 'ODS Components/Form/Password [molecule]/Demo',
  id: 'password',
  argTypes: extractArgTypes(storyParams)
};

/* Default */
const OsdsPasswordDemo = (args: Record<string, unknown>) => html`
  <osds-password ...=${getTagAttributes(args)} @keydown=${(e: KeyboardEvent) => e.stopPropagation()}>
  </osds-password>
`;
const TemplateDemo = (args: Record<string, unknown>) => OsdsPasswordDemo(args);
export const Demo = TemplateDemo.bind({});
type DemoProps = {
  args: Record<string, unknown>;
};
(Demo as unknown as DemoProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
