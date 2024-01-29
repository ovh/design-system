/* eslint-disable */
import type { OdsInputValueChangeEvent } from './components/osds-input/interfaces/events';
import type { OsdsInput } from './components/osds-input/osds-input';
import './globals';
import { OdsLogger } from '@ovhcloud/ods-common-core';

export default async function(): Promise<void> {
  const odsInput1: (HTMLElement & OsdsInput) | null = document.querySelector('osds-input#odsInput-1');
  const odsInput2: (HTMLElement & OsdsInput) | null = document.querySelector('osds-input#odsInput-2');
  const input3: (HTMLElement & OsdsInput) | null = document.getElementById('input-3') as (HTMLElement & OsdsInput);


  const logger = new OdsLogger('global-dev');

  odsInput1?.addEventListener('odsValueChange', (event) => {
    console.log('🟡 odsValueChange event', event);

    odsInput1.getValidity().then((validity) => {
      console.log('🟡 getValidity odsInput-1 from Event', validity);
    });
  });

  async function getValidityForOdsInput1(): Promise<void> {
    await customElements.whenDefined('osds-input');
    odsInput1?.getValidity().then((validity) => {
      console.log('🟡 getValidity odsInput-1', validity);
    });
  }

  async function getValidityForOdsInput2(): Promise<void> {
    await customElements.whenDefined('osds-input');
    odsInput2?.getValidity().then((validity) => {
      console.log('🔴 getValidity odsInput-2', validity);
    });
  }

  await getValidityForOdsInput1();
  await getValidityForOdsInput2();

  (window as any).input3Clear = async function(): Promise<void> {
    logger.log('input3Clear');
    if (input3) {
      await input3.clear();
    }
  };

  (window as any).input3Reset = async function(): Promise<void> {
    logger.log('input3Reset');
    if (input3) {
      await input3.reset();
    }
  };

  (async(): Promise<void> => {
    await customElements.whenDefined('osds-input');
  })();

  if (input3) {
    input3.forbiddenValues = [4];

    input3.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as OdsInputValueChangeEvent;
      logger.log('odsValueChange event', evt.detail);
    });
  }
}

