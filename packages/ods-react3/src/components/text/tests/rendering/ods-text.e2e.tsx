import { render, screen } from '@testing-library/react';
import { OdsText } from '../../src';

describe('OdsText rendering', () => {
  it('should render with text', () => {
    const res = render(<OdsText>Hello World!</OdsText>);
    // screen.logTestingPlaygroundURL();
    screen.debug();

    expect(res.baseElement.textContent).toBe('Hello World!');
  });
});
