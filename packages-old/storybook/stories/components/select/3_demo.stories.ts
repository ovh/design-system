import { defineCustomElement as defineSelect } from '@ovhcloud/ods-components/dist/components/osds-select';
import { defineCustomElement as defineSelectGroup } from '@ovhcloud/ods-components/dist/components/osds-select-group';
import { defineCustomElement as defineSelectOption } from '@ovhcloud/ods-components/dist/components/osds-select-option';
import { positionParams, applyContentText } from '../../../core/commonPositionStoryParams';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styleMap } from 'lit-html/directives/style-map';
import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineSelect();
defineSelectGroup();
defineSelectOption();

const storyParams = {
  numberOfOptions: {
    category: 'General',
    description: 'Warning: numberOfOptions is not an attribute of Select. It is purely for Storybook rendering',
    defaultValue: 3,
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1,
    },
  },
  placeholder: {
    category: 'Slot',
    defaultValue: 'Select option',
  },
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  inline: {
    category: 'Misc',
    defaultValue: true,
  },
  required: {
    category: 'Development',
    defaultValue: false,
  },
};

export default {
  title: 'ODS Components/Form/Select [atom]/Demo',
  id: 'select',
  argTypes: extractArgTypes(storyParams),
};

/* Default */
const TemplateDefault = ({ ...args }) => {
  const selectOptions = Array.from({ length: args.numberOfOptions }, (_, i) => i + 1).map((value) => html`
    <osds-select-option value="${value}">Value ${value}</osds-select-option>
  `);

  return html`
  <osds-select ...=${getTagAttributes(args)}>
    <span slot="placeholder">
      ${unsafeHTML(args.placeholder)}
    </span>
    ${selectOptions}
  </osds-select>
`;
}


export const Default = TemplateDefault.bind({});
// @ts-ignore
Default.args = {
  ...extractStoryParams(storyParams),
};

/* With group */
const TemplateWithGroup = ({ ...args }) => {
  const selectOptions = Array.from({ length: args.numberOfOptions }, (_, i) => i + 1).map((value) => html`
    <osds-select-option value="${value}">Value ${value}</osds-select-option>
  `);

  return html`
  <osds-select ...=${getTagAttributes(args)}>
    <span slot="placeholder">Select option</span>
    <osds-select-group>Group name</osds-select-group>
    ${selectOptions}
  </osds-select>
`;
}

export const WithGroup = TemplateWithGroup.bind({});
// @ts-ignore
WithGroup.args = {
  ...extractStoryParams(storyParams),
};


/* Position */
const TemplatePosition = ({ ...args }) => {
  const selectOptions = Array.from({ length: args.numberOfOptions }, (_, i) => i + 1).map((value) => html`
    <osds-select-option value="${value}">Value ${value}</osds-select-option>
  `);

  return html`
  <style>
    #alignment {
      display: flex;
      height: 100vh;
      flex-wrap: wrap;
    }
  </style>

  <div id='alignment' style=${styleMap({ placeContent: args.changeAlignment })}>
    <p>${args.applyContent ? applyContentText : ''}</p>
    <osds-select ...=${getTagAttributes(args)}, dir="${args.applyDirection}">
      <span slot="placeholder">Select option</span>
      ${selectOptions}
    </osds-select>
    <p>${args.applyContent ? applyContentText : ''}</p>
  </div>
`;
}
export const Position = TemplatePosition.bind({});
// @ts-ignore
Position.args = {
  ...extractStoryParams({ ...storyParams, ...positionParams }),
};
// @ts-ignore
Position.argTypes = extractArgTypes(positionParams);
