//jest.mock('@ovhcloud/ods-core/src/components/pagination/ods-pagination-controller'); // keep jest.mock before any

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPagination } from './osds-pagination';
import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, OdsPaginationController, odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OdsCreateAttributes, OdsMockNativeMethod, OdsStringAttributes2Str, odsPaginationBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';

describe('spec:osds-pagination', () => {
  let page: SpecPage;
  let instance: OsdsPagination;
  let htmlPagination: HTMLElement | null | undefined;
  //let controller: OdsPaginationController;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPaginationAttributes> }) {
    const minimalAttributes: OdsPaginationAttributes = OdsCreateAttributes(attributes, odsPaginationBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPaginationAttributes>(minimalAttributes, odsPaginationDefaultAttributes);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsPagination],
      html: `<osds-pagination ${OdsStringAttributes2Str(stringAttributes)}></osds-pagination>`,
    });

    htmlPagination = document.querySelector('osds-pagination') as HTMLElement;
    htmlPagination && (htmlPagination.focus = jest.fn());
    instance = page.rootInstance;
    //controller = (OdsPaginationController as unknown as jest.SpyInstance<OdsPaginationController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    it('if the current of the pagination is 6, then page index should be 6', async () => {
      await setup({ attributes: { current: 6, total: 10 } });
      expect(instance?.current).toEqual(6);
    });

    it('if the current of the pagination is 2, then page index should be 2', async () => {
      await setup({ attributes: { current: 2, total: 10 } });
      expect(instance?.current).toEqual(2);
    });
  });

  describe('methods', () => {
    it('should call setPageIndex function and the page index should be set to 4', async () => {
      await setup({ attributes: { current: 2, total: 10 } });
      expect(instance).toBeTruthy();
      await instance.setPageIndex(4);
      expect(instance?.current).toBe(4);
    });
  });

  describe('disabled', () => {
    it('should disabled attributes is falsy by default', async () => {
      await setup({ attributes: { current: 2, total: 10 } });
      expect(page.root?.disabled).toBeFalsy();
    });

    it('should disabled attributes is true', async () => {
      await setup({ attributes: { disabled: true, current: 2, total: 10 } });
      expect(page.root?.disabled).toBeDefined();
    });
  });

  describe('page list', () => {
    it('should set the correct page number', async () => {
      await setup({ attributes: { disabled: false, current: 2, total: 8 } });

      instance.setPageIndex(3);
      expect(instance?.current).toBe(3);
    });
  });

  it('componentDidUpdate', async () => {
    await setup({ attributes: { current: 2, total: 10 } });

    const componentDidUpdateSpy = jest.spyOn(instance, 'componentDidUpdate');

    instance.componentDidUpdate();

    expect(componentDidUpdateSpy).toBeCalled();
  });

  /**
   * @see OdsPaginationAttributes
   */
  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup: async options => {
        await setup({ attributes: { ...options.attributes } });
      },
    };

    describe('total 1->100 with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttributes, 'total'>({
        ...getAttributeContextOptions<OdsPaginationAttributes, OsdsPagination, 'total'>({
          name: 'total',
          list: [...Array(100).keys()].map(i => i + 1),
          defaultValue: odsPaginationDefaultAttributes.total,
          ...config,
        }),
      });
    });

    describe('current 1->100 with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttributes, 'current'>({
        ...getAttributeContextOptions<OdsPaginationAttributes, OsdsPagination, 'current'>({
          name: 'current',
          list: [...Array(100).keys()].map(i => i + 1),
          defaultValue: odsPaginationDefaultAttributes.current,
          ...config,
        }),
      });
    });

    describe('disabled with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttributes, 'disabled'>({
        ...getAttributeContextOptions<OdsPaginationAttributes, OsdsPagination, 'disabled'>({
          name: 'disabled',
          list: [true, false],
          defaultValue: odsPaginationDefaultAttributes.disabled,
          ...config,
        }),
      });
    });
  });

  /**
   * @see OdsPaginationEvents
   */

  it('handlePreviousKeyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handlePreviousKeyDown).toBeTruthy();
    const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
    instance.handlePreviousKeyDown(event, instance.current);
    expect(instance.current).toBe(1);
  });
  it('handlePreviousClick', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handlePreviousClick).toBeTruthy();
    instance.handlePreviousClick(instance.current);
    expect(instance.current).toBe(1);
  });
  it('handlePageKeyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handlePageKeyDown).toBeTruthy();
    const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
    instance.handlePageKeyDown(event, 5);
    expect(instance.current).toBe(5);
  });
  it('handlePageClick', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handlePageClick).toBeTruthy();
    instance.handlePageClick(5);
    expect(instance.current).toBe(5);
  });
  it('handleNextKeyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handleNextKeyDown).toBeTruthy();
    const event = new KeyboardEvent('keyDown', { code: 'Space', keyCode: 32, bubbles: true });
    const pageList = instance.controller.createPageList(instance.total, instance.current);
    instance.handleNextKeyDown(event, instance.current, pageList);
    expect(instance.current).toBe(3);
  });
  it('handleNextClick', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handleNextClick).toBeTruthy();
    instance.handleNextClick(instance.current);
    expect(instance.current).toBe(3);
  });
});
