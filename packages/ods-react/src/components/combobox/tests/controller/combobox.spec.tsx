import { renderToString } from 'react-dom/server';
import { highlightNode } from '../../src/controller/combobox';

describe('Combobox controller', () => {
  describe('highlightNode', () => {
    it('should only the string if no match', () => {
      expect(highlightNode('abcdef', 'wxy', ({ part }) => <mark>{ part }</mark>))
        .toEqual(['abcdef']);
    });

    it('should return all the highlighted elements given a string', () => {
      expect(highlightNode('abcdef', 'bc', ({ part }) => <mark>{ part }</mark>))
        .toEqual(['a', <mark>bc</mark>, 'def']); // eslint-disable-line react/jsx-key
    });

    it('should the same node if no match', () => {
      expect(renderToString(highlightNode(<div><span>I am</span><b>bold</b></div>, 'wxy', ({ part }) => <mark>{ part }</mark>)))
        .toBe('<div><span>I am</span><b>bold</b></div>');
    });

    it('should return the highlighted node given a node', () => {
      expect(renderToString(highlightNode(<div><span>I am</span><b>bold</b></div>, 'bo', ({ part }) => <mark>{ part }</mark>)))
        .toBe('<div><span>I am</span><b><mark>bo</mark>ld</b></div>');
    });
  });
});
