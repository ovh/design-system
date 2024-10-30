import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-switch behavior', () => {
  let page: E2EPage;
  let switchItems: E2EElement[];

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    switchItems = await page.findAll('ods-switch-item');
  }

  describe('Propagation', () => {
    it('should propagate isDisabled to the switch-item', async() => {
      await setup(`<ods-switch is-disabled name="switch-radio">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item) => {
        expect(item.getAttribute('is-disabled')).toBe('');
      });
    });

    it('should propagate name to the switch-item', async() => {
      const name = 'switch-radio';
      await setup(`<ods-switch size="sm" name="${name}">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item) => {
        expect(item.getAttribute('name')).toBe(name);
      });
    });

    it('should generate & propagate inputId to the switch-item', async() => {
      const name = 'switch-radio';
      await setup(`<ods-switch size="sm" name="${name}">
        <ods-switch-item value="1">label1</ods-switch-item>
        <ods-switch-item value="2">label2</ods-switch-item>
        <ods-switch-item value="3">label3</ods-switch-item>
      </ods-switch>`);

      switchItems.forEach((item, index) => {
        expect(item.getAttribute('input-id')).toBe(`${name}-${index}`);
      });
    });
  });
});
