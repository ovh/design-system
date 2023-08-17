// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-icon';

const message = document.querySelector('osds-message');

const logger = new OdsLogger('global-dev');
logger.log('init', message);

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-message');
})();
