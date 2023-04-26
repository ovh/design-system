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
});
