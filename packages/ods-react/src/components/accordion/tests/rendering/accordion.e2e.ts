import 'jest-puppeteer';
import { type Page } from 'puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';
import { ACCORDION_EMPHASES } from '../../src/constants/accordion-emphasis';

type Styles = Record<string, Record<string, string>>;

// The accordions of the emphases story: no emphasis, an unknown one, then every emphasis.
const EMPHASIS_CASES = ['none', 'expand-icon-left', ...ACCORDION_EMPHASES];
const MODES = ['multiple', 'single'];
const PARTS = ['item-open', 'trigger-open', 'content-open', 'item-closed', 'trigger-closed', 'item-disabled', 'trigger-disabled'];
const PROPERTIES = [
  'background-color',
  'border-top-color', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
  'flex-direction', 'margin-top', 'opacity', 'padding-top',
];
const TRANSPARENT = 'rgba(0, 0, 0, 0)';

async function getStyles(page: Page): Promise<Styles> {
  return page.evaluate((properties: string[]) => {
    return Object.fromEntries(Array.from(document.querySelectorAll('[data-testid]')).map((el) => {
      const style = getComputedStyle(el);
      return [
        el.getAttribute('data-testid'),
        Object.fromEntries(properties.map((property) => [property, style.getPropertyValue(property)])),
      ];
    }));
  }, PROPERTIES);
}

