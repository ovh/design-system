// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger, Ods, odsSetup } from '@ovhcloud/ods-common-core';
import '@ovhcloud/ods-component-input';
import '@ovhcloud/ods-component-select';
import '@ovhcloud/ods-component-flag';
import '@ovhcloud/ods-component-text';

odsSetup();

const logger = new OdsLogger('global-dev');
logger.log('init');
Ods.instance().assetPath('../flags/flags-4x3/');

(window as any).globalMethod = async function () {
  logger.log('globalMethod');
};

(async () => {
  await customElements.whenDefined('osds-phone-number');
})();
