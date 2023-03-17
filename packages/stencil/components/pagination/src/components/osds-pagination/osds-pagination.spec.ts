import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPagination } from './osds-pagination';
import { OdsComponentAttributes2StringAttributes, OdsCreateDefaultValidityState, OdsPaginationAttributes, odsPaginationDefaultAttributes, OdsLogger } from '@ovhcloud/ods-core';
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

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-pagination', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsPagination;
  let slotPlaceholder: HTMLElement | null | undefined;
  let htmlPagination: HTMLPaginationElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPaginationAttributes>; html?: string }) {
    const minimalAttributes: OdsPaginationAttributes = OdsPaginationCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsPagination],
      html: `<osds-pagination ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-pagination>`,
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
      list,
      DefaultCurrent,
    }: odsGetUnitTestAttributeContextOptions<OdsPaginationAttributes, Name>) {
      return odsGetUnitTestAttributeBaseOptions<OdsPaginationAttributes, Name, OsdsPagination>({
        name,
        list,
        DefaultCurrent,
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
    it('should have DefaultCurrent as value if set', async () => {
      const DefaultCurrent = 4;
      await setup({ attributes: { DefaultCurrent } });
      expect(instance).toBeTruthy();
      expect(instance?.value).toBe(`${DefaultCurrent}`);
    });

    it('should call reset function and set value to DefaultCurrent', async () => {
      const DefaultCurrent = 4;
      await setup({ attributes: { DefaultCurrent, value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe(`${DefaultCurrent}`);
    });

    it('should call reset function and set value to empty string if DefaultCurrent is unset', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.reset();
      expect(instance?.value).toBe('');
    });

    it('should call clear function and set value to an empty string', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.clear();
      expect(instance?.value).toBe('');
    });

    it('should call setFocus function and change the focus state of the component', async () => {
      await setup({ attributes: {} });
      expect(instance).toBeTruthy();
      expect(htmlPagination).toBeTruthy();
      await instance.setFocus();
      expect(htmlPagination?.value).toBe('');
    });

    it('should call setPageIndex function and inputTabindex should be set to 4', async () => {
      await setup({ attributes: { value: 2 } });
      expect(instance).toBeTruthy();
      await instance.setPageIndex(4);
      expect(instance?.pageindex).toBe(4);
    });

    it('should call getValidity function and get an OdsValidityState.invalid to true', async () => {
      await setup({ attributes: { value: 'my-value-1' } });
      expect(instance).toBeTruthy();
      jest.spyOn(instance, 'getValidity');
      const validity = await instance.getValidity();
      expect(instance.getValidity).toHaveBeenCalledTimes(1);
      expect(validity?.invalid).toBe(false);
    });*/
  });

  describe('events', () => {
    it('odsCurrentChange', async () => {
      await setup({ attributes: {} });
      expect(instance.odsCurrentChange).toBeTruthy();
    });
  });
});
