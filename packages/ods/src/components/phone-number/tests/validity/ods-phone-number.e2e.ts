import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsPhoneNumber } from '../../src';

describe('ods-phone-number validity', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-phone-number');
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    describe('with no value attribute defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-phone-number></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-phone-number is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with empty string value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-phone-number value=""></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-phone-number value="" is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with no value but default-value defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr"></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('with defined value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-phone-number value="+33612345678" iso-code="fr"></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });
  });

  describe('methods', () => {
    describe('checkValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-phone-number></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-phone-number is-required></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-phone-number value="" is-required></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-phone-number default-value="" is-required></ods-phone-number>');
        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('clear', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should update the validity state accordingly, given default-value', async() => {
        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('getValidationMessage', () => {
      it('should return empty element validation message if valid', async() => {
        await setup('<ods-phone-number></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).toBe('');
      });

      it('should return the element validation message if not valid', async() => {
        await setup('<ods-phone-number is-required></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-phone-number value="" is-required></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-phone-number default-value="" is-required></ods-phone-number>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');
      });
    });

    describe('getValidity', () => {
      // el.callMethod('getValidity') does not return the ValidityState instance, we have to use an evaluate
      // and return a single prop, otherwise it'll return an empty object
      async function getValidityProp(prop: keyof ValidityState): Promise<boolean | null> {
        return await page.evaluate(async(validityProp): Promise<boolean | null> => {
          const validityState = await (document.querySelector('ods-phone-number') as unknown as OdsPhoneNumber)?.getValidity();

          if (validityState) {
            return validityState[validityProp];
          }
          return null;
        }, prop);
      }

      it('should return valid validity state if valid', async() => {
        await setup('<ods-phone-number></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(true);
      });

      it('should return invalid validity state if not valid', async() => {
        await setup('<ods-phone-number is-required></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-phone-number value="" is-required></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-phone-number default-value="" is-required></ods-phone-number>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);
      });
    });

    describe('reportValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-phone-number></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-phone-number value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-phone-number default-value="+33612345678" iso-code="fr" is-required></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-phone-number is-required></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-phone-number value="" is-required></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-phone-number default-value="" is-required></ods-phone-number>');
        expect(await el.callMethod('reportValidity')).toBe(false);
      });
    });

    describe('reset', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-phone-number default-value="0123456789" value="0987654321" is-required iso-code="fr"></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();
        await new Promise((resolve) => setTimeout(resolve, 200));

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should update the validity state accordingly, given no value', async() => {
        await setup('<ods-phone-number default-value="0123456789" is-required iso-code="fr"></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await new Promise((resolve) => setTimeout(resolve, 200));
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('willValidate', () => {
      it('should return true if element is submittable', async() => {
        await setup('<ods-phone-number></ods-phone-number>');
        expect(await el.callMethod('willValidate')).toBe(true);
      });

      it('should return false if element is not submittable', async() => {
        await setup('<ods-phone-number is-disabled></ods-phone-number>');
        expect(await el.callMethod('willValidate')).toBe(false);

        await setup('<ods-phone-number is-readonly></ods-phone-number>');
        expect(await el.callMethod('willValidate')).toBe(false);
      });
    });
  });

  describe('in a form', () => {
    it('should not submit the form on submit before any changes if phone-number is invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-phone-number is-required></ods-phone-number></form>');
      const odsInvalidSpy = await page.spyOnEvent('odsInvalid');

      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });
      await page.waitForChanges();

      expect(await el.callMethod('checkValidity')).toBe(false);
      expect(formValidity).toBe(false);
      expect(odsInvalidSpy).toHaveReceivedEventTimes(1);
    });

    it('should submit the form if phone-number is valid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-phone-number is-required iso-code="fr"></ods-phone-number></form>');

      await el.type('0987654321', { delay: 200 });
      await page.waitForChanges();
      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });
      await page.waitForChanges();

      expect(await el.callMethod('checkValidity')).toBe(true);
      expect(formValidity).toBe(true);
    });
  });

  describe('watchers', () => {
    describe('is-required', () => {
      it('should update validity when is-required change', async() => {
        await setup('<ods-phone-number></ods-phone-number>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.setAttribute('is-required', 'true');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.removeAttribute('is-required');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });
  });
});
