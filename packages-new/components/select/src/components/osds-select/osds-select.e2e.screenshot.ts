import type { E2EPage } from '@stencil/core/testing';
import { E2EElement, newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { OdsSelectAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';


describe('e2e:osds-select', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsSelectAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSelectAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();

    await page.setContent(`
      <osds-select ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-select>
    `);
    el = await page.find('osds-select');
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
  }

  const screenshotActions = [
    {
      actionDescription: 'no action',
      action: () => {
        // noop
      },
    },
    {
      actionDescription: 'surface visible',
      action: () => el.click(),
    },
    {
      actionDescription: 'disabled',
      action: () => el.setProperty('disabled', true),
    },
    {
      actionDescription: 'hovered',
      action: () => el.hover(),
    },
  ];

  describe('screenshots with short text', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {

        await setup({
          html: `
          <span slot="placeholder">Select country</span>
          <osds-select-group>My group title</osds-select-group>
          <osds-select-option>Value 1</osds-select-option>
          <osds-select-option>Value 2</osds-select-option>
          <osds-select-option>Value 3</osds-select-option>
          `
        });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-select') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('select', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });

  describe('screenshots with long text', () => {
    // Todo : add active behaviour on top of hover and focus
    screenshotActions.forEach(({ actionDescription, action }) => {
      it(actionDescription, async () => {

        await setup({
          attributes: {
            inline: true
          },
          html: `
          <span slot="placeholder">Select country</span>
          <osds-select-group>My group title</osds-select-group>
          <osds-select-option>Value 1 with looooooooooooooooooooooooooooooooooooooooooong text</osds-select-option>
          <osds-select-option>Value 2</osds-select-option>
          <osds-select-option>Value 3</osds-select-option>
          `
        });
        action();
        await page.waitForChanges();

        await page.evaluate(() => {
          const element = document.querySelector('osds-select') as HTMLElement;
          return { width: element.clientWidth, height: element.clientHeight };
        });
        await page.setViewport({ width: 600, height:600 });
        const results = await page.compareScreenshot('select', { fullPage: false, omitBackground: true });
        expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0 });
      });
    });
  });
});
