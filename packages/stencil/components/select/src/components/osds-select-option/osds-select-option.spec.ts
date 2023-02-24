import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsSelectOption } from './osds-select-option';
import {
  OdsComponentAttributes2StringAttributes,
  OdsCreateDefaultValidityState,
  OdsSelectOptionAttributes,
  odsSelectOptionDefaultAttributes,
  OdsLogger,
} from '@ovhcloud/ods-core';
import {
  odsGetUnitTestAttributeBaseOptions,
  odsGetUnitTestAttributeContextOptions,
  OdsSelectOptionCreateAttributes, OdsMockNativeMethod, OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-select-option-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select-option', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsSelectOption;
  let slotPlaceholder: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSelectOptionAttributes>, html?: string }) {
    const minimalAttributes: OdsSelectOptionAttributes = OdsSelectOptionCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSelectOptionAttributes>(minimalAttributes, odsSelectOptionDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectOption],
      html: `<osds-select-option ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-select-option>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root.shadowRoot.querySelector('slot');
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async () => {
      await setup({ attributes: {} });
      expect(slotPlaceholder).toBeTruthy();
    });
  });

  describe('attributes', () => {

    function getAttributeContextOptions<Name extends keyof OdsSelectOptionAttributes = keyof OdsSelectOptionAttributes>({
                                                                                                            name,
                                                                                                            list,
                                                                                                            defaultValue
                                                                                                          }: odsGetUnitTestAttributeContextOptions<OdsSelectOptionAttributes, Name>) {
      return odsGetUnitTestAttributeBaseOptions<OdsSelectOptionAttributes, Name, OsdsSelectOption>({
        name,
        list,
        defaultValue,
        instance: () => instance,
        root: () => page.root,
        wait: () => page.waitForChanges(),
        setup: (value) => {
          const attributes: Partial<OdsSelectOptionAttributes> = {};
          attributes[ name ] = value;
          return setup({ attributes });
        },
      })
    }

    describe('value', () => {
      odsUnitTestAttribute<OdsSelectOptionAttributes, 'value'>({
        ...getAttributeContextOptions({
          name: 'value',
          list: [3, 4],
          defaultValue: odsSelectOptionDefaultAttributes.value,
        })
      });
    });

  });

  describe('events', () => {
    it('odsSelectOptionValueSelected', async () => {
      await setup({ attributes: { } });
      expect(instance.odsSelectOptionClick).toBeTruthy();
    });
  });
});
