import { render, screen } from '@testing-library/react';
// import { debug } from 'jest-preview';
import { OdsText } from '../../src';

describe('OdsText rendering', () => {
  it('should render with text', () => {
    const res = render(<OdsText>Hello World!</OdsText>);
    screen.logTestingPlaygroundURL();
    // const text = screen.getByText('Hello World!');
    //
    expect(res.baseElement.textContent).toBe('Hello World!');
    // expect(text).toHaveStyle('Hello World!');
    //   () => {
    //     return <OdsText>Hello World!</OdsText>;
    //   },
    //   async (page: Page) => {
    //     await new Promise((resolve) => setTimeout(resolve, 5000));
    //     await page.waitForSelector('.ods-text');
    //     const text = await page.$eval('.ods-text', (el: any) => el.innerHTML);
    //     const style = await page.$eval('.ods-text', (el: any) => window.getComputedStyle(el).getPropertyValue('color'));
    //     expect(style).toBe('toto');
    //     expect(text).toBe('Hello World!');
    //   }
  });
});
