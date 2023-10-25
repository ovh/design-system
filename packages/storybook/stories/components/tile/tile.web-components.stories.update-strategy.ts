import { defineCustomElements } from '@ovhcloud/ods-components/radio/loader';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

import { extractArgTypes, extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';

defineCustomElements();

const storyParams = {
  disabled: {
    category: 'Misc',
    defaultValue: false,
  },
  slotJs: {
    category: 'Misc',
    defaultValue:  `
  <script>
var tile3 = document.getElementById("tile-3");

function handleTile3Click() {
  logger.log('tile-3 click');
  // in case of enabled tile, toggle his checked state like a checkbox
  if (!tile3.disabled) {
    tile3.checked = !tile3.checked;
  }
}

function myAsyncAction({checked, value}) {
  const max = 1, min = 0, delay = 1000;
  logger.log('simulate xhr call...', {checked, value});
  return new Promise(
    (resolve, reject) => {
        const isSuccess = Math.floor(Math.random() * (max - min + 1) + min)
        if (isSuccess) {setTimeout(() => {logger.log('xhr call success');resolve("backend updated")}, delay)}
        else {setTimeout(() => {logger.log('xhr call failed');reject(new Error("backend failed!"))}, delay)}
    }
  );
}
</script>
  `,
  },
};

const TemplateUpdateStrategy = (args: any) => html`
  ${unsafeHTML(args.slotJs)}
  <div>
    <h3>Tile with external click behaviour</h3>
    <osds-tile hoverable
               id="tile-3"
               onclick="handleTile3Click()"
               ...=${getTagAttributes(args)}>
      Click me !
    </osds-tile>
  </div>
`;

export const UpdateStrategy = TemplateUpdateStrategy.bind({});
UpdateStrategy.args = {
  ...extractStoryParams(storyParams),
};
UpdateStrategy.argTypes = extractArgTypes(storyParams);
