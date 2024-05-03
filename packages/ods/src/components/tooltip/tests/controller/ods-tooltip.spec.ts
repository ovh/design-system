jest.mock('@floating-ui/dom', () => ({
  arrow: jest.fn().mockReturnValue('arrow middleware'),
  autoUpdate: jest.fn(),
  computePosition: jest.fn(),
  flip: jest.fn().mockReturnValue('flip middleware'),
  offset: jest.fn().mockReturnValue('offset middleware'),
  shift: jest.fn().mockReturnValue('shift middleware'),
}));

import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
import { findTriggerElement, hideTooltip, showTooltip } from '../../src/controller/ods-tooltip';

describe('ods-tooltip controller', () => {
  beforeEach(jest.clearAllMocks);

  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  describe('findTriggerElement', () => {
    it('return empty if trigger element is not found', async() => {
      expect(findTriggerElement('dummy')).toBeUndefined();
    });

    it('return the trigger element if found', async() => {
      const hostElement = { dummy: 'element' } as unknown as HTMLElement;
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(hostElement);

      const triggerElement = findTriggerElement('dummy');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(triggerElement).toBe(hostElement);
    });

    it('return empty if shadow trigger element is not found', async() => {
      const hostElement = { dummy: 'element' } as unknown as HTMLElement;
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue(hostElement);

      const triggerElement = findTriggerElement('dummy', 'shadow');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(triggerElement).toBeUndefined();
    });

    it('return the shadow trigger element if found', async() => {
      const shadowElement = { dummy: 'element' } as unknown as HTMLElement;
      const shadowQuerySelectorSpy = jest.fn().mockReturnValue(shadowElement);
      const querySelectorSpy = jest.spyOn(document, 'querySelector').mockReturnValue({
        shadowRoot: { querySelector: shadowQuerySelectorSpy },
      } as unknown as HTMLElement);

      const triggerElement = findTriggerElement('dummy', 'shadow');

      expect(querySelectorSpy).toHaveBeenCalledTimes(1);
      expect(querySelectorSpy).toHaveBeenCalledWith('#dummy');
      expect(shadowQuerySelectorSpy).toHaveBeenCalledTimes(1);
      expect(shadowQuerySelectorSpy).toHaveBeenCalledWith('#shadow');
      expect(triggerElement).toBe(shadowElement);
    });
  });

  describe('hideTooltip', () => {
    it('should set popper display style to none', async() => {
      const dummyPopperElement = document.createElement('div');

      expect(dummyPopperElement.style.display).not.toBe('none');

      hideTooltip(dummyPopperElement);

      expect(dummyPopperElement.style.display).toBe('none');
    });

    it('should set call the callback if defined', async() => {
      const dummyPopperElement = document.createElement('div');
      const dummyCallback = jest.fn();

      hideTooltip(dummyPopperElement, dummyCallback);

      expect(dummyCallback).toHaveBeenCalled();
    });
  });

  describe('showTooltip', () => {
    it('should do nothing if not trigger element', async() => {
      showTooltip('top', {
        arrow: document.createElement('div'),
        popper: document.createElement('div'),
        trigger: undefined,
      });

      expect(autoUpdate).not.toHaveBeenCalled();
    });

    it('should set popper display to block', async() => {
      const dummyPopper = document.createElement('div');
      dummyPopper.style.display = 'none';

      showTooltip('top', {
        arrow: document.createElement('div'),
        popper: dummyPopper,
        trigger: document.createElement('div'),
      });

      expect(dummyPopper.style.display).toBe('block');
    });

    describe('update', () => {
      const dummyPosition = 'top';
      const expectedPopperX = 33;
      const expectedPopperY = 42;

      it('should update popper position', async() => {
        const dummyArrow = document.createElement('div');
        const dummyPopper = document.createElement('div');
        const dummyTrigger = document.createElement('div');
        const dummyDom = {
          arrow: dummyArrow,
          popper: dummyPopper,
          trigger: dummyTrigger,
        };

        (autoUpdate as jest.Mock).mockImplementation((_t, _p, cb) => cb(dummyPosition, dummyDom));
        (computePosition as jest.Mock).mockResolvedValue({
          middlewareData: {},
          placement: 'top',
          x: expectedPopperX,
          y: expectedPopperY,
        });

        showTooltip(dummyPosition, dummyDom);

        expect(autoUpdate).toHaveBeenCalledWith(dummyTrigger, dummyPopper, expect.any(Function));
        expect(computePosition).toHaveBeenCalledWith(dummyTrigger, dummyPopper, {
          middleware: [
            'arrow middleware',
            'flip middleware',
            'offset middleware',
            'shift middleware',
          ],
          placement: dummyPosition,
        });
        expect(arrow).toHaveBeenCalledWith({ element: dummyArrow });
        expect(flip).toHaveBeenCalled();
        expect(offset).toHaveBeenCalledWith(expect.any(Number));
        expect(shift).toHaveBeenCalledWith({ padding: expect.any(Number) });

        // Need to wait for the autoUpdate async callback to end
        await new Promise(process.nextTick);

        expect(dummyPopper.style.left).toBe(`${expectedPopperX}px`);
        expect(dummyPopper.style.top).toBe(`${expectedPopperY}px`);
        expect(dummyArrow.style.bottom).toBe('-4px');
        expect(dummyArrow.style.left).toBe('');
        expect(dummyArrow.style.right).toBe('');
        expect(dummyArrow.style.top).toBe('');
      });

      it('should update popper and arrow position', async() => {
        const dummyArrow = document.createElement('div');
        const dummyPopper = document.createElement('div');
        const dummyTrigger = document.createElement('div');
        const dummyDom = {
          arrow: dummyArrow,
          popper: dummyPopper,
          trigger: dummyTrigger,
        };
        const dummyMiddlewareData = {
          arrow: {
            x: 12,
            y: 34,
          },
        };

        (autoUpdate as jest.Mock).mockImplementation((_t, _p, cb) => cb(dummyPosition, dummyDom));
        (computePosition as jest.Mock).mockResolvedValue({
          middlewareData: dummyMiddlewareData,
          placement: 'top',
          x: expectedPopperX,
          y: expectedPopperY,
        });

        showTooltip(dummyPosition, dummyDom);

        expect(autoUpdate).toHaveBeenCalledWith(dummyTrigger, dummyPopper, expect.any(Function));
        expect(computePosition).toHaveBeenCalledWith(dummyTrigger, dummyPopper, {
          middleware: [
            'arrow middleware',
            'flip middleware',
            'offset middleware',
            'shift middleware',
          ],
          placement: dummyPosition,
        });
        expect(arrow).toHaveBeenCalledWith({ element: dummyArrow });
        expect(flip).toHaveBeenCalled();
        expect(offset).toHaveBeenCalledWith(expect.any(Number));
        expect(shift).toHaveBeenCalledWith({ padding: expect.any(Number) });

        // Need to wait for the autoUpdate async callback to end
        await new Promise(process.nextTick);

        expect(dummyPopper.style.left).toBe(`${expectedPopperX}px`);
        expect(dummyPopper.style.top).toBe(`${expectedPopperY}px`);
        expect(dummyArrow.style.bottom).toBe('-4px');
        expect(dummyArrow.style.left).toBe(`${dummyMiddlewareData.arrow.x}px`);
        expect(dummyArrow.style.right).toBe('');
        expect(dummyArrow.style.top).toBe(`${dummyMiddlewareData.arrow.y}px`);
      });
    });
  });
});
