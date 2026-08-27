import 'jest-puppeteer';
import { type ElementHandle, type Page } from 'puppeteer';
import { gotoStory } from '../../../../helpers/test';
import { LOCALE } from '../../../../utils/locales';
import { INPUT_I18N, TRANSLATION } from '../../src/constants/input-i18n';

type Geometry = {
  borderToTextStart: number,
  containerHeight: number,
  containerWidth: number,
  fieldTopToInnerBorder: number,
  lastActionEndToBorder: number | null,
  textEndToActionsStart: number | null,
  textEndToBorder: number,
};

type EndSlotGeometry = {
  childEndToBorder: number | null,
  containerHeight: number,
  contentEndToBorder: number,
  contentEndToNextPart: number | null,
};

type StartSlotGeometry = {
  childStartToBorder: number | null,
  containerHeight: number,
  contentStartToBorder: number,
};

async function getClearButton(page: Page): Promise<ElementHandle | null> {
  return page.$(`[data-ods="button"][aria-label="${TRANSLATION[INPUT_I18N.clearButton][LOCALE.en]}"]`);
}

/**
 * Measures how close the end adornment sits to the field's border, and to whatever part follows
 * it. Content edges again, so the numbers do not depend on which box pays the inset.
 */
async function getEndSlotGeometry(page: Page, testId: string): Promise<EndSlotGeometry> {
  return page.evaluate((id: string) => {
    const field = document.querySelector(`[data-testid="${id}"]`)!;
    const container = field.parentElement!;
    const slot = container.querySelector('[data-ods="input-end"]')!;
    const containerStyle = getComputedStyle(container);
    const slotStyle = getComputedStyle(slot);
    const containerRect = container.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();

    const innerEnd = containerRect.right - parseFloat(containerStyle.borderRightWidth);
    const contentEnd = slotRect.right - parseFloat(slotStyle.paddingRight);
    const nextPart = slot.nextElementSibling;
    const lastChild = slot.lastElementChild;

    return {
      childEndToBorder: lastChild ? innerEnd - lastChild.getBoundingClientRect().right : null,
      containerHeight: containerRect.height,
      contentEndToBorder: innerEnd - contentEnd,
      contentEndToNextPart: nextPart ? nextPart.getBoundingClientRect().left - contentEnd : null,
    };
  }, testId);
}

/**
 * Measures the in-field spacing of an Input from the *content* edges rather than from the
 * element boxes, so the numbers stay the same whether an inset is paid by the container's
 * padding or by the part's own padding. That is what makes these assertions a parity guard
 * rather than a snapshot of one particular implementation.
 */
async function getGeometry(page: Page, testId: string): Promise<Geometry> {
  return page.evaluate((id: string) => {
    const field = document.querySelector(`[data-testid="${id}"]`)!;
    const container = field.parentElement!;
    const fieldStyle = getComputedStyle(field);
    const containerStyle = getComputedStyle(container);
    const fieldRect = field.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const innerStart = containerRect.left + parseFloat(containerStyle.borderLeftWidth);
    const innerEnd = containerRect.right - parseFloat(containerStyle.borderRightWidth);
    const innerTop = containerRect.top + parseFloat(containerStyle.borderTopWidth);

    const textStart = fieldRect.left + parseFloat(fieldStyle.paddingLeft) + parseFloat(fieldStyle.borderLeftWidth);
    const textEnd = fieldRect.right - parseFloat(fieldStyle.paddingRight) - parseFloat(fieldStyle.borderRightWidth);

    // The actions block is the only <div> child of the container.
    const actions = container.querySelector(':scope > div');
    const actionsRect = actions?.getBoundingClientRect() ?? null;
    const lastActionRect = actions?.lastElementChild?.getBoundingClientRect() ?? null;

    return {
      borderToTextStart: textStart - innerStart,
      containerHeight: containerRect.height,
      containerWidth: containerRect.width,
      fieldTopToInnerBorder: fieldRect.top - innerTop,
      lastActionEndToBorder: lastActionRect ? innerEnd - lastActionRect.right : null,
      textEndToActionsStart: actionsRect ? actionsRect.left - textEnd : null,
      textEndToBorder: innerEnd - textEnd,
    };
  }, testId);
}

