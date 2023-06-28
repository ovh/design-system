import {
  OdsTooltipContentAttributes,
  OdsComponentAttributes2StringAttributes,
  odsTooltipContentDefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsTooltipContentBaseAttributes,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsTooltipContent } from './osds-tooltip-content';

describe('spec:osds-tooltip-content', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsTooltipContent;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsTooltipContentAttributes> } = {}) {
    const minimalAttributes: OdsTooltipContentAttributes = OdsCreateAttributes(attributes, odsTooltipContentBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsTooltipContentAttributes>(minimalAttributes, odsTooltipContentDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsTooltipContent],
      html: `<osds-tooltip-content ${OdsStringAttributes2Str(stringAttributes)}>My Tooltip Content</osds-tooltip-content>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});
