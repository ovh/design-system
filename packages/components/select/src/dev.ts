import type { OdsSelectValueChangeEvent } from './components/osds-select/interfaces/events';
import type { OsdsSelect } from './components/osds-select/osds-select';
import { OdsInitializedEvent, OdsInitializedEventName, OdsLogger } from '@ovhcloud/ods-common-core';

export default function() {
  const logger = new OdsLogger('global-dev');
  logger.log('init');

  /* wait for the select to be initialized as web component */
  (async () => {
    await customElements.whenDefined('osds-select');
    await customElements.whenDefined('osds-select-group');
    await customElements.whenDefined('osds-select-option');
  })();

  document.addEventListener(OdsInitializedEventName, (event) => {
    const evt = event as OdsInitializedEvent;
    const instance = evt.detail.instance;
    instance.logging(true);
    logger.log('odsInitialized received');
  })

  type ExampleData = {
    component: OsdsSelect & HTMLElement | null;
    info: HTMLElement | null;
  };

  /**
   * create an object reference for a given integration example
   * @param id
   */
  function getExampleData(id: string): ExampleData {
    return {
      component: document.getElementById(id) as (OsdsSelect & HTMLElement | null),
      info: document.getElementById(`${id}-info`)
    }
  }

  /**
   * examples references with HTML elements references
   */
  const examples: {
    select1: ExampleData,
    select2: ExampleData,
    select3: ExampleData,
    select4: ExampleData,
    select5: ExampleData,
    select6: ExampleData,
    select7: ExampleData,
    select8: ExampleData,
    select9: ExampleData,
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
    const component = examples[ name ].component;
    const info = examples[ name ].info;

    !component && logger.error(`${name} not found`);
    !examples[ name ].info && logger.error(`${name}-info not found`);

    if (component && info) {
      component.addEventListener('odsValueChange', async (event: Event) => {
        const evt = event as OdsSelectValueChangeEvent;
        logger.log(`[${name}] odsValueChange event`, evt.detail);
        info.innerHTML = `selected value: ${evt.detail.value}`
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

  (window as any).select5ValidateMySelect = function () {
    logger.log('select5ValidateMySelect');
    examples.select5.component?.validate()
      .then(validity => logger.log('select5 validity', validity));
  };

  (window as any).select5Clear = function () {
    logger.log('select5Clear');
    examples.select5.component?.clear();
  };

  (window as any).select5Reset = function () {
    logger.log('select5Reset');
    examples.select5.component?.reset();
  };

  (window as any).select9Reset = function () {
    logger.log('select9Reset');
    examples.select9.component?.reset();
  };
}
