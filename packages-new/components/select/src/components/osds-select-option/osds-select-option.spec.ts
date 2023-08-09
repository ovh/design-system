import type { SpecPage } from '@stencil/core/testing';
import type { OdsSelectOptionAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { OdsCreateDefaultValidityState, OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsMockPropertyDescriptor, OdsMockNativeMethod, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsSelectOption } from './osds-select-option';

const logger = new OdsLogger('osds-select-option-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select-option', () => {
  logger.log('init');
  const baseAttribute = { value: '' };
  let page: SpecPage;
  let instance: OsdsSelectOption;
  let slotPlaceholder: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSelectOptionAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectOptionAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectOption],
      html: `<osds-select-option ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-select-option>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root?.shadowRoot?.querySelector('slot');
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

    // function getAttributeContextOptions<Name extends keyof OdsSelectOptionAttributes = keyof OdsSelectOptionAttributes>({
    //                                                                                                         name,
    //                                                                                                         list,
    //                                                                                                         defaultValue
    //                                                                                                       }: odsGetUnitTestAttributeContextOptions<OdsSelectOptionAttributes, Name>) {
    //   return odsGetUnitTestAttributeBaseOptions<OdsSelectOptionAttributes, Name, OsdsSelectOption>({
    //     name,
    //     list,
    //     defaultValue,
    //     instance: () => instance,
    //     root: () => page.root,
    //     wait: () => page.waitForChanges(),
    //     setup: (value) => {
    //       const attributes: Partial<OdsSelectOptionAttributes> = {};
    //       attributes[ name ] = value;
    //       return setup({ attributes });
    //     },
    //   })
    // }
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('value', () => {
      // odsUnitTestAttribute<OdsSelectOptionAttribute, 'value'>({
      //   ...getAttributeContextOptions({
      //     name: 'value',
      //     list: [3, 4],
      //     defaultValue: DEFAULT_ATTRIBUTE.value,
      //   })
      // });
      odsUnitTestAttribute<OdsSelectOptionAttribute, 'value'>({
        name: 'value',
        defaultValue: DEFAULT_ATTRIBUTE.value,
        newValue: 3,
        value: 4,
        setup: (value) => setup({ attributes: { ['value']: value } }),
        ...config,
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
