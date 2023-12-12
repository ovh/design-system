import type { OdsCheckboxAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import {
  OdsMockNativeMethod,
  OdsUnitTestAttributeType,
  odsComponentAttributes2StringAttributes,
  odsGetSimulatedPromise,
  odsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsCheckboxController } from './core/ods-checkbox-controller';
import { OsdsCheckbox } from './osds-checkbox';


describe('spec:osds-checkbox', () => {
  let page: SpecPage;
  let htmlCheckbox: (OsdsCheckbox & HTMLElement) | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let instance: OsdsCheckbox;
  let shadowRoot: ShadowRoot | null | undefined;
  let controller: OdsCheckboxController;
  /** base html template (avoid boilerplate) */
  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : '<input type="checkbox">'}
    `;

  async function setup({ attributes = {}, html = '' }: { attributes?: Partial<OdsCheckboxAttribute>, html?: string }) {
    const baseAttribute = { ariaLabel: '', checked: false, disabled: false, hasFocus: false, updating: false, value: '' };
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCheckboxAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'focus', jest.fn());

    page = await newSpecPage({
      components: [OsdsCheckbox],
      html: `<osds-checkbox ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-checkbox>`,
    });

    instance = page.rootInstance;

    shadowRoot = page.root?.shadowRoot;
    htmlCheckbox = shadowRoot?.querySelector('input[type=checkbox]');

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it.skip('should call afterInit', async() => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(controller.afterInit).toHaveBeenCalledWith();
    expect(controller.afterInit).toHaveBeenCalledTimes(1);
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
  });

  it('should have a native html checkbox inside', async() => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(htmlCheckbox).toBeTruthy();
  });

  describe('attributes', () => {

    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    // todo: make work with properties that can't be processed as attribute
    xdescribe('afterSave', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'afterSave'>({
        name: 'afterSave',
        defaultValue: DEFAULT_ATTRIBUTE.afterSave,
        value: () => odsGetSimulatedPromise(false, () => undefined),
        newValue: () => odsGetSimulatedPromise(true, () => undefined),
        setup: (afterSave) => setup({ attributes: { afterSave } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED],
      });
    });

    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'ariaLabel'>({
        name: 'ariaLabel',
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabel,
        value: 'oles',
        newValue: 'ipsum',
        setup: (ariaLabel) => setup({ attributes: { ariaLabel } }),
        ...config,
      });
    });

    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'ariaLabelledby'>({
        name: 'ariaLabelledby',
        defaultValue: DEFAULT_ATTRIBUTE.ariaLabelledby,
        value: 'oles',
        newValue: 'ipsum',
        setup: (ariaLabelledby) => setup({ attributes: { ariaLabelledby } }),
        ...config,
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY],
      });
    });

    // todo: make work with properties that can't be processed as attribute
    xdescribe('beforeSave', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'beforeSave'>({
        name: 'beforeSave',
        defaultValue: DEFAULT_ATTRIBUTE.beforeSave,
        value: () => odsGetSimulatedPromise(false, () => undefined),
        newValue: () => odsGetSimulatedPromise(true, () => undefined),
        setup: (value) => setup({ attributes: { beforeSave: value } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED],
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        value: false,
        newValue: true,
        setup: (checked) => setup({ attributes: { checked } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        value: false,
        newValue: true,
        setup: (disabled) => setup({ attributes: { disabled } }),
        ...config,
      });
    });

    describe('hasFocus', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'hasFocus'>({
        name: 'hasFocus',
        defaultValue: DEFAULT_ATTRIBUTE.hasFocus,
        value: false,
        newValue: true,
        setup: (hasFocus) => setup({ attributes: { hasFocus } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('label', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'label'>({
        name: 'label',
        defaultValue: DEFAULT_ATTRIBUTE.label,
        value: 'oles',
        newValue: 'ipsum',
        setup: (label) => setup({ attributes: { label } }),
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'name'>({
        name: 'name',
        defaultValue: DEFAULT_ATTRIBUTE.name,
        value: 'oles',
        newValue: 'ipsum',
        setup: (name) => setup({ attributes: { name } }),
        ...config,
      });
    });

    // todo: make work with properties that can't be processed as attribute
    xdescribe('save', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'save'>({
        name: 'save',
        value: () => odsGetSimulatedPromise(false, () => undefined),
        newValue: () => odsGetSimulatedPromise(true, () => undefined),
        setup: (save) => setup({ attributes: { save } }),
        defaultValue: DEFAULT_ATTRIBUTE.save,
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED],
      });
    });

    describe('updating', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'updating'>({
        name: 'updating',
        defaultValue: DEFAULT_ATTRIBUTE.updating,
        value: false,
        newValue: true,
        setup: (updating) => setup({ attributes: { updating } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsCheckboxAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        value: 'oles',
        newValue: 'ipsum',
        setup: (value) => setup({ attributes: { value } }),
        ...config,
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });
  });

  /**
   * @see OdsCheckboxEvents
   */
  describe('events', () => {
    it('odsCheckedChange', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsCheckedChange).toBeTruthy();
    });

    it('odsUpdatingChange', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsUpdatingChange).toBeTruthy();
    });

    it('odsBlur', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsFocus).toBeTruthy();
    });
  });

  describe('methods', () => {
    it('should call setTabindex function and tabindex should be set to 1', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      const spy = jest.spyOn(instance.commonFieldMethodController, 'setTabindex');
      await page.waitForChanges();
      await instance.setTabindex(1);
      await page.waitForChanges();
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should call setFocus function', async() => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      expect(htmlCheckbox).toBeTruthy();
      const spy = jest.spyOn(instance.commonFieldMethodController, 'setFocus');
      await instance.setFocus();
      await page.waitForChanges();
      expect(spy).toHaveBeenCalledWith();
    });
  });

});
