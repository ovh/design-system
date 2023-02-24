import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { OsdsSelectGroup } from './osds-select-group';
import {
  OdsCreateDefaultValidityState,
  OdsSelectGroupAttributes,
  OdsLogger,
} from '@ovhcloud/ods-core';
import {
  OdsMockNativeMethod, OdsMockPropertyDescriptor,
} from '@ovhcloud/ods-testing';

const logger = new OdsLogger('osds-select-group-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => OdsCreateDefaultValidityState());

describe('spec:osds-select-group', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsSelectGroup;
  let slotPlaceholder: HTMLElement;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ html = `` }: { attributes?: Partial<OdsSelectGroupAttributes>, html?: string }) {
    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectGroup],
      html: `<osds-select-group>${html}</osds-select-group>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root.shadowRoot.querySelector('slot');
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async () => {
      await setup({ attributes: {} });
      expect(slotPlaceholder).toBeTruthy();
    });
  });
});
