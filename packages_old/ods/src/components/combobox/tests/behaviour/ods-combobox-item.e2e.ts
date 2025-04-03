import { type E2EElement, type E2EPage, newE2EPage } from '@stencil/core/testing';

describe('ods-combobox-item behaviour', () => {
  let el: E2EElement;
  let page: E2EPage;

  async function setup(content: string): Promise<void> {
    page = await newE2EPage();

    await page.setContent(content);
    await page.evaluate(() => document.body.style.setProperty('margin', '0'));

    el = await page.find('ods-combobox-item');
    await page.waitForChanges();
  }

  beforeEach(jest.clearAllMocks);

  describe('events', () => {
    describe('odsComboboxSelected', () => {
      const dummyId = 'dummy id';
      const dummyValue = 'dummy value';

      it('should send odsComboboxSelected event on component click with selection label if set', async() => {
        const dummyLabel = 'dummy label';
        await setup(`<ods-combobox-item id="${dummyId}" is-visible selection-label="${dummyLabel}" value="${dummyValue}"></ods-combobox-item>`);
        const odsComboboxSelectedSpy = await page.spyOnEvent('odsComboboxSelected');

        expect(odsComboboxSelectedSpy).toHaveReceivedEventTimes(0);

        await el.click();
        await page.waitForChanges();

        expect(odsComboboxSelectedSpy).toHaveReceivedEventTimes(1);
        expect(odsComboboxSelectedSpy).toHaveReceivedEventDetail({
          id: dummyId,
          text: dummyLabel,
          value: dummyValue,
        });
      });

      it('should send odsComboboxSelected event on component click with content text', async() => {
        const dummyText = 'dummy text';
        await setup(`<ods-combobox-item id="${dummyId}" is-visible value="${dummyValue}">${dummyText}</ods-combobox-item>`);
        const odsComboboxSelectedSpy = await page.spyOnEvent('odsComboboxSelected');

        expect(odsComboboxSelectedSpy).toHaveReceivedEventTimes(0);

        await el.click();
        await page.waitForChanges();

        expect(odsComboboxSelectedSpy).toHaveReceivedEventTimes(1);
        expect(odsComboboxSelectedSpy).toHaveReceivedEventDetail({
          id: dummyId,
          text: dummyText,
          value: dummyValue,
        });
      });
    });
  });
});
