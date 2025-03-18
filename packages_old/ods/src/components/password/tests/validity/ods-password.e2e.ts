import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsPassword } from '../../src';

describe('ods-password validity', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-password');
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    describe('with no value attribute defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-password></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-password is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with empty string value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-password value=""></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-password value="" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with no value but default-value defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-password default-value="default"></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-password default-value="default" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('with defined value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-password value="value"></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-password value="value" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });
  });

  describe('methods', () => {
    describe('checkValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-password></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-password value="value" is-required></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-password default-value="default" is-required></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-password is-required></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-password value="" is-required></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-password default-value="" is-required></ods-password>');
        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('clear', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-password value="default" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should update the validity state accordingly, given default-value', async() => {
        await setup('<ods-password default-value="default" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('getValidationMessage', () => {
      it('should return empty element validation message if valid', async() => {
        await setup('<ods-password></ods-password>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-password value="value" is-required></ods-password>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-password default-value="default" is-required></ods-password>');
        expect(await el.callMethod('getValidationMessage')).toBe('');
      });

      it('should return the element validation message if not valid', async() => {
        await setup('<ods-password is-required></ods-password>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-password value="" is-required></ods-password>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-password default-value="" is-required></ods-password>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');
      });
    });

    describe('getValidity', () => {
      // el.callMethod('getValidity') does not return the ValidityState instance, we have to use an evaluate
      // and return a single prop, otherwise it'll return an empty object
      async function getValidityProp(prop: keyof ValidityState): Promise<boolean | null> {
        return await page.evaluate(async(validityProp): Promise<boolean | null> => {
          const validityState = await (document.querySelector('ods-password') as unknown as OdsPassword)?.getValidity();

          if (validityState) {
            return validityState[validityProp];
          }
          return null;
        }, prop);
      }

      it('should return valid validity state if valid', async() => {
        await setup('<ods-password></ods-password>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-password value="value" is-required></ods-password>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-password default-value="default" is-required></ods-password>');
        expect(await getValidityProp('valid')).toBe(true);
      });

      it('should return invalid validity state if not valid', async() => {
        await setup('<ods-password is-required></ods-password>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-password value="" is-required></ods-password>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-password default-value="" is-required></ods-password>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);
      });
    });

    describe('reportValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-password></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-password value="value" is-required></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-password default-value="default" is-required></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-password is-required></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-password value="" is-required></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-password default-value="" is-required></ods-password>');
        expect(await el.callMethod('reportValidity')).toBe(false);
      });
    });

    describe('reset', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-password default-value="default" value="value" is-required></ods-password>');

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
        await setup('<ods-password default-value="default" is-required></ods-password>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();
        await new Promise((resolve) => setTimeout(resolve, 200));

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('willValidate', () => {
      it('should return true if element is submittable', async() => {
        await setup('<ods-password></ods-password>');
        expect(await el.callMethod('willValidate')).toBe(true);
      });

      it('should return false if element is not submittable', async() => {
        await setup('<ods-password is-disabled></ods-password>');
        expect(await el.callMethod('willValidate')).toBe(false);

        await setup('<ods-password is-readonly></ods-password>');
        expect(await el.callMethod('willValidate')).toBe(false);
      });
    });
  });

  describe('in a form', () => {
    it('should not submit the form on submit before any changes if password is invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-password is-required></ods-password></form>');
      const odsInvalidSpy = await page.spyOnEvent('odsInvalid');

      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await el.callMethod('checkValidity')).toBe(false);
      expect(formValidity).toBe(false);
      expect(odsInvalidSpy).toHaveReceivedEventTimes(1);
    });

    it('should submit the form if password is valid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-password is-required value="dummy"></ods-password></form>');

      await el.type('abcd');
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
        await setup('<ods-password></ods-password>');

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

  describe('event', () => {
    describe('odsChange', () => {
      it('should have a valid validity change after odsChange', async() => {
        let isValidityChecked: boolean | undefined = undefined;
        await setup('<ods-password is-required></ods-password>');
        await page.exposeFunction('onOdsChange', async() => {
          isValidityChecked = await el.callMethod('checkValidity');
        });
        await page.evaluate(() => {
          const password = document.querySelector('ods-password');
          // @ts-ignore function is exposed internally in the page
          password?.addEventListener('odsChange', (e) => onOdsChange(e));
        });

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.type('a');
        await page.waitForChanges();

        expect(isValidityChecked).toBe(true);
      });
    });
  });
});
