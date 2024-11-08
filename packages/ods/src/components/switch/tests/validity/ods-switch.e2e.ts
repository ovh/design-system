import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { type OdsSwitchItem } from '../../src';

describe('ods-switch validity', () => {
  let el: E2EElement;
  let item: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('ods-switch');
    item = (await page.findAll('ods-switch-item'))[0];
  }

  beforeEach(jest.clearAllMocks);

  describe('initialization', () => {
    describe('with no value attribute defined', () => {
      it('should return validity true if not required', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with empty string value', () => {
      it('should return validity true if not required', async() => {
        await setup(`<ods-switch name="validity-test" value="">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity false if required', async() => {
        await setup(`<ods-switch is-required name="validity-test" value="">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('with defined value', () => {
      it('should return validity true if not required', async() => {
        await setup(`<ods-switch name="validity-test" value="1">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(true);
      });

      it('should return validity true if required and checked', async() => {
        await setup(`<ods-switch is-required name="validity-test" value="1">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);

        expect(await item.callMethod('checkValidity')).toBe(true);
      });
    });
  });

  describe('methods', () => {
    describe('checkValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(true);

        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(false);

        await setup(`<ods-switch is-required name="validity-test" value="">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('clear', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup(`<ods-switch is-required name="validity-test" value="1">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await item.callMethod('checkValidity')).toBe(false);
      });
    });

    describe('getValidationMessage', () => {
      it('should return empty element validation message if valid', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('getValidationMessage')).toBe('');

        await setup(`<ods-switch is-required name="validity-test" value="">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('getValidationMessage')).toBe('');
      });

      it('should return the element validation message if not valid', async() => {
        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('getValidationMessage')).not.toBe('');

        await setup(`<ods-switch is-required name="validity-test" value="value">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('getValidationMessage')).not.toBe('');
      });
    });

    describe('getValidity', () => {
      // el.callMethod('getValidity') does not return the ValidityState instance, we have to use an evaluate
      // and return a single prop, otherwise it'll return an empty object
      async function getValidityProp(prop: keyof ValidityState): Promise<boolean | null> {
        return await page.evaluate(async(validityProp): Promise<boolean | null> => {
          const validityState = await (document.querySelector('ods-switch-item') as unknown as OdsSwitchItem)?.getValidity();

          if (validityState) {
            return validityState[validityProp];
          }
          return null;
        }, prop);
      }

      it('should return valid validity state if valid', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await getValidityProp('valid')).toBe(true);

        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await getValidityProp('valid')).toBe(true);
      });

      it('should return invalid validity state if not valid', async() => {
        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);

        await setup(`<ods-switch is-required name="validity-test" value="">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await getValidityProp('valid')).toBe(false);
        expect(await getValidityProp('valueMissing')).toBe(true);
      });
    });

    describe('reportValidity', () => {
      it('should return true if internals validity is true', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('reportValidity')).toBe(true);

        await setup(`<ods-switch is-required name="validity-test" value="1">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('reportValidity')).toBe(true);
      });

      it('should return false if internals validity is false', async() => {
        await setup(`<ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('reportValidity')).toBe(false);

        await setup(`<ods-switch is-required name="validity-test" value="">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('reportValidity')).toBe(false);
      });
    });

    describe('reset', () => {
      it('should update the validity state accordingly, given value', async() => {
        await setup(`<ods-switch is-required name="validity-test" value="1">
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('checkValidity')).toBe(true);

        await el.callMethod('clear');
        await page.waitForChanges();

        expect(await item.callMethod('checkValidity')).toBe(false);

        await el.callMethod('reset');
        await page.waitForChanges();

        expect(await item.callMethod('checkValidity')).toBe(true);
      });
    });

    describe('willValidate', () => {
      it('should return true if element is submittable', async() => {
        await setup(`<ods-switch name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('willValidate')).toBe(true);
      });

      it('should return false if element is not submittable', async() => {
        await setup(`<ods-switch is-disabled name="validity-test" value="value">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>`);
        expect(await item.callMethod('willValidate')).toBe(false);
      });
    });
  });

  describe('in a form', () => {
    it('should not submit the form on submit before any changes if switch is invalid', async() => {
      await setup(`<form method="get" onsubmit="return false">
        <ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        </form>`);

      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await item.callMethod('checkValidity')).toBe(false);
      expect(formValidity).toBe(false);
    });

    it('should submit the form if switch is valid', async() => {
      await setup(`<form method="get" onsubmit="return false">
        <ods-switch is-required name="validity-test">
          <ods-switch-item value="1">label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
        </form>`);

      await item.click();
      const formValidity = await page.evaluate(() => {
        const form = document.querySelector<HTMLFormElement>('form');
        form?.requestSubmit();
        return form?.reportValidity();
      });

      expect(await item.callMethod('checkValidity')).toBe(true);
      expect(formValidity).toBe(true);
    });
  });
});
