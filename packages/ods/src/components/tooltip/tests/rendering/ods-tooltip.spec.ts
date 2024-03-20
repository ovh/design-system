import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_TOOLTIP_POSITION, OdsTooltip } from '../../src';

describe('ods-tooltip rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsTooltip],
      html,
    });

    root = page.root;
  }

  describe('position', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip position="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('position')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup(`<ods-tooltip></ods-tooltip>`);

      expect(root?.getAttribute('position')).toBe(ODS_TOOLTIP_POSITION.top);
    });
  });

  describe('triggerId', () => {
    it('should be reflected', async () => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip triggerId="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('triggerId')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup(`<ods-tooltip></ods-tooltip>`);

      expect(root?.getAttribute('triggerId')).toBeNull();
    });
  });

  describe('withArrow', () => {
    it('should be reflected', async () => {
      await setup(`<ods-tooltip withArrow></ods-tooltip>`);

      expect(root?.getAttribute('withArrow')).not.toBeNull();
    });

    it('should not be set by default', async() => {
      await setup(`<ods-tooltip></ods-tooltip>`);

      expect(root?.getAttribute('withArrow')).toBeNull();
    });
  });
});
