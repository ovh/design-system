jest.mock('@ovhcloud/ods-core/src/components/<%= name %>/ods-<%= name %>-controller'); // keep jest.mock before any

import {
  Ods<%= componentName %>Attributes,
  Ods<%= componentName %>Controller,
  OdsComponentAttributes2StringAttributes,
  ods<%= componentName %>DefaultAttributes,
} from '@ovhcloud/ods-core';
import {
  OdsCreateAttributes,
  OdsStringAttributes2Str,
  ods<%= componentName %>BaseAttributes,
  odsUnitTestAttribute
} from '@ovhcloud/ods-testing';
import { SpecPage, newSpecPage } from '@stencil/core/testing';

import { OdsThemeColorIntentList } from '@ovhcloud/ods-theming';
import { Osds<%= componentName %> } from './osds-<%= name %>';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';

describe('spec:osds-<%= name %>', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: Osds<%= componentName %>;
  let controller: Ods<%= componentName %>Controller;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<Ods<%= componentName %>Attributes> } = {}) {
    const minimalAttributes: Ods<%= componentName %>Attributes = OdsCreateAttributes(attributes, ods<%= componentName %>BaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<Ods<%= componentName %>Attributes>(minimalAttributes, ods<%= componentName %>DefaultAttributes);

    page = await newSpecPage({
      components: [Osds<%= componentName %>],
      html: `<osds-<%= name %> ${OdsStringAttributes2Str(stringAttributes)}>My <%= componentName %></osds-<%= name %>>`,
    });

    root = page.root;
    instance = page.rootInstance;
    controller = (Ods<%= componentName %>Controller as unknown as jest.SpyInstance<Ods<%= componentName %>Controller, unknown[]>).mock.instances[0];
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

    // Attributes Unit testing
  });

  describe('controller', () => {
    it('should call controller.validateAttributes', async () => {
      await setup();
      expect(controller.validateAttributes).toHaveBeenCalledWith();
      expect(controller.validateAttributes).toHaveBeenCalledTimes(1);
    });
  });
});
