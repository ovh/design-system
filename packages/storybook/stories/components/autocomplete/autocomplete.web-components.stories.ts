import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/autocomplete/loader';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { DEFAULT_ATTRIBUTE } from '@ovhcloud/ods-components/autocomplete/src/components/osds-autocomplete/constants/default-attributes';
import { ODS_THEME_COLOR_INTENTS } from '@ovhcloud/ods-common-theming';
// @ts-ignore
import changelog from '@ovhcloud/ods-components/autocomplete/CHANGELOG.md';
// @ts-ignore
import page from './autocomplete.web-component.stories.page.mdx';

defineCustomElements();

/* Default story parameters  */
const storyParams = {
  clearable: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.clearable,
  },
  color: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.color,
    options: ODS_THEME_COLOR_INTENTS,
    control: { type: 'select' },
  },
  disabled: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.disabled,
  },
  error: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.error,
  },
  inline: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.inline,
  },
  minimumNumberOfCharacters: {
    category: 'General',
    defaultValue: 2,
  },
  placeholder: {
    category: 'General',
    defaultValue: '"Hello World", "Hola Mundo", "Bonjour tout le monde"...',
  },
  value: {
    category: 'General',
    defaultValue: DEFAULT_ATTRIBUTE.value,
  },
};

export default {
  title: 'UI Components/Autocomplete [organism]/Web Component',
  id: 'autocomplete',
  parameters: {
    notes: {
      changelog,
    },
    docs: { page }
  },
  argTypes: extractArgTypes(storyParams)
};

const database = [
  { value: 'Hello', text: 'Hello World' },
  { value: 'How', text: 'How are you today?' },
  { value: 'Bonjour', text: 'Bonjour tout le monde' },
  { value: 'Hola', text: 'Hola Mundo' },
  { value: 'Fizz', text: 'Buzz' },
];

const updateOptions = (value: string, autocompleteElem: Element) => {
  while (autocompleteElem.firstChild) {
    autocompleteElem.removeChild(autocompleteElem.firstChild);
  }

  const regex = new RegExp(value, 'i');

  database.forEach(entry => {
    if (regex.test(entry.text)) {
      const optionElem = document.createElement('osds-select-option');
      optionElem.value = entry.value;
      optionElem.tabIndex = 1;

      const textElem = document.createElement('osds-text');
      textElem.innerHTML = entry.text.replace(regex, '<b>$&</b>');
      optionElem.appendChild(textElem);

      autocompleteElem.appendChild(optionElem);
    }
  });
};

interface TemplateArgs {
  clearable?: boolean;
  color?: string;
  disabled?: boolean;
  error?: boolean;
  inline?: boolean;
  minimumNumberOfCharacters?: number;
  placeholder?: string;
  value?: string;
}

const TemplateDefault = (args: TemplateArgs) => {
  return html`
    <osds-autocomplete ...=${getTagAttributes(args)} @odsValueChange=${(e: CustomEvent) => {e.target instanceof Element && updateOptions(e.detail.value, e.target)}}>
    </osds-autocomplete>
  `;
};

export const Default = (args: TemplateArgs) => TemplateDefault(args);
Default.args = {
  ...extractStoryParams(storyParams),
};