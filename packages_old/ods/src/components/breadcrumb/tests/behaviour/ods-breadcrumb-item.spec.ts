import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsBreadcrumbItem } from '../../src';

describe('ods-breadcrumb-item behaviour', () => {
  const listenerSpy = jest.fn();
  const mockEvent = {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let rootInstance: OdsBreadcrumbItem | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsBreadcrumbItem],
      html,
    });

    root = page.root;
    rootInstance = page.rootInstance;
  }

  beforeEach(jest.clearAllMocks);

  describe('onExpand', () => {
    it('should emit an event', async() => {
      await setup('<ods-breadcrumb-item></ods-breadcrumb-item>');
      root?.addEventListener('odsExpand', listenerSpy);

      // @ts-ignore for test purpose
      rootInstance?.onExpandClick(mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
      expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
      expect(listenerSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('onClick', () => {
    it('should emit an event', async() => {
      await setup('<ods-breadcrumb-item></ods-breadcrumb-item>');
      root?.addEventListener('odsClick', listenerSpy);

      // @ts-ignore for test purpose
      rootInstance?.onLinkClick();

      expect(listenerSpy).toHaveBeenCalledTimes(1);
    });

    it('should do nothing if disabled', async() => {
      await setup('<ods-breadcrumb-item is-disabled></ods-breadcrumb-item>');
      root?.addEventListener('odsClick', listenerSpy);

      // @ts-ignore for test purpose
      rootInstance?.onLinkClick();

      expect(listenerSpy).not.toHaveBeenCalled();
    });
  });
});
