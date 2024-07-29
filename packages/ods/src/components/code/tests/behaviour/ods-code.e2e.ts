import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-code behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string, customStyle?: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    if (customStyle) {
      await page.addStyleTag({ content: customStyle });
    }

    el = await page.find('ods-code');
  }

  beforeEach(jest.clearAllMocks);

  describe('methods', () => {
    describe('copy', () => {
      it('should emit an odCopy event', async() => {
        const dummyValue = 'dummy value';
        await setup(`<ods-code can-copy>${dummyValue}</ods-code>`);
        const copySpy = await page.spyOnEvent('odCopy');

        // We have to focus the document to be able to call the navigator copy function
        await page.keyboard.press('Tab');
        await page.waitForChanges();

        await el.callMethod('copy');
        await page.waitForChanges();

        expect(copySpy).toHaveReceivedEventTimes(1);
        expect(copySpy).toHaveReceivedEventDetail(dummyValue);
      });
    });
  });
});
