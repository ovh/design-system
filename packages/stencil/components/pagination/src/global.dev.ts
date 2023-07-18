// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-core';
import { OdsInitializedEvent, OdsInitializedEventName } from '@ovhcloud/ods-core';
import '@ovhcloud/ods-stencil/components/icon';
import '@ovhcloud/ods-stencil/components/button';
import '@ovhcloud/ods-stencil/components/select';
import '@ovhcloud/ods-stencil/components/text';
import '@ovhcloud/ods-stencil/components/tooltip';

const logger = new OdsLogger('global-dev');
logger.log('init');

/* wait for the pagination to be initialized as web component */
(async () => {
  await customElements.whenDefined('osds-pagination');
})();

document.addEventListener(OdsInitializedEventName, event => {
  const evt = event as OdsInitializedEvent;
  const instance = evt.detail.instance;
  instance.logging(true);
  logger.log('odsInitialized received');
});
