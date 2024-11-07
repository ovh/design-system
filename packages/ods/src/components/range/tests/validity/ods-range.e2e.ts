import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsRange } from '../../src';

describe('ods-range validity', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, additionalProperties?: Record<string, unknown>): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-range');

    additionalProperties && Object.entries(additionalProperties).forEach(([key, value]) => {
      el.setProperty(key, value);
    });
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    describe('with no value attribute defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-range></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required as range has a value set natively', async() => {
        await setup('<ods-range is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('with empty string value', () => {
      it('should return validity false if not required because of type error', async() => {
        await setup('<ods-range value=""></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-range value="" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with empty string default value', () => {
      it('should return validity false if not required because of type error', async() => {
        await setup('<ods-range default-value=""></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-range default-value="" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with no value but default-value defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-range default-value="40"></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-range default-value="40" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required with empty string default value', async() => {
        await setup('<ods-range default-value="" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should return validity false if not valid type', async() => {
        await setup('<ods-range default-value="abcd"></ods-range>');
        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with defined value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-range value="40"></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-range value="40" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if not valid type', async() => {
        await setup('<ods-range value="abcd"></ods-range>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-range></ods-range>', { value: ['abcd', 'zxy'] });
        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });
  });

  describe('methods', () => {
    describe('checkValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-range></ods-range>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-range value="40" is-required></ods-range>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-range default-value="40" is-required></ods-range>');
        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('clear', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-range value="40" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should update the validity state accordingly, given default-value', async() => {
        await setup('<ods-range default-value="40" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('getValidationMessage', () => {
      it('should return empty element validation message if valid', async() => {
        await setup('<ods-range></ods-range>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-range value="40" is-required></ods-range>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-range default-value="40" is-required></ods-range>');
        expect(await el.callMethod('getValidationMessage')).toBe('');
      });

      it('should return the element validation message if type not valid', async() => {
        await setup('<ods-range value="abcd" is-required></ods-range>');
        expect(await el.callMethod('getValidationMessage')).toBe('Type not supported');

        await setup('<ods-range is-required></ods-range>', { value: ['abcd', 'zxy'] });
        expect(await el.callMethod('getValidationMessage')).toBe('Type not supported');
      });

      it('should return the element validation message if missing value', async() => {
        await setup('<ods-range is-required></ods-range>');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('getValidationMessage')).toBe('Missing value');
      });
    });

    describe('getValidity', () => {
      // el.callMethod('getValidity') does not return the ValidityState instance, we have to use an evaluate
      // and return a single prop, otherwise it'll return an empty object
      async function getValidityProp(prop: keyof ValidityState): Promise<boolean | null> {
        return await page.evaluate(async(validityProp): Promise<boolean | null> => {
          const validityState = await (document.querySelector('ods-range') as unknown as OdsRange)?.getValidity();

          if (validityState) {
            return validityState[validityProp];
          }
          return null;
        }, prop);
      }

      it('should return valid validity state if valid', async() => {
        await setup('<ods-range></ods-range>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-range value="40" is-required></ods-range>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-range default-value="40" is-required></ods-range>');
        expect(await getValidityProp('valid')).toBe(true);
      });

      it('should return invalid validity state if not valid', async() => {
        await setup('<ods-range is-required></ods-range>');
        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('customError')).toBe(true);

        await setup('<ods-range is-required value="abcd"></ods-range>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('customError')).toBe(true);
      });

      it('should return invalid validity state if not valid array', async() => {
        await setup('<ods-range is-required></ods-range>', { value: ['abcd', 'zxy'] });
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('customError')).toBe(true);
      });
    });

    describe('reportValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-range></ods-range>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-range value="40" is-required></ods-range>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-range default-value="40" is-required></ods-range>');
        expect(await el.callMethod('reportValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-range is-required></ods-range>');
        await el.callMethod('clear');
        await page.waitForChanges();
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-range value="abcd" is-required></ods-range>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-range default-value="abcd" is-required></ods-range>');
        expect(await el.callMethod('reportValidity')).toBe(false);
      });
    });

    describe('reset', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-range default-value="40" value="50" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should update the validity state accordingly, given no value', async() => {
        await setup('<ods-range default-value="40" is-required></ods-range>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('willValidate', () => {
      it('should return true if element is submittable', async() => {
        await setup('<ods-range></ods-range>');
        expect(await el.callMethod('willValidate')).toBe(true);
      });

      it('should return false if element is not submittable', async() => {
        await setup('<ods-range is-disabled></ods-range>');
        expect(await el.callMethod('willValidate')).toBe(false);
      });
    });
  });

  describe('in a form', () => {
    it('should not submit the form on submit before any changes if range is invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required></ods-range></form>');

      await el.callMethod('clear');
      await page.waitForChanges();
      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await el.callMethod('checkValidity')).toBe(false);
      expect(formValidity).toBe(false);
    });

    it('should submit the form if range is valid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required value="40"></ods-range></form>');

      await el.click();
      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await el.callMethod('checkValidity')).toBe(true);
      expect(formValidity).toBe(true);
    });
  });

  describe('watchers', () => {
    describe('is-required', () => {
      it('should update validity when is-required change', async() => {
        await setup('<ods-range is-required></ods-range>');
        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.removeAttribute('is-required');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.setAttribute('is-required', 'true');
        await page.waitForChanges();
        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });
  });
});
