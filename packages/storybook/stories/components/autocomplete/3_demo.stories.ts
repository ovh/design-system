import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-autocomplete';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ODS_ICON_NAMES } from '@ovhcloud/ods-components';
import { AutocompletePlay } from './demo.logic.stories';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

/* WithoutLogic story parameters  */
/* Default story parameters  */
const storyParams = {
  clearable: {
    category: 'General',
    defaultValue: true,
  },
  extraOptions: {
    category: 'Slot',
    defaultValue: '<osds-select-option value="DE">Guten tag</osds-select-option>',
  },
  disabled: {
    category: 'General',
    defaultValue: false,
  },
  error: {
    category: 'Misc',
    defaultValue: false,
  },
  icon: {
    category: 'General',
    defaultValue: '',
    options: ODS_ICON_NAMES,
    control: { type: 'select' },
  },
  inline: {
    category: 'General',
    defaultValue: false,
  },
  isLoading: {
    category: 'General',
    defaultValue: false,
  },
  minimumNumberOfCharacters: {
    category: 'General',
    defaultValue: 0,
  },
  opened: {
    category: 'Misc',
    defaultValue: false,
  },
  placeholder: {
    category: 'General',
    defaultValue: '',
  },
  required: {
    category: 'Misc',
    defaultValue: false,
  },
  value: {
    category: 'Misc',
    defaultValue: '',
  },
};

export default {
  title: 'ODS Components/Form/Autocomplete [organism]/Demo',
  id: 'autocomplete',
  argTypes: extractArgTypes(storyParams)
};

/* WithoutLogic */
const TemplateWithoutLogic = (args:any) => html`
  <osds-autocomplete ...=${getTagAttributes(args)}>
    <osds-select-option value="FR">Bonjour</osds-select-option>
    <osds-select-option value="IT">Bongiorno</osds-select-option>
    <osds-select-option value="EN">Hello</osds-select-option>
    ${unsafeHTML(args.extraOptions)}
  </osds-autocomplete>
`;

export const WithoutLogic = TemplateWithoutLogic.bind({});
// @ts-ignore
WithoutLogic.args = {
  ...extractStoryParams(storyParams),
};

/* WithLogic */
const TemplateWithLogic = (args:any) => html`
  <osds-autocomplete ...=${getTagAttributes(args)}>
  </osds-autocomplete>
`;

export const WithLogic = TemplateWithLogic.bind({});

type WithLogicProps = {
  args: Record<string, unknown>;
  play: () => Promise<void>;
};
(WithLogic as unknown as WithLogicProps).args = {
  ...(extractStoryParams(storyParams) as Record<string, unknown>),
};
(WithLogic as unknown as WithLogicProps).play = AutocompletePlay;
