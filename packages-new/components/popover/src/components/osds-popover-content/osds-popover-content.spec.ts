import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OsdsPopoverContent } from './osds-popover-content';

describe('spec:osds-popover-content', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsPopoverContent;
  let popoverContentHeaderSlot: HTMLSlotElement | null | undefined;
  let popoverContentSlot : HTMLSlotElement | null | undefined;
  let popoverContentFooterSlot: HTMLSlotElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  function findElements(){
    popoverContentHeaderSlot = page.root?.shadowRoot?.querySelector('slot[name="popover-header"]');
    popoverContentSlot = page.root?.shadowRoot?.querySelector('slot:not([name])');
    popoverContentFooterSlot = page.root?.shadowRoot?.querySelector('slot[name="popover-footer"]');
  }

  async function setup() {
    page = await newSpecPage({
      components: [OsdsPopoverContent],
      html: `<osds-popover-content></osds-popover-content>`,
    });

    root = page.root;
    instance = page.rootInstance;

    findElements();
  }

  it('should render', async () => {
    await setup();
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a header', async () => {
      await setup();
      expect(popoverContentHeaderSlot).toBeTruthy();
    });

    it('should have an unnamed slot', async () => {
      await setup();
      expect(popoverContentSlot).toBeTruthy();
    });

    it('should have a footer', async () => {
      await setup();
      expect(popoverContentFooterSlot).toBeTruthy();
    });
  });
});
