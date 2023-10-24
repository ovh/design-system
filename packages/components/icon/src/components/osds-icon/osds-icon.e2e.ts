import type { E2EElement, E2EPage } from '@stencil/core/testing';
import type { OdsIconAttribute } from './interfaces/attributes';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { newE2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';

describe('e2e:osds-icon', () => {
  const baseAttribute = { ariaName: '' };
  let page: E2EPage;
  let el: E2EElement;

  async function setup({ attributes = {} }: { attributes: Partial<OdsIconAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsIconAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-icon ${odsStringAttributes2Str(stringAttributes)}></osds-icon>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-icon');
  }

  it('should render', async () => {
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary, contrasted: false } });
    expect(el).not.toBeNull();
  });

  it('should have ods-icon--contrasted class', async () => {
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary, contrasted: true } });
    expect(el.classList.contains('ods-icon--contrasted')).toBe(true);
  });

  it('should have ods-icon--hoverable class', async () => {
    await setup({ attributes: { color: ODS_THEME_COLOR_INTENT.primary, hoverable: true } });
    expect(el.classList.contains('ods-icon--hoverable')).toBe(true);
  });
});
