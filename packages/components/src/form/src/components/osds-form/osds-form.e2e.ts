import type { OdsFormAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-form', () => {
  let page: E2EPage;
  let el: E2EElement;
  let buttonReset: E2EElement;
  let buttonSubmit: E2EElement;
  let osdsInput: E2EElement;

  afterEach(() => {
    jest.clearAllMocks();
  })

  async function setup({ attributes= {} }: { attributes?: Partial<OdsFormAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-form ${odsStringAttributes2Str(stringAttributes)}>
      <osds-form-field inline>
        <div slot="label">
          <osds-text level="heading" color="primary">Description</osds-text>
        </div>
        <div slot="visual-hint"><osds-text>150/200</osds-text></div>
        <osds-input inline name="osdsInput" type="text"></osds-input>
        <div slot="helper">
          <osds-text>Write a few sentences about you</osds-text>
        </div>
      </osds-form-field>

      <osds-input name="firstName" inline type="text"></osds-input>

      <osds-button type="reset" inline>Reset</osds-button>
      <osds-button type="submit" inline>Submit</osds-button>
    </osds-form>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-form');
    buttonReset = await page.find('osds-button[type="reset"]');
    buttonSubmit = await page.find('osds-button[type="submit"]');
    osdsInput = await page.find('osds-input[name="osdsInput"]');
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
  });

  describe('Event', () => {
    it('should reset form field', async() => {
      await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
      const resetSpy = await page.spyOnEvent('odsOnReset');
      await osdsInput.type('some test');
      await buttonReset.click();
      expect(await el.callMethod('getFormValues')).toEqual({ firstName: '', osdsInput: '' });
      expect(resetSpy).toHaveReceivedEventTimes(1);
    });

    it('should submit form field', async() => {
      await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
      await osdsInput.type('some test');
      const submitSpy = await page.spyOnEvent('odsOnSubmit');
      await buttonSubmit.click();
      expect(await el.callMethod('getFormValues')).toEqual({ firstName: '', osdsInput: 'some test' });
      expect(submitSpy).toHaveReceivedEventTimes(1);
    });

    it('should not submit because of invalid form', async() => {
      await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
      const submitSpy = await page.spyOnEvent('odsOnSubmit');
      await el.callMethod('setFieldError', 'osdsInput', true);
      await buttonSubmit.click();
      expect(await el.callMethod('getFormValues')).toEqual({ firstName: '', osdsInput: '' });
      expect(submitSpy).toHaveReceivedEventTimes(0);
    });
  });
});
