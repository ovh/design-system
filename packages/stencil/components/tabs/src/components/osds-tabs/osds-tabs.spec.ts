import { OdsClearLoggerSpy, OdsInitializeLoggerSpy, OdsLoggerSpyReferences } from '@ovhcloud/ods-testing/src';

import { OsdsTabs } from './osds-tabs';
import {
    OdsTabsAttributes,
    OdsTabBarDefaultAttributes,
    OdsTabsController,
    OdsComponentAttributes2StringAttributes,
} from '@ovhcloud/ods-core';

import {
    odsTabsBaseAttributes,
    OdsCreateAttributes,
    OdsStringAttributes2Str,
  } from '@ovhcloud/ods-testing';

  import { SpecPage, newSpecPage } from '@stencil/core/testing';

describe('spec:ods-tabs-controller', () => {
  let page: SpecPage;
  let controller: OdsTabsController;
  let component: OsdsTabs;
  let startSlot: HTMLElement;
  let instance: OsdsTabs;
  let loggerSpyReferences: OdsLoggerSpyReferences;


  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsTabsAttributes>, html?: string } = {}) {
    const minimalAttributes: OdsTabsAttributes = OdsCreateAttributes(attributes, odsTabsBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTabsAttributes>(minimalAttributes, OdsTabBarDefaultAttributes);

    page = await newSpecPage({
        components: [OsdsTabs],
        html: `<osds-tabs ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-tabs>`,
    });

    instance = page.rootInstance;

    //controller = (OdsTabsController as unknown as jest.SpyInstance<OdsTabsController, unknown[]>).mock.instances[0];
  }

  it('should render', async () => {
    await setup({});
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

    // describe('contents', () => {
    //     it('should have a start slot', async () => {
    //     await setup({ attributes: {}, html: `<slot name='start'></slot>` });
    //     expect(startSlot).toBeTruthy();
    //     });
    // });
});
