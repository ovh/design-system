import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-input';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/src/input/src/components/osds-input/constants/default-attributes';
import { html } from 'lit-html';
import { InputPlay } from './demo.validation.stories';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { ODS_ICON_NAMES, ODS_INPUT_TYPES } from '@ovhcloud/ods-components';

defineCustomElement();

/* Default story parameters  */
const storyParams = {
  color: {
    category: 'General',
    defaultValue: ODS_THEME_COLOR_INTENT.primary,
    options: [ODS_THEME_COLOR_INTENT.primary, ODS_THEME_COLOR_INTENT.error],
    control: { type: 'select' },
  },
  type: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.type,
    options: ODS_INPUT_TYPES,
    control: { type: 'select' },
  },
  placeholder: {
    category: 'General',
    defaultValue: 'placeholder',
  },
  defaultValue: {
    category: 'General',
    control: { type: 'text' },
  },
  value: {
    category: 'General',
    control: { type: 'text' },
  },
  icon: {
    category: 'General',
    defaultValue: '',
    options: ODS_ICON_NAMES,
    control: { type: 'select' },
  },
  prefixValue: {
    category: 'General',
    defaultValue: '',
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
  min: {
    category: 'Development',
    control: { type: 'number' },
  },
  max: {
    category: 'Development',
    control: { type: 'number' },
  },
  step: {
    category: 'Development',
    control: { type: 'number' },
  },
  forbiddenValues: {
    category: 'Development',
    defaultValue: [],
    control: { type: 'array' },
  },
  pattern: {
    category: 'General',
    control: { type: 'text' },
  },
};

export default {
  title: 'ODS Components/Form/Input [atom]/Demo',
  id: 'input',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const OsdsInputDefault = (args: Record<string, unknown>) => html`
  <osds-input ...=${getTagAttributes(args)}>
  </osds-input>
`;
const TemplateDefault = (args: Record<string, unknown>) => OsdsInputDefault(args);
export const Default = TemplateDefault.bind({});
type DefaultProps = {
  args: Record<string, unknown>;
};
(Default as unknown as DefaultProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};

/* Input Validation */
const OsdsInputValidation = (args: Record<string, unknown>) => html`
  <article id="example-1">
    <osds-input id="input"  ...=${getTagAttributes(args)}>
    </osds-input>
    <span class="error-msg forbidden-value">Forbidden value</span>
    <span class="error-msg value-missing">Value required please</span>
    <span class="error-msg step-mismatch">Please insert a value by step 2, starting from 1</span>
    <span class="error-msg valid">Not valid</span>
  </article>
`;
const TemplateValidation = (args: Record<string, unknown>) => OsdsInputValidation(args);
export const Validation = TemplateValidation.bind({});
type ValidationProps = {
  args: Record<string, unknown>;
  play: () => Promise<void>;
};
(Validation as unknown as ValidationProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
(Validation as unknown as ValidationProps).play = InputPlay;
