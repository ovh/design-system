import type { SpecPage } from '@stencil/core/testing';

import { OdsLogger } from '@ovhcloud/ods-common-core';
import { OdsMockNativeMethod, OdsMockPropertyDescriptor } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { OsdsSelectGroup } from './osds-select-group';

const logger = new OdsLogger('osds-select-group-spec');

// mock validity property that does not exist when stencil mock HTMLInputElement
OdsMockPropertyDescriptor(HTMLInputElement.prototype, 'validity', () => ({
  badInput: false,
  customError: false,
  forbiddenValue: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false,
}));

describe('spec:osds-select-group', () => {
  logger.log('init');
  let page: SpecPage;
  let instance: OsdsSelectGroup;
  let slotPlaceholder: HTMLElement | null | undefined;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ html = '' }: { html?: string } = {}) {
    // mock setCustomValidity method that does not exist when stencil mock HTMLInputElement
    OdsMockNativeMethod(HTMLInputElement.prototype, 'setCustomValidity', jest.fn());

    page = await newSpecPage({
      components: [OsdsSelectGroup],
      html: `<osds-select-group>${html}</osds-select-group>`,
    });

    instance = page.rootInstance;
    slotPlaceholder = page.root?.shadowRoot?.querySelector('slot');
  }

  it('should render', async() => {
    await setup({});
    expect(page.root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a placeholder slot', async() => {
      await setup();
      expect(slotPlaceholder).toBeTruthy();
    });
  });
});