/**
 * Mirror of `getEndSlotGeometry` for the leading adornment: how close it sits to the field's
 * starting border. Content edges again, so the numbers hold whichever box pays the inset.
 */
async function getStartSlotGeometry(page: Page, testId: string): Promise<StartSlotGeometry> {
  return page.evaluate((id: string) => {
    const field = document.querySelector(`[data-testid="${id}"]`)!;
    const container = field.parentElement!;
    const slot = container.querySelector('[data-ods="input-start"]')!;
    const containerStyle = getComputedStyle(container);
    const slotStyle = getComputedStyle(slot);
    const containerRect = container.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();

    const innerStart = containerRect.left + parseFloat(containerStyle.borderLeftWidth);
    const contentStart = slotRect.left + parseFloat(slotStyle.paddingLeft);
    const firstChild = slot.firstElementChild;

    return {
      childStartToBorder: firstChild ? firstChild.getBoundingClientRect().left - innerStart : null,
      containerHeight: containerRect.height,
      contentStartToBorder: contentStart - innerStart,
    };
  }, testId);
}

describe('Input rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="input"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await gotoStory(page, 'rendering/custom-style');

      const input = await page.waitForSelector('[data-testid="custom-style"]');
      const height = await input?.evaluate((el: Element) => el.getBoundingClientRect().height);

      expect(height).toBe(42);
    });
  });

  // These numbers are the in-field spacing contract, resolved from the default theme:
  // --ods-theme-input-padding-horizontal 8px, --ods-theme-input-padding-vertical 2px,
  // column-gap 4px, $ods-input-actions-padding-right 4px, min-height 32px, xs button 24px.
  // They must hold regardless of whether the container or the individual parts pay the inset.
  describe('geometry', () => {
    it('should inset the text by the horizontal padding on both sides', async() => {
      await gotoStory(page, 'rendering/geometry-bare');
      await page.waitForSelector('[data-testid="geometry-bare"]');

      const geometry = await getGeometry(page, 'geometry-bare');

      expect(geometry.borderToTextStart).toBe(8);
      expect(geometry.textEndToBorder).toBe(8);
      expect(geometry.fieldTopToInnerBorder).toBe(2);
      expect(geometry.containerHeight).toBe(32);
    });

    it('should keep the action button 4px from the border and 4px from the text', async() => {
      await gotoStory(page, 'rendering/geometry-clearable');
      await page.waitForSelector('[data-testid="geometry-clearable"]');

      const geometry = await getGeometry(page, 'geometry-clearable');

      expect(geometry.borderToTextStart).toBe(8);
      expect(geometry.textEndToActionsStart).toBe(4);
      expect(geometry.lastActionEndToBorder).toBe(4);
      expect(geometry.fieldTopToInnerBorder).toBe(2);
      expect(geometry.containerHeight).toBe(32);
    });

    it('should lay the loading spinner out like an action button', async() => {
      await gotoStory(page, 'rendering/geometry-loading');
      await page.waitForSelector('[data-testid="geometry-loading"]');

      const geometry = await getGeometry(page, 'geometry-loading');

      expect(geometry.borderToTextStart).toBe(8);
      expect(geometry.textEndToActionsStart).toBe(4);
      expect(geometry.lastActionEndToBorder).toBe(4);
      expect(geometry.containerHeight).toBe(32);
    });

    it('should keep the actions inside the border when the width is constrained', async() => {
      await gotoStory(page, 'rendering/geometry-constrained');
      await page.waitForSelector('[data-testid="geometry-constrained"]');

      const geometry = await getGeometry(page, 'geometry-constrained');

      expect(geometry.containerWidth).toBe(100);
      // A negative value means the button is painted outside the field's border.
      expect(geometry.lastActionEndToBorder).toBe(4);
    });
  });

  describe('start & end content', () => {
    it('should render the content of both adornments', async() => {
      await gotoStory(page, 'rendering/slots-text');
      await page.waitForSelector('[data-testid="slots-text"]');

      const start = await page.$eval('[data-ods="input-start"]', (el) => el.textContent);
      const end = await page.$eval('[data-ods="input-end"]', (el) => el.textContent);

      expect(start).toBe('https://');
      expect(end).toBe('.com');
    });

    it('should not render a wrapper when no adornment is set', async() => {
      await gotoStory(page, 'rendering/render');
      await page.waitForSelector('[data-ods="input"]');

      expect(await page.$('[data-ods="input-start"]')).toBeNull();
      expect(await page.$('[data-ods="input-end"]')).toBeNull();
    });

    it('should order the parts as start, field, end, then the action buttons', async() => {
      await gotoStory(page, 'rendering/slots-text');
      await page.waitForSelector('[data-testid="slots-text"]');

      const order = await page.evaluate(() => {
        const field = document.querySelector('[data-testid="slots-text"]')!;

        return Array.from(field.parentElement!.children).map((el) => {
          return el.getAttribute('data-ods') ?? el.tagName.toLowerCase();
        });
      });

      expect(order).toEqual(['input-start', 'input', 'input-end', 'div']);
    });

    it('should not submit the adornment content with the form', async() => {
      await gotoStory(page, 'rendering/slots-in-form');
      await page.waitForSelector('[data-testid="slots-in-form"]');

      const entries = await page.evaluate(() => {
        const form = document.querySelector('[data-testid="slots-form"]') as HTMLFormElement;

        return Array.from(new FormData(form).entries());
      });

      expect(entries).toEqual([['weight', '42']]);
    });

    it('should keep the adornment out of the input value', async() => {
      await gotoStory(page, 'rendering/slots-in-form');

      const input = await page.waitForSelector('[data-testid="slots-in-form"]');
      await input?.click();
      await page.keyboard.type('0');

      expect(await input?.evaluate((el) => (el as HTMLInputElement).value)).toBe('420');
    });

    // Describing the adornments is left to the consumer: the component must not touch
    // `aria-describedby`, so that whatever the consumer or the FormField put there survives.
    it('should not add the adornments to the field description', async() => {
      await gotoStory(page, 'rendering/slots-text');

      const input = await page.waitForSelector('[data-testid="slots-text"]');
      const describedBy = await input?.evaluate((el) => el.getAttribute('aria-describedby'));

      expect(describedBy).toBeNull();
    });

    it('should leave the form field description untouched', async() => {
      await gotoStory(page, 'rendering/slots-in-form-field');

      const input = await page.waitForSelector('[data-testid="slots-in-form-field"]');
      const describedBy = await input?.evaluate((el) => el.getAttribute('aria-describedby'));
      const fieldIds = await page.evaluate(() => [
        document.querySelector('[data-ods="form-field-helper"]')?.id,
        document.querySelector('[data-ods="form-field-error"]')?.id,
      ].filter(Boolean).join(' '));

      expect(describedBy).toBe(fieldIds);
    });

    it('should let a consumer description replace the form field one', async() => {
      await gotoStory(page, 'rendering/slots-aria-described-by');

      const input = await page.waitForSelector('[data-testid="slots-aria-described-by"]');
      const describedBy = await input?.evaluate((el) => el.getAttribute('aria-describedby'));

      expect(describedBy).toBe('consumer-description');
    });

    it('should place an adornment control in the tab order before the clear button', async() => {
      await gotoStory(page, 'rendering/slots-with-button');

      const input = await page.waitForSelector('[data-testid="slots-with-button"]');
      await input?.focus();

      await page.keyboard.press('Tab');
      const afterInput = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'));

      await page.keyboard.press('Tab');
      const afterSlot = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'));

      expect(afterInput).toBe('Copy value');
      expect(afterSlot).toBe(TRANSLATION[INPUT_I18N.clearButton][LOCALE.en]);
    });

    it('should keep the focus on an adornment control when it is clicked', async() => {
      await gotoStory(page, 'rendering/slots-with-button');
      await page.waitForSelector('[data-testid="slots-with-button"]');

      const slotButton = await page.$('[data-ods="input-end"] [data-ods="button"]');
      await slotButton?.click();

      const focused = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'));

      expect(focused).toBe('Copy value');
    });

    it('should still clear the value when an adornment is present', async() => {
      await gotoStory(page, 'rendering/slots-with-button');

      const input = await page.waitForSelector('[data-testid="slots-with-button"]');
      const clearButton = await getClearButton(page);
      await clearButton?.click();

      expect(await input?.evaluate((el) => (el as HTMLInputElement).value)).toBe('');
    });

    describe('geometry', () => {
      it('should inset a text adornment by the horizontal padding', async() => {
        await gotoStory(page, 'rendering/geometry-slot-text');
        await page.waitForSelector('[data-testid="geometry-slot-text"]');

        const geometry = await getEndSlotGeometry(page, 'geometry-slot-text');

        expect(geometry.contentEndToBorder).toBe(8);
        expect(geometry.containerHeight).toBe(32);
      });

      it('should align an adornment control with the built-in action buttons', async() => {
        await gotoStory(page, 'rendering/geometry-slot-button');
        await page.waitForSelector('[data-testid="geometry-slot-button"]');

        const geometry = await getEndSlotGeometry(page, 'geometry-slot-button');

        // 4px is what `lastActionEndToBorder` measures for the built-in clear button.
        expect(geometry.contentEndToBorder).toBe(4);
        expect(geometry.childEndToBorder).toBe(4);
        expect(geometry.containerHeight).toBe(32);
      });

      it('should drop the trailing inset of an adornment followed by action buttons', async() => {
        await gotoStory(page, 'rendering/geometry-slot-text-clearable');
        await page.waitForSelector('[data-testid="geometry-slot-text-clearable"]');

        const geometry = await getEndSlotGeometry(page, 'geometry-slot-text-clearable');

        // Only the column-gap separates the adornment from the clear button, so the two are
        // 4px apart instead of 4px + the adornment's own 8px inset.
        expect(geometry.contentEndToNextPart).toBe(4);
        expect(geometry.containerHeight).toBe(32);
      });

      it('should inset a leading text adornment by the horizontal padding', async() => {
        await gotoStory(page, 'rendering/geometry-slot-start-text');
        await page.waitForSelector('[data-testid="geometry-slot-start-text"]');

        const geometry = await getStartSlotGeometry(page, 'geometry-slot-start-text');

        expect(geometry.contentStartToBorder).toBe(8);
        expect(geometry.containerHeight).toBe(32);
      });

      it('should align a leading adornment control with the built-in action buttons', async() => {
        await gotoStory(page, 'rendering/geometry-slot-start-button');
        await page.waitForSelector('[data-testid="geometry-slot-start-button"]');

        const geometry = await getStartSlotGeometry(page, 'geometry-slot-start-button');

        // Same 4px the clear button keeps on the other side.
        expect(geometry.contentStartToBorder).toBe(4);
        expect(geometry.childStartToBorder).toBe(4);
        expect(geometry.containerHeight).toBe(32);
      });
    });
  });

  describe('clearable', () => {
    it('should not render the button if the input is empty', async() => {
      await gotoStory(page, 'rendering/clearable-empty');
      await page.waitForSelector('[data-ods="input"]');

      expect(await getClearButton(page)).toBeNull();
    });

    it('should render the button if default value is set', async() => {
      await gotoStory(page, 'rendering/clearable-default-value');
      await page.waitForSelector('[data-ods="input"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });

    it('should render the button if value is set', async() => {
      await gotoStory(page, 'rendering/clearable-value');
      await page.waitForSelector('[data-ods="input"]');

      const clearButton = await getClearButton(page);

      expect(await clearButton?.isVisible()).toBe(true);
    });
  });
});
