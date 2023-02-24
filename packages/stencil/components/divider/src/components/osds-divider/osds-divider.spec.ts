import {
  OdsComponentAttributes2StringAttributes,
  OdsDividerAttributes,
  OdsDividerSizeList,
  odsDividerDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsDividerBaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { OsdsDivider } from './osds-divider';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-divider', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsDivider;

  async function setup({ attributes= {} , html = `` }: { attributes?: Partial<OdsDividerAttributes>, html?: string }) {
    const minimalAttributes: OdsDividerAttributes = OdsCreateAttributes(attributes, odsDividerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsDividerAttributes>(minimalAttributes, odsDividerDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsDivider],
      html: `<osds-divider ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-divider>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      page: () => page,
      instance: () => instance,
      setup
    };

    describe('color', () => {
      odsUnitTestAttribute<OdsDividerAttributes, 'color'>({
        ...getAttributeContextOptions<OdsDividerAttributes, OsdsDivider, 'color'>({
          name: 'color',
          list: OdsThemeColorIntentList,
          defaultValue: odsDividerDefaultAttributes.color,
          ...config
        })
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsDividerAttributes, 'contrasted'>({
        ...getAttributeContextOptions<OdsDividerAttributes, OsdsDivider, 'contrasted'>({
          name: 'contrasted',
          list: [false, true],
          defaultValue: odsDividerDefaultAttributes.contrasted,
          ...config
        })
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsDividerAttributes, 'size'>({
        ...getAttributeContextOptions<OdsDividerAttributes, OsdsDivider, 'size'>({
          name: 'size',
          list: OdsDividerSizeList,
          defaultValue: odsDividerDefaultAttributes.size,
          ...config
        })
      });
    });

    describe('separator', () => {
      odsUnitTestAttribute<OdsDividerAttributes, 'separator'>({
        ...getAttributeContextOptions<OdsDividerAttributes, OsdsDivider, 'separator'>({
          name: 'separator',
          list: [false, true],
          defaultValue: odsDividerDefaultAttributes.separator,
          ...config
        })
      });
    });
  });
});
