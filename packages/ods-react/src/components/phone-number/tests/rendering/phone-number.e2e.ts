import 'jest-puppeteer';
import { getTokenColor, gotoStory } from '../../../../helpers/test';

describe('PhoneNumber rendering', () => {
  it('should render the web component', async() => {
    await gotoStory(page, 'rendering/render');

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number-control"]')).not.toBeNull();
    expect(await page.waitForSelector('[data-ods="phone-number-country-list"]')).not.toBeNull();
  });

  describe('focus outline', () => {
    // Share of focus-colored pixels in the outline's edge on the seam side. The outline lies over the neighbour,
    // so only a screenshot shows whether the neighbour hides it.
    async function seamOutlinePixels(focused: string): Promise<number> {
      await page.focus(focused);
      const seam = await page.$eval(focused, (el) => {
        const field = el.closest('[data-ods="select-control"]') ?? el.parentElement!;
        const style = getComputedStyle(field);
        const rect = field.getBoundingClientRect();
        const ring = parseFloat(style.outlineOffset) + parseFloat(style.outlineWidth) / 2;
        const isCountry = field.matches('[data-ods="select-control"]');

        return { height: Math.round(rect.height - 8), x: Math.round(isCountry ? rect.right + ring : rect.left - ring), y: Math.round(rect.top + 4) };
      });
      const shot = await page.screenshot({ clip: { height: seam.height, width: 1, x: seam.x, y: seam.y }, encoding: 'base64' });
      const focusColor = await getTokenColor(page, '--ods-semantic-color-focus');

      return page.evaluate(async(b64: string, color: string) => {
        const img = new Image();
        img.src = `data:image/png;base64,${b64}`;
        await img.decode();
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const context = canvas.getContext('2d')!;
        context.drawImage(img, 0, 0);
        const [r, g, b] = color.match(/\d+/g)!.map(Number);
        const data = context.getImageData(0, 0, img.width, img.height).data;
        let count = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (Math.abs(data[i] - r) < 40 && Math.abs(data[i + 1] - g) < 40 && Math.abs(data[i + 2] - b) < 40) {
            count++;
          }
        }
        return count / (data.length / 4);
      }, shot as string, focusColor);
    }

    it('should not hide the outline of the input behind the country list', async() => {
      await gotoStory(page, 'rendering/render');

      expect(await seamOutlinePixels('[data-testid="render"] [data-ods="phone-number-control"]')).toBeGreaterThan(0.9);
    });

    it('should not hide the outline of the country list behind the input', async() => {
      await gotoStory(page, 'rendering/render');

      expect(await seamOutlinePixels('[data-testid="render"] [data-ods="select-control"]')).toBeGreaterThan(0.9);
    });
  });

  describe('default width', () => {
    async function widthOf(testId: string): Promise<number> {
      return page.$eval(`[data-testid="${testId}"] .probe`, (el) => el.getBoundingClientRect().width);
    }

    it('should share the 280px default, shrink in a narrow container and accept a consumer width', async() => {
      await gotoStory(page, 'rendering/default-width');

      expect(await widthOf('default')).toBe(280);
      expect(await widthOf('narrow')).toBe(200);
      expect(await widthOf('override')).toBe(400);
    });
  });
});
