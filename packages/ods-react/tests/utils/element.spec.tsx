import { renderToString } from 'react-dom/server';
import { highlightNode, scrollIntoParentView } from '../../src/utils/element';

describe('element', () => {
  describe('scrollIntoParentView', () => {
    type Rect = { bottom: number, top: number };

    // An element inside a non-overflowing wrapper, inside a 100px tall
    // container scrolled by 50px (no DOM layout in this env: rects are stubbed).
    function setup(elementRect: Rect, overflowY = 'auto', wrapperOverflowY = 'visible'): { scrollTop: number } {
      const container = {
        clientHeight: 100,
        getBoundingClientRect: (): Rect => ({ bottom: 100, top: 0 }),
        overflowY,
        parentElement: null,
        scrollHeight: 300,
        scrollTop: 50,
      };
      const wrapper = {
        clientHeight: 200,
        getBoundingClientRect: (): Rect => ({ bottom: 200, top: 0 }),
        overflowY: wrapperOverflowY,
        parentElement: container,
        scrollHeight: 200,
        scrollTop: 0,
      };
      const element = {
        getBoundingClientRect: (): Rect => elementRect,
        ownerDocument: { defaultView: { getComputedStyle: (node: { overflowY: string }): { overflowY: string } => node } },
        parentElement: wrapper,
      };

      scrollIntoParentView(element as unknown as HTMLElement);
      return container;
    }

    it('should scroll the container down when the element is below its view', () => {
      expect(setup({ bottom: 130, top: 110 }).scrollTop).toBe(80);
    });

    it('should scroll the container up when the element is above its view', () => {
      expect(setup({ bottom: 10, top: -10 }).scrollTop).toBe(40);
    });

    it('should not scroll the container when the element is already visible', () => {
      expect(setup({ bottom: 60, top: 40 }).scrollTop).toBe(50);
    });

    it('should not scroll a container that does not scroll', () => {
      expect(setup({ bottom: 130, top: 110 }, 'visible').scrollTop).toBe(50);
    });

    it('should not scroll past the closest scroll container, even when it does not overflow', () => {
      expect(setup({ bottom: 130, top: 110 }, 'auto', 'auto').scrollTop).toBe(50);
    });
  });

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
