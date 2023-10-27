import type { OdsInteractiveSurfaceAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';

import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';

import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsInteractiveSurface } from './osds-interactive-surface';


describe('spec:osds-interactive-surface', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsInteractiveSurface;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsInteractiveSurfaceAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsInteractiveSurfaceAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsInteractiveSurface],
      html: `<osds-interactive-surface ${odsStringAttributes2Str(stringAttributes)}>My InteractiveSurface</osds-interactive-surface>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(instance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsInteractiveSurface => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<SpecPage> => page.waitForChanges(),
    };

    describe('error', () => {
      odsUnitTestAttribute<OdsInteractiveSurfaceAttribute, 'error'>({
        name: 'error',
        defaultValue: DEFAULT_ATTRIBUTE.error,
        newValue: '',
        value: 'There was an error with your message',
        setup: (value) => setup({ attributes: { ['error']: value } }),
        ...config,
      });
    });

    describe('inline', () => {
      odsUnitTestAttribute<OdsInteractiveSurfaceAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });
    });
  });
});
