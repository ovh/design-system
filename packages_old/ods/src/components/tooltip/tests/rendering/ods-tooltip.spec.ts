import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_TOOLTIP_POSITION, ODS_TOOLTIP_STRATEGY, OdsTooltip } from '../../src';

Object.defineProperty(global, 'CSS', {
  value: {
    escape: (value: string): string => value,
  },
  writable: true,
});

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

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('position', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip position="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('position')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tooltip></ods-tooltip>');

      expect(root?.getAttribute('position')).toBe(ODS_TOOLTIP_POSITION.top);
    });
  });

  describe('strategy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip strategy="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('strategy')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-tooltip></ods-tooltip>');

      expect(root?.getAttribute('strategy')).toBe(ODS_TOOLTIP_STRATEGY.absolute);
    });
  });

  describe('shadowDomTriggerId', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip shadow-dom-trigger-id="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('shadow-dom-trigger-id')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-tooltip></ods-tooltip>');

      expect(root?.getAttribute('shadow-dom-trigger-id')).toBeNull();
    });
  });

  describe('triggerId', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-tooltip trigger-id="${dummyValue}"></ods-tooltip>`);

      expect(root?.getAttribute('trigger-id')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-tooltip></ods-tooltip>');

      expect(root?.getAttribute('trigger-id')).toBeNull();
    });
  });

  describe('withArrow', () => {
    it('should be reflected', async() => {
      await setup('<ods-tooltip with-arrow></ods-tooltip>');

      expect(root?.getAttribute('with-arrow')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-tooltip></ods-tooltip>');

      expect(root?.getAttribute('with-arrow')).toBeNull();
    });
  });
});
