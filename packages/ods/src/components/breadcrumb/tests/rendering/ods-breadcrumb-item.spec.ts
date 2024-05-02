import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { OdsBreadcrumbItem } from '../../src';

describe('ods-breadcrumb-item rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsBreadcrumbItem],
      html,
    });

    root = page.root;
  }

  describe('href', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item href="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('href')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('href')).toBeNull();
    });
  });

  describe('icon', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item icon="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('icon')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('icon')).toBeNull();
    });
  });

  describe('isCollapsed', () => {
    it('should be reflected', async() => {
      await setup('<ods-breadcrumb-item is-collapsed></ods-breadcrumb-item>');

      expect(root?.getAttribute('is-collapsed')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('is-collapsed')).toBeNull();
    });
  });

  describe('isDisabled', () => {
    it('should be reflected', async() => {
      await setup('<ods-breadcrumb-item is-disabled></ods-breadcrumb-item>');

      expect(root?.getAttribute('is-disabled')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('is-disabled')).toBeNull();
    });
  });

  describe('isExpandable', () => {
    it('should be reflected', async() => {
      await setup('<ods-breadcrumb-item is-expandable></ods-breadcrumb-item>');

      expect(root?.getAttribute('is-expandable')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('is-expandable')).toBeNull();
    });
  });

  describe('isLast', () => {
    it('should be reflected', async() => {
      await setup('<ods-breadcrumb-item is-last></ods-breadcrumb-item>');

      expect(root?.getAttribute('is-last')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('is-last')).toBeNull();
    });
  });

  describe('label', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item label="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('label')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('label')).toBeNull();
    });
  });

  describe('referrerpolicy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item referrerpolicy="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('referrerpolicy')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('referrerpolicy')).toBeNull();
    });
  });

  describe('rel', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item rel="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('rel')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('rel')).toBeNull();
    });
  });

  describe('target', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-breadcrumb-item target="${dummyValue}"></ods-breadcrumb-item>`);

      expect(root?.getAttribute('target')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-breadcrumb></ods-breadcrumb>');

      expect(root?.getAttribute('target')).toBeNull();
    });
  });
});
