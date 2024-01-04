import type { OdsFormAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { OdsUnitTestAttributeType, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsForm } from './osds-form';

describe('spec:osds-form', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsForm;
  let form: HTMLFormElement | undefined;

  async function setup({ attributes= {} }: { attributes?: Partial<OdsFormAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsForm],
      html: `<osds-form ${odsStringAttributes2Str(stringAttributes)}>
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
    </osds-form>`,
    });

    root = page.root;
    instance = page.rootInstance;
    form = root?.shadowRoot?.querySelector('form') ?? undefined;
    form && (form.submit = jest.fn());
    form && (form.reset = jest.fn());

  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsForm => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('initialValues', () => {
      odsUnitTestAttribute<OdsFormAttribute, 'initialValues'>({
        defaultValue: DEFAULT_ATTRIBUTE.initialValues,
        name: 'initialValues',
        newValue: '{ osdsInput: "", firstName: "" }',
        setup: (value) => setup({ attributes: { ['initialValues']: value } }),
        value: '{}',
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE],
      });
    });
  });

  describe('methods', () => {
    describe('submit', () => {
      it('should call submit', async() => {
        await setup({});
        await instance.submit();
        expect(form?.submit).toHaveBeenCalled();
      });

      it('should not call submit because of invalid form', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        await instance.setFieldError('osdsInput', true);
        await instance.submit();
        expect(form?.submit).not.toHaveBeenCalled();
      });
    });

    describe('reset', () => {
      it('should call reset', async() => {
        await setup({});
        await instance.reset();
        expect(form?.reset).toHaveBeenCalled();
      });

      it('should call reset after change field', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        await instance.setFieldValue('osdsInput', 'value');
        await instance.reset();
        expect(form?.reset).toHaveBeenCalled();
        expect(await instance.getFormValues()).toEqual({ firstName: '', osdsInput: '' });
      });

      it('should call reset with initialValues', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: 'value' } } });
        await instance.setFieldValue('osdsInput', 'newValue');
        await instance.reset();
        expect(form?.reset).toHaveBeenCalled();
        expect(await instance.getFormValues()).toEqual({ firstName: '', osdsInput: 'value' });
      });
    });

    describe('set / get field value', () => {
      it('should not get value because of an unknown name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFieldValue('unknown')).toBe(undefined);
      });

      it('should get value with name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFieldValue('osdsInput')).toBe('');
      });

      it('should get value with name & initial values', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: 'osdsInput' } } });
        expect(await instance.getFieldValue('osdsInput')).toBe('osdsInput');
      });

      it('should set value with name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: 'osdsInput' } } });
        await instance.setFieldValue('osdsInput', 'newValue');
        expect(await instance.getFieldValue('osdsInput')).toBe('newValue');
      });
    });

    describe('set / get field error', () => {
      it('should not get error because of an unknown name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFieldError('unknown')).toBe(undefined);
      });

      it('should get error with name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFieldError('osdsInput')).toBe(false);
      });

      it('should set error with name', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: 'osdsInput' } } });
        await instance.setFieldError('osdsInput', true);
        expect(await instance.getFieldError('osdsInput')).toBe(true);
      });
    });

    describe('isValidForm', () => {
      it('should get validity of the form: true', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.isFormValid()).toBe(true);
      });

      it('should get validity of the form: false', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        await instance.setFieldError('osdsInput', true);
        expect(await instance.isFormValid()).toBe(false);
      });
    });

    describe('getFormErrors', () => {
      it('should get all errors', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFormErrors()).toEqual({ firstName: false, osdsInput: false });
      });

      it('should get validity of the form: false', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        await instance.setFieldError('osdsInput', true);
        expect(await instance.getFormErrors()).toEqual({ firstName: false, osdsInput: true });
      });
    });

    describe('getFormValues', () => {
      it('should get all errors', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        expect(await instance.getFormValues()).toEqual({ firstName: '', osdsInput: '' });
      });

      it('should get validity of the form: false', async() => {
        await setup({ attributes: { initialValues: { firstName: '', osdsInput: '' } } });
        await instance.setFieldValue('osdsInput', 'newValue');
        expect(await instance.getFormValues()).toEqual({ firstName: '', osdsInput: 'newValue' });
      });
    });
  });
});
