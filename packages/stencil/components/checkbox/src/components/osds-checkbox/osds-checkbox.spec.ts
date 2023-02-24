// jest.mock('@ovhcloud/ods-core/src/components/checkbox/ods-checkbox-controller'); // keep jest.mock before any import
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsCheckbox } from './osds-checkbox';
import {
  OdsCheckboxAttributes,
  OdsCheckboxController,
  odsCheckboxDefaultAttributes,
  OdsComponentAttributes2StringAttributes,
  OdsLogger
} from '@ovhcloud/ods-core';
import {
  odsCheckboxBaseAttributes,
  OdsCreateAttributes,
  odsGetSimulatedPromise,
  OdsInitializeLoggerSpy,
  OdsLoggerSpyReferences,
  OdsMockNativeMethod,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType
} from '@ovhcloud/ods-testing';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

import { OdsClearLoggerSpy } from '@ovhcloud/ods-testing/src/jest/ods-clear-logger-spy';


describe('spec:osds-checkbox', () => {
  let page: SpecPage;
  let htmlCheckbox: (OsdsCheckbox & HTMLElement) | null | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let instance: OsdsCheckbox;
  let shadowRoot: ShadowRoot | null | undefined;
  let loggerSpyReferences: OdsLoggerSpyReferences;
  let controller: OdsCheckboxController;
  const logger = new OdsLogger('spec:osds-checkbox');
  /** base html template (avoid boilerplate) */
  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : `<input type="checkbox">`}
    `;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsCheckboxAttributes>, html?: string }) {
    const minimalAttributes: OdsCheckboxAttributes = OdsCreateAttributes(attributes, odsCheckboxBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCheckboxAttributes>(minimalAttributes, odsCheckboxDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "focus", jest.fn());

    page = await newSpecPage({
      components: [OsdsCheckbox],
      html: `<osds-checkbox ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-checkbox>`,
    });

    instance = page.rootInstance;

    shadowRoot = page.root?.shadowRoot;
    htmlCheckbox = shadowRoot?.querySelector('input[type=checkbox]');

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');

    // controller = (OdsCheckboxController as unknown as jest.SpyInstance<OdsCheckboxController, unknown[]>).mock.instances[ 0 ];
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({ loggerMocked, spiedClass: OsdsCheckbox });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  fit('should render', async () => {
    logger.log('should render');
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  it('should call afterInit', async () => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(controller.afterInit).toHaveBeenCalledWith();
    expect(controller.afterInit).toHaveBeenCalledTimes(1);
  });

  describe('contents', () => {
    it('should have a main slot', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(mainSlot).toBeTruthy();
    });
  });

  it('should have a native html checkbox inside', async () => {
    await setup({ attributes: {}, html: baseHtml({}) });
    expect(htmlCheckbox).toBeTruthy();
  });

  /**
   * @see OdsCheckboxAttributes
   */
  describe('attributes', () => {

    const config = {
      page: () => page,
      instance: () => instance,
      setup: async (options) => {
        await setup({ attributes: options.attributes, html: baseHtml({}) })
      }
    };

    // todo: make work with properties that can't be processed as attribute
    xdescribe('afterSave', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'afterSave'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'afterSave'>({
          name: 'afterSave',
          list: [
            () => odsGetSimulatedPromise(false, () => undefined),
            () => odsGetSimulatedPromise(true, () => undefined)
          ],
          defaultValue: odsCheckboxDefaultAttributes.afterSave,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED]
      });
    });

    describe('ariaLabel', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'ariaLabel'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'ariaLabel'>({
          name: 'ariaLabel',
          list: ['oles', 'ipsum'],
          defaultValue: odsCheckboxDefaultAttributes.ariaLabel,
          ...config
        })
      });
    });

    describe('ariaLabelledby', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'ariaLabelledby'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'ariaLabelledby'>({
          name: 'ariaLabelledby',
          list: ['oles', 'ipsum'],
          defaultValue: odsCheckboxDefaultAttributes.ariaLabelledby,
          ...config
        }),
        exclude: [OdsUnitTestAttributeType.REFLECTED, OdsUnitTestAttributeType.MUTABLE, OdsUnitTestAttributeType.PROPERTY]
      });
    });

    // todo: make work with properties that can't be processed as attribute
    xdescribe('beforeSave', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'beforeSave'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'beforeSave'>({
          name: 'beforeSave',
          list: [
            () => odsGetSimulatedPromise(false, () => undefined),
            () => odsGetSimulatedPromise(true, () => undefined)
          ],
          defaultValue: odsCheckboxDefaultAttributes.beforeSave,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED]
      });
    });

    describe('checked', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'checked'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'checked'>({
          name: 'checked',
          list: [false, true],
          defaultValue: odsCheckboxDefaultAttributes.checked,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('disabled', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'disabled'>({
          name: 'disabled',
          list: [true, false],
          defaultValue: odsCheckboxDefaultAttributes.disabled,
          ...config
        })
      });
    });

    describe('hasFocus', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'hasFocus'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'hasFocus'>({
          name: 'hasFocus',
          list: [true, false],
          defaultValue: odsCheckboxDefaultAttributes.hasFocus,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });

    describe('label', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'label'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'label'>({
          name: 'label',
          list: ['oles', 'ipsum'],
          defaultValue: odsCheckboxDefaultAttributes.label,
          ...config
        })
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'name'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'name'>({
          name: 'name',
          list: ['oles', 'ipsum'],
          defaultValue: odsCheckboxDefaultAttributes.name,
          ...config
        })
      });
    });

    // todo: make work with properties that can't be processed as attribute
    xdescribe('save', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'save'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'save'>({
          name: 'save',
          list: [
            () => odsGetSimulatedPromise(false, () => undefined),
            () => odsGetSimulatedPromise(true, () => undefined)
          ],
          defaultValue: odsCheckboxDefaultAttributes.save,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
        exclude: [OdsUnitTestAttributeType.REFLECTED]
      });
    });

    describe('updating', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'updating'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'updating'>({
          name: 'updating',
          list: [false, true],
          defaultValue: odsCheckboxDefaultAttributes.updating,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsCheckboxAttributes, 'value'>({
        ...getAttributeContextOptions<OdsCheckboxAttributes, OsdsCheckbox, 'value'>({
          name: 'value',
          list: ['checkbox-a', 'checkbox-b'],
          defaultValue: odsCheckboxDefaultAttributes.value,
          ...config
        }),
        include: [OdsUnitTestAttributeType.MUTABLE]
      });
    });


  });

  /**
   * @see OdsCheckboxEvents
   */
  describe('events', () => {
    it('odsCheckedChange', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsCheckedChange).toBeTruthy();
    });

    it('odsUpdatingChange', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsUpdatingChange).toBeTruthy();
    });

    it('odsBlur', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsBlur).toBeTruthy();
    });

    it('odsFocus', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      expect(instance.odsFocus).toBeTruthy();
    });
  });

  /**
   * @see OdsCheckboxMethods
   */
  describe('methods', () => {
    it('should call setButtonTabindex function and buttonTabindex should be set to 1', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      await instance.setTabindex(1);
      await page.waitForChanges();
      expect(controller.setTabindex).toHaveBeenCalledWith(1);
    });

    it('should call setFocus function', async () => {
      await setup({ attributes: {}, html: baseHtml({}) });
      await page.waitForChanges();
      expect(htmlCheckbox).toBeTruthy();
      await instance.setFocus();
      await page.waitForChanges();
      expect(controller.setFocus).toHaveBeenCalledWith();
    });
  });

});
