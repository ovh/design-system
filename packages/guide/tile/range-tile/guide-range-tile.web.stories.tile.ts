import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { Components as ComponentsRadio } from '@ovhcloud/ods-stencil-radio/loader';
import { Components as ComponentsInput } from '@ovhcloud/ods-stencil-input/loader';
import { Components as ComponentsRange } from '@ovhcloud/ods-stencil-range/loader';
import { Components as ComponentsTile } from '@ovhcloud/ods-component-tile/loader';
import {
  OdsErrorStateControl,
  OdsFormControl, OdsInputValidityState,
  OdsInputValueChangeEventDetail,
  OdsRangeValueChangeEventDetail
} from '@ovhcloud/ods-core';

export const TileTemplate = (args: any) => {

  return html`
    <style>
      ${unsafeHTML(args.style)}
    </style>

    ${unsafeHTML(args.template)}
  `;
};

export const TilePlay = async () => {
  (async () => {
    await customElements.whenDefined('osds-radio');
    await customElements.whenDefined('osds-input');
  })();

  function setProperty(elements: HTMLElement[], attribute: string, value: any) {
    elements.forEach(element => {
      element.setAttribute(attribute, value);
    });
  }

  const radio: (HTMLElement & ComponentsRadio.OsdsRadio) | null = document.getElementById('radio') as HTMLElement & ComponentsRadio.OsdsRadio;
  const input: (HTMLElement & ComponentsInput.OsdsInput) | null = document.getElementById('input') as HTMLElement & ComponentsInput.OsdsInput;
  const range: (HTMLElement & ComponentsRange.OsdsRange) | null = document.getElementById('range') as HTMLElement & ComponentsRange.OsdsRange;
  const tile: (HTMLElement & ComponentsTile.OsdsTile) | null = document.getElementById('tile') as HTMLElement & ComponentsTile.OsdsTile;
  const inputErrorValueMissing: HTMLElement | null = document.querySelector('#error-msg-value-missing');
  const inputErrorStepMismatch: HTMLElement | null = document.querySelector('#error-msg-step-mismatch');
  const inputErrorValid: HTMLElement | null = document.querySelector('#error-msg-valid');

  const tileDefaultColor = tile.color;

  setProperty([input, range], 'value', Number(radio.value));

  range.addEventListener('odsValueChange', (event) => {
    const evt = event as CustomEvent<OdsRangeValueChangeEventDetail>;
    setProperty([input, radio], 'value', Number(evt.detail.value));
  });

  input.addEventListener('odsValueChange', (event) => {
    const evt = event as CustomEvent<OdsInputValueChangeEventDetail>;

    interface ErrorMessagesConnexion {
      el: HTMLElement | null;
      error: keyof OdsInputValidityState;
    }

    interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
      el: HTMLElement;
    }

    const inputFormControl = new OdsFormControl('2');
    input.formControl = inputFormControl;

    class myErrorStateControl extends OdsErrorStateControl {
    }

    const inputErrorStateControl = new myErrorStateControl();
    input.errorStateControl = inputErrorStateControl;

    const errorMessagesConnexions: ErrorMessagesConnexion[] = [
      { el: inputErrorValueMissing, error: 'valueMissing' },
      { el: inputErrorStepMismatch, error: 'stepMismatch' },
      { el: inputErrorValid, error: 'invalid' },
    ];

    const filteredErrorMessagesConnexions = errorMessagesConnexions
      .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
      .map(cnx => {
        cnx.el.style.display = 'none';
        return cnx;
      });

    (async () => {
      const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map(cnx => inputFormControl.hasError(cnx.error)));
      const filteredErrors = filteredErrorMessagesConnexions.filter((_value, index) => {
        return shouldFilter[ index ];
      });
      if (!filteredErrors.length) {
        setProperty([radio, range], 'value', Number(evt.detail.value));
        setProperty([tile], 'color', tileDefaultColor);
        input.removeAttribute('error');
      } else {
        setProperty([input], 'error', true);
        setProperty([tile], 'color', 'error');
      }

      filteredErrors.forEach(cnx => (cnx.el.style.display = 'block'));
    })();
  });
};

export const tileArgs = {
  template: `
  <div class="radio-container">
    <osds-radio id="radio" value="5">
        <osds-tile id="tile" class="range-tile__tile" color="primary" hoverable>

          <osds-range id="range" color="primary" flex min="1" max="58" step="1">
            <osds-text slot="start-bound" level="subtitle" size="sm" color="primary">1tb</osds-text>
            <osds-text slot="end-bound" level="subtitle" size="sm" color="primary">58tb</osds-text>
          </osds-range>

          <osds-input id="input" class="range-tile__input" type="number" color="primary" min="1" max="58" step="2"></osds-input>

          <span slot='end'>
            <osds-content-addon>
              <span slot="main">
                <osds-text level="subtitle" color="primary">XXXX,XX ¤</osds-text>
              </span>
              <span slot="bottom" style="text-align: right" class="bottom">
                <osds-text level="caption" size="xs" color="primary">ex.VAT / month</osds-text>
              </span>
            </osds-content-addon>
          </span>

        </osds-tile>
    </osds-radio>

    <span>

      <osds-text
        id="error-msg-value-missing"
        class="error-msg"
        level="caption" size="md" color="error">Value required please</osds-text>
      <osds-text
        id="error-msg-step-mismatch"
        class="error-msg"
        level="caption" size="md" color="error">Please insert a value by step 2, starting from 1</osds-text>
      <osds-text
        id="error-msg-valid"
        class="error-msg"
        level="caption" size="md" color="error">Not valid</osds-text>
    </span>
  </div>
  `
}
