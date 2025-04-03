import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsTextarea } from '../../src';

describe('ods-textarea validity', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('ods-textarea');
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    describe('with no value attribute defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-textarea></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with empty string value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-textarea value=""></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup('<ods-textarea value="" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with no value but default-value defined', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-textarea default-value="default"></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('with defined value', () => {
      it('should return validity true if not required', async() => {
        await setup('<ods-textarea value="value"></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required', async() => {
        await setup('<ods-textarea value="value" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);
      });
    });
  });

  describe('methods', () => {
    describe('checkValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-textarea></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-textarea value="value" is-required></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(true);

        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-textarea value="" is-required></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(false);

        await setup('<ods-textarea default-value="" is-required></ods-textarea>');
        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('clear', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-textarea value="default" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });

      it('should update the validity state accordingly, given default-value', async() => {
        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('getValidationMessage', () => {
      it('should return empty element validation message if valid', async() => {
        await setup('<ods-textarea></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-textarea value="value" is-required></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).toBe('');

        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).toBe('');
      });

      it('should return the element validation message if not valid', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-textarea value="" is-required></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');

        await setup('<ods-textarea default-value="" is-required></ods-textarea>');
        expect(await el.callMethod('getValidationMessage')).not.toBe('');
      });
    });

    describe('getValidity', () => {
      // el.callMethod('getValidity') does not return the ValidityState instance, we have to use an evaluate
      // and return a single prop, otherwise it'll return an empty object
      async function getValidityProp(prop: keyof ValidityState): Promise<boolean | null> {
        return await page.evaluate(async(validityProp): Promise<boolean | null> => {
          const validityState = await (document.querySelector('ods-textarea') as unknown as OdsTextarea)?.getValidity();

          if (validityState) {
            return validityState[validityProp];
          }
          return null;
        }, prop);
      }

      it('should return valid validity state if valid', async() => {
        await setup('<ods-textarea></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-textarea value="value" is-required></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(true);

        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(true);
      });

      it('should return invalid validity state if not valid', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-textarea value="" is-required></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup('<ods-textarea default-value="" is-required></ods-textarea>');
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);
      });
    });

    describe('reportValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup('<ods-textarea></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-textarea value="value" is-required></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(true);

        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-textarea value="" is-required></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(false);

        await setup('<ods-textarea default-value="" is-required></ods-textarea>');
        expect(await el.callMethod('reportValidity')).toBe(false);
      });
    });

    describe('reset', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup('<ods-textarea default-value="default" value="default" is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);
      });

      it('should update the validity state accordingly, given no value', async() => {
        await setup('<ods-textarea default-value="default" is-required></ods-textarea>');

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
        await setup('<ods-textarea></ods-textarea>');

        expect(await el.callMethod('willValidate')).toBe(true);
      });

      it('should return false if element is not submittable', async() => {
        await setup('<ods-textarea is-disabled></ods-textarea>');

        expect(await el.callMethod('willValidate')).toBe(false);

        await setup('<ods-textarea is-readonly></ods-textarea>');

        expect(await el.callMethod('willValidate')).toBe(false);
      });
    });
  });

  describe('in a form', () => {
    it('should not submit the form on submit before any changes if textarea is invalid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-textarea is-required></ods-textarea></form>');

      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await el.callMethod('checkValidity')).toBe(false);
      expect(formValidity).toBe(false);
    });

    it('should submit the form if textarea is valid', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-textarea is-required value="dummy"></ods-textarea></form>');

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
    describe('isInvalid', () => {
      it('should triggers an odsInvalid event when value change', async() => {
        await setup('<ods-textarea is-required value="e"></ods-textarea>');
        const odsInvalidSpy = await page.spyOnEvent('odsInvalid');

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(odsInvalidSpy).toHaveReceivedEventTimes(1);
        expect(odsInvalidSpy).toHaveReceivedEventDetail({ isInvalid: true });

        await el.type('a', { delay: 100 });
        await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
        await page.waitForChanges();

        expect(odsInvalidSpy).toHaveReceivedEventTimes(2);
        expect(odsInvalidSpy).toHaveReceivedEventDetail({ isInvalid: false });
      });
    });

    describe('is-required', () => {
      it('should update validity when is-required change', async() => {
        await setup('<ods-textarea is-required></ods-textarea>');

        expect(await el.callMethod('checkValidity')).toBe(false);

        await el.removeAttribute('is-required');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(true);

        await el.setAttribute('is-required', 'true');
        await page.waitForChanges();

        expect(await el.callMethod('checkValidity')).toBe(false);
      });
    });
  });
});
