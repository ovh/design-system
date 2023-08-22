// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-button';
import '@ovhcloud/ods-component-icon';
import '@ovhcloud/ods-component-input';
import '@ovhcloud/ods-component-select';

const logger = new OdsLogger('global-dev');
logger.log('init');

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-search-bar');
})();
