import type { SpecPage } from '@stencil/core/testing';
import type { OdsPaginationAttribute } from './interfaces/attributes';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_PAGINATION_PER_PAGE_MIN } from './constants/pagination-per-page';
import { OsdsPagination } from './osds-pagination';
import { OdsMockNativeMethod, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

describe('spec:osds-pagination', () => {
  const baseAttribute = { current: 0, disabled: false, labelTooltipNext: '', labelTooltipPrevious: '', totalPages: 0 };
  let page: SpecPage;
  let instance: OsdsPagination;
  let htmlPagination: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsPaginationAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsPaginationAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsPagination],
      html: `<osds-pagination ${odsStringAttributes2Str(stringAttributes)}></osds-pagination>`,
    });

    htmlPagination = document.querySelector('osds-pagination') as HTMLElement;
    htmlPagination && (htmlPagination.focus = jest.fn());
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});

    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    it('if the current of the pagination is 6, then page index should be 6', async() => {
      await setup({ attributes: { current: 6, totalPages: 10 } });

      expect(instance.current).toBe(6);
      expect(instance.itemPerPage).toBe(ODS_PAGINATION_PER_PAGE_MIN);
    });

    it('if the current of the pagination is 2, then page index should be 2', async() => {
      await setup({ attributes: { current: 2, totalPages: 10 } });

      expect(instance.current).toBe(2);
      expect(instance.itemPerPage).toBe(ODS_PAGINATION_PER_PAGE_MIN);
    });

    it('if the totalItems is defined itemPerPage should be also', async() => {
      await setup({ attributes: { current: 2, totalItems: 20 } });

      expect(instance?.current).toBe(2);
      expect(instance.itemPerPage).toBe(ODS_PAGINATION_PER_PAGE_MIN);
    });
  });

  describe('methods', () => {
    it('should call setPageIndex function and the page index should be set to 4', async() => {
      await setup({ attributes: { current: 2, totalPages: 10 } });
      expect(instance).toBeTruthy();

      await instance.setPageIndex(4);
      expect(instance.current).toBe(4);
    });
  });

  describe('disabled', () => {
    it('should disabled attributes is false by default', async() => {
      await setup({ attributes: { current: 2, totalPages: 10 } });
      expect(page.root?.disabled).toBe(false);
    });

    it('should disabled attributes is true', async() => {
      await setup({ attributes: { disabled: true, current: 2, totalPages: 10 } });
      expect(page.root?.disabled).toBeDefined();
    });
  });

  describe('page list', () => {
    it('should set the correct page number', async() => {
      await setup({ attributes: { disabled: false, current: 2, totalPages: 8 } });

      await instance.setPageIndex(3);

      expect(instance.current).toBe(3);
    });
  });

  it('onCurrentChange', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });

    const componentDidUpdateSpy = jest.spyOn(instance, 'onCurrentChange');

    instance.handlePageClick(5);

    expect(componentDidUpdateSpy).toBeCalled();
  });

  describe('odsValueChangeHandler', () => {
    it('should do nothing if event does not have a value', async() => {
      await setup({ attributes: { disabled: false, current: 2, totalItems: 200 } });
      expect(instance.itemPerPage).toBe(10);

      // @ts-ignore for test purpose
      await instance.odsValueChangeHandler({ detail: {} });
      expect(instance.itemPerPage).toBe(10);
    });

    it('should do update item per page value', async() => {
      const dummyValue = 50;
      await setup({ attributes: { disabled: false, current: 2, totalItems: 200 } });
      expect(instance.itemPerPage).toBe(10);

      // @ts-ignore for test purpose
      await instance.odsValueChangeHandler({ detail: { value: dummyValue } });
      expect(instance.itemPerPage).toBe(dummyValue);

      // @ts-ignore for test purpose
      await instance.odsValueChangeHandler({ detail: { value: dummyValue.toString() } });
      expect(instance.itemPerPage).toBe(dummyValue);
    });
  });

  describe('Watch', () => {
    describe('onItemPerPageChange', () => {
      it('should update page list and reset current to 1', async() => {
        await setup({ attributes: { disabled: false, current: 2, totalItems: 200 } });
        const initialPageList = [...instance.pageList];

        instance.itemPerPage = 20;

        expect(instance.current).toBe(1);
        expect(instance.pageList).not.toEqual(initialPageList);
      });

      it('should update page list without changing current if it is already 1', async() => {
        await setup({ attributes: { disabled: false, current: 1, totalItems: 200 } });
        const initialPageList = [...instance.pageList];

        instance.itemPerPage = 20;

        expect(instance.current).toBe(1);
        expect(instance.pageList).not.toEqual(initialPageList);
      });
    });

    describe('onTotalItemsChange', () => {
      it('should update page list and reset current to 1', async() => {
        await setup({ attributes: { disabled: false, current: 2, totalItems: 200 } });
        const initialPageList = [...instance.pageList];

        instance.totalItems = 100;

        expect(instance.current).toBe(1);
        expect(instance.pageList).not.toEqual(initialPageList);
      });

      it('should update page list without changing current if it is already 1', async() => {
        await setup({ attributes: { disabled: false, current: 1, totalItems: 200 } });
        const initialPageList = [...instance.pageList];

        instance.totalItems = 100;

        expect(instance.current).toBe(1);
        expect(instance.pageList).not.toEqual(initialPageList);
      });
    });
  });

  /**
   * @see OdsPaginationAttributes
   */
  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('totalPages 1->100 with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'totalPages'>({
        name: 'totalPages',
        defaultValue: DEFAULT_ATTRIBUTE.totalPages,
        newValue: 100,
        value: 1,
        setup: (value) => setup({ attributes: { ['totalPages']: value } }),
        ...config,
      });
    });

    describe('current 1->100 with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'current'>({
        name: 'current',
        defaultValue: DEFAULT_ATTRIBUTE.current,
        newValue: 100,
        value: 1,
        setup: (value) => setup({ attributes: { ['current']: value } }),
        ...config,
      });
    });

    describe('disabled with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'disabled'>({
        name: 'disabled',
        defaultValue: DEFAULT_ATTRIBUTE.disabled,
        newValue: true,
        value: false,
        setup: (value) => setup({ attributes: { ['disabled']: value } }),
        ...config,
      });
    });

    describe('totalItems', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'totalItems'>({
        name: 'totalItems',
        defaultValue: DEFAULT_ATTRIBUTE.totalItems,
        newValue: 100,
        value: 1,
        setup: (value) => setup({ attributes: { ['totalItems']: value } }),
        ...config,
      });
    });

    describe('labelTooltipPrevious with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'labelTooltipPrevious'>({
        name: 'labelTooltipPrevious',
        defaultValue: DEFAULT_ATTRIBUTE.labelTooltipPrevious,
        newValue: 'Previous',
        value: 'Précédent',
        setup: (value) => setup({ attributes: { ['labelTooltipPrevious']: value } }),
        ...config,
      });
    });

    describe('labelTooltipNext with odsUnitTestAttribute', () => {
      odsUnitTestAttribute<OdsPaginationAttribute, 'labelTooltipNext'>({
        name: 'labelTooltipNext',
        defaultValue: DEFAULT_ATTRIBUTE.labelTooltipNext,
        newValue: 'Next',
        value: 'Suivant',
        setup: (value) => setup({ attributes: { ['labelTooltipNext']: value } }),
        ...config,
      });
    });
  });

  /**
   * @see OdsPaginationEvents
   */

  it('handlePreviousKeyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handlePreviousKeyDown).toBeTruthy();

    const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });
    instance.handlePreviousKeyDown(event, instance.current);

    expect(instance.current).toBe(1);
  });

  it('handlePreviousKeyDown controller', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    instance.controller.handlePreviousKeyDown = jest.fn();

    instance.handlePreviousKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), instance.current);

    expect(instance.controller.handlePreviousKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handlePreviousKeyDown).toHaveBeenCalled();
  });

  it('handlePreviousClick', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handlePreviousClick).toBeTruthy();

    instance.handlePreviousClick(instance.current);
    expect(instance.current).toBe(1);
  });

  it('handlePageKeyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handlePageKeyDown).toBeTruthy();

    const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });
    instance.handlePageKeyDown(event, 5);

    expect(instance.current).toBe(5);
  });

  it('handlePageKeyDown controller', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });

    instance.controller.handlePageKeyDown = jest.fn();
    instance.handlePageKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), 5);

    expect(instance.controller.handlePageKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handlePageKeyDown).toHaveBeenCalled();
  });

  it('handlePageClick', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handlePageClick).toBeTruthy();

    instance.handlePageClick(5);
    expect(instance.current).toBe(5);
  });

  it('handleNextKeyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handleNextKeyDown).toBeTruthy();

    const event = new KeyboardEvent('keyDown', { code: 'Space', bubbles: true });
    instance.handleNextKeyDown(event, instance.current);

    expect(instance.current).toBe(3);
  });

  it('handleNextKeyDown controller', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });

    instance.controller.handleNextKeyDown = jest.fn();
    instance.handleNextKeyDown(new KeyboardEvent('keydown', { key: 'Enter' }), instance.current);

    expect(instance.controller.handleNextKeyDown).toHaveBeenCalledTimes(1);
    expect(instance.controller.handleNextKeyDown).toHaveBeenCalled();
  });

  it('handleNextClick', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    expect(instance.handleNextClick).toBeTruthy();

    instance.handleNextClick(instance.current);
    expect(instance.current).toBe(3);
  });

  it('left arrow click', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[0]).toBeDefined();

    const arrow = buttons?.[0] as HTMLElement;
    arrow.click();

    expect(instance.current).toBe(1);
  });

  it('left arrow keyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[0]).toBeDefined();

    const pageButton = buttons?.[0] as HTMLElement;
    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', (event) => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });
    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    expect(mockOnPageChange).toBeCalled();
  });

  it('right arrow click', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[8]).toBeDefined();

    const arrow = buttons?.[8] as HTMLElement;
    arrow.click();

    expect(instance.current).toBe(3);
  });

  it('right arrow keyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[8]).toBeDefined();

    const pageButton = buttons?.[8] as HTMLElement;
    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', (event) => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });
    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    expect(mockOnPageChange).toBeCalled();
  });

  it('page click on 10', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[7]).toBeDefined();

    const pageButton = buttons?.[7] as HTMLElement;
    pageButton.click();

    expect(instance.current).toBe(10);
  });

  it('page keyDown', async() => {
    await setup({ attributes: { current: 2, totalPages: 10 } });
    const buttons = htmlPagination?.shadowRoot?.querySelectorAll('osds-button');

    expect(buttons?.[7]).toBeDefined();

    const pageButton = buttons?.[7] as HTMLElement;
    const mockOnPageChange = jest.fn();
    pageButton.addEventListener('keydown', (event) => {
      if (event.key === 'space') {
        mockOnPageChange();
      }
    });
    pageButton.dispatchEvent(new KeyboardEvent('keydown', { key: 'space' }));

    expect(mockOnPageChange).toBeCalled();
  });
});
