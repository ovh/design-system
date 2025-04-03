import type { SpecPage } from '@stencil/core/testing';
import { newSpecPage } from '@stencil/core/testing';
import { ODS_DIVIDER_COLOR, ODS_DIVIDER_SPACING, OdsDivider } from '../../src';

describe('ods-divider rendering', () => {
  let hr: Element | null | undefined;
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsDivider],
      html,
    });

    root = page.root;
    hr = root?.shadowRoot?.querySelector('hr.ods-divider__divider');
  }

  describe('props', () => {
    describe('color', () => {
      it('should be reflected', async() => {
        await setup(`<ods-divider color=${ODS_DIVIDER_COLOR.light}></ods-divider>`);

        expect(root?.getAttribute('color')).toBe(ODS_DIVIDER_COLOR.light);
      });

      it('should render with expected default value', async() => {
        await setup('<ods-divider></ods-divider>');

        expect(hr?.classList.contains('ods-divider__divider--light')).toBe(true);
      });

      it('should render with unique color class if set', async() => {
        await setup(`<ods-divider color="${ODS_DIVIDER_COLOR.light}"></ods-divider>`);

        expect(hr?.classList.contains('ods-divider__divider--light')).toBe(true);
        expect(hr?.classList.contains('ods-divider__divider--dark')).toBe(false);

        await setup(`<ods-divider color="${ODS_DIVIDER_COLOR.dark}"></ods-divider>`);

        expect(hr?.classList.contains('ods-divider__divider--light')).toBe(false);
        expect(hr?.classList.contains('ods-divider__divider--dark')).toBe(true);
      });
    });

    describe('spacing', () => {
      it('should be reflected', async() => {
        await setup(`<ods-divider spacing="${ODS_DIVIDER_SPACING._2}"></ods-divider>`);

        expect(root?.getAttribute('spacing')).toBe(ODS_DIVIDER_SPACING._2);
      });

      it('should render with expected default value', async() => {
        await setup('<ods-divider></ods-divider>');

        expect(root?.getAttribute('spacing')).toBe(ODS_DIVIDER_SPACING._2);
      });

      it('should render with unique spacing class if set', async() => {
        await setup(`<ods-divider spacing="${ODS_DIVIDER_SPACING._2}"></ods-divider>`);

        expect(hr?.classList.contains('ods-divider__divider--2')).toBe(true);
        expect(hr?.classList.contains('ods-divider__divider--12')).toBe(false);
        expect(hr?.classList.contains('ods-divider__divider--24')).toBe(false);

        await setup(`<ods-divider spacing="${ODS_DIVIDER_SPACING._12}"></ods-divider>`);

        expect(hr?.classList.contains('ods-divider__divider--2')).toBe(false);
        expect(hr?.classList.contains('ods-divider__divider--12')).toBe(true);
        expect(hr?.classList.contains('ods-divider__divider--24')).toBe(false);

        await setup(`<ods-divider spacing="${ODS_DIVIDER_SPACING._24}"></ods-divider>`);

        expect(hr?.classList.contains('ods-divider__divider--2')).toBe(false);
        expect(hr?.classList.contains('ods-divider__divider--12')).toBe(false);
        expect(hr?.classList.contains('ods-divider__divider--24')).toBe(true);
      });
    });
  });
});
