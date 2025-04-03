import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_BADGE_SIZE } from '../../src';

describe('ods-badge rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let badge: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-badge');
    badge = await page.find('ods-badge >>> .ods-badge__badge');
  }

  it('should render the web component', async() => {
    await setup('<ods-badge></ods-badge>');

    expect(el.shadowRoot).not.toBeNull();
    expect(badge).not.toBeNull();
  });

  describe('icon', () => {
    it('should render with an icon', async() => {
      const dummyIcon = 'star';
      await setup(`<ods-badge icon="${dummyIcon}"></ods-badge>`);

      const customIcon = await badge.find(`ods-icon[name="${dummyIcon}"]`);

      expect(customIcon).not.toBeNull();
    });
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customBackgroundColor = '#ff0000';

      await setup('<ods-badge></ods-badge>', `ods-badge::part(badge) { background-color: ${customBackgroundColor}; }`);

      const badgeStyle = await badge.getComputedStyle();
      expect(badgeStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('sizes', () => {
    it('should respect increase order (sm < md < lg)', async() => {
      await setup(`
        <ods-badge size="${ODS_BADGE_SIZE.sm}"></ods-badge>
        <ods-badge size="${ODS_BADGE_SIZE.md}"></ods-badge>
        <ods-badge size="${ODS_BADGE_SIZE.lg}"></ods-badge>
      `);

      const smBadge = await page.find(`ods-badge[size=${ODS_BADGE_SIZE.sm}]`);
      const mdBadge = await page.find(`ods-badge[size=${ODS_BADGE_SIZE.md}]`);
      const lgBadge = await page.find(`ods-badge[size=${ODS_BADGE_SIZE.lg}]`);

      const smBadgeStyle = await smBadge.getComputedStyle();
      const smBadgeHeight = parseInt(smBadgeStyle.getPropertyValue('height'), 10);

      const mdBadgeStyle = await mdBadge.getComputedStyle();
      const mdBadgeHeight = parseInt(mdBadgeStyle.getPropertyValue('height'), 10);

      const lgBadgeStyle = await lgBadge.getComputedStyle();
      const lgBadgeHeight = parseInt(lgBadgeStyle.getPropertyValue('height'), 10);

      expect(smBadgeHeight).toBeLessThan(mdBadgeHeight);
      expect(smBadgeHeight).toBeLessThan(lgBadgeHeight);
      expect(mdBadgeHeight).toBeLessThan(lgBadgeHeight);
      expect(mdBadgeHeight).toBeGreaterThan(smBadgeHeight);
      expect(lgBadgeHeight).toBeGreaterThan(smBadgeHeight);
      expect(lgBadgeHeight).toBeGreaterThan(mdBadgeHeight);
    });
  });
});
