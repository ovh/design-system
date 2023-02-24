// ###
// global script file to include only in dev mode with the www dev server.
// it always has to include './components' and './global.ts'
// ###

import './components';
import './global';
import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsInputValueChangeEventDetail, OdsLogger,
  OdsRangeValidityState
} from '@ovhcloud/ods-core';
import { OsdsRange } from '@ovhcloud/ods-stencil/components/range/src/components/osds-range/osds-range';

const range1: (HTMLElement & OsdsRange) | null = document.getElementById('range-1') as (HTMLElement & OsdsRange) | null;
const range1ErrorValueMissing: HTMLElement | null = document.querySelector('#example-1 .value-missing');
const range1ErrorStepMismatch: HTMLElement | null = document.querySelector('#example-1 .step-mismatch');
const range1ErrorValid: HTMLElement | null = document.querySelector('#example-1 .valid');
const range1ErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-1 .forbidden-value');

const rangeValidMulti: (HTMLElement & OsdsRange) | null = document.getElementById('range-valid-multi') as (HTMLElement & OsdsRange);
const rangeValidMultiErrorValueMissing: HTMLElement | null = document.querySelector('#example-2 .value-missing');
const rangeValidMultiErrorStepMismatch: HTMLElement | null = document.querySelector('#example-2 .step-mismatch');
const rangeValidMultiErrorValid: HTMLElement | null = document.querySelector('#example-2 .valid');
const rangeValidMultiErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-2 .forbidden-value');

const logger = new OdsLogger('global-dev');
logger.log('init');

class myErrorStateControl extends OdsErrorStateControl {

}

(async () => {
  await customElements.whenDefined('osds-range');
})();

interface ErrorMessagesConnexion {
  el: HTMLElement | null,
  error: keyof OdsRangeValidityState;
}

interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
  el: HTMLElement
}

function filterMessages(errorMessagesConnexions: ErrorMessagesConnexion[], formControl: OdsFormControl<OdsRangeValidityState>) {
  const filteredErrorMessagesConnexions = errorMessagesConnexions
    .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
    .map(cnx => {
      cnx.el.style.display = 'none';
      return cnx;
    });

  (async () => {
    const shouldFilter = await Promise
      .all(filteredErrorMessagesConnexions
        .map((cnx) => formControl.hasError(cnx.error)));
    const filtered2 = filteredErrorMessagesConnexions.filter((value, index) => {
      logger.log(value);
      return shouldFilter[ index ]
    });
    filtered2.forEach(cnx => cnx.el.style.display = 'block')
  })();
}

if (range1) {
  const formControl = new OdsFormControl<OdsRangeValidityState>('2');
  range1.formControl = formControl;
  range1.forbiddenValues = [4, { min: 7, max: 20 }]

  range1.errorStateControl = new myErrorStateControl();

  range1.addEventListener('odsValueChange', (event: Event) => {
    const evt = event as CustomEvent<OdsInputValueChangeEventDetail>;
    logger.log("odsValueChange event", evt.detail);


    const errorMessagesConnexions: ErrorMessagesConnexion[] =
      [
        { el: range1ErrorValueMissing, error: 'valueMissing' },
        { el: range1ErrorStepMismatch, error: 'stepMismatch' },
        { el: range1ErrorValid, error: 'invalid' },
        { el: range1ErrorForbiddenValue, error: 'forbiddenValue' }
      ];

    filterMessages(errorMessagesConnexions, formControl);
  })
}


if (rangeValidMulti) {

  const formControl = new OdsFormControl<OdsRangeValidityState>('3');
  rangeValidMulti.formControl = formControl;
  rangeValidMulti.forbiddenValues = [{ min: 50, max: 55 }]

  rangeValidMulti.errorStateControl = new myErrorStateControl();

  rangeValidMulti.addEventListener('odsValueChange', (event: Event) => {
    const evt = event as CustomEvent<OdsInputValueChangeEventDetail>;
    logger.log("odsValueChange event", evt.detail);

    const errorMessagesConnexions: ErrorMessagesConnexion[] =
      [
        { el: rangeValidMultiErrorValueMissing, error: 'valueMissing' },
        { el: rangeValidMultiErrorStepMismatch, error: 'stepMismatch' },
        { el: rangeValidMultiErrorValid, error: 'invalid' },
        { el: rangeValidMultiErrorForbiddenValue, error: 'forbiddenValue' }
      ];

    filterMessages(errorMessagesConnexions, formControl);
  })
}
