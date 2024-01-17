import type { OdsSwitchItemAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsSwitchItem } from './osds-switch-item';

describe('spec:osds-switch-item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitchItem;
  const baseAttribute = { checked: false, id: '', value: '' };

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSwitchItemAttribute> } = {}): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSwitchItemAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSwitchItem],
      html: `<osds-switch-item ${odsStringAttributes2Str(stringAttributes)}>My Switch Item</osds-switch-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', (): void => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('checked', () => {
      odsUnitTestAttribute<OdsSwitchItemAttribute, 'checked'>({
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        name: 'checked',
        newValue: false,
        setup: (value) => setup({ attributes: { ['checked']: value } }),
        value: true,
        ...config,
      });
    });
  });
});
