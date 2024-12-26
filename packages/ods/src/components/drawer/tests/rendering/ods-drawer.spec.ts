import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_DRAWER_POSITION, OdsDrawer } from '../../src';

describe('ods-drawer rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsDrawer],
      html,
    });

    root = page.root;
  }

  describe('attributes', () => {
    describe('isOpen', () => {
      it('should be reflected', async() => {
        const isOpenValue = 'true';

        await setup(`<ods-drawer is-open="${isOpenValue}"></ods-drawer>`);

        expect(root?.getAttribute('is-open')).toBe(isOpenValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-drawer></ods-drawer>');

        expect(root?.getAttribute('is-open')).toBeNull();
      });
    });

    describe('position', () => {
      it('should be reflected', async() => {
        const positionValue = ODS_DRAWER_POSITION.bottom;

        await setup(`<ods-drawer position="${positionValue}"></ods-drawer>`);

        expect(root?.getAttribute('position')).toBe(positionValue);
      });

      it('should not be set by default', async() => {
        await setup('<ods-drawer></ods-drawer>');

        expect(root?.getAttribute('position')).toBe(ODS_DRAWER_POSITION.left);
      });
    });
  });
});
