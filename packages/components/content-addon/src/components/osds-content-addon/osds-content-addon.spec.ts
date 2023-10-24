import type { SpecPage } from '@stencil/core/testing';
import { OsdsContentAddon } from './osds-content-addon';
import { newSpecPage } from '@stencil/core/testing';

describe('spec:osds-content-addon', () => {
  let page: SpecPage;
  let slotTop: HTMLElement | null | undefined;
  let slotBottom: HTMLElement | null | undefined;
  let slotStart: HTMLElement | null | undefined;
  let slotEnd: HTMLElement | null | undefined;
  let slotMain: HTMLElement | null | undefined;

  async function setup() {
    page = await newSpecPage({
      components: [OsdsContentAddon],
      html: '<osds-content-addon></osds-content-addon>',
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotTop = page.root?.shadowRoot?.querySelector('slot[name=top]');
    slotBottom = page.root?.shadowRoot?.querySelector('slot[name=bottom]');
    slotStart = page.root?.shadowRoot?.querySelector('slot[name=start]');
    slotEnd = page.root?.shadowRoot?.querySelector('slot[name=end]');
    slotMain = page.root?.shadowRoot?.querySelector('slot[name=main]');
  }

  it('should render', async() => {
    await setup();
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a top slot', async() => {
      await setup();
      expect(slotTop).toBeTruthy();
    });

    it('should have a bottom slot', async() => {
      await setup();
      expect(slotBottom).toBeTruthy();
    });

    it('should have a start slot', async() => {
      await setup();
      expect(slotStart).toBeTruthy();
    });

    it('should have an end slot', async() => {
      await setup();
      expect(slotEnd).toBeTruthy();
    });

    it('should have a main slot', async() => {
      await setup();
      expect(slotMain).toBeTruthy();
    });
  });
});
