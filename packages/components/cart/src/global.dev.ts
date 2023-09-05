// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-divider';

const logger = new OdsLogger('global-dev');
logger.log('init');

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-cart');
  await customElements.whenDefined('osds-cart-footer');
  await customElements.whenDefined('osds-cart-footer-item');
  await customElements.whenDefined('osds-cart-header');
  await customElements.whenDefined('osds-cart-item');
  await customElements.whenDefined('osds-cart-item-option');
  await customElements.whenDefined('osds-cart-manager');
  await customElements.whenDefined('osds-cart-section');
  await customElements.whenDefined('osds-cart-total');
})();
