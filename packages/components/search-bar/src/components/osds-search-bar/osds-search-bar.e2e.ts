import type { OdsSearchBarAttribute } from './interfaces/attributes';
import type { E2EElement, E2EPage } from '@stencil/core/testing';
import { DEFAULT_ATTRIBUTE } from './constants/default-attributes';
import { newE2EPage } from '@stencil/core/testing';
import { odsComponentAttributes2StringAttributes, odsStringAttributes2Str } from '@ovhcloud/ods-common-testing';

describe('e2e:osds-search-bar', () => {
  let page: E2EPage;
  let el: E2EElement;
  let select: E2EElement;
  let button: E2EElement;
  let input: E2EElement;
  const baseAttribute = { value: '' };

  async function setup({ attributes }: { attributes: Partial<OdsSearchBarAttribute> }) {
    const stringAttributes = odsComponentAttributes2StringAttributes<OdsSearchBarAttribute>({ ...baseAttribute, ...attributes }, DEFAULT_ATTRIBUTE);

    page = await newE2EPage();
    await page.setContent(`<osds-search-bar ${odsStringAttributes2Str(stringAttributes)}></osds-search-bar>`);
    await page.evaluate(() => document.body.style.setProperty('margin', '0px'));
    await page.waitForChanges();

    el = await page.find('osds-search-bar');
    el.setProperty('options', attributes.options ?? []);

    await page.waitForChanges();

    select = await page.find('osds-search-bar >>> osds-select');
    input = await page.find('osds-search-bar >>> osds-input');
    button = await page.find('osds-search-bar >>> osds-button');

    await page.waitForChanges();
  }

  it('should render', async() => {
    await setup({ attributes: {} });
    expect(el).not.toBeNull();
    expect(el).toHaveClass('hydrated');

    expect(input).not.toBeNull();
    expect(input).toHaveClass('hydrated');

    expect(button).not.toBeNull();
    expect(button).toHaveClass('hydrated');

    expect(select).toBeNull();
  });

  it('should get default attributes', async() => {
    await setup({ attributes: {} });
    expect(await el.getProperty('contrasted')).toBe(DEFAULT_ATTRIBUTE.contrasted);
    expect(await el.getProperty('disabled')).toBe(DEFAULT_ATTRIBUTE.disabled);
    expect(await el.getProperty('value')).toBe(DEFAULT_ATTRIBUTE.value);
    expect(await el.getProperty('loading')).toBe(DEFAULT_ATTRIBUTE.loading);
    expect(await el.getProperty('options')).toEqual(DEFAULT_ATTRIBUTE.options);
    expect(await el.getProperty('placeholder')).toBe(DEFAULT_ATTRIBUTE.placeholder);
  });

  it('should display select because of options', async() => {
    const options = [{ label: 'options1', value: '1' }, { label: 'options2', value: '2' }];
    await setup({ attributes: { options } });

    expect(select).not.toBeNull();
    expect(select).toHaveClass('hydrated');
  });

  describe('Event', () => {
    it('should receive event odsValueChange', async() => {
      await setup({ attributes: { } });

      const odsValueChange = await el.spyOnEvent('odsValueChange');

      await input.setProperty('value', '4');
      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });

    it('should receive event odsSearchSubmit with current value', async() => {
      await setup({ attributes: { } });

      const odsSearchSubmit = await el.spyOnEvent('odsSearchSubmit');
      await input.setProperty('value', '4');

      await page.waitForChanges();
      await button.click();

      expect(odsSearchSubmit).toHaveReceivedEventTimes(1);
      expect(odsSearchSubmit).toHaveReceivedEventDetail({ optionValue: '', inputValue: '4' });
    });

    it('should receive event odsValueChange with options selected', async() => {
      const options = [{ label: 'options1', value: '1' }, { label: 'options2', value: '2' }];
      await setup({ attributes: { options } });

      const odsValueChange = await el.spyOnEvent('odsValueChange');

      await select.click();

      const optionElement = await page.find('osds-search-bar >>> osds-select > osds-select-option');
      await optionElement.click();

      await page.waitForChanges();
      expect(odsValueChange).toHaveReceivedEventTimes(1);
    });

    it('should receive event odsSearchSubmit with options selected', async() => {
      const options = [{ label: 'options1', value: '1' }, { label: 'options2', value: '2' }];
      await setup({ attributes: { options } });

      const odsSearchSubmit = await el.spyOnEvent('odsSearchSubmit');

      await select.click();

      const optionElement = await page.find('osds-search-bar >>> osds-select > osds-select-option');
      await optionElement.click();
      await button.click();

      await page.waitForChanges();
      expect(odsSearchSubmit).toHaveReceivedEventTimes(1);
      expect(odsSearchSubmit).toHaveReceivedEventDetail({ optionValue: '1', inputValue: '' });
    });
  });

  // describe.only('a11y', () => {
  //   it('should navigate with tab', async () => {
  //     const options = [{ label: 'options1', value: '1' }, { label: 'options2', value: '2' }];
  //     await setup({ attributes: { options } });

  //    await page.keyboard.press('Tab');
  //    await page.keyboard.press('Tab');

  //     const activeElement = await page.evaluateHandle(() => {
  //       console.log('document.activeElementtagName', document.activeElement.tagName);
  //       return document.activeElement;
  //     });
  //     console.log('activeElement', await (await activeElement.asElement()).getProperty('tagName'), await activeElement.getProperty('tagName'));
  //     expect(true).toBe(await select.getProperty('tagName'));
  //   });
  // })
});
