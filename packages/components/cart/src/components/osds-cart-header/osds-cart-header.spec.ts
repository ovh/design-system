jest.mock('./core/controller'); // keep jest.mock before any

import type {AnyHTMLElement} from '@stencil/core/internal';
import type {SpecPage} from '@stencil/core/testing';
import type {OdsCartHeaderAttribute} from './interfaces/attributes';
import {newSpecPage} from '@stencil/core/testing';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OdsCartHeaderController} from './core/controller';
import {OsdsCartHeader} from './osds-cart-header';

describe('spec:osds-cart-header', () => {
  let page: SpecPage;
  let slotHeader: HTMLElement | null | undefined;
  let hr: HTMLElement | null | undefined;
  let instance: OsdsCartHeader;
  let root: (OsdsCartHeader & AnyHTMLElement) | undefined;
  let controller: OdsCartHeaderController;

  function findElements() {
    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotHeader = page.root?.shadowRoot?.querySelector('slot:not([name])');
    hr = page.root?.shadowRoot?.querySelector('hr');
  }

  async function setup({attributes = {}}: { attributes?: Partial<OdsCartHeaderAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsCartHeaderAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsCartHeader],
      html: `<osds-cart-header ${odsStringAttributes2Str(stringAttributes)}></osds-cart-header>`,
    });

    instance = page.rootInstance;

    findElements();
    root = (page.root as unknown) as OsdsCartHeader & AnyHTMLElement;
    controller = (OdsCartHeaderController as unknown as jest.SpyInstance<OdsCartHeaderController, unknown[]>).mock.instances[0];
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({attributes: {headerTitle: 'my title'}});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have an unnamed slot', async() => {
      await setup({attributes: {headerTitle: 'my title'}});
      expect(slotHeader).toBeTruthy();
    });
  });

  describe('hr', () => {
    it('should have a hr if collapsible', async() => {
      await setup({attributes: {headerTitle: 'my title'}});

      (instance as any).cart = {collapsible: true};

      await page.waitForChanges();
      findElements();
      expect(hr).toBeTruthy();
    });
  });

  describe('controller', () => {
    it('should call validateHeaderTitle when headerTitle change', async() => {
      await setup({attributes: {headerTitle: ''}});
      expect(controller.validateHeaderTitle).not.toHaveBeenCalled();

      root?.setAttribute('header-title', 'Title');
      await page.waitForChanges();
      expect(controller.validateHeaderTitle).toHaveBeenCalledTimes(1);
      expect(controller.validateHeaderTitle).toHaveBeenCalledWith();
    });

    it('should call initCart on init', async() => {
      await setup({attributes: {headerTitle: 'my title'}});
      expect(controller.initCart).toHaveBeenCalledTimes(1);
      expect(controller.initCart).toHaveBeenCalledWith();
    });
  });
});
