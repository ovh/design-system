// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import type { OsdsQuantity } from './components/osds-quantity/osds-quantity';
import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-button';
import '@ovhcloud/ods-component-icon';
import '@ovhcloud/ods-component-input';

const quantity: (HTMLElement & OsdsQuantity) | null = document.getElementById('quantity-1') as (HTMLElement & OsdsQuantity) | null;

const logger = new OdsLogger('global-dev');
logger.log('init', quantity);

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-quantity');
})();
