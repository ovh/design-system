import { OdsErrorStateControl, OdsFormControl, OdsLogger, OdsValidityState } from '@ovhcloud/ods-common-core';
import { Components as ComponentsRange } from '@ovhcloud/ods-components/range/loader';
import { OdsRangeValueChangeEventDetail } from '@ovhcloud/ods-components/range';

const logger = new OdsLogger('validation.stories');

export const RangePlay = async () => {
  const range: (HTMLElement & ComponentsRange.OsdsRange) | null = document.getElementById('range') as (HTMLElement & ComponentsRange.OsdsRange);
  const rangeErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-1 .forbidden-value');
  const rangeErrorValueMissing: HTMLElement | null = document.querySelector('#example-1 .value-missing');
  const rangeErrorStepMismatch: HTMLElement | null = document.querySelector('#example-1 .step-mismatch');
  const rangeErrorValid: HTMLElement | null = document.querySelector('#example-1 .valid');

  logger.log('range', range);

  (window as any).rangeClear = async function () {
    logger.log('rangeClear');
    if (range) {
      await range.clear();
    }
  };

  (window as any).rangeReset = async function () {
    logger.log('rangeReset');
    if (range) {
      await range.reset();
    }
  };

  class myErrorStateControl extends OdsErrorStateControl {
  }

  (async () => {
    await customElements.whenDefined('osds-range');
  })();

  if(range) {
    const rangeFormControl = new OdsFormControl<OdsValidityState>('2');
    range.formControl = rangeFormControl;
    range.forbiddenValues = [4, { min: 7, max: 20 }]

    const rangeErrorStateControl = new myErrorStateControl();
    range.errorStateControl = rangeErrorStateControl;

    range.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as CustomEvent<OdsRangeValueChangeEventDetail>;
      logger.log("odsValueChange event", evt.detail);

      interface ErrorMessagesConnexion {
        el: HTMLElement | null,
        error: keyof OdsValidityState;
      }

      interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
        el: HTMLElement
      }

      const errorMessagesConnexions: ErrorMessagesConnexion[] =
        [
          { el: rangeErrorValueMissing, error: 'valueMissing' },
          { el: rangeErrorStepMismatch, error: 'stepMismatch' },
          { el: rangeErrorValid, error: 'invalid' },
          { el: rangeErrorForbiddenValue, error: 'forbiddenValue' }
        ];

      const filteredErrorMessagesConnexions = errorMessagesConnexions
        .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
        .map(cnx => {
          cnx.el.style.display = 'none';
          return cnx;
        });

      (async () => {
        const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map((cnx) => rangeFormControl.hasError(cnx.error)));
        const filtered2 = filteredErrorMessagesConnexions.filter((value, index) => {
          logger.log(value);
          return shouldFilter[ index ]
        });
        filtered2.forEach(cnx => cnx.el.style.display = 'block')
      })();
    })
  }
};
