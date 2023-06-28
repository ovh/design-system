import {
  OdsErrorStateControl,
  OdsFormControl, OdsInputValidityState,
  OdsInputValueChangeEventDetail,
  OdsLogger
} from '@ovhcloud/ods-core';
import { Components as ComponentsInput } from '@ovhcloud/ods-stencil-input';

interface WindowWithInputMethods extends Window {
  inputClear?: () => Promise<void>;
  inputReset?: () => Promise<void>;
}

interface ErrorMessagesConnexion {
  el: HTMLElement | null,
  error: keyof OdsInputValidityState;
}

interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
  el: HTMLElement
}

export const InputPlay = async () => {
  const logger = new OdsLogger('InputPlay');
  const input = document.getElementById('input') as (HTMLElement & ComponentsInput.OsdsInput) | null;

  const getHTMLElement = (selector: string): HTMLElement | null => document.querySelector(selector);

  const inputErrorForbiddenValue = getHTMLElement('#example-1 .forbidden-value');
  const inputErrorValueMissing = getHTMLElement('#example-1 .value-missing');
  const inputErrorStepMismatch = getHTMLElement('#example-1 .step-mismatch');
  const inputErrorValid = getHTMLElement('#example-1 .valid');

  logger.log('input', input);

  (window as WindowWithInputMethods).inputClear = async () => {
    logger.log('inputClear');
    input?.clear();
  };

  (window as WindowWithInputMethods).inputReset = async () => {
    logger.log('inputReset');
    input?.reset();
  };

  class MyErrorStateControl extends OdsErrorStateControl {}

  await customElements.whenDefined('osds-input');

  if(input) {
    const inputFormControl = new OdsFormControl<OdsInputValidityState>('2');
    input.formControl = inputFormControl;
    input.forbiddenValues = [4, { min: 7, max: 20 }];

    const inputErrorStateControl = new MyErrorStateControl();
    input.errorStateControl = inputErrorStateControl;

    input.addEventListener('odsValueChange', (event: Event) => {
      const evt = event as CustomEvent<OdsInputValueChangeEventDetail>;
      logger.log("odsValueChange event", evt.detail);

      const errorMessagesConnexions: ErrorMessagesConnexion[] = [
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
          logger.log(value);
          return shouldFilter[ index ]
        });
        filtered2.forEach(cnx => cnx.el.style.display = 'block');
      })();
    });
  }
};
