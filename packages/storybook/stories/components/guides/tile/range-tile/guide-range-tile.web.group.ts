import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';
import {Components as ComponentsRadio} from '@ovhcloud/ods-components/radio/loader';
import {Components as ComponentsInput} from '@ovhcloud/ods-components/input/loader';
import {Components as ComponentsRange} from '@ovhcloud/ods-components/range/loader';
import {Components as ComponentsTile} from '@ovhcloud/ods-components/tile/loader';
import {
  OdsErrorStateControl,
  OdsFormControl,
  OdsValidityState,
} from '@ovhcloud/ods-common-core';
import {OdsRangeValueChangeEventDetail} from '@ovhcloud/ods-components/range';
import {OdsInputValueChangeEventDetail} from '@ovhcloud/ods-components/input';

export const RadioGroupTemplate = (args: any) => html`
  <style>
    ${unsafeHTML(args.style)}
  </style>

  <osds-radio-group id="radio-group"></osds-radio-group>
`;

export const RadioGroupPlay = async() => {
  // const { } = await import('@ovhcloud/ods-core');

  interface PriceItem {
    main: number,
    currency: string,
    vat: string
  }

  interface RadioItem {
    value: number,
    min: number,
    max: number,
    step: number,
    price: PriceItem
  }

  const items: RadioItem[] = [
    {
      value: 42,
      min: 40,
      max: 58,
      step: 2,
      price: {
        main: 20,
        currency: '¤',
        vat: 'ex.VAT / month',
      },
    },
    {
      value: 20,
      min: 20,
      max: 39,
      step: 2,
      price: {
        main: 5,
        currency: '¤',
        vat: 'ex.VAT / month',
      },
    },
    {
      value: 2,
      min: 1,
      max: 8,
      step: 2,
      price: {
        main: 15,
        currency: '¤',
        vat: 'ex.VAT / month',
      },
    },
  ];

  (async() => {
    await customElements.whenDefined('osds-radio-group');
    await customElements.whenDefined('osds-radio');
    await customElements.whenDefined('osds-input');
  })();

  function setProperty(elements: HTMLElement[], attribute: string, value: any) {
    elements.forEach((element) => {
      element.setAttribute(attribute, value);
    });
  }

  const radioGroup: (HTMLElement & ComponentsRadio.OsdsRadioGroup) | null = document.getElementById('radio-group') as HTMLElement & ComponentsRadio.OsdsRadioGroup;

  function getElements(index: number) {
    const radio: (HTMLElement & ComponentsRadio.OsdsRadio) | null = document.getElementById('radio' + index) as HTMLElement & ComponentsRadio.OsdsRadio;
    const input: (HTMLElement & ComponentsInput.OsdsInput) | null = document.getElementById('input' + index) as HTMLElement & ComponentsInput.OsdsInput;
    const range: (HTMLElement & ComponentsRange.OsdsRange) | null = document.getElementById('range' + index) as HTMLElement & ComponentsRange.OsdsRange;
    const tile: (HTMLElement & ComponentsTile.OsdsTile) | null = document.getElementById('tile' + index) as HTMLElement & ComponentsTile.OsdsTile;
    const inputErrorValueMissing: HTMLElement | null = document.querySelector('#error-msg-value-missing' + index);
    const inputErrorStepMismatch: HTMLElement | null = document.querySelector('#error-msg-step-mismatch' + index);
    const inputErrorValid: HTMLElement | null = document.querySelector('#error-msg-valid' + index);

    return {radio, input, range, tile, inputErrorValueMissing, inputErrorStepMismatch, inputErrorValid};
  }

  items.forEach((item: RadioItem, index: number) => {
    radioGroup.insertAdjacentHTML('beforeend', html_radioTemplate(item, index));

    const {
      radio,
      input,
      range,
      tile,
      inputErrorValueMissing,
      inputErrorStepMismatch,
      inputErrorValid,
    } = getElements(index);

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
        error: keyof OdsValidityState;
      }

      interface FoundErrorMessagesConnexion extends ErrorMessagesConnexion {
        el: HTMLElement;
      }

      const inputFormControl = new OdsFormControl(`${index}`);
      input.formControl = inputFormControl;

      class myErrorStateControl extends OdsErrorStateControl {
      }

      const inputErrorStateControl = new myErrorStateControl();
      input.errorStateControl = inputErrorStateControl;

      const errorMessagesConnexions: ErrorMessagesConnexion[] = [
        {el: inputErrorValueMissing, error: 'valueMissing'},
        {el: inputErrorStepMismatch, error: 'stepMismatch'},
        {el: inputErrorValid, error: 'invalid'},
      ];

      const filteredErrorMessagesConnexions = errorMessagesConnexions
        .filter((cnx): cnx is FoundErrorMessagesConnexion => cnx.el !== null)
        .map((cnx) => {
          cnx.el.style.display = 'none';
          return cnx;
        });

      (async() => {
        const shouldFilter = await Promise.all(filteredErrorMessagesConnexions.map((cnx) => inputFormControl.hasError(cnx.error)));
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

        filteredErrors.forEach((cnx) => (cnx.el.style.display = 'block'));
      })();

    });
  });

  function html_radioTemplate(item: RadioItem, index: number) {
    return `
      <div class="radio-container">
          <osds-radio id="radio${index}" value="${item.value}">
            <osds-tile id="tile${index}" class="range-tile__tile" color="primary" hoverable>
              <osds-range id="range${index}" color="primary" flex min="${item.min}" max="${item.max}"  step="${item.step}">
                <osds-text slot="start-bound" level="subtitle" size="sm" color="primary">${item.min}tb</osds-text>
                <osds-text slot="end-bound" level="subtitle" size="sm" color="primary">${item.max}tb</osds-text>
              </osds-range>

              <osds-input id="input${index}" class="range-tile__input" type="number" color="primary" min="${item.min}" max="${item.max}" step="${item.step}"></osds-input>

              <span slot='end'>
                <osds-content-addon>
                  <span slot="main">
                    <osds-text level="subtitle" color="primary">${item.price.main}${item.price.currency}</osds-text>
                  </span>
                  <span slot="bottom" style="text-align: right">
                    <osds-text level="caption" size="xs" color="primary">${item.price.vat}</osds-text>
                  </span>
                </osds-content-addon>
              </span>

            </osds-tile>
          </osds-radio>

          <span>
            <osds-text
              id="error-msg-value-missing${index}"
              class="error-msg"
              level="caption" size="md" color="error">Value required please</osds-text>
            <osds-text
              id="error-msg-step-mismatch${index}"
              class="error-msg"
              level="caption" size="md" color="error">Please insert a value by step 2, starting from 1</osds-text>
            <osds-text
              id="error-msg-valid${index}"
              class="error-msg"
              level="caption" size="md" color="error">Not valid</osds-text>
          </span>
        </div>
      `;
  }
};

export const radioGroupArgs = {};
