import { extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { html } from 'lit-html';
import { defineCustomElements } from '@ovhcloud/ods-components/checkbox-button/loader';
import { OlesIpsumGeneration, olesIpsum } from '@ovhcloud/ods-common-core';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
};

const TemplateCheckboxButton = (args: any) => html`
  <style>
    osds-checkbox {
      display: flex;
    }
    osds-checkbox-button {
      display: inline-flex;
    }
  </style>
  <div>
    <h3>Checkbox with checkbox buttons</h3>
    <div>
      <osds-checkbox
        id="checkbox-A"
        value="val-tile-A"
        ...=${getTagAttributes(args)}
      >
        <osds-checkbox-button
          interactive
          color="primary"
          id="tile-A"
        >
          <span slot="end">
            ${olesIpsum(OlesIpsumGeneration.words, 5)}
          </span>
        </osds-checkbox-button>
      </osds-checkbox>
      <osds-checkbox
        id="checkbox-B"
        value="val-tile-B"
        ...=${getTagAttributes(args)}
      >
        <osds-checkbox-button
          interactive
          color="primary"
          id="tile-B"
        >
          <span slot="end">
            ${olesIpsum(OlesIpsumGeneration.words, 5)}
          </span>
        </osds-checkbox-button>
      </osds-checkbox>
    </div>
  </div>
`;

export const CheckboxButton = TemplateCheckboxButton.bind({});
CheckboxButton.args = {
  ...extractStoryParams(storyParams),
};
