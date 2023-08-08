// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger, OdsRadioGroupValueChangeEvent, OdsRadioGroupValueChangeEventDetail } from '@ovhcloud/ods-core';
import { OsdsRadioGroup } from '@ovhcloud/ods-stencil/components/radio/src/components/osds-radio-group/osds-radio-group';
import { OsdsRadio } from '@ovhcloud/ods-stencil/components/radio/src/components/osds-radio/osds-radio';
import '@ovhcloud/ods-component-tile';

const logger = new OdsLogger('global-dev');
logger.log('init');

//defineTile();
const radioGroupA: (HTMLElement & OsdsRadioGroup) | null = document.getElementById('radio-group-a') as (HTMLElement & OsdsRadioGroup) | null;
const radioGroupAInfo: HTMLElement | null = document.getElementById('radio-group-a-info');

(async () => {
  await customElements.whenDefined('osds-radio-group');
  await customElements.whenDefined('osds-radio');
})();

let generatedRadioId = 0;

function removeRadio(event: MouseEvent) {
  logger.log('removeRadio', event);
  const target = event.target as HTMLElement;
  if (radioGroupA && target) {
    const radio = target.closest('osds-radio');
    const radioGroup = target.closest('osds-radio-group');
    if (radioGroup && radio) {
      event.preventDefault();
      event.stopPropagation();
      radioGroup.removeChild(radio);
    }
  }
}

function generateRadio() {
  const button = document.createElement('button');
  button.innerText = 'remove';
  button.addEventListener('click', removeRadio);
  const anotherRadioToAdd = document.createElement('osds-radio');
  anotherRadioToAdd.setAttribute('value', `val-tile-other-${generatedRadioId}`);
  const tile = document.createElement('osds-tile');
  tile.setAttribute('selectable', '');
  tile.innerText = `val-tile-other-${generatedRadioId}`;
  tile.appendChild(button);
  anotherRadioToAdd.appendChild(tile);
  generatedRadioId++;
  return anotherRadioToAdd;
}


logger.log('radioGroupA', radioGroupA);

(window as any).addRadio = function () {
  logger.log('addRadio');
  if (radioGroupA) {
    radioGroupA.appendChild(generateRadio());
  }
};


if (radioGroupA && radioGroupAInfo) {
  const info: {
    groupName?: OsdsRadioGroup['name'],
    previousValue?: OdsRadioGroupValueChangeEventDetail["previousValue"],
    newValue?: OdsRadioGroupValueChangeEventDetail["newValue"],
    radios: Array<{
      value: OsdsRadio['value'],
      checked: OsdsRadio['checked'],
      checking: OsdsRadio['checking']
    }>
  } = {
    groupName: `${radioGroupA.getAttribute('name')}`,
    radios: []
  };

  radioGroupA.addEventListener('odsValueChange', async (event: Event) => {
    const evt = event as OdsRadioGroupValueChangeEvent;
    logger.log("odsValueChange event", evt.detail);
    info.newValue = evt.detail.newValue;
    info.previousValue = evt.detail.previousValue;
    info.radios = (await radioGroupA.getRadios())
      .map((radio) => ({
        value: radio.value,
        checked: radio.checked,
        checking: radio.checking
      }))
    radioGroupAInfo.innerHTML = JSON.stringify(info, undefined, 2)
      .replace(/\n/g, '<br/>')
      .replace(/ /g, '&nbsp;');
  })
} else {
  logger.warn('radioGroupA or radioGroupAInfo not found');
}
