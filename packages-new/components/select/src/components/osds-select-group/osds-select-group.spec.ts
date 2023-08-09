import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsMockPropertyDescriptor, OdsMockNativeMethod } from '@ovhcloud/ods-common-testing';
import { DEFAULT_VALIDITY_STATE } from '../osds-select/constants/default-validity-state';
import { OsdsSelectGroup } from './osds-select-group';

const logger = new OdsLogger('osds-select-group-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => DEFAULT_VALIDITY_STATE);

describe('spec:osds-select-group', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsSelectGroup;
  let slotPlaceholder: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ html = `` }: { html?: string } = {}) {
    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, "setCustomValidity", jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectGroup],
      html: `<osds-select-group>${html}</osds-select-group>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root?.shadowRoot?.querySelector('slot');
  }

  it('should render', async () => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async () => {
      await setup();
      expect(slotPlaceholder).toBeTruthy();
    });
  });
});
