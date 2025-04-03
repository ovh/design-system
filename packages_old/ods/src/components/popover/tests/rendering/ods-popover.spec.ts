import { type SpecPage, newSpecPage } from '@stencil/core/testing';
import { ODS_POPOVER_POSITION, ODS_POPOVER_STRATEGY, OdsPopover } from '../../src';

Object.defineProperty(global, 'CSS', {
  value: {
    escape: (value: string): string => value,
  },
  writable: true,
});

describe('ods-popover rendering', () => {
  let page: SpecPage;
  let root: HTMLElement | undefined;

  async function setup(html: string): Promise<void> {
    page = await newSpecPage({
      components: [OdsPopover],
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

      await setup(`<ods-popover position="${dummyValue}"></ods-popover>`);

      expect(root?.getAttribute('position')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-popover></ods-popover>');

      expect(root?.getAttribute('position')).toBe(ODS_POPOVER_POSITION.top);
    });
  });

  describe('strategy', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-popover strategy="${dummyValue}"></ods-popover>`);

      expect(root?.getAttribute('strategy')).toBe(dummyValue);
    });

    it('should render with expected default value', async() => {
      await setup('<ods-popover></ods-popover>');

      expect(root?.getAttribute('strategy')).toBe(ODS_POPOVER_STRATEGY.absolute);
    });
  });

  describe('shadowDomTriggerId', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-popover shadow-dom-trigger-id="${dummyValue}"></ods-popover>`);

      expect(root?.getAttribute('shadow-dom-trigger-id')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-popover></ods-popover>');

      expect(root?.getAttribute('shadow-dom-trigger-id')).toBeNull();
    });
  });

  describe('triggerId', () => {
    it('should be reflected', async() => {
      const dummyValue = 'dummy value';

      await setup(`<ods-popover trigger-id="${dummyValue}"></ods-popover>`);

      expect(root?.getAttribute('trigger-id')).toBe(dummyValue);
    });

    it('should not be set by default', async() => {
      await setup('<ods-popover></ods-popover>');

      expect(root?.getAttribute('trigger-id')).toBeNull();
    });
  });

  describe('withArrow', () => {
    it('should be reflected', async() => {
      await setup('<ods-popover with-arrow></ods-popover>');

      expect(root?.getAttribute('with-arrow')).toBe('');
    });

    it('should not be set by default', async() => {
      await setup('<ods-popover></ods-popover>');

      expect(root?.getAttribute('with-arrow')).toBeNull();
    });
  });
});
