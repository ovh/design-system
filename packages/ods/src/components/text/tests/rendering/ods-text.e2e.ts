import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-text rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let part: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-text');
    part = await page.find('ods-text >>> [part="text"]');
  }

  it('should render the web component', async() => {
    await setup('<ods-text>some text</ods-text>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('part', () => {
    it('should render with custom style applied', async() => {
      await setup('<ods-text>some text</ods-text>', 'ods-text::part(text) { color: #00ff00; }');
      const partStyle = await part.getComputedStyle();
      expect(partStyle.getPropertyValue('color')).toBe('rgb(0, 255, 0)');
    });
  });

  describe('preset', () => {
    it('should render default preset', async() => {
      await setup('<ods-text>some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('paragraph');
    });

    it('should render with preset caption', async() => {
      await setup('<ods-text preset="caption">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('caption');
      expect(part.tagName).toBe('SPAN');
    });

    it('should render with preset code', async() => {
      await setup('<ods-text preset="code">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('code');
      expect(part.tagName).toBe('CODE');
    });

    it('should render with preset paragraph', async() => {
      await setup('<ods-text preset="paragraph">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('paragraph');
      expect(part.tagName).toBe('P');
    });

    it('should render with preset span', async() => {
      await setup('<ods-text preset="span">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('span');
      expect(part.tagName).toBe('SPAN');
    });

    it('should render with preset heading-1', async() => {
      await setup('<ods-text preset="heading-1">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-1');
      expect(part.tagName).toBe('H1');
    });

    it('should render with preset heading-2', async() => {
      await setup('<ods-text preset="heading-2">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-2');
      expect(part.tagName).toBe('H2');
    });

    it('should render with preset heading-3', async() => {
      await setup('<ods-text preset="heading-3">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-3');
      expect(part.tagName).toBe('H3');
    });

    it('should render with preset heading-4', async() => {
      await setup('<ods-text preset="heading-4">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-4');
      expect(part.tagName).toBe('H4');
    });

    it('should render with preset heading-5', async() => {
      await setup('<ods-text preset="heading-5">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-5');
      expect(part.tagName).toBe('H5');
    });

    it('should render with preset heading-6', async() => {
      await setup('<ods-text preset="heading-6">some text</ods-text>');
      expect(el.getAttribute('preset')).toBe('heading-6');
      expect(part.tagName).toBe('H6');
    });
  });
});
