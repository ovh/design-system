import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';
import { ODS_TABLE_SIZE } from '../../src';

describe('ods-table rendering', () => {
  const dummyTable = '<table><tr><td>Table</td></tr></table>';
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-table');
  }

  it('should render the web component', async() => {
    await setup('<ods-table></ods-table>');

    expect(el).not.toBeNull();
  });

  describe('sizes', () => {
    it('should respect increase order (sm < md < lg)', async() => {
      await setup(`
        <ods-table size="${ODS_TABLE_SIZE.sm}">${dummyTable}</ods-table>
        <ods-table size="${ODS_TABLE_SIZE.md}">${dummyTable}</ods-table>
        <ods-table size="${ODS_TABLE_SIZE.lg}">${dummyTable}</ods-table>
      `);

      const [smTableHeight, mdTableHeight, lgTableHeight] = await page.evaluate((size) => {
        return [
          document.querySelector(`ods-table[size=${size.sm}]`)?.getBoundingClientRect().height || 0,
          document.querySelector(`ods-table[size=${size.md}]`)?.getBoundingClientRect().height || 0,
          document.querySelector(`ods-table[size=${size.lg}]`)?.getBoundingClientRect().height || 0,
        ];
      }, ODS_TABLE_SIZE);

      expect(smTableHeight).toBeLessThan(mdTableHeight);
      expect(smTableHeight).toBeLessThan(lgTableHeight);
      expect(mdTableHeight).toBeLessThan(lgTableHeight);
      expect(mdTableHeight).toBeGreaterThan(smTableHeight);
      expect(lgTableHeight).toBeGreaterThan(smTableHeight);
      expect(lgTableHeight).toBeGreaterThan(mdTableHeight);
    });
  });
});
