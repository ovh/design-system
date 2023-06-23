import {
  OdsBreadcrumbItemAttributes,
  odsBreadcrumbItemDefaultAttributes,
  OdsComponentAttributes2StringAttributes
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  odsBreadcrumbItemBaseAttributes,
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { OsdsBreadcrumbItem } from './osds-breadcrumb-item';

describe('spec:osds-breadcrumb-item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumbItem;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttributes> } = {}) {
    const minimalAttributes: OdsBreadcrumbItemAttributes = OdsCreateAttributes(attributes, odsBreadcrumbItemBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttributes>(minimalAttributes, odsBreadcrumbItemDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsBreadcrumbItem],
      html: `<osds-breadcrumb-item ${OdsStringAttributes2Str(stringAttributes)}></osds-breadcrumb-item>`,
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
