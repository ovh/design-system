import type { OdsFormAttribute } from './interfaces/attributes';
import type { SpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { newSpecPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OsdsForm } from './osds-form';

describe('spec:osds-form', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsForm;

  async function setup({ attributes= {} }: { attributes?: Partial<OdsFormAttribute> }): Promise<void> {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsFormAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsForm],
      html: `<osds-form ${odsStringAttributes2Str(stringAttributes)}></osds-form>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async() => {
    await setup({});
    expect(root?.shadowRoot).toBeTruthy();
    expect(page.rootInstance).toBeTruthy();
  });

  describe('attributes', () => {
    const config = {
      instance: (): OsdsForm => instance,
      page: (): SpecPage => page,
      root: (): SpecPage['root'] => page.root,
      wait: (): Promise<void> => page.waitForChanges(),
    };

    describe('dummy', () => {
      odsUnitTestAttribute<OdsFormAttribute, 'dummy'>({
        defaultValue: DEFAULT_ATTRIBUTE.dummy,
        name: 'dummy',
        newValue: 'dummy new',
        setup: (value) => setup({ attributes: { ['dummy']: value } }),
        value: 'dummy old',
        ...config,
      });
    });
  });
});
