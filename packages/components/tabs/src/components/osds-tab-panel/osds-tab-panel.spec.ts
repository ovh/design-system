import type {SpecPage} from '@stencil/core/testing';
import type {OdsTabPanelAttribute} from './interfaces/attributes';
import type {OdsLoggerSpyReferences} from '@ovhcloud/ods-common-testing';
import {newSpecPage} from '@stencil/core/testing';
import {OdsLogger} from '@ovhcloud/ods-common-core';
import {OdsClearLoggerSpy, OdsInitializeLoggerSpy, odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute} from '@ovhcloud/ods-common-testing';
import {DEFAULT_ATTRIBUTE} from './constants/default-attributes';
import {OsdsTabsPanel} from './osds-tab-panel';

describe('spec:OsdsTabsPanel', () => {
  const baseAttribute = {active: DEFAULT_ATTRIBUTE.active, name: DEFAULT_ATTRIBUTE.name};
  let page: SpecPage;
  let shadowRoot: ShadowRoot | null | undefined;
  let instance: OsdsTabsPanel;
  let root: HTMLElement | undefined;
  let mainSlot: HTMLElement | null | undefined;
  let loggerSpyReferences: OdsLoggerSpyReferences;

  const baseHtml = (slots: { unnamed?: string }) =>
    `
    ${slots.unnamed || slots.unnamed === '' ? slots.unnamed : 'My Panel'}
    `;

  async function setup({attributes = {}, html = ''}: { attributes?: Partial<OdsTabPanelAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsTabPanelAttribute>({...baseAttribute, ...attributes}, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsTabsPanel],
      html: `<osds-tab-panel ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-tab-panel>`,
    });

    instance = page.rootInstance;
    root = page.root;
    shadowRoot = root?.shadowRoot;

    // note: assigned slot not yet available in HtmlMockedElement of stencil : https://github.com/ionic-team/stencil/issues/2830
    mainSlot = shadowRoot?.querySelector('slot:not([name])');
  }

  beforeEach(() => {
    const loggerMocked = new OdsLogger('myLoggerMocked');
    loggerSpyReferences = OdsInitializeLoggerSpy({
      loggerMocked: loggerMocked as never,
      spiedClass: OsdsTabsPanel,
    });
  });

  afterEach(() => {
    OdsClearLoggerSpy(loggerSpyReferences);
    jest.clearAllMocks();
  });

  it('should render', async() => {
    await setup({});
    expect(shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('contents', () => {
    it('should have a main slot', async() => {
      await setup({attributes: {}, html: baseHtml({})});
      expect(mainSlot).toBeTruthy();
    });
  });


  /**
   * @see OdsTabPanelAttributes
   */
  describe('attributes', () => {

    const config = {
      instance: () => instance,
      page: () => page,
      root: () => page.root,
      wait: () => page.waitForChanges(),
    };

    describe('active', () => {
      odsUnitTestAttribute<OdsTabPanelAttribute, 'active'>({
        name: 'active',
        defaultValue: DEFAULT_ATTRIBUTE.active,
        newValue: false,
        value: true,
        setup: (value) => setup({attributes: {['active']: value}}),
        ...config,
      });
    });

    describe('name', () => {
      odsUnitTestAttribute<OdsTabPanelAttribute, 'name'>({
        name: 'name',
        defaultValue: DEFAULT_ATTRIBUTE.name,
        newValue: 'a',
        value: 'b',
        setup: (value) => setup({attributes: {['name']: value}}),
        ...config,
      });
    });

  });

});
