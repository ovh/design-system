import { defineCustomElement } from '@ovhcloud/ods-components/dist/components/osds-checkbox-button';
import { html } from 'lit-html';

import { extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElement();

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
