import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsTextAreaValidityState,
  OdsTextAreaValueChangeEventDetail,
} from '@ovhcloud/ods-core';

import { Components as ComponentsTextArea } from '@ovhcloud/ods-stencil-textarea';

export const TextAreaPlay = async () => {
  const textarea: (HTMLElement & ComponentsTextArea.OsdsTextArea) | null = document.getElementById('textarea') as (HTMLElement & ComponentsTextArea.OsdsTextArea);
  const textareaErrorForbiddenValue: HTMLElement | null = document.querySelector('#example-1 .forbidden-value');
  const textareaErrorValueMissing: HTMLElement | null = document.querySelector('#example-1 .value-missing');
  const textareaErrorStepMismatch: HTMLElement | null = document.querySelector('#example-1 .step-mismatch');
  const textareaErrorValid: HTMLElement | null = document.querySelector('#example-1 .valid');

  console.log('textarea', textarea);

  (window as any).textareaClear = async function () {
    console.log('textareaClear');
    if (textarea) {
      await textarea.clear();
    }
  };

  (window as any).textareaReset = async function () {
    console.log('textareaReset');
    if (textarea) {
      await textarea.reset();
    }
  };

  class MyErrorStateControl extends OdsErrorStateControl {
  }

  (async () => {
    await customElements.whenDefined('osds-textarea');
  })();

  if(textarea) {
    const textareaFormControl = new OdsFormControl<OdsTextAreaValidityState>('2');
    textarea.formControl = textareaFormControl;
    textarea.forbiddenValues = [4, { min: 7, max: 20 }]

    const textareaErrorStateControl = new MyErrorStateControl();
    textarea.errorStateControl = textareaErrorStateControl;

    textarea.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as CustomEvent<OdsTextAreaValueChangeEventDetail>;
      console.log("odsValueChange event", evt.detail);

      interface ErrorMessagesConnexion {
        el: HTMLElement | null,
        error: keyof OdsTextAreaValidityState;
      }

      interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
        el: HTMLElement
      }

      const errorMessagesConnexions: ErrorMessagesConnexion[] =
        [
          { el: textareaErrorValueMissing, error: 'valueMissing' },
          { el: textareaErrorStepMismatch, error: 'stepMismatch' },
          { el: textareaErrorValid, error: 'invalid' },
          { el: textareaErrorForbiddenValue, error: 'forbiddenValue' }
        ];

      const filteredErrorMessagesConnexions = errorMessagesConnexions
        .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
        .map(cnx => {
          cnx.el.style.display = 'none';
          return cnx;
        });

      (async () => {
        const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map((cnx) => textareaFormControl.hasError(cnx.error)));
        const filtered2 = filteredErrorMessagesConnexions.filter((value, index) => {
          console.log(value);
          return shouldFilter[ index ]
        });
        filtered2.forEach(cnx => cnx.el.style.display = 'block')
      })();
    })
  }
};
