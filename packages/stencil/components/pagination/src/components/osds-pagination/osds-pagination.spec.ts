import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPagination } from './osds-pagination';
import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsLogger } from '@ovhcloud/ods-core';
import {
  odsGetUnitTestAttributeBaseOptions,
  odsGetUnitTestAttributeContextOptions,
  odsPaginationBaseAttributes,
  OdsMockNativeMethod,
  OdsMockPropertyDescriptor,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
  OdsUnitTestAttributeType,
} from '@ovhcloud/ods-testing';
import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

const logger = new OdsLogger('osds-pagination-spec');

describe('spec:osds-pagination', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsPagination;
  let slotPlaceholder: HTMLElement | null | undefined;
  let htmlPagination: HTMLPaginationElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPaginationAttributes> }) {
    const minimalAttributes: OdsPaginationAttributes = OdsPaginationCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsPagination],
      html: `<osds-pagination ${OdsStringAttributes2Str(stringAttributes)}></osds-pagination>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root?.shadowRoot?.queryPaginationor('slot[name=placeholder]');
    htmlPagination = document.queryPaginationor('osds-pagination') as HTMLPaginationElement;
    htmlPagination && (htmlPagination.focus = jest.fn());
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
    function getAttributeContextOptions<Name extends keyof OdsPaginationAttributes = keyof OdsPaginationAttributes>({
      name,
      current,
      defaultCurrent,
    }: odsGetUnitTestAttributeContextOptions<OdsPaginationAttributes, Name>) {
      return odsGetUnitTestAttributeBaseOptions<OdsPaginationAttributes, Name, OsdsPagination>({
        name,
        current,
        defaultCurrent,
        instance: () => instance,
        root: () => page.root,
        wait: () => page.waitForChanges(),
        setup: value => {
          const attributes: Partial<OdsPaginationAttributes> = {};
          attributes[name] = value;
          return setup({ attributes });
        },
      });
    }

    describe('disabled', () => {
      odsUnitTestAttribute<OdsPaginationAttributes, 'disabled'>({
        ...getAttributeContextOptions({
          name: 'disabled',
          list: [false, true],
          DefaultCurrent: odsPaginationDefaultAttributes.disabled,
        }),
      });
    });

    describe('value', () => {
      odsUnitTestAttribute<OdsPaginationAttributes, 'value'>({
        ...getAttributeContextOptions({
          name: 'value',
          list: [3, 4],
          DefaultCurrent: odsPaginationDefaultAttributes.value,
        }),
        include: [OdsUnitTestAttributeType.MUTABLE],
      });
    });
  });

  describe('methods', () => {
    /*
    it('should call setPageIndex function and inputTabindex should be set to 4', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.setPageIndex(4);
      expect(instance?.pageindex).toBe(4);
    });
    */
  });

  describe('events', () => {
    it('odsCurrentChange', async () => {
      await setup({ attributes: {} });
      expect(instance.odsCurrentChange).toBeTruthy();
    });
  });
});
