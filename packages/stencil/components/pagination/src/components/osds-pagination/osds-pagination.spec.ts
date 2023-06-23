import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPagination } from './osds-pagination';
import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, OdsPaginationController, odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { OdsCreateAttributes, OdsMockNativeMethod, OdsStringAttributes2Str, odsPaginationBaseAttributes, odsUnitTestAttribute } from '@ovhcloud/ods-testing';

describe('spec:osds-pagination', () => {
  let page: SpecPage;
  let instance: OsdsPagination;
  let htmlPagination: HTMLElement | null | undefined;

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

    document.activeElement = document.body;

    await instance.componentDidUpdate();

    page.waitForChanges();

    expect(componentDidUpdateSpy).toBeCalled();
    expect(componentDidUpdateSpy).toHaveBeenCalledTimes(1);
  });

  it('onCurrentChange', async () => {
    await setup({ attributes: { current: 2, total: 10 } });

    const componentDidUpdateSpy = jest.spyOn(instance, 'onCurrentChange');

    instance.handlePageClick(5);

    page.waitForChanges();

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
  it('handlePreviousKeyDown controller', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    instance.controller.handlePreviousKeyDown = jest.fn();
    instance.handlePreviousKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), instance.current);
    expect(instance.controller.handlePreviousKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handlePreviousKeyDown).toHaveBeenCalled();
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
  it('handlePageKeyDown controller', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    instance.controller.handlePageKeyDown = jest.fn();
    instance.handlePageKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), 5);
    expect(instance.controller.handlePageKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handlePageKeyDown).toHaveBeenCalled();
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
  it('handleNextKeyDown controller', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    instance.controller.handleNextKeyDown = jest.fn();
    instance.handleNextKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), instance.current, instance.controller.createPageList(instance.total, instance.current));
    expect(instance.controller.handleNextKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handleNextKeyDown).toHaveBeenCalled();
  });
  it('handleNextClick', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    expect(instance.handleNextClick).toBeTruthy();
    instance.handleNextClick(instance.current);
    expect(instance.current).toBe(3);
  });
  it('left arrow click', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');
    const arrow = buttons?.[0] as HTMLElement;
    arrow.click();
    expect(buttons?.[0]).toBeDefined();

    await page.waitForChanges();

    expect(instance.current).toBe(1);
  });
  it('left arrow keyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    const pageButton = buttons?.[0] as HTMLElement;

    expect(buttons?.[0]).toBeDefined();

    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', event => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });

    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    await page.waitForChanges();

    expect(mockOnPageChange).toBeCalled();
  });

  it('right arrow click', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');
    const arrow = buttons?.[8] as HTMLElement;
    arrow.click();
    expect(buttons?.[8]).toBeDefined();

    await page.waitForChanges();

    expect(instance.current).toBe(3);
  });
  it('right arrow keyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    const pageButton = buttons?.[8] as HTMLElement;

    expect(buttons?.[8]).toBeDefined();

    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', event => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });

    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    await page.waitForChanges();

    expect(mockOnPageChange).toBeCalled();
  });

  it('page click on 10', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');
    const pageButton = buttons?.[7] as HTMLElement;
    pageButton.click();
    expect(buttons?.[7]).toBeDefined();

    await page.waitForChanges();

    expect(instance.current).toBe(10);
  });
  it('page keyDown', async () => {
    await setup({ attributes: { current: 2, total: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    const pageButton = buttons?.[7] as HTMLElement;

    expect(buttons?.[7]).toBeDefined();

    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', event => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });

    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    await page.waitForChanges();

    expect(mockOnPageChange).toBeCalled();
  });
});
