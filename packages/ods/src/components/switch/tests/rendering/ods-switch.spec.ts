import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_SWITCH_SIZE, OdsSwitch } from '../../src';

describe('ods-switch rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsSwitch],
      html,
    });

    root = page.root;
  }

  describe('hasError', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch has-error></ods-switch>');

      expect(root?.getAttribute('has-error')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch></ods-switch>');

      expect(root?.getAttribute('has-error')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch is-disabled></ods-switch>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch></ods-switch>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isRequired', () => {
    it('should be reflected', async() => {
      await setup('<ods-switch is-required></ods-switch>');

      expect(root?.getAttribute('is-required')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch></ods-switch>');

      expect(root?.getAttribute('is-required')).toBeNull();
    });
  });

  describe('name', () => {
    it('should be reflected', async() => {
      const nameValue = 'name';

      await setup(`<ods-switch name="${nameValue}"></ods-switch>`);

      expect(root?.getAttribute('name')).toBe(nameValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-switch></ods-switch>');

      expect(root?.getAttribute('name')).toBeNull();
    });
  });

  describe('size', () => {
    it('should be reflected', async() => {
      const sizeValue = ODS_SWITCH_SIZE.sm;

      await setup(`<ods-switch size="${sizeValue}"></ods-switch>`);

      expect(root?.getAttribute('size')).toBe(sizeValue);
    });

    it('should be set by default', async() => {
      await setup('<ods-switch></ods-switch>');

      expect(root?.getAttribute('size')).toBe(ODS_SWITCH_SIZE.md);
    });
  });
});
