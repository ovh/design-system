import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-password';
import { html } from 'lit-html';
import { ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { CONTROL_CATEGORY, orderControls } from '../../controls';

defineCustomElement();

/* Demo story parameters  */
const storyParams = orderControls({
  ariaLabel: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  ariaLabelledby: {
    category: CONTROL_CATEGORY.accessibility,
    defaultValue: '',
  },
  clearable: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  defaultValue: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'Default value',
  },
  disabled: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  error: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  forbiddenValues: {
    category: CONTROL_CATEGORY.general,
    defaultValue: [],
    control: { type: 'array' },
  },
  icon: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
    options: ODS_ICON_NAMES,
    control: { type: 'select' },
  },
  inline: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  label: {
    category: CONTROL_CATEGORY.general,
    defaultValue: '',
  },
  loading: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  masked: {
    category: CONTROL_CATEGORY.general,
    defaultValue: true,
  },
  name: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'myTextArea',
  },
  placeholder: {
    category: CONTROL_CATEGORY.general,
    defaultValue: 'placeholder',
  },
  prefixValue: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
  readOnly: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  required: {
    category: CONTROL_CATEGORY.general,
    defaultValue: false,
  },
  value: {
    category: CONTROL_CATEGORY.general,
    control: { type: 'text' },
  },
});

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
