import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPagination } from './osds-pagination';
import { OdsComponentAttributes2StringAttributes, OdsPaginationAttributes, odsPaginationDefaultAttributes } from '@ovhcloud/ods-core';

import { OdsCreateAttributes, OdsMockNativeMethod, OdsStringAttributes2Str, odsPaginationBaseAttributes } from '@ovhcloud/ods-testing';

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

    instance = page.rootInstance;
    htmlPagination = document.querySelector('osds-pagination') as HTMLElement;
    htmlPagination && (htmlPagination.focus = jest.fn());
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    it('if the current of the pagination is 6, then page index should be 6', async () => {
      await setup({ attributes: { current: 6, totalPages: 10 } });
      expect(instance?.pageindex).toEqual(6);
    });

    it('if the defaultCurrent of the pagination is 6, then page index should be 6', async () => {
      await setup({ attributes: { defaultCurrent: 6, totalPages: 10 } });
      expect(instance?.pageindex).toEqual(6);
    });

    it('if the totalPages of the pagination is 10, then totalPages should be 1O', async () => {
      await setup({ attributes: { defaultCurrent: 6, totalPages: 10 } });
      expect(instance?.totalPages).toEqual(10);
    });
  });

  describe('methods', () => {
    it('should call setPageIndex function and the page index should be set to 4', async () => {
      await setup({ attributes: { current: 2, totalPages: 10 } });
      expect(instance).toBeTruthy();
      await instance.setPageIndex(4);
      expect(instance?.pageindex).toBe(4);
    });
  });

  describe('disabled', () => {
    it('should disabled attributes is falsy', async () => {
      await setup({ attributes: { disabled: false, current: 2, totalPages: 10 } });
      expect(page.root?.disabled).toBeFalsy();
    });
  });

  describe('page list', () => {
    it('should generate the correct number of pages', async () => {
      await setup({ attributes: { disabled: false, current: 2, totalPages: 8 } });
      const pageList = instance.createPageList(instance.totalPages);
      expect(pageList).toHaveLength(8);
    });

    it('should generate the correct page list', async () => {
      await setup({ attributes: { disabled: false, current: 2, totalPages: 9 } });
      const pageList = instance.createPageList(instance.totalPages);
      //console.log('### Pagelist : ', pageList);
      expect(pageList).toHaveLength(9);
      expect(pageList[0].id).toEqual(1);
      expect(pageList[1].id).toEqual(2);
      expect(pageList[2].id).toEqual(3);
      expect(pageList[3].id).toEqual(4);
      expect(pageList[4].id).toEqual(5);
      expect(pageList[5].id).toEqual(6);
      expect(pageList[6].id).toEqual(7);
      expect(pageList[7].id).toEqual(8);
      expect(pageList[8].id).toEqual(9);
    });

    it('should display the correct page list following to the current page 5', async () => {
      await setup({ attributes: { disabled: false, current: 5, totalPages: 9 } });
      const pageList = instance.createPageList(instance.totalPages);
      console.log('### Pagelist : ', pageList);
      expect(pageList).toHaveLength(9);
      expect(pageList[0].active).toBeTruthy();
      expect(pageList[1].active).toBeFalsy();
      expect(pageList[2].active).toBeFalsy();
      expect(pageList[3].active).toBeTruthy();
      expect(pageList[4].active).toBeTruthy();
      expect(pageList[5].active).toBeTruthy();
      expect(pageList[6].active).toBeFalsy();
      expect(pageList[7].active).toBeFalsy();
      expect(pageList[8].active).toBeTruthy();
    });

    it('should display the correct page list following to the current page 2', async () => {
      await setup({ attributes: { disabled: false, current: 2, totalPages: 9 } });
      const pageList = instance.createPageList(instance.totalPages);
      expect(pageList).toHaveLength(9);
      expect(pageList[0].active).toBeTruthy();
      expect(pageList[1].active).toBeTruthy();
      expect(pageList[2].active).toBeTruthy();
      expect(pageList[3].active).toBeTruthy();
      expect(pageList[4].active).toBeTruthy();
      expect(pageList[5].active).toBeFalsy();
      expect(pageList[6].active).toBeFalsy();
      expect(pageList[7].active).toBeFalsy();
      expect(pageList[8].active).toBeTruthy();
    });
  });
});
