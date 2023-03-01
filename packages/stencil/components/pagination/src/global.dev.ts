// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import { OdsLogger } from '@ovhcloud/ods-core';
import { OdsInitializedEvent, OdsInitializedEventName, OdsPaginationCurrentChangeEvent } from '@ovhcloud/ods-core';
import '@ovhcloud/ods-stencil/components/icon';
import '@ovhcloud/ods-stencil/components/button';

const logger = new OdsLogger('global-dev');
logger.log('init');

/* wait for the select to be initialized as web component */
(async () => {
  await customElements.whenDefined('osds-pagination');
  await customElements.whenDefined('osds-pagination-group');
  await customElements.whenDefined('osds-pagination-option');
})();

document.addEventListener(OdsInitializedEventName, event => {
  const evt = event as OdsInitializedEvent;
  const instance = evt.detail.instance;
  instance.logging(true);
  logger.log('odsInitialized received');
});

type ExampleData = {
  component: HTMLOsdsPaginationElement | null;
  info: HTMLElement | null;
};

/**
 * create an object reference for a given integration example
 * @param id
 */
function getExampleData(id: string): ExampleData {
  return {
    component: document.getElementById(id) as HTMLOsdsPaginationElement | null,
    info: document.getElementById(`${id}-info`),
  };
}

/**
 * examples references with HTML elements references
 */
const examples: {
  select1: ExampleData;
  select2: ExampleData;
  select3: ExampleData;
  select4: ExampleData;
  select5: ExampleData;
  select6: ExampleData;
  select7: ExampleData;
  select8: ExampleData;
  select9: ExampleData;
} = {
  select1: getExampleData('select1'),
  select2: getExampleData('select2'),
  select3: getExampleData('select3'),
  select4: getExampleData('select4'),
  select5: getExampleData('select5'),
  select6: getExampleData('select6'),
  select7: getExampleData('select7'),
  select8: getExampleData('select8'),
  select9: getExampleData('select9'),
};

/**
 * for each example, doing:
 * - subscribe to the value changes and display it into the`info` div
 */
Object.keys(examples).forEach(k => {
  const name = k as keyof typeof examples;
  const component = examples[name].component;
  const info = examples[name].info;

  !component && logger.error(`${name} not found`);
  !examples[name].info && logger.error(`${name}-info not found`);

  if (component && info) {
    component.addEventListener('odsCurrentChange', async (event: Event) => {
      const evt = event as OdsPaginationCurrentChangeEvent;
      logger.log(`[${name}] odsCurrentChange event`, evt.detail);
      info.innerHTML = `selected value: ${evt.detail.current}`;
    });
  }
});

(window as any).select1Toggle = function (/*evt: Event*/) {
  logger.log('select1Toggle');
  // todo
  // examples.select1.component && (examples.select1.component.opened = !examples.select1.component.opened);
  // evt.stopPropagation()
};

(window as any).select6Clear = function () {
  logger.log('select6Clear');
  examples.select6.component?.clear();
};

(window as any).select5ValidateMyPagination = function () {
  logger.log('select5ValidateMyPagination');
  examples.select5.component?.validate().then(validity => logger.log('select5 validity', validity));
};
