import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-popover navigation', () => {
  const focusableButtonId = 'focusable-button-id';
  const focusableInputId = 'focusable-input-id';
  const triggerId = 'trigger-id';
  const notTriggerId = 'not-trigger-id';
  let page: E2EPage;
  let trigger: E2EElement;

  async function getFocusedElementId(): Promise<string | undefined> {
    return page.evaluate(() => {
      return document.activeElement?.id;
    });
  }

  async function isPopoverOpened(): Promise<boolean> {
    return page.evaluate(() => {
      return document.querySelector<HTMLElement>('ods-popover')?.style.display === 'block';
    });
  }

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    trigger = await page.find(`#${triggerId}`);
  }

  beforeEach(async() => {
    await setup(`
      <button id="${triggerId}">
        Trigger
      </button>
      <ods-popover trigger-id="${triggerId}">
        <div>
          <p>I am not focusable</p>
          <button id="${focusableButtonId}">I am focusable</button>
          <input id="${focusableInputId}" type="text" value="Me too" />
        </div>
      </ods-popover>
      <button id="${notTriggerId}">
        Not a trigger
      </button>
    `);
  });

  it('should open on "Enter" press when trigger is focused', async() => {
    expect(await isPopoverOpened()).toBe(false);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.waitForChanges();

    expect(await isPopoverOpened()).toBe(true);
  });

  it('should open on "Space" press when trigger is focused', async() => {
    expect(await isPopoverOpened()).toBe(false);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.waitForChanges();

    expect(await isPopoverOpened()).toBe(true);
  });

  it('should open on trigger click', async() => {
    expect(await isPopoverOpened()).toBe(false);

    await trigger.click();
    await page.waitForChanges();

    expect(await isPopoverOpened()).toBe(true);
  });

  it('should focus each interactive element in sequence on Tab when opened, then next element outside', async() => {
    await trigger.click();
    await page.waitForChanges();

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedElementId()).toBe(focusableButtonId);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedElementId()).toBe(focusableInputId);

    await page.keyboard.press('Tab');
    await page.waitForChanges();

    expect(await getFocusedElementId()).toBe(notTriggerId);
  });

  it('should close when tabbing outside of it', async() => {
    expect(await isPopoverOpened()).toBe(false);

    await trigger.click();
    await page.waitForChanges();

    expect(await isPopoverOpened()).toBe(true);

    await page.keyboard.press('Tab'); // button
    await page.keyboard.press('Tab'); // input
    await page.keyboard.press('Tab'); // outside
    await page.waitForChanges();

    expect(await isPopoverOpened()).toBe(false);
  });
});
