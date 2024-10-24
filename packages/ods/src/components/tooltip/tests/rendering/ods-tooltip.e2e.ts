import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_TOOLTIP_POSITION, type OdsTooltipPosition } from '../../src';

describe('ods-tooltip rendering', () => {
  const triggerId = 'trigger-id';
  let arrow: HTMLElement | null | undefined;
  let el: E2EElement;
  let page: E2EPage;
  let trigger: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`
      <button id="${triggerId}">
        Trigger<br/>
        Tooltip<br/>
        Multiline
      </button>
      ${content}
    `);
    await page.evaluate(() => document.body.style.setProperty('margin', '300px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-tooltip');
    trigger = await page.find(`#${triggerId}`);
    arrow = await el.shadowRoot.querySelector<HTMLElement>('.ods-tooltip__arrow');

    await trigger.hover();
    await page.waitForChanges();
  }

  async function setupModal(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(`
      <ods-modal is-open>
        <button id="${triggerId}">
          Trigger<br/>
          Tooltip<br/>
          Multiline
        </button>
        ${content}
      </ods-modal>
    `);

    await page.evaluate(() => {
      const dialog = document.querySelector('ods-modal')?.shadowRoot?.querySelector('dialog');
      dialog?.style.setProperty('animation', 'none');
    });

    el = await page.find('ods-tooltip');
    trigger = await page.find(`#${triggerId}`);

    await trigger.hover();
    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup(`<ods-tooltip trigger-id="${triggerId}">Tooltip</ods-tooltip>`);

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('position', () => {
    async function getRect(selector: string): Promise<{ bottom: number, left: number, right: number, top: number, y: number }> {
      return await page.evaluate((selector: string) => {
        const { bottom, left, right, top, y } = document.querySelector(selector)!.getBoundingClientRect();
        return { bottom, left, right, top, y };
      }, selector);
    }

    async function renderPosition(position: OdsTooltipPosition, customStyle?: string): Promise<void> {
      await setup(`<ods-tooltip position="${position}" trigger-id="${triggerId}">Tooltip content</ods-tooltip>`, customStyle);
    }

    it('should render top by default', async() => {
      await setup(`<ods-tooltip trigger-id="${triggerId}">Tooltip content</ods-tooltip>`);

      const buttonRect = await getRect('button');
      const tooltipRect = await getRect('ods-tooltip');

      expect(tooltipRect.top).toBeLessThan(buttonRect.top);
    });

    it('should render top positions correctly', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.topStart);

      const buttonRect = await getRect('button');
      const topStartRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.top);

      const topRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.topEnd);

      const topEndRect = await getRect('ods-tooltip');

      expect(topStartRect.top).toBeLessThan(buttonRect.top);
      expect(topRect.top).toBeLessThan(buttonRect.top);
      expect(topEndRect.top).toBeLessThan(buttonRect.top);

      expect(topStartRect.left).toBeGreaterThan(topRect.left);
      expect(topStartRect.left).toBeGreaterThan(topEndRect.left);
      expect(topStartRect.right).toBeGreaterThan(topRect.right);
      expect(topStartRect.right).toBeGreaterThan(topEndRect.right);

      expect(topRect.left).toBeLessThan(topStartRect.left);
      expect(topRect.left).toBeGreaterThan(topEndRect.left);
      expect(topRect.right).toBeLessThan(topStartRect.right);
      expect(topRect.right).toBeGreaterThan(topEndRect.right);

      expect(topEndRect.left).toBeLessThan(topStartRect.left);
      expect(topEndRect.left).toBeLessThan(topRect.left);
      expect(topEndRect.right).toBeLessThan(topStartRect.right);
      expect(topEndRect.right).toBeLessThan(topRect.right);
    });

    it('should render left positions correctly', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.leftStart);

      const buttonRect = await getRect('button');
      const leftStartRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.left);

      const leftRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.leftEnd);

      const leftEndRect = await getRect('ods-tooltip');

      expect(leftStartRect.left).toBeLessThan(buttonRect.left);
      expect(leftRect.left).toBeLessThan(buttonRect.left);
      expect(leftEndRect.left).toBeLessThan(buttonRect.left);

      expect(leftStartRect.top).toBeLessThan(leftRect.top);
      expect(leftStartRect.top).toBeLessThan(leftEndRect.top);
      expect(leftStartRect.bottom).toBeLessThan(leftRect.bottom);
      expect(leftStartRect.bottom).toBeLessThan(leftEndRect.bottom);

      expect(leftRect.top).toBeGreaterThan(leftStartRect.top);
      expect(leftRect.top).toBeLessThan(leftEndRect.top);
      expect(leftRect.bottom).toBeGreaterThan(leftStartRect.bottom);
      expect(leftRect.bottom).toBeLessThan(leftEndRect.bottom);

      expect(leftEndRect.top).toBeGreaterThan(leftStartRect.top);
      expect(leftEndRect.top).toBeGreaterThan(leftRect.top);
      expect(leftEndRect.bottom).toBeGreaterThan(leftStartRect.bottom);
      expect(leftEndRect.bottom).toBeGreaterThan(leftRect.bottom);
    });

    it('should render right positions correctly', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.rightStart);

      const buttonRect = await getRect('button');
      const rightStartRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.right);

      const rightRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.rightEnd);

      const rightEndRect = await getRect('ods-tooltip');

      expect(rightStartRect.right).toBeGreaterThan(buttonRect.right);
      expect(rightRect.right).toBeGreaterThan(buttonRect.right);
      expect(rightEndRect.right).toBeGreaterThan(buttonRect.right);

      expect(rightStartRect.top).toBeLessThan(rightRect.top);
      expect(rightStartRect.top).toBeLessThan(rightEndRect.top);
      expect(rightStartRect.bottom).toBeLessThan(rightRect.bottom);
      expect(rightStartRect.bottom).toBeLessThan(rightEndRect.bottom);

      expect(rightRect.top).toBeGreaterThan(rightStartRect.top);
      expect(rightRect.top).toBeLessThan(rightEndRect.top);
      expect(rightRect.bottom).toBeGreaterThan(rightStartRect.bottom);
      expect(rightRect.bottom).toBeLessThan(rightEndRect.bottom);

      expect(rightEndRect.top).toBeGreaterThan(rightStartRect.top);
      expect(rightEndRect.top).toBeGreaterThan(rightRect.top);
      expect(rightEndRect.bottom).toBeGreaterThan(rightStartRect.bottom);
      expect(rightEndRect.bottom).toBeGreaterThan(rightRect.bottom);
    });

    it('should render bottom positions correctly', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.bottomStart);

      const buttonRect = await getRect('button');
      const bottomStartRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.bottom);

      const bottomRect = await getRect('ods-tooltip');

      await renderPosition(ODS_TOOLTIP_POSITION.bottomEnd);

      const bottomEndRect = await getRect('ods-tooltip');

      expect(bottomStartRect.top).toBeGreaterThan(buttonRect.top);
      expect(bottomRect.top).toBeGreaterThan(buttonRect.top);
      expect(bottomEndRect.top).toBeGreaterThan(buttonRect.top);

      expect(bottomStartRect.left).toBeGreaterThan(bottomRect.left);
      expect(bottomStartRect.left).toBeGreaterThan(bottomEndRect.left);
      expect(bottomStartRect.right).toBeGreaterThan(bottomRect.right);
      expect(bottomStartRect.right).toBeGreaterThan(bottomEndRect.right);

      expect(bottomRect.left).toBeLessThan(bottomStartRect.left);
      expect(bottomRect.left).toBeGreaterThan(bottomEndRect.left);
      expect(bottomRect.right).toBeLessThan(bottomStartRect.right);
      expect(bottomRect.right).toBeGreaterThan(bottomEndRect.right);

      expect(bottomEndRect.left).toBeLessThan(bottomStartRect.left);
      expect(bottomEndRect.left).toBeLessThan(bottomRect.left);
      expect(bottomEndRect.right).toBeLessThan(bottomStartRect.right);
      expect(bottomEndRect.right).toBeLessThan(bottomRect.right);
    });

    it('should update from top to bottom if on top of screen', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.top, 'button { position: absolute; top: 0; }');

      const buttonRect = await getRect('button');
      const tooltipRect = await getRect('ods-tooltip');

      expect(tooltipRect.top).toBeGreaterThan(buttonRect.top);
    });

    it('should update from bottom to top if on bottom of screen', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.bottom, 'button { position: absolute; bottom: 0; }');

      const buttonRect = await getRect('button');
      const tooltipRect = await getRect('ods-tooltip');

      expect(tooltipRect.top).toBeLessThan(buttonRect.top);
    });

    it('should update from left to right if on left of screen', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.left, 'button { position: absolute; left: 0; }');

      const buttonRect = await getRect('button');
      const tooltipRect = await getRect('ods-tooltip');

      expect(tooltipRect.left).toBeGreaterThan(buttonRect.left);
    });

    it('should update from right to left if on right of screen', async() => {
      await renderPosition(ODS_TOOLTIP_POSITION.left, 'button { position: absolute; right: 0; }');

      const buttonRect = await getRect('button');
      const tooltipRect = await getRect('ods-tooltip');

      expect(tooltipRect.left).toBeLessThan(buttonRect.left);
    });

    describe('in a fixed context (like ods-modal)', () => {
      it('should position regarding dialog element (thus not at the right place) in absolute strategy', async() => {
        await setupModal(`<ods-tooltip position="top" trigger-id="${triggerId}">Tooltip content</ods-tooltip>`);

        const buttonRect = await getRect('button');
        const tooltipRect = await getRect('ods-tooltip');

        // Tooltip is positioned from the dialog, so it should be rendered underneath the trigger
        expect(tooltipRect.y).toBeGreaterThan(buttonRect.y);
      });

      it('should position regarding viewport (thus at the right place) in fixed strategy', async() => {
        await setupModal(`<ods-tooltip position="top" strategy="fixed" trigger-id="${triggerId}">Tooltip content</ods-tooltip>`);

        const buttonRect = await getRect('button');
        const tooltipRect = await getRect('ods-tooltip');

        // Tooltip is positioned from the viewport, so it should be rendered on top of the trigger as expected
        expect(tooltipRect.y).toBeLessThan(buttonRect.y);
      });
    });
  });

  describe('withArrow', () => {
    it('should render without arrow by default', async() => {
      await setup(`<ods-tooltip trigger-id="${triggerId}">Tooltip</ods-tooltip>`);

      expect(arrow?.classList.contains('ods-tooltip__arrow--hidden')).toBe(true);
    });

    it('should render with arrow if set', async() => {
      await setup(`<ods-tooltip trigger-id="${triggerId}" with-arrow>Tooltip</ods-tooltip>`);

      expect(arrow?.classList.contains('ods-tooltip__arrow--hidden')).toBe(false);
    });
  });
});
