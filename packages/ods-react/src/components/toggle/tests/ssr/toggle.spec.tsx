import { renderToString } from 'react-dom/server';
import { Toggle, ToggleControl } from '../../src';

describe('Toggle server rendering', () => {
  let warnSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warnSpy.mockRestore();
  });

  it('should render the control and its input without warning', () => {
    const html = renderToString(<Toggle><ToggleControl /></Toggle>);

    expect(html).toContain('data-ods="toggle-control"');
    expect(html).toContain('<input');
    expect(warnSpy).not.toHaveBeenCalled();
  });

  describe('without children', () => {
    it('should render neither the control nor its input and warn once', () => {
      const html = renderToString(<Toggle>{ undefined }</Toggle>);

      renderToString(<Toggle>{ undefined }</Toggle>);

      expect(html).not.toContain('data-ods="toggle-control"');
      expect(html).not.toContain('<input');
      expect(warnSpy).toHaveBeenCalledTimes(1);
      expect(warnSpy.mock.calls[0][0]).toContain('<ToggleControl />');
    });
  });
});
