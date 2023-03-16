jest.mock('@ovhcloud/ods-core/src/components/popover/popover/ods-popover-controller'); // keep jest.mock before any import
jest.mock('@ovhcloud/ods-cdk/src/components/surface/ocdk-is-surface'); // keep jest.mock before any import

import {
  OdsComponentAttributes2StringAttributes,
  OdsPopoverAttributes,
  odsPopoverDefaultAttributes,
  OdsLogger,
  OdsPopoverController
} from '@ovhcloud/ods-core';
import {
  OdsPopoverCreateAttributes,
  OdsStringAttributes2Str,
  odsUnitTestAttribute,
} from '@ovhcloud/ods-testing';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsPopover } from './osds-popover';
import { getAttributeContextOptions } from '@ovhcloud/ods-stencil/libraries/stencil-testing';
import { ocdkIsSurface } from '@ovhcloud/ods-cdk';

const logger = new OdsLogger('osds-popover-spec');

describe('spec:osds-popover', () => {
  logger.log('init');

  let page: SpecPage;
  let instance: OsdsPopover;
  let controller: OdsPopoverController

  function mockSurfaceElements() {
    ocdkIsSurface.mockImplementation(() => true);
  }

  function findElements(){

  }

  afterEach(() => {
    jest.clearAllMocks();
  })

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsPopoverAttributes>, html?: string }) {
    const minimalAttributes: OdsPopoverAttributes = OdsPopoverCreateAttributes(attributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsPopoverAttributes>(minimalAttributes, odsPopoverDefaultAttributes);

    page = await newSpecPage({
      components: [OsdsPopover],
      html: `<osds-popover ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-popover>`,
    });

    instance = page.rootInstance;

    controller = (OdsPopoverController as unknown as jest.SpyInstance<OdsPopoverController, unknown[]>).mock.instances[ 0 ];

    findElements();
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });
});

