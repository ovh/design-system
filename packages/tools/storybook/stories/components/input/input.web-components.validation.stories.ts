import {
  OdsErrorStateControl,
  OdsFormControl, OdsInputValidityState,
  OdsInputValueChangeEventDetail,
} from '@ovhcloud/ods-core';
import { Components as ComponentsInput } from '@ovhcloud/ods-stencil-input';

export const InputPlay = async () => {
  const input: (HTMLElement & ComponentsInput.OsdsInput) | null = document.getElementById('input') as (HTMLElement & ComponentsInput.OsdsInput);
  const inputErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-1 .forbidden-value');
  const inputErrorValueMissing: HTMLElement | null = document.querySelector('#example-1 .value-missing');
  const inputErrorStepMismatch: HTMLElement | null = document.querySelector('#example-1 .step-mismatch');
  const inputErrorValid: HTMLElement | null = document.querySelector('#example-1 .valid');

  console.log('input', input);

  (window as any).inputClear = async function () {
    console.log('inputClear');
    if (input) {
      await input.clear();
    }
  };

  (window as any).inputReset = async function () {
    console.log('inputReset');
    if (input) {
      await input.reset();
    }
  };

  class MyErrorStateControl extends OdsErrorStateControl {
  }

  (async () => {
    await customElements.whenDefined('osds-input');
  })();

  if(input) {
    const inputFormControl = new OdsFormControl<OdsInputValidityState>('2');
    input.formControl = inputFormControl;
    input.forbiddenValues = [4, { min: 7, max: 20 }]

    const inputErrorStateControl = new MyErrorStateControl();
    input.errorStateControl = inputErrorStateControl;

    input.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as CustomEvent<OdsInputValueChangeEventDetail>;
      console.log("odsValueChange event", evt.detail);

      interface ErrorMessagesConnexion {
        el: HTMLElement | null,
        error: keyof OdsInputValidityState;
      }

      interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
        el: HTMLElement
      }

      const errorMessagesConnexions: ErrorMessagesConnexion[] =
        [
          { el: inputErrorValueMissing, error: 'valueMissing' },
          { el: inputErrorStepMismatch, error: 'stepMismatch' },
          { el: inputErrorValid, error: 'invalid' },
          { el: inputErrorForbiddenValue, error: 'forbiddenValue' }
        ];

      const filteredErrorMessagesConnexions = errorMessagesConnexions
        .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
        .map(cnx => {
          cnx.el.style.display = 'none';
          return cnx;
        });

      (async () => {
        const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map((cnx) => inputFormControl.hasError(cnx.error)));
        const filtered2 = filteredErrorMessagesConnexions.filter((value, index) => {
          console.log(value);
          return shouldFilter[ index ]
        });
        filtered2.forEach(cnx => cnx.el.style.display = 'block')
      })();
    })
  }
};
