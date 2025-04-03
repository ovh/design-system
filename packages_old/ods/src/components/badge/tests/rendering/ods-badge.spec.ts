import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_BADGE_COLOR, ODS_BADGE_ICON_ALIGNMENT, ODS_BADGE_SIZE, OdsBadge } from '../../src';

describe('ods-badge rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsBadge],
      html,
    });

    root = page.root;
  }

  describe('color', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-badge color="${dummyValue}" label="Dummy Badge"></ods-badge>`);

      expect(root?.getAttribute('color')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-badge label="Dummy Badge"></ods-badge>');

      expect(root?.getAttribute('color')).toBe(ODS_BADGE_COLOR.information);
    });
  });

  describe('icon', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-badge icon="${dummyValue}" label="Dummy Badge"></ods-badge>`);

      expect(root?.getAttribute('icon')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-badge label="Dummy Badge"></ods-badge>');

      expect(root?.getAttribute('icon')).toBeNull();
    });
  });

  describe('iconAlignment', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-badge icon-alignment="${dummyValue}">Dummy Badge</ods-badge>`);

      expect(root?.getAttribute('icon-alignment')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-badge>Dummy Button</ods-badge>');

      expect(root?.getAttribute('icon-alignment')).toBe(ODS_BADGE_ICON_ALIGNMENT.left);
    });
  });

  describe('label', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-badge label="${dummyValue}"></ods-badge>`);

      expect(root?.getAttribute('label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-badge></ods-badge>');

      expect(root?.getAttribute('label')).toBeNull();
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-badge size="${dummyValue}" label="Dummy Badge"></ods-badge>`);

      expect(root?.getAttribute('size')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-badge label="Dummy Badge"></ods-badge>');

      expect(root?.getAttribute('size')).toBe(ODS_BADGE_SIZE.md);
    });
  });
});
