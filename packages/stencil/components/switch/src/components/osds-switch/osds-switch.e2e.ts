import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';
import { OdsSwitchAttributes, OdsComponentAttributes2StringAttributes, odsSwitchDefaultAttributes } from '@ovhcloud/ods-core';
import { OdsCreateAttributes, OdsStringAttributes2Str, odsSwitchBaseAttributes } from '@ovhcloud/ods-testing';

describe('e2e:osds-switch', () => {
  let page: E2EPage;
  let el: E2EElement;
  let switchItems: E2EElement[];


  async function setup({ attributes }: { attributes: Partial<OdsSwitchAttributes> }) {
    const minimalAttributes: OdsSwitchAttributes = OdsCreateAttributes(attributes, odsSwitchBaseAttributes);
    const stringAttributes = OdsComponentAttributes2StringAttributes<OdsSwitchAttributes>(minimalAttributes, odsSwitchDefaultAttributes);

    page = await newE2EPage();
    await page.setContent(`<osds-switch ${OdsStringAttributes2Str(stringAttributes)}>
              <osds-switch-item value="1" id="1">Item 1</osds-switch-item>
              <osds-switch-item value="2" id="2">Item 2</osds-switch-item>
              <osds-switch-item value="3" id="3">Item 3</osds-switch-item>
            </osds-switch>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));

    el = await page.find('osds-switch');
    switchItems = await el.findAll('osds-switch-item');
  }

  it('should render', async () => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');
  });

  describe('change checked', () => {
    const verifySwitchItem = async (switchItem: E2EElement, position: 'left' | 'right' = 'left') => {
      expect(await switchItem.getProperty('checked')).toBe(true);
      expect(await switchItem.getAttribute('class')).toMatch(`fadein-from-${position}`);
    }
    it('should change selected switch item', async () => {
      await setup({ attributes: {} });
      await switchItems[0].click();
      await page.waitForChanges();
      await verifySwitchItem(switchItems[0]);
    });

    describe('Event', () => {
      it('should trigger the event odsSwitchChanged', async () => {
        await setup({ attributes: {} });
        const odsValueChange = await el.spyOnEvent('odsSwitchChanged');

        await switchItems[0].click();
        await page.waitForChanges();
        
        expect(odsValueChange).toHaveReceivedEventDetail({ current: '1' });
        expect(odsValueChange).toHaveReceivedEventTimes(1);
      });

      it('should not trigger event odsSwitchChanged because of disabled', async () => {
        await setup({ attributes: { disabled: true } });
        const odsValueChange = await el.spyOnEvent('odsSwitchChanged');

        await switchItems[0].click();
        await page.waitForChanges();
        expect(odsValueChange).not.toHaveReceivedEvent();
      });

      it('should trigger the event odsSwitchChanged with old', async () => {
        await setup({ attributes: {} });
        const odsValueChange = await el.spyOnEvent('odsSwitchChanged');

        await switchItems[0].click();
        await switchItems[1].click();
        await page.waitForChanges();
        
        expect(odsValueChange).toHaveReceivedEventDetail({ current: '2', oldCurrent: '1' });
        expect(odsValueChange).toHaveReceivedEventTimes(2);
      });
    })

    describe('keyboard', () => {
      it('should change selected switch item with Enter', async () => {
        await setup({ attributes: {} });
        await el.focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Enter');
        await page.waitForChanges();
        await verifySwitchItem(switchItems[1]);
      });

      it('should change selected switch item with Space', async () => {
        await setup({ attributes: {} });
        await el.focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('Space');
        await page.waitForChanges();
        await verifySwitchItem(switchItems[1]);
      });

      it('should change selected switch item with Right position', async () => {
        await setup({ attributes: {} });
        await el.focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowLeft');
        await page.keyboard.press('Space');
        await page.waitForChanges();
        await verifySwitchItem(switchItems[0], 'left');
      });
      
    })
  });

});
