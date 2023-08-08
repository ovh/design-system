// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import { OdsLogger } from '@ovhcloud/ods-core';
import { OsdsCheckbox } from '@ovhcloud/ods-stencil/components/checkbox/src/components/osds-checkbox/osds-checkbox';
import './components';
import './global';
import '@ovhcloud/ods-component-tile';

const logger = new OdsLogger('global-dev');
logger.log('init');

const checkboxA: HTMLOsdsCheckboxElement | null = document.getElementById('checkbox-a') as (HTMLOsdsCheckboxElement);
const checkboxAInfo: HTMLElement | null = document.getElementById('checkbox-a-info');

(async () => {
  await customElements.whenDefined('osds-checkbox');
})();

if (checkboxA && checkboxAInfo) {
  const info: {
    name?: OsdsCheckbox['name']
  } = {
    name: `${checkboxA.getAttribute('name')}`
  };

  checkboxA.addEventListener('odsValueChange', async (event: Event) => {
    const evt = event as any;
    logger.log("odsValueChange event", evt.detail);
    checkboxAInfo.innerHTML = JSON.stringify(info, undefined, 2)
      .replace(/\n/g, '<br/>')
      .replace(/ /g, '&nbsp;');
  })
} else {
  logger.warn('checkboxA or checkboxAInfo not found');
}
