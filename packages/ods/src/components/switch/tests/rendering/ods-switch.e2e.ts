import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

describe('ods-switch rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let switchItem: E2EElement;
  let switchItemLabel: E2EElement;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-switch');
    switchItem = await page.find('ods-switch > .ods-switch-item');
    switchItemLabel = await page.find('ods-switch-item > .ods-switch-item__label');
  }

  it('should render the web component', async() => {
    await setup('<ods-switch></ods-switch>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('isDisabled', () => {
    it('should render with isDisabled', async() => {
      await setup(`<ods-switch is-disabled>
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(switchItemLabel?.classList.contains('ods-switch-item__label--disabled')).toBe(true);
    });

    it('should render without isDisabled', async() => {
      await setup(`<ods-switch>
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(switchItemLabel?.classList.contains('ods-switch-item__label--disabled')).toBe(false);
    });
  });

  describe('size', () => {
    it('should render with default size', async() => {
      await setup(`<ods-switch>
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(el?.classList.contains('ods-switch--md')).toBe(true);
      expect(switchItem?.classList.contains('ods-switch-item--md')).toBe(true);
    });

    it('should render with size set', async() => {
      await setup(`<ods-switch size="sm">
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(el?.classList.contains('ods-switch--sm')).toBe(true);
      expect(switchItem?.classList.contains('ods-switch-item--sm')).toBe(true);
    });
  });
});
