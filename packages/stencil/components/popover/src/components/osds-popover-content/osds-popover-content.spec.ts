jest.mock('@ovhcloud/ods-core/src/components/popover/popover/ods-popover-content-controller'); // keep jest.mock before any import
jest.mock('@ovhcloud/ods-cdk/src/components/surface/ocdk-is-surface'); // keep jest.mock before any import

import {
  OdsComponentAttributes2StringAttributes,
  OdsPopoverContentAttributes,
  odsPopoverContentDefaultAttributes,
  OdsLogger,
  OdsPopoverContentController
} from '@ovhcloud/ods-core';
import {
  OdsPopoverContentCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPopoverContent } from './osds-popover-content';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';

const logger = new OdsLogger('osds-popover-content-spec');

describe('spec:osds-popover-content', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsPopoverContent;
  let controller: OdsPopoverContentController

  function mockSurfaceElements() {
    ocdkIsSurface.mockImplementation(() => true);
  }

  function findElements(){

  }

  afterEach(() => {
    jest.clearAllMocks();
  })

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverContentAttributes>, html?: string }) {
    const minimalAttributes: OdsPopoverContentAttributes = OdsPopoverContentCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverContentAttributes>(minimalAttributes, odsPopoverContentDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPopoverContent],
      html: `<osds-popover-content ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-popover-content>`,
    });

    instance = page.rootInstance;

    controller = (OdsPopoverContentController as unknown as jest.SpyInstance<OdsPopoverContentController, unknown[]>).mock.instances[ 0 ];

    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});

