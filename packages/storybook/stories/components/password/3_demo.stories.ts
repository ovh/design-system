import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-password';
import { html } from 'lit-html';
import { ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* Demo story parameters  */
const storyParams = {
  icon: {
    category: 'General',
    defaultValue: '',
    options: ODS_ICON_NAMES,
    control: { type: 'select' },
  },
  prefixValue: {
    category: 'General',
    control: { type: 'text' },
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
    defaultValue: 'myInputNumber',
  },
  readonly: {
    category: 'Development',
    defaultValue: false,
  },
  required: {
    category: 'Development',
    defaultValue: false,
  },
  masked: {
    category: 'Development',
    defaultValue: true,
  },
  placeholder: {
    category: 'General',
    defaultValue: 'Placeholder',
  },
  value: {
    category: 'General',
    control: { type: 'text' },
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
