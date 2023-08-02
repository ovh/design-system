import type { SpecPage } from '@stencil/core/testing';
import type { OdsSpinnerAttribute } from './interfaces/attributes';
import { newSpecPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str, odsUnitTestAttribute } from '@ovhcloud/ods-common-testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { ODS_SPINNER_MODE, ODS_SPINNER_MODES } from './constants/spinner-mode';
import { ODS_SPINNER_SIZE, ODS_SPINNER_SIZES } from './constants/spinner-size';
import { OsdsSpinner } from './osds-spinner';

describe('spec:osds-spinner', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let instance: OsdsSpinner;

  afterEach(() => {
    jest.clearAllMocks();
  });

  async function setup({ attributes = {} }: { attributes?: Partial<OdsSpinnerAttribute> } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSpinnerAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newSpecPage({
      components: [OsdsSpinner],
      html: `<osds-spinner ${odsStringAttributes2Str(stringAttributes)}>My Spinner</osds-spinner>`,
    });

    root = page.root;
    instance = page.rootInstance;
  }

  it('should render', async () => {
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

    describe('inline', () => {
      odsUnitTestAttribute<OdsSpinnerAttribute, 'inline'>({
        name: 'inline',
        defaultValue: DEFAULT_ATTRIBUTE.inline,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['inline']: value } }),
        ...config,
      });

      it('should be inline if attribute is added', async () => {
        await setup({ attributes: { inline: true } });
        expect(instance.inline).toBe(true);
      });
    });

    describe('contrasted', () => {
      odsUnitTestAttribute<OdsSpinnerAttribute, 'contrasted'>({
        name: 'contrasted',
        defaultValue: DEFAULT_ATTRIBUTE.contrasted,
        newValue: false,
        value: true,
        setup: (value) => setup({ attributes: { ['contrasted']: value } }),
        ...config,
      });

      it('should be contrasted if attribute is added', async () => {
        await setup({ attributes: { contrasted: true } });
        expect(instance.contrasted).toBe(true);
      });
    });

    describe('size', () => {
      odsUnitTestAttribute<OdsSpinnerAttribute, 'size'>({
        name: 'size',
        defaultValue: DEFAULT_ATTRIBUTE.size,
        newValue: ODS_SPINNER_SIZE.lg,
        value: ODS_SPINNER_SIZE.md,
        setup: (value) => setup({ attributes: { ['size']: value } }),
        ...config,
      });

      it('should set a size if attribute is added', async () => {
        const randomSize = ODS_SPINNER_SIZES[Math.floor(Math.random() * ODS_SPINNER_SIZES.length)];
        await setup({ attributes: { size: randomSize } });
        expect(instance.size).toBe(randomSize);
      });
    });

    describe('mode', () => {
      odsUnitTestAttribute<OdsSpinnerAttribute, 'mode'>({
        name: 'mode',
        defaultValue: DEFAULT_ATTRIBUTE.mode,
        newValue: ODS_SPINNER_MODE.indeterminate,
        value: ODS_SPINNER_MODE.indeterminate,
        setup: (value) => setup({ attributes: { ['mode']: value } }),
        ...config,
      });

      it('should set a mode if attribute is added', async () => {
        const randomMode = ODS_SPINNER_MODES[Math.floor(Math.random() * ODS_SPINNER_MODES.length)];
        await setup({ attributes: { mode: randomMode } });
        expect(instance.mode).toBe(randomMode);
      });
    });
  });
});
