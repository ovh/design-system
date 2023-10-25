import type { OdsBreadcrumbItemAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsBreadcrumbItem } from './osds-breadcrumb-item';


describe('spec:osds-breadcrumb-item', () => {
  const baseAttribute = { href: '', isCollapsed: false, isExpandableItem: false, isLast: false };
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsBreadcrumbItem;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsBreadcrumbItemAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsBreadcrumbItemAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsBreadcrumbItem],
      html: `<osds-breadcrumb-item ${odsStringAttributes2Str(stringAttributes)}></osds-breadcrumb-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});

    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});
