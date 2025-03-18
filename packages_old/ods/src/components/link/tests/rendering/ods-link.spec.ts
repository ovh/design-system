import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_LINK_COLOR, ODS_LINK_ICON_ALIGNMENT, OdsLink } from '../../src';

describe('ods-link rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;
  let iconElement: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsLink],
      html,
    });

    root = page.root;
    iconElement = root?.shadowRoot?.querySelector('ods-icon') ?? undefined;
  }

  describe('color', () => {
    it('should be reflected', async() => {
      const colorValue = ODS_LINK_COLOR.primary;

      await setup(`<ods-link color="${colorValue}"></ods-link>`);

      expect(root?.getAttribute('color')).toBe(colorValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('color')).toBe( ODS_LINK_COLOR.primary);
    });
  });

  describe('disabled', () => {
    it('should be reflected', async() => {
      await setup(`<ods-link is-disabled></ods-link>`);

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('is-disabled')).toBe(null);
    });
  });

  describe('download', () => {
    it('should be reflected', async() => {
      const downloadValue = 'filename';

      await setup(`<ods-link download="${downloadValue}"></ods-link>`);

      expect(root?.getAttribute('download')).toBe(downloadValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('download')).toBe(null);
    });
  });

  describe('href', () => {
    it('should be reflected', async() => {
      const hrefValue = 'https://www.ovhcloud.com/fr/';

      await setup(`<ods-link href="${hrefValue}"></ods-link>`);

      expect(root?.getAttribute('href')).toBe(hrefValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('href')).toBe(null);
    });
  });

  describe('icon', () => {
    it('should be reflected', async() => {
      const iconValue = 'warning';

      await setup(`<ods-link icon="${iconValue}"></ods-link>`);

      expect(root?.getAttribute('icon')).toBe(iconValue);
      expect(iconElement).toBeDefined();
      expect(iconElement?.getAttribute('name')).toBe(iconValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('icon')).toBe(null);
      expect(iconElement).not.toBeDefined();
    });
  });

  describe('iconAlignment', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-link icon-alignment="${dummyValue}">Dummy Link</ods-link>`);

      expect(root?.getAttribute('icon-alignment')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-link>Dummy Link</ods-link>');

      expect(root?.getAttribute('icon-alignment')).toBe(ODS_LINK_ICON_ALIGNMENT.right);
    });
  });

  describe('label', () => {
    it('should be reflected', async() => {
      const labelValue = 'lorem ipsum';

      await setup(`<ods-link label="${labelValue}"></ods-link>`);

      expect(root?.getAttribute('label')).toBe(labelValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('label')).toBe(null);
    });
  });

  describe('referrerPolicy', () => {
    it('should be reflected', async() => {
      const referrerpolicyValue = 'origin';

      await setup(`<ods-link referrerpolicy="${referrerpolicyValue}"></ods-link>`);

      expect(root?.getAttribute('referrerpolicy')).toBe(referrerpolicyValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('referrerpolicy')).toBe(null);
    });
  });

  describe('rel', () => {
    it('should be reflected', async() => {
      const relValue = 'stylesheet';

      await setup(`<ods-link rel="${relValue}"></ods-link>`);

      expect(root?.getAttribute('rel')).toBe(relValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('rel')).toBe(null);
    });
  });

  describe('target', () => {
    it('should be reflected', async() => {
      const targetValue = '_blank';

      await setup(`<ods-link target="${targetValue}"></ods-link>`);

      expect(root?.getAttribute('target')).toBe(targetValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-link></ods-link>`);

      expect(root?.getAttribute('target')).toBe(null);
    });
  });
});
