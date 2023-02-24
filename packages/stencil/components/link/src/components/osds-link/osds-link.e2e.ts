import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import {
  OdsComponentAttributes2StringAttributes,
  OdsLinkAttributes,
  odsLinkDefaultAttributes
} from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsLinkBaseAttributes } from '@ovhcloud/ods-testing';

import { OdsThemeColorIntent } from '@ovhcloud/ods-theming';

describe('e2e:osds-link', () => {
  let page: E2EPage;
  let el: E2EElement;
  let linkElement: E2EElement;

  async function setup({ attributes = {}, html = `` }: { attributes?: Partial<OdsLinkAttributes>, html?: string }) {
    const minimalAttributes: OdsLinkAttributes = OdsCreateAttributes(attributes, odsLinkBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsLinkAttributes>(minimalAttributes, odsLinkDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-link ${OdsStringAttributes2Str(stringAttributes)}>${html}</osds-link>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-link');

    linkElement = await page.find('osds-link >>> link');
  }

  it('should render', async () => {
    await setup({ attributes: { color: OdsThemeColorIntent.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  // todo: to activate once link ok
  xit('should display a text in the link', async () => {
    const text = `Text`;
    await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false }, html: text });

    expect(linkElement.innerText).toBe(text);
  });

  // it('should display a small size', async () => {
  //   await setup({ attributes: { color: OdsThemeColorIntent.primary,  contrasted: false} });
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
