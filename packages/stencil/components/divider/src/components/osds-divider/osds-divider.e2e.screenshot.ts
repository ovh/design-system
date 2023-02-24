import { E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsDividerAttributes,
  OdsDividerSize,
  odsDividerDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsDividerBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-divider', () => {
  let page: E2EPage;

  async function setup({ attributes = {} }: { attributes?: Partial<OdsDividerAttributes>, html?: string }) {
    const minimalAttributes: OdsDividerAttributes = OdsCreateAttributes(attributes, odsDividerBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsDividerAttributes>(minimalAttributes, odsDividerDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`
    <div class="container">
      <div style="background: black;height: 10px"></div>
      <osds-divider ${OdsStringAttributes2Str(stringAttributes)}></osds-divider>
      <div style="background: black;height: 10px"></div>
    </div>
`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  describe('screenshots for color', () => {
    it('check color default', async () => {
      await setup({ attributes: { separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('default color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color primary', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('primary color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color text', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.text, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('text color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color accent', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.accent, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('accent color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color error', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.error, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('error color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color warning', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.warning, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('warning color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color success', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.success, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('success color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color info', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.info, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('info color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check color promotion', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.promotion, separator: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('promotion color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  })

  describe('screenshots for contrasted color', () => {
    it('check contrasted color default', async () => {
      await setup({ attributes: { separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('default contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color primary', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.primary, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('primary contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color text', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.text, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('text contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color accent', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.accent, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('accent contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color error', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.error, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('error contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color warning', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.warning, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('warning contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color success', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.success, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('success contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color info', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.info, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('info contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check contrasted color promotion', async () => {
      await setup({ attributes: { color: OdsThemeColorIntent.promotion, separator: true, contrasted: true } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('promotion contrasted color separator', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  })

  describe('screenshots for space', () => {
    it('check space size zero', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.zero } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size zero space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size one', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.one } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size one space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size two', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.two } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size two space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size three', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.three } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size three space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size four', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.four } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size four space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size five', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.five } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size five space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size six', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.six } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size six space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size seven', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.seven } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size seven space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size eight', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.eight } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size eight space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size nine', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.nine } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size nine space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });

    it('check space size ten', async () => {
      await setup({ attributes: { separator: false, size: OdsDividerSize.ten } });
      await page.waitForChanges();
      await page.evaluate(() => {
        const element = document.querySelector('.container') as HTMLElement;
        return { width: element.clientWidth, height: element.clientHeight };
      });
      await page.setViewport({ width: 600, height:600 });
      const results = await page.compareScreenshot('size ten space', { fullPage: false });
      expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 })
    });
  })
});
