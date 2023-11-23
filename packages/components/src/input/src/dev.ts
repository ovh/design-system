import type { OdsInputValueChangeEvent } from './components/osds-input/interfaces/events';
import type { OsdsInput } from './components/osds-input/osds-input';
import type { OdsCommonFieldValidityState } from '@ovhcloud/ods-common-core';
import './globals';
import { OdsErrorStateControl, OdsFormControl, OdsLogger } from '@ovhcloud/ods-common-core';

export default async function(): Promise<void> {
  const odsInput1: (HTMLElement & OsdsInput) | null = document.querySelector('osds-input#odsInput-1');
  const odsInput2: (HTMLElement & OsdsInput) | null = document.querySelector('osds-input#odsInput-2');
  const input3: (HTMLElement & OsdsInput) | null = document.getElementById('input-3') as (HTMLElement & OsdsInput);
  const input3ErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-3 .forbidden-value');
  const input3ErrorValueMissing: HTMLElement | null = document.querySelector('#example-3 .value-missing');
  const input3ErrorStepMismatch: HTMLElement | null = document.querySelector('#example-3 .step-mismatch');
  const input3ErrorValid: HTMLElement | null = document.querySelector('#example-3 .valid');

  const logger = new OdsLogger('global-dev');
  logger.log('input-3', input3);

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

  class myErrorStateControl extends OdsErrorStateControl {

  }

  (async(): Promise<void> => {
    await customElements.whenDefined('osds-input');
  })();

  if (input3) {
    const input3FormControl = new OdsFormControl<OdsCommonFieldValidityState>('2');
    input3.formControl = input3FormControl;
    input3.forbiddenValues = [4, { max: 20, min: 7 }];

    const input3ErrorStateControl = new myErrorStateControl();
    input3.errorStateControl = input3ErrorStateControl;

    input3.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as OdsInputValueChangeEvent;
      logger.log('odsValueChange event', evt.detail);

      interface ErrorMessagesConnexion {
        el: HTMLElement | null,
        error: keyof OdsCommonFieldValidityState;
      }

      interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
        el: HTMLElement
      }

      const errorMessagesConnexions: ErrorMessagesConnexion[]
        = [
          { el: input3ErrorValueMissing, error: 'valueMissing' },
          { el: input3ErrorStepMismatch, error: 'stepMismatch' },
          { el: input3ErrorValid, error: 'invalid' },
          { el: input3ErrorForbiddenValue, error: 'forbiddenValue' },
        ];

      const filteredErrorMessagesConnexions = errorMessagesConnexions
        .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
        .map((cnx) => {
          cnx.el.style.display = 'none';
          return cnx;
        });

      (async(): Promise<void> => {
        const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map((cnx) => input3FormControl.hasError(cnx.error)));
        const filtered2 = filteredErrorMessagesConnexions.filter((value, index) => {
          logger.log(value);
          return shouldFilter[ index ];
        });
        logger.info(
          '[fe] filtered2',
          filtered2);
        filtered2.forEach((cnx) => cnx.el.style.display = 'block');
      })();
    });
  }
}

