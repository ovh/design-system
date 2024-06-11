import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { newE2EPage } from '@stencil/core/testing';

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
      await setup(`<ods-switch is-disabled>
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);
      switchItems.forEach((item) => {
        expect(item.getAttribute('is-disabled')).toBe('');
      });
    });

    it('should propagate size to the switch-item', async() => {
      await setup(`<ods-switch size="sm">
        <ods-switch-item name="switch-radio" input-id="label1" value="1">label1</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label2" value="2">label2</ods-switch-item>
        <ods-switch-item name="switch-radio" input-id="label3" value="3">label3</ods-switch-item>
      </ods-switch>`);
      switchItems.forEach((item) => {
        expect(item.getAttribute('size')).toBe('sm');
      });
    });
  });
});
