import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {extractArgTypes, extractStoryParams, getTagAttributes} from '../../../core/componentHTMLUtils';
import {OlesIpsumGeneration, olesIpsum} from '@ovhcloud/ods-common-core';

const slotJs = `
    <script>
  var radio4 = document.getElementById("radio-4");
  var radioMsg4 = document.getElementById("radio-msg-4");
  var radio5 = document.getElementById("radio-5");
  var radioMsg5 = document.getElementById("radio-msg-5");

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

  // pessimistic
  if(radio5) {
    radio5.beforeSave = ({checked, value}) => new Promise((res) => {radioMsg5.innerText = '';radio5.disabled = true;res()})
    radio5.afterSave = ({checked, value}) => new Promise((res) => {radio5.disabled = false;res()})
    radio5.save = ({checked, value}) => myAsyncAction({checked, value})
    .catch((error) => {radioMsg5.innerText = 'error updating value. try again'; throw error;});
    radio5.addEventListener('odsValueChange', (event) => {
        logger.log('radio5 value change', {detail: event.detail});
    });
    radio5.addEventListener('odsCheckedChange', (event) => {
        logger.log('radio5 Checked change', {detail: event.detail});
    });
  }

  // optimistic
  if(radio4) {
    radio4.addEventListener('odsValueChange', (event) => {
        logger.log('radio4 value change', {detail: event.detail});
    });
    radio4.addEventListener('odsCheckedChange', (event) => {
        logger.log('radio4 Checked change', {detail: event.detail}, 'calling async action...');
        radioMsg4.innerText = '';
        myAsyncAction({checked: event.detail.checked, value: event.detail.value})
        .catch(() => {radioMsg4.innerText = 'error updating value. try again';radio4.checked = false})
    });
  }
  </script>
    `;

const storyParams = {
  slotJs: {
    defaultValue: slotJs,
  },
  disabled: {
    defaultValue: false,
  },
  required: {
    defaultValue: false,
  },
};

/* Default */
const TemplateUpdateStrategy = (args: any) => html`
  <style>
    osds-tile {
      display: inline-flex;
      width: 10rem;
    }
  </style>
  ${unsafeHTML(args.slotJs)}
  <div>
    <h3>Tile inside radio (with optimistic update on click)</h3>
    <osds-radio id="radio-4"
                value="radio-4"
                ...=${getTagAttributes(args)}>
      <osds-tile interactive id="tile-4">${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
    </osds-radio>
    <h5 id="radio-msg-4"></h5>
  </div>
  <div>
    <h3>Tile inside radio (with pessimistic update on click)</h3>
    <osds-radio id="radio-5"
                value="radio-5"
                ...=${getTagAttributes(args)}>
      <osds-tile interactive id="tile-5">${olesIpsum(OlesIpsumGeneration.words, 5)}</osds-tile>
    </osds-radio>
    <h5 id="radio-msg-5"></h5>
  </div>
`;
export const UpdateStrategy = TemplateUpdateStrategy.bind({});
// @ts-ignore
UpdateStrategy.args = {
  ...extractStoryParams(storyParams),
};
// @ts-ignore
UpdateStrategy.argTypes = extractArgTypes(storyParams);

