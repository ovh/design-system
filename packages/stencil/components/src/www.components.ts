import { OsdsButton } from '../button/src';
import { Ods } from '@ovhcloud/ods-core';

const logger = new (Ods.instance().logger)('www');
logger.log('init');

const buttonA: (HTMLElement & OsdsButton) | null = document.getElementById('button-a') as (HTMLElement & OsdsButton);

(async () => {
  await customElements.whenDefined('osds-button');
})();

logger.log('buttonA', buttonA);
