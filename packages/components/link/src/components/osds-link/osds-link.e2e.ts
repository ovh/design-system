import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsLinkAttribute } from './interfaces/attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-link', () => {
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsLinkAttribute>, html?: string } = {}) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsLinkAttribute>(attributes, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-link ${odsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-link');
  }

  it('should render', async () => {
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  it('should display a text in the link', async () => {
    const text = `Text`;
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary,  contrasted: false }, html: text });

    expect(el.innerText).toContain(text);
    expect(el.getAttribute('href')).toBeFalsy();
  });

  it('should display a text in the link with href', async () => {
    const href = 'https://www.ovhcloud.com';
    const text = `Text`;
    await setup({ attributes: {
      color: ODS_THEME_COLOR_INTENT.primary,
      contrasted: false,
      href,
    }, html: text });

    expect(el.innerText).toContain(text);
    expect(el.getAttribute('href')).toBe(href);
  });

  // it('should display a small size', async () => {
  //   await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary,  contrasted: false} });
  //   const config: Config = getStencilConfig('osds-link', true, true, jestConfig.default);
  //   await runJestScreenshot(config, process.env)
  // });

  // it('should have an icon set', async () => {
  //   await setup({ attributes: { name: 'bell_concept' } })
  //   const el = await page.find('oof-icon >>> span');
  //   const beforeStyle = await el.getComputedStyle(':before');
  //   expect(beforeStyle.fontFamily).toBe('"Oui Icons"');
  //   expect(beforeStyle.content).not.toBe('none');
  // });
});
