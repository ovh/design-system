import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_BUTTON_COLOR, ODS_BUTTON_ICON_ALIGNMENT, ODS_BUTTON_SIZE, ODS_BUTTON_VARIANT, OdsButton } from '../../src';

describe('ods-button rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsButton],
      html,
    });

    root = page.root;
  }

  describe('color', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button color="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('color')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('color')).toBe(ODS_BUTTON_COLOR.primary);
    });
  });

  describe('icon', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button icon="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('icon')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-button></ods-button>');

      expect(root?.getAttribute('icon')).toBeNull();
    });
  });

  describe('iconAlignment', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button icon-alignment="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('icon-alignment')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('icon-alignment')).toBe(ODS_BUTTON_ICON_ALIGNMENT.left);
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-button is-disabled>Dummy Button</ods-button>');

      expect(root?.getAttribute('disabled')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('disabled')).toBeNull();
    });
  });

  describe('isLoading', () => {
    it('should be reflected', async() => {
      await setup('<ods-button is-loading>Dummy Button</ods-button>');

      expect(root?.getAttribute('is-loading')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('is-loading')).toBeNull();
    });
  });

  describe('label', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button label="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-button></ods-button>');

      expect(root?.getAttribute('label')).toBeNull();
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button size="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('size')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('size')).toBe(ODS_BUTTON_SIZE.md);
    });
  });

  describe('type', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button type="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('type')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('type')).toBe('button');
    });
  });

  describe('variant', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-button variant="${dummyValue}">Dummy Button</ods-button>`);

      expect(root?.getAttribute('variant')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-button>Dummy Button</ods-button>');

      expect(root?.getAttribute('variant')).toBe(ODS_BUTTON_VARIANT.default);
    });
  });
});
