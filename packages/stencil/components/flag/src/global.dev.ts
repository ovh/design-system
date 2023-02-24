// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-core';
import { Ods, odsSetup } from '@ovhcloud/ods-core';
import { OsdsFlag } from '@ovhcloud/ods-stencil/components/flag/src';

odsSetup();

const flag: (HTMLElement & OsdsFlag) | null = document.getElementById('flag-1') as (HTMLElement & OsdsFlag) | null;

const logger = new OdsLogger('global-dev');
logger.log('init', flag);

(window as any).globalMethod = async function () {
};

Ods.instance().assetPath('../flags/flags-4x3/');

(async () => {
  await customElements.whenDefined('osds-flag');
})();
