import 'expect-puppeteer';
import 'jest-puppeteer';

describe('OdsLink rendering', () => {
  it('should render the web component', async() => {
    await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--render&viewMode=story');
    await page.waitForNavigation();

    expect(await page.waitForSelector('[data-testid="render"]')).not.toBeNull();
  });

  describe('custom style', () => {
    it('should render with custom style applied', async() => {
      await page.goto('http://localhost:3000/iframe.html?args=&id=tests-rendering--custom-style&viewMode=story');
      await page.waitForNavigation();
      const odsLink = await page.waitForSelector('[data-testid="custom-style"]');
      const color = await odsLink?.evaluate((el: Element) => getComputedStyle(el).getPropertyValue('color'));

      expect(color).toBe('rgb(0, 255, 0)');
    });
  });

  //
  // describe('icon', () => {
  //   const dummyIcon = 'arrow-right';
  //   it('should render with an icon', async() => {
  //     await setup(`<ods-link icon="${dummyIcon}"></ods-link>`);
  //
  //     const customIcon = await aElement.find(`ods-icon[name="${dummyIcon}"]`);
  //
  //     expect(customIcon).not.toBeNull();
  //   });
  //
  //   it('should render icon on the right', async() => {
  //     await setup(`<ods-link icon="${dummyIcon}"></ods-link>`);
  //
  //     const linkStyle = await aElement.getComputedStyle();
  //
  //     expect(linkStyle.getPropertyValue('flex-direction')).toBe('row');
  //   });
  //
  //   it('should render icon on the left', async() => {
  //     await setup(`<ods-link icon="${dummyIcon}" icon-alignment="left"></ods-link>`);
  //
  //     const linkStyle = await aElement.getComputedStyle();
  //
  //     expect(linkStyle.getPropertyValue('flex-direction')).toBe('row-reverse');
  //   });
  // });
  //
  // it('should render the web component', async() => {
  //   await setup('<ods-link></ods-link>');
  //
  //   expect(el.shadowRoot).not.toBeNull();
  // });
  //
  // it('should get class disabled', async() => {
  //   await setup('<ods-link is-disabled></ods-link>');
  //
  //   expect(el.getAttribute('is-disabled')).toBe('');
  //   expect(aElement.classList.contains('ods-link__link--disabled')).toBe(true);
  // });
  //
  // it('should get class color', async() => {
  //   await setup('<ods-link color="primary"></ods-link>');
  //
  //   expect(el.getAttribute('color')).toBe('primary');
  //   expect(aElement.classList.contains('ods-link__link--primary')).toBe(true);
  // });

});