describe('Accordion rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-content"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-item"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="accordion-trigger"]')).not.toBeNull();
  });

  describe('border role', () => {
    it('should line the items with border-container, not the neutral status border', async() => {
      await gotoStory(page, 'rendering/border-role');

      const item = await page.waitForSelector('[data-testid="border-role-item"]');

      expect(await item!.evaluate((el: Element) => getComputedStyle(el).borderTopColor)).toBe('rgb(1, 2, 3)');
    });
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const accordion = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await accordion?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  describe('emphasis', () => {
    let styles: Styles;

    async function loadEmphases(): Promise<void> {
      await page.mouse.move(0, 0);
      await gotoStory(page, 'rendering/emphases');
      await page.waitForSelector('[data-testid="low-single-trigger-disabled"]');
    }

    // The tests below only read these styles: the ones that click or focus load the story again.
    beforeAll(async() => {
      await loadEmphases();
      styles = await getStyles(page);
    });

    it('should render without emphasis as medium', () => {
      MODES.forEach((mode) => {
        PARTS.forEach((part) => {
          expect(styles[`none-${mode}-${part}`]).toEqual(styles[`medium-${mode}-${part}`]);
        });
      });
    });

    it('should render an unknown emphasis as medium, without picking another modifier class', () => {
      MODES.forEach((mode) => {
        PARTS.forEach((part) => {
          expect(styles[`expand-icon-left-${mode}-${part}`]).toEqual(styles[`medium-${mode}-${part}`]);
        });
      });
    });

    it('should render medium as the default rendering: borders on the raised surface', async() => {
      const background = await getTokenColor(page, '--ods-semantic-color-surface-raised');
      const borderColor = await getTokenColor(page, '--ods-semantic-color-border-container');
      const borderColorHover = await getTokenColor(page, '--ods-semantic-color-interaction-control-hover');

      MODES.forEach((mode) => {
        const open = styles[`medium-${mode}-item-open`];
        const closed = styles[`medium-${mode}-item-closed`];

        expect(open['border-top-color']).toBe(borderColorHover);
        expect(closed['border-top-color']).toBe(borderColor);
        expect(closed['border-left-width']).toBe('1px');
        expect(closed['margin-top']).toBe('-1px');
        expect(open['background-color']).toBe(background);
        expect(styles[`medium-${mode}-trigger-open`]['background-color']).toBe(TRANSPARENT);
        expect(styles[`medium-${mode}-content-open`]['background-color']).toBe(TRANSPARENT);
        expect(styles[`medium-${mode}-content-open`]['padding-top']).toBe('0px');
      });
    });

    it('should render high with the trigger on the item surface, a tinted content and the medium borders', async() => {
      const tint = await getTokenColor(page, '--ods-semantic-color-surface-muted');

      MODES.forEach((mode) => {
        ['item-open', 'item-closed', 'item-disabled'].forEach((part) => {
          expect(styles[`high-${mode}-${part}`]).toEqual(styles[`medium-${mode}-${part}`]);
        });

        ['trigger-open', 'trigger-closed', 'trigger-disabled'].forEach((part) => {
          expect(styles[`high-${mode}-${part}`]['background-color']).toBe(TRANSPARENT);
        });
        expect(styles[`high-${mode}-content-open`]['background-color']).toBe(tint);
        expect(styles[`high-${mode}-content-open`]['padding-top']).toBe(styles[`high-${mode}-trigger-open`]['padding-top']);
      });

      expect(styles['high-multiple-content-disabled']['background-color']).toBe(TRANSPARENT);
    });

    it('should render low without any border nor background, the items separated by spacing', async() => {
      const gap = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--ods-semantic-size-space-gap-block').trim());

      MODES.forEach((mode) => {
        const open = styles[`low-${mode}-item-open`];
        const closed = styles[`low-${mode}-item-closed`];
        const disabled = styles[`low-${mode}-item-disabled`];

        [open, closed, disabled].forEach((item) => {
          expect(item['border-top-width']).toBe('0px');
          expect(item['border-left-width']).toBe('0px');
          expect(item['border-right-width']).toBe('0px');
          expect(item['border-bottom-width']).toBe('0px');
          expect(item['background-color']).toBe(TRANSPARENT);
        });

        expect(open['margin-top']).toBe('0px');
        expect(closed['margin-top']).toBe(gap);
        expect(disabled['margin-top']).toBe(gap);

        ['trigger-open', 'trigger-closed', 'trigger-disabled', 'content-open'].forEach((part) => {
          expect(styles[`low-${mode}-${part}`]['background-color']).toBe(TRANSPARENT);
        });
      });
    });

    it('should keep the disabled state and the expand icon position on every emphasis', async() => {
      const disabledTriggers = await page.$$eval('[data-testid$="-trigger-disabled"]', (els) => els.map((el) => (el as HTMLButtonElement).disabled));

      expect(disabledTriggers).toHaveLength(EMPHASIS_CASES.length * MODES.length);
      expect(disabledTriggers.every(Boolean)).toBe(true);

      ACCORDION_EMPHASES.forEach((emphasis) => {
        MODES.forEach((mode) => {
          expect(styles[`${emphasis}-${mode}-item-disabled`]['opacity']).toBe('0.5');
          expect(styles[`${emphasis}-${mode}-trigger-closed`]['flex-direction']).toBe('row-reverse');
          expect(styles[`${emphasis}-${mode}-trigger-open`]['flex-direction']).toBe('row');
        });
      });
    });

    it('should keep the multiple and single modes on every emphasis', async() => {
      await loadEmphases();

      const triggers = ACCORDION_EMPHASES.flatMap((emphasis) => MODES.map((mode) => `[data-testid="${emphasis}-${mode}-trigger-closed"]`));

      const closedItems = ACCORDION_EMPHASES.flatMap((emphasis) => MODES.map((mode) => `${emphasis}-${mode}-item-closed`));

      await triggers.reduce((previous, trigger) => previous.then(() => page.click(trigger)), Promise.resolve());
      await page.waitForFunction((testIds: string[]) => testIds
        .every((testId) => document.querySelector(`[data-testid="${testId}"]`)!.getAttribute('data-state') === 'open'), {}, closedItems);

      const states = await page.$$eval('[data-testid$="-item-open"], [data-testid$="-item-closed"]', (items) => Object.fromEntries(items.map((item) => [
        item.getAttribute('data-testid'),
        item.getAttribute('data-state'),
      ])));

      ACCORDION_EMPHASES.forEach((emphasis) => {
        expect(states[`${emphasis}-multiple-item-closed`]).toBe('open');
        expect(states[`${emphasis}-multiple-item-open`]).toBe('open');
        expect(states[`${emphasis}-single-item-closed`]).toBe('open');
        expect(states[`${emphasis}-single-item-open`]).toBe('closed');
      });
    });

    it('should keep a visible focus outline on the trigger of every emphasis', async() => {
      await loadEmphases();
      await page.keyboard.press('Tab');

      const outlines = await page.evaluate((emphases: string[]) => emphases.map((emphasis) => {
        const trigger = document.querySelector(`[data-testid="${emphasis}-single-trigger-open"]`) as HTMLButtonElement;
        trigger.focus();
        const style = getComputedStyle(trigger);
        return { focusVisible: trigger.matches(':focus-visible'), style: style.outlineStyle, width: style.outlineWidth };
      }), [...ACCORDION_EMPHASES]);

      outlines.forEach((outline) => {
        expect(outline.focusVisible).toBe(true);
        expect(outline.style).not.toBe('none');
        expect(outline.width).not.toBe('0px');
      });
    });
  });
});
