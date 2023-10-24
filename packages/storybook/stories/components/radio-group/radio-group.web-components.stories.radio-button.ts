import { extractStoryParams, getTagAttributes } from '../../../core/componentHTMLUtils';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { defineCustomElements } from '@ovhcloud/ods-components/radio/loader';
import { OlesIpsumGeneration, olesIpsum } from '@ovhcloud/ods-common-core';

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
var radioGroupA = document.getElementById("radio-group-a");
var radioGroupMsgA = document.getElementById("radio-group-msg-a");
var radioGroupB = document.getElementById("radio-group-b");
var radioGroupMsgB = document.getElementById("radio-group-msg-b");

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

// optimistic
if(radioGroupA) {
  radioGroupA.addEventListener('odsValueChange', (event) => {
      logger.log('radioGroupA value change', {detail: event.detail});
      const {newValue, previousValue} = event.detail;
      radioGroupMsgA.innerText = '';
      myAsyncAction({value: newValue})
      .catch(() => {radioGroupMsgA.innerText = 'error updating value. try again';radioGroupA.value = previousValue})
  });
}

// pessimistic
if(radioGroupB) {
  radioGroupB.beforeSave = ({checked, value}) => new Promise((res) => {radioGroupMsgB.innerText = '';radioGroupB.disabled = true;res()})
  radioGroupB.afterSave = ({checked, value}) => new Promise((res) => {radioGroupB.disabled = false;res()})
  radioGroupB.save = ({value}) => myAsyncAction({value})
  .catch((error) => {radioGroupMsgB.innerText = 'error updating value. try again'; throw error;});
  radioGroupB.addEventListener('odsValueChange', (event) => {
      logger.log('radioGroupB value change', {detail: event.detail});
  });
}
</script>
  `,
  },
};

const TemplateRadioButton = (args: any) => html`
  <style>
    osds-radio-group {
      display: flex;
    }
    osds-radio-button {
      display: inline-flex;
    }
  </style>
  ${unsafeHTML(args.slotJs)}

  <div>
    <h3>Radio-group with radio buttons</h3>
    <div>
      <osds-radio-group id="radio-group-a"
                        ...=${getTagAttributes(args)}>
        <osds-radio id="radio-A"
                    value="val-tile-A">
          <osds-radio-button
            color="primary"
            id="tile-A"
          >
            ${olesIpsum(OlesIpsumGeneration.words, 5)}
          </osds-radio-button>
        </osds-radio>
        <osds-radio id="radio-B"
                    value="val-tile-B">
          <osds-radio-button
            color="primary"
            id="tile-B"
          >
            ${olesIpsum(OlesIpsumGeneration.words, 5)}
          </osds-radio-button>
        </osds-radio>
      </osds-radio-group>
      <h5 id="radio-group-msg-a"></h5>
    </div>
  </div>
`;

export const RadioButton = TemplateRadioButton.bind({});
// @ts-ignore
RadioButton.args = {
  ...extractStoryParams(storyParams),
};
