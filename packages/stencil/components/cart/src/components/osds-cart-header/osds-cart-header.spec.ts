jest.mock('@ovhcloud/ods-core/src/components/cart-header/ods-cart-header-controller'); // keep jest.mock before any

import {
  OdsCartHeaderAttributes,
  OdsCartHeaderController,
  OdsComponentAttributes2StringAttributes,
  odsCartHeaderDefaultAttributes
} from '@ovhcloud/ods-core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { AnyHTMLElement } from '@stencil/core/internal';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';
import { OsdsCartHeader } from './osds-cart-header';

describe('spec:osds-cart-header', () => {
  let page: SpecPage;
  let slotHeader: HTMLElement;
  let hr: HTMLElement;
  let instance: OsdsCartHeader;
  let root: (OsdsCartHeader & AnyHTMLElement) | undefined;
  let controller: OdsCartHeaderController;

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root.shadowRoot.querySelector('slot:not([name])');
    hr = page.root.shadowRoot.querySelector('hr');
  }

  async function setup({ attributes }: { attributes?: Partial<OdsCartHeaderAttributes>, html?: string } = {}) {
    //const minimalAttributes: OdsCartHeaderAttributes = OdsCartCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsCartHeaderAttributes>(attributes, odsCartHeaderDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsCartHeader],
      html: `<osds-cart-header ${OdsStringAttributes2Str(stringAttributes)}></osds-cart-header>`,
    });

    instance = page.rootInstance;

    findElements();
    root = (page.root as unknown) as OsdsCartHeader & AnyHTMLElement;
    controller = (OdsCartHeaderController as unknown as jest.SpyInstance<OdsCartHeaderController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async () => {
    await setup({ attributes: { headerTitle: 'my title' }, html: `` });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have an unnamed slot', async () => {
      await setup({ attributes: { headerTitle: 'my title' }, html: `` });
      expect(slotHeader).toBeTruthy();
    });
  });

  describe('hr', () => {
    it('should have a hr if collapsible', async () => {
      await setup({ attributes: { headerTitle: 'my title' }, html: `` });

      (instance as any).cart = { collapsible: true };

      await page.waitForChanges();
      findElements();
      expect(hr).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call validateHeaderTitle when headerTitle change', async () => {
      await setup({ attributes: { headerTitle: '' } });
      expect(controller.validateHeaderTitle).not.toHaveBeenCalled();

      root?.setAttribute('header-title', 'Title');
      await page.waitForChanges();
      expect(controller.validateHeaderTitle).toHaveBeenCalledTimes(1);
      expect(controller.validateHeaderTitle).toHaveBeenCalledWith();
    });

    it('should call initCart on init', async () => {
      await setup({ attributes: { headerTitle: 'my title' }, html: `` });
      expect(controller.initCart).toHaveBeenCalledTimes(1);
      expect(controller.initCart).toHaveBeenCalledWith();
    });
  });
});
