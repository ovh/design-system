import type {SpecPage} from '@stencil/core/testing';
import type {OdsSwitchItemAttribute} from './interfaces/attributes';
import {newSpecPage} from '@stencil/core/testing';
import {OsdsSwitchItem} from './osds-switch-item';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';

describe('spec:osds-switch-item', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSwitchItem;
  let radio: HTMLElement;
  const baseAttribute = {checked: false, id: '', value: ''};

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({attributes = {}}: { attributes?: Partial<OdsSwitchItemAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSwitchItemAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSwitchItem],
      html: `<osds-switch-item ${odsStringAttributes2Str(stringAttributes)}>My Switch Item</osds-switch-item>`,
    });

    root = page.root;
    instance = page.rootInstance;
    const htmlSwitchItem = document.querySelector('osds-switch-item') as HTMLElement;
    radio = htmlSwitchItem?.shadowRoot?.querySelector('osds-radio');
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('checked', () => {
      odsUnitTestAttribute<OdsSwitchItemAttribute, 'checked'>({
        name: 'checked',
        defaultValue: DEFAULT_ATTRIBUTE.checked,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['checked']: value}}),
        ...config,
      });
    });
  });
});
