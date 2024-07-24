import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_TAG_SIZE } from '../../src';

describe('ods-tag rendering', () => {
  let closeIcon: E2EElement;
  let el: E2EElement;
  let page: E2EPage;
  let tag: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-tag');
    tag = await page.find('ods-tag >>> .ods-tag__tag');
    closeIcon = await tag.find('ods-icon[name="xmark"]');
  }

  it('should render the web component', async() => {
    await setup('<ods-tag></ods-tag>');

    expect(el.shadowRoot).not.toBeNull();
    expect(tag).not.toBeNull();
    expect(closeIcon).not.toBeNull();
  });

  describe('icon', () => {
    it('should render with an icon', async() => {
      const dummyIcon = 'star';
      await setup(`<ods-tag icon="${dummyIcon}"></ods-tag>`);

      const customIcon = await tag.find(`ods-icon[name="${dummyIcon}"]`);

      expect(customIcon).not.toBeNull();
    });
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      const customBackgroundColor = '#ff0000';

      await setup('<ods-tag></ods-tag>', `ods-tag::part(tag) { background-color: ${customBackgroundColor}; }`);

      const tagStyle = await tag.getComputedStyle();
      expect(tagStyle.getPropertyValue('background-color')).toBe('rgb(255, 0, 0)');
    });
  });

  describe('sizes', () => {
    it('should respect increase order (md < lg)', async() => {
      await setup(`
        <ods-tag size="${ODS_TAG_SIZE.md}"></ods-tag>
        <ods-tag size="${ODS_TAG_SIZE.lg}"></ods-tag>
      `);

      const mdTag = await page.find(`ods-tag[size=${ODS_TAG_SIZE.md}]`);
      const lgTag = await page.find(`ods-tag[size=${ODS_TAG_SIZE.lg}]`);

      const mdTagStyle = await mdTag.getComputedStyle();
      const mdTagHeight = parseInt(mdTagStyle.getPropertyValue('height'), 10);

      const lgTagStyle = await lgTag.getComputedStyle();
      const lgTagHeight = parseInt(lgTagStyle.getPropertyValue('height'), 10);

      expect(mdTagHeight).toBeLessThan(lgTagHeight);
      expect(lgTagHeight).toBeGreaterThan(mdTagHeight);
    });
  });
});
