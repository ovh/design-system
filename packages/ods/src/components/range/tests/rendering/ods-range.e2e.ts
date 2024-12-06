import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-range rendering', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function isInErrorState(): Promise<boolean | undefined> {
    return page.evaluate(() => {
      return document.querySelector('ods-range')?.shadowRoot?.querySelector('.ods-range__range')?.classList.contains('ods-range__range--error');
    });
  }

  async function setup(content: string, customStyle?: string, additionalProperties?: Record<string, unknown>): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-range');

    additionalProperties && Object.entries(additionalProperties).forEach(([key, value]) => {
      el.setProperty(key, value);
    });
    await page.waitForChanges();
  }

  it('should render the web component', async() => {
    await setup('<ods-range></ods-range>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('defaultValue', () => {
    it('get defaultValue with props', async() => {
      const defaultValue = 40;
      await setup(`<ods-range default-value="${defaultValue}"></ods-range>`);

      expect(await el.getProperty('value')).toBe(defaultValue);
    });

    it('get defaultValue with midpoint max and min', async() => {
      await setup('<ods-range min="0" max="50"></ods-range>');

      expect(await el.getProperty('value')).toBe(25);
    });

    it('get defaultValue 0 with props', async() => {
      await setup('<ods-range default-value="0"></ods-range>');

      expect(await el.getProperty('value')).toBe(0);
    });

    it('get value 0 with props', async() => {
      await setup('<ods-range value="0"></ods-range>');

      expect(await el.getProperty('value')).toBe(0);
    });
  });

  describe('error state', () => {
    it('should not render in error on form submit, before of native default value', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required></ods-range></form>');

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);
    });

    it('should toggle the error state on value change', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required></ods-range></form>');

      await el.click();
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(false);

      await el.callMethod('clear');
      await page.click('body', { offset: { x: 200, y: 200 } }); // Blur
      await page.waitForChanges();

      await page.waitForChanges();
      expect(await isInErrorState()).toBe(true);
    });

    it('should enforce the error state if has-error is set even on valid range', async() => {
      await setup('<form method="get" onsubmit="return false"><ods-range is-required has-error value="dummy"></ods-range></form>');
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });
  });

  describe('tooltip', () => {
    describe('simple range', () => {
      it('should have a tooltip', async() => {
        await setup('<ods-range value="50"></ods-range>');

        const tooltip = await el.find('ods-tooltip');
        const shadowThumb = await el.find('.ods-range__shadow-thumb');

        expect(tooltip).toBeDefined();
        expect(shadowThumb).toBeDefined();
      });

      it('should not have a tooltip if disabled', async() => {
        await setup('<ods-range is-disabled value="50"></ods-range>');

        const tooltip = await el.find('ods-tooltip');

        expect(tooltip).toBeNull();
      });
    });

    describe('dual range', () => {
      it('should have a tooltip', async() => {
        await setup('<ods-range></ods-range>', '', { value: [25, 50] });

        const tooltips = await el.findAll('ods-range >>> ods-tooltip');
        const shadowThumb = await el.find('ods-range >>> .ods-range__shadow-thumb');

        expect(tooltips).toHaveLength(2);
        expect(shadowThumb).toBeDefined();
      });

      it('should not have a tooltip if disabled', async() => {
        await setup('<ods-range is-disabled></ods-range>', '', { value: [25, 50] });

        const tooltips = await el.findAll('ods-range >>> ods-tooltip');

        expect(tooltips).toHaveLength(0);
      });
    });
  });

  describe('ticks', () => {
    it('should have ticks rendered', async() => {
      await setup('<ods-range ticks="[25,50,75]"></ods-range>');

      const ticks = await page.findAll('ods-range >>> .ods-range__ticks__tick');
      const options = await page.findAll('ods-range >>> option');

      expect(ticks).toHaveLength(3);
      expect(options).toHaveLength(3);
    });

    it('should have ticks rendered with value', async() => {
      await setup('<ods-range ticks="[25,50,75]" value="55"></ods-range>');

      const ticks = await el.findAll('ods-range >>> .ods-range__ticks__tick');
      const options = await el.findAll('ods-range >>> option');

      expect(ticks).toHaveLength(3);
      expect(options).toHaveLength(3);
      expect(ticks[0]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[1]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[2]).not.toHaveClass('ods-range__ticks__tick--activated');
    });

    it('should have ticks rendered on dual with value', async() => {
      await setup('<ods-range ticks="[25,50,75]"></ods-range>', '', { value: [30, 60] });

      const ticks = await el.findAll('ods-range >>> .ods-range__ticks__tick');
      const options = await el.findAll('ods-range >>> option');

      expect(ticks).toHaveLength(3);
      expect(options).toHaveLength(3);
      expect(ticks[0]).not.toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[1]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[2]).not.toHaveClass('ods-range__ticks__tick--activated');
    });

    it('should update ticks color', async() => {
      await setup('<ods-range ticks="[25,50,75]" value="55"></ods-range>');

      const ticks = await el.findAll('ods-range >>> .ods-range__ticks__tick');
      const options = await el.findAll('ods-range >>> option');

      expect(ticks).toHaveLength(3);
      expect(options).toHaveLength(3);
      expect(ticks[0]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[1]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticks[2]).not.toHaveClass('ods-range__ticks__tick--activated');

      await el.setProperty('value', 90);
      await page.waitForChanges();

      const ticksUpdated = await el.findAll('ods-range >>> .ods-range__ticks__tick');
      expect(ticksUpdated[0]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticksUpdated[1]).toHaveClass('ods-range__ticks__tick--activated');
      expect(ticksUpdated[2]).toHaveClass('ods-range__ticks__tick--activated');
    });
  });
});
