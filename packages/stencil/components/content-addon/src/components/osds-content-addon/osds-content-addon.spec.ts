import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsContentAddon } from './osds-content-addon';
import {
  OdsContentAddonAttributes,
  OdsComponentAttributes2StringAttributes,
  odsContentAddonDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsStringAttributes2Str } from '@ovhcloud/ods-testing';

describe('spec:osds-content-addon', () => {
  let page: SpecPage;
  let slotTop: HTMLElement;
  let slotBottom: HTMLElement;
  let slotStart: HTMLElement;
  let slotEnd: HTMLElement;
  let slotMain: HTMLElement;

  async function setup({ attributes }: { attributes: Partial<OdsContentAddonAttributes> }) {
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsContentAddonAttributes>(attributes, odsContentAddonDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsContentAddon],
      html: `<osds-content-addon ${OdsStringAttributes2Str(stringAttributes)}></osds-content-addon>`,
    });

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    slotTop = page.root.shadowRoot.querySelector('slot[name=top]');
    slotBottom = page.root.shadowRoot.querySelector('slot[name=bottom]');
    slotStart = page.root.shadowRoot.querySelector('slot[name=start]');
    slotEnd = page.root.shadowRoot.querySelector('slot[name=end]');
    slotMain = page.root.shadowRoot.querySelector('slot[name=main]');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });


  describe('contents', () => {
    it('should have a top slot', async () => {
      await setup({ attributes: {} });
      expect(slotTop).toBeTruthy();
    });

    it('should have a bottom slot', async () => {
      await setup({ attributes: {} });
      expect(slotBottom).toBeTruthy();
    });

    it('should have a start slot', async () => {
      await setup({ attributes: {} });
      expect(slotStart).toBeTruthy();
    });

    it('should have an end slot', async () => {
      await setup({ attributes: {} });
      expect(slotEnd).toBeTruthy();
    });

    it('should have a main slot', async () => {
      await setup({ attributes: {} });
      expect(slotMain).toBeTruthy();
    });
  });

});
