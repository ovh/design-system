import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-switch rendering', () => {
  let el: E2EElement;
  let page: E2EPage;
  let switchItemLabel: E2EElement;

  async function isInErrorState(): Promise<boolean | undefined> {
    return await page.evaluate(() => {
      return document.querySelector('ods-switch')?.classList.contains('ods-switch--error');
    });
  }

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));
    await page.waitForChanges();

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-switch');
    switchItemLabel = await page.find('ods-switch-item > .ods-switch-item__label');
  }

  it('should render the web component', async() => {
    await setup('<ods-switch></ods-switch>');

    expect(el.shadowRoot).not.toBeNull();
  });

  describe('isDisabled', () => {
    it('should render with isDisabled', async() => {
      await setup(`<ods-switch is-disabled name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(switchItemLabel?.classList.contains('ods-switch-item__label--disabled')).toBe(true);
    });

    it('should render without isDisabled', async() => {
      await setup(`<ods-switch name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(switchItemLabel?.classList.contains('ods-switch-item__label--disabled')).toBe(false);
    });
  });

  describe('size', () => {
    it('should render with default size', async() => {
      await setup(`<ods-switch name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(el?.classList.contains('ods-switch--md')).toBe(true);
    });

    it('should render with size set', async() => {
      await setup(`<ods-switch size="sm" name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      expect(el?.classList.contains('ods-switch--sm')).toBe(true);
    });
  });

  describe('error state', () => {
    it('should enforce the error state if has-error is set even on valid switch', async() => {
      await setup(`<form method="get" onsubmit="return false">
        <ods-switch name="switch" has-error>
          <ods-switch-item value="1" is-checked>label1</ods-switch-item>
          <ods-switch-item value="2">label2</ods-switch-item>
          <ods-switch-item value="3">label3</ods-switch-item>
        </ods-switch>
      </form>`);
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);

      await page.evaluate(() => {
        document.querySelector<HTMLFormElement>('form')?.requestSubmit();
      });
      await page.waitForChanges();

      expect(await isInErrorState()).toBe(true);
    });
  });
});
